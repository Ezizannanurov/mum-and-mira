import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Catalog } from './components/Catalog'
import { Story } from './components/Story'
import { Process } from './components/Process'
import { Footer } from './components/Footer'
import { content } from './data/content'
import { products } from './data/products'
import {
  getBrowserStorage,
  getInitialLanguage,
  saveLanguage,
  setDocumentLanguage,
} from './lib/i18n'
import { setupRevealAnimations } from './lib/reveal'

export default function App({ initialLanguage }) {
  const [storage] = useState(() =>
    getBrowserStorage(typeof window === 'undefined' ? undefined : window),
  )
  const [language, setLanguage] = useState(() => {
    if (initialLanguage) return initialLanguage
    return getInitialLanguage(storage, window.navigator.language)
  })

  const copy = content[language] ?? content.ru

  useEffect(() => {
    setDocumentLanguage(language)
    saveLanguage(storage, language)
  }, [language, storage])

  useEffect(() => setupRevealAnimations(document), [language])

  return (
    <div className="site-shell">
      <Header
        language={language}
        onLanguageChange={setLanguage}
        copy={copy}
      />
      <main>
        <Hero copy={copy.hero} />
        <Catalog copy={copy.catalog} products={products} language={language} />
        <Story copy={copy.story} />
        <Process copy={copy.process} />
      </main>
      <Footer
        copy={copy.footer}
        nav={copy.nav}
        a11y={copy.a11y}
        language={language}
        onLanguageChange={setLanguage}
      />
    </div>
  )
}
