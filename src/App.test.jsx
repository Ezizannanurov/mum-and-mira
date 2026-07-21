import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import App from './App'

describe('MUM & MİRA page', () => {
  it('uses one stable hero artwork instead of separate flame layers', () => {
    const { container } = render(<App initialLanguage="ru" />)
    const artwork = container.querySelector('.hero-artwork img')

    expect(artwork).toHaveAttribute('src', '/images/hero-beeswax-candle.jpg')
    expect(artwork).toHaveAttribute('alt', '')
    expect(container.querySelector('.flame-wrap')).not.toBeInTheDocument()
    expect(container.querySelector('.wax-drip')).not.toBeInTheDocument()
  })

  it('renders the catalog and five order links', () => {
    render(<App initialLanguage="ru" />)

    expect(
      screen.getByRole('heading', {
        name: 'Свет, который остаётся с вами',
      }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /заказать/i })).toHaveLength(5)
  })

  it('switches all primary copy to Turkish', async () => {
    const user = userEvent.setup()
    render(<App initialLanguage="ru" />)

    await user.click(screen.getByRole('button', { name: 'Türkçe' }))

    expect(
      screen.getByRole('heading', { name: 'Sizinle kalan ışık' }),
    ).toBeInTheDocument()
    expect(document.documentElement.lang).toBe('tr')
  })

  it('creates a localized product link', async () => {
    const user = userEvent.setup()
    render(<App initialLanguage="ru" />)

    await user.click(screen.getByRole('button', { name: 'English' }))
    const href = screen
      .getAllByRole('link', { name: /order/i })[0]
      .getAttribute('href')

    expect(decodeURIComponent(href)).toContain('Herbal Beeswax')
  })

  it('closes the mobile menu with Escape and returns focus', async () => {
    const user = userEvent.setup()
    render(<App initialLanguage="ru" />)
    const menuButton = screen.getByRole('button', { name: 'Открыть меню' })

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    await user.keyboard('{Escape}')

    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(menuButton).toHaveFocus()
  })

  it('does not force smooth scrolling when language changes in the footer', async () => {
    const user = userEvent.setup()
    const scrollTo = vi.fn()
    window.scrollTo = scrollTo
    render(<App initialLanguage="ru" />)

    await user.click(
      screen.getByRole('link', { name: 'Switch language: English' }),
    )

    expect(scrollTo).not.toHaveBeenCalled()
  })
})
