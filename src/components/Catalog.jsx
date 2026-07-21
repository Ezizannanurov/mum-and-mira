import { ProductCard } from './ProductCard'

export function Catalog({ copy, products, language }) {
  return (
    <section className="catalog section" id="catalog">
      <header className="section-heading" data-reveal>
        <p className="eyebrow">{copy.eyebrow}</p>
        <div>
          <h2>{copy.title}</h2>
          <p>{copy.body}</p>
        </div>
      </header>

      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            language={language}
            copy={copy}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
