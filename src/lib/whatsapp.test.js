import { describe, expect, it } from 'vitest'
import {
  buildInquiryUrl,
  buildOrderMessage,
  buildWhatsAppUrl,
} from './whatsapp'

describe('WhatsApp ordering', () => {
  it('creates a Russian product message', () => {
    const message = buildOrderMessage('ru', 'Восковая свеча с травами')

    expect(message).toContain('MUM & MİRA')
    expect(message).toContain('Восковая свеча с травами')
  })

  it('creates a Turkish product message', () => {
    expect(buildOrderMessage('tr', 'Pelin Otlu Ritüel Mumu')).toContain(
      'stok durumunu',
    )
  })

  it('uses the normalized phone and encoded text', () => {
    const url = buildWhatsAppUrl('en', 'Herbal Beeswax')

    expect(url).toMatch(/^https:\/\/wa\.me\/905376923649\?text=/)
    expect(decodeURIComponent(url.split('text=')[1])).toContain('Herbal Beeswax')
  })

  it('creates a localized general inquiry', () => {
    const url = buildInquiryUrl('ru')

    expect(url).toContain('905376923649')
    expect(decodeURIComponent(url)).toContain('помогите выбрать свечу')
  })
})
