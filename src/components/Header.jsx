import { useEffect, useRef, useState } from 'react'
import { languageLabels } from '../data/content'

export function Header({ language, onLanguageChange, copy }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuButtonRef = useRef(null)

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    if (!isOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="MUM & MİRA">
        <span>MUM</span>
        <i aria-hidden="true" />
        <span>MİRA</span>
      </a>

      <button
        ref={menuButtonRef}
        className="menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="site-navigation"
        aria-label={isOpen ? copy.menu.close : copy.menu.open}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <div
        className={`header-panel${isOpen ? ' is-open' : ''}`}
        id="site-navigation"
      >
        <nav className="primary-nav" aria-label={copy.a11y.primaryNavigation}>
          <a href="#catalog" onClick={closeMenu}>{copy.nav.catalog}</a>
          <a href="#story" onClick={closeMenu}>{copy.nav.story}</a>
          <a href="#process" onClick={closeMenu}>{copy.nav.process}</a>
        </nav>

        <div className="language-switcher" aria-label={copy.a11y.language}>
          {Object.entries(languageLabels).map(([code, label]) => (
            <button
              type="button"
              key={code}
              className={language === code ? 'is-active' : ''}
              aria-pressed={language === code}
              aria-label={label}
              onClick={() => {
                onLanguageChange(code)
                closeMenu()
              }}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
