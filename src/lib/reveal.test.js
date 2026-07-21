import { describe, expect, it } from 'vitest'
import { setupRevealAnimations } from './reveal'

describe('reveal animations', () => {
  it('keeps content visible when IntersectionObserver is unavailable', () => {
    document.body.innerHTML = '<section data-reveal></section>'

    const cleanupReveal = setupRevealAnimations(document)

    expect(document.querySelector('[data-reveal]')).toHaveClass('is-visible')
    expect(() => cleanupReveal()).not.toThrow()
  })
})
