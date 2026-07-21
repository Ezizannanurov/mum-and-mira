export function Process({ copy }) {
  return (
    <section className="process section" id="process">
      <header className="process-heading" data-reveal>
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2>{copy.title}</h2>
      </header>

      <ol className="process-list">
        {copy.steps.map(([number, title, description], index) => (
          <li key={number} data-reveal style={{ '--delay': `${index * 100}ms` }}>
            <span className="process-number">{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
