import { describe, expect, it, vi } from 'vitest'
import { getBrowserStorage, getInitialLanguage, saveLanguage } from './i18n'

describe('language helpers', () => {
  it('prefers a supported saved language', () => {
    expect(getInitialLanguage({ getItem: () => 'tr' }, 'en-US')).toBe('tr')
  })

  it('uses the supported browser base language', () => {
    expect(getInitialLanguage({ getItem: () => null }, 'en-US')).toBe('en')
  })

  it('falls back to Russian when storage throws', () => {
    const storage = {
      getItem: () => {
        throw new Error('blocked')
      },
    }

    expect(getInitialLanguage(storage, 'de-DE')).toBe('ru')
  })

  it('does not surface persistence failures', () => {
    const storage = {
      setItem: vi.fn(() => {
        throw new Error('full')
      }),
    }

    expect(() => saveLanguage(storage, 'tr')).not.toThrow()
  })

  it('returns no storage when browser property access is blocked', () => {
    const browser = {
      get localStorage() {
        throw new Error('opaque origin')
      },
    }

    expect(getBrowserStorage(browser)).toBeUndefined()
  })
})
