export const SUPPORTED_LANGUAGES = Object.freeze(['ru', 'en', 'tr'])

const STORAGE_KEY = 'mum-mira-language'

export function getBrowserStorage(browser) {
  try {
    return browser?.localStorage
  } catch {
    return undefined
  }
}

export function getInitialLanguage(storage, browserLanguage = '') {
  try {
    const saved = storage?.getItem(STORAGE_KEY)
    if (SUPPORTED_LANGUAGES.includes(saved)) return saved
  } catch {
    // Storage can be disabled in privacy mode; language detection still works.
  }

  const baseLanguage = String(browserLanguage).toLowerCase().split('-')[0]
  return SUPPORTED_LANGUAGES.includes(baseLanguage) ? baseLanguage : 'ru'
}

export function saveLanguage(storage, language) {
  if (!SUPPORTED_LANGUAGES.includes(language)) return

  try {
    storage?.setItem(STORAGE_KEY, language)
  } catch {
    // The selection remains active for this session even if storage is blocked.
  }
}

export function setDocumentLanguage(language) {
  if (
    typeof document !== 'undefined' &&
    SUPPORTED_LANGUAGES.includes(language)
  ) {
    document.documentElement.lang = language
  }
}
