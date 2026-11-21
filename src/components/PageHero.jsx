import { Link } from 'react-router-dom'

export default function PageHero({ title, text, eyebrow = 'Careerforge Consulting LLC', breadcrumb }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div style={{ maxWidth: '820px', position: 'relative', zIndex: 2 }}>
          {breadcrumb && (
            <nav aria-label="Breadcrumb" style={{ marginBottom: '14px', fontSize: '0.86rem', color: 'var(--color-brand-steel)' }}>
              <Link to="/" style={{ color: '#E2E8F0' }}>Home</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{breadcrumb}</span>
            </nav>
          )}

          {eyebrow && (
            <span className="eyebrow-badge dark">
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-brand-secondary)' }} />
              {eyebrow}
            </span>
          )}

          <h1>{title}</h1>
          {text && <p>{text}</p>}
        </div>
      </div>
    </section>
  )
}
