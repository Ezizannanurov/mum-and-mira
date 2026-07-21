import { languageLabels } from '../data/content'
import { buildInquiryUrl } from '../lib/whatsapp'

export function Footer({ copy, nav, a11y, language, onLanguageChange }) {
  return (
    <footer className="site-footer">
      <div className="footer-cta" data-reveal>
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
        <a
          className="footer-whatsapp"
          href={buildInquiryUrl(language)}
          target="_blank"
          rel="noreferrer"
        >
          <span>{copy.cta}</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="footer-bottom">
        <a className="brand-mark" href="#top" aria-label="MUM & MİRA">
          <span>MUM</span><i aria-hidden="true" /><span>MİRA</span>
        </a>
        <nav aria-label={a11y.footerNavigation}>
          <a href="#catalog">{nav.catalog}</a>
          <a href="#story">{nav.story}</a>
          <a href="#process">{nav.process}</a>
        </nav>
        <div className="footer-languages" aria-label={a11y.language}>
          {Object.entries(languageLabels).map(([code, label]) => (
            <a
              href={`?lang=${code}`}
              key={code}
              className={language === code ? 'is-active' : ''}
              aria-current={language === code ? 'true' : undefined}
              aria-label={`Switch language: ${label}`}
              onClick={(event) => {
                event.preventDefault()
                onLanguageChange(code)
              }}
            >
              {code.toUpperCase()}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-note">
        <span>© {new Date().getFullYear()} MUM & MİRA</span>
        <span>{copy.rights}</span>
      </div>
    </footer>
  )
}
