export function Story({ copy }) {
  return (
    <section className="story section" id="story">
      <div className="story-copy" data-reveal>
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2>{copy.title}</h2>
        <p>{copy.body}</p>
      </div>

      <blockquote data-reveal>“{copy.quote}”</blockquote>

      <div className="materials">
        {copy.materials.map(([title, description], index) => (
          <article key={title} data-reveal style={{ '--delay': `${index * 90}ms` }}>
            <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
