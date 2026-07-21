const PHONE = '905376923649'

const templates = {
  ru: (name) =>
    `Здравствуйте! Хочу заказать свечу «${name}» от MUM & MİRA. Подскажите, пожалуйста, есть ли она в наличии?`,
  en: (name) =>
    `Hello! I would like to order the “${name}” candle from MUM & MİRA. Could you confirm availability?`,
  tr: (name) =>
    `Merhaba! MUM & MİRA'nın “${name}” mumunu sipariş etmek istiyorum; stok durumunu paylaşabilir misiniz?`,
}

const inquiryTemplates = {
  ru: 'Здравствуйте! Мне нравится MUM & MİRA — помогите выбрать свечу, пожалуйста.',
  en: 'Hello! I love MUM & MİRA — could you help me choose a candle?',
  tr: 'Merhaba! MUM & MİRA mumlarını beğendim — seçim yapmama yardımcı olabilir misiniz?',
}

export function buildOrderMessage(language, productName) {
  return (templates[language] ?? templates.ru)(productName)
}

export function buildWhatsAppUrl(language, productName) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(
    buildOrderMessage(language, productName),
  )}`
}

export function buildInquiryUrl(language) {
  const message = inquiryTemplates[language] ?? inquiryTemplates.ru
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
}
