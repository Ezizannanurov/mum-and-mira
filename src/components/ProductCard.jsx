import { buildWhatsAppUrl } from '../lib/whatsapp'

const locales = { ru: 'ru-RU', en: 'en-US', tr: 'tr-TR' }

export function ProductCard({ product, language, copy, index }) {
  const name = product.name[language]
  const displayPrice = new Intl.NumberFormat(locales[language], {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  }).format(product.price)

  return (
    <article
      className={`product-card product-${product.id}`}
      data-reveal
      style={{ '--delay': `${index * 70}ms` }}
    >
      <div className="product-image-wrap">
        <img
          src={product.image}
          alt={product.alt[language]}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.closest('.product-image-wrap')?.classList.add('image-error')
          }}
        />
        <span className="product-monogram" aria-hidden="true">
          {name.slice(0, 1)}
        </span>
        <span className="product-number" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="product-info">
        <div className="product-title-row">
          <h3>{name}</h3>
          <span>{displayPrice}</span>
        </div>
        <p className="product-description">{product.description[language]}</p>
        <p className="product-notes">
          <span>{copy.notes}</span>
          {product.notes[language]}
        </p>
        <a
          className="order-link"
          href={buildWhatsAppUrl(language, name)}
          target="_blank"
          rel="noreferrer"
          aria-label={`${copy.order}: ${name}`}
        >
          <span>{copy.order}</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}
