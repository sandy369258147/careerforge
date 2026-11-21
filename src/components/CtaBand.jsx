import { Link } from 'react-router-dom'
import { company } from '../data/content.js'
import Icon from './Icon.jsx'

export default function CtaBand({
  title = 'Ready to accelerate your IT hiring roadmap?',
  text = 'Book an architectural discovery consultation. We will map your technical requirements, timeline, and candidate scorecard in 48 hours.',
  primaryBtnText = 'Schedule Consultation',
  primaryBtnLink = '/book-a-demo',
}) {
  return (
    <section className="cta-band">
      <div className="container cta-row">
        <div style={{ maxWidth: '680px' }}>
          <span className="eyebrow-badge dark" style={{ marginBottom: '12px' }}>
            Transform Your Engineering Team
          </span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>

        <div className="cta-actions">
          <Link to={primaryBtnLink} className="btn btn-ghost-light" style={{ background: '#FFFFFF', color: 'var(--color-brand-primary)', fontWeight: 800 }}>
            <span>{primaryBtnText}</span>
            <Icon name="arrow-right" size={16} />
          </Link>
          <a href={`tel:${company.phoneHref}`} className="btn btn-ghost-light">
            <Icon name="phone" size={18} />
            <span>{company.phone}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
