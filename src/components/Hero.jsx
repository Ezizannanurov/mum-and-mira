export function Hero({ copy }) {
  const moveArtwork = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1
    const y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1
    event.currentTarget.style.setProperty('--art-x', x.toFixed(3))
    event.currentTarget.style.setProperty('--art-y', y.toFixed(3))
  }

  const resetArtwork = (event) => {
    event.currentTarget.style.setProperty('--art-x', 0)
    event.currentTarget.style.setProperty('--art-y', 0)
  }

  return (
    <section className="hero" id="top">
      <div className="hero-copy" data-reveal>
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="hero-intro">{copy.body}</p>
        <a className="text-link hero-link" href="#catalog">
          <span>{copy.cta}</span>
          <span aria-hidden="true">↘</span>
        </a>
      </div>

      <div
        className="hero-artwork"
        onPointerMove={moveArtwork}
        onPointerLeave={resetArtwork}
        aria-hidden="true"
      >
        <span className="hero-glow" />
        <div className="hero-artwork-frame">
          <img src="/images/hero-beeswax-candle.jpg" alt="" />
        </div>
      </div>

      <div className="hero-meta" data-reveal>
        <span>{copy.scroll}</span>
        <span>{copy.burnTime}</span>
      </div>
    </section>
  )
}
