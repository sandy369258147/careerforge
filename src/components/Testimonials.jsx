import { testimonials } from '../data/content.js'

const initials = (n) => n.split(' ').map((p) => p[0]).join('')

export default function Testimonials({ limit }) {
  const list = limit ? testimonials.slice(0, limit) : testimonials

  return (
    <div className="testimonials-grid">
      {list.map((t) => (
        <figure key={t.name} className="testimonial-card">
          <div>
            <div className="rating-stars" aria-label={`${t.rating || 5} out of 5 stars`}>
              {Array.from({ length: t.rating || 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <blockquote className="testimonial-text" style={{ marginTop: '16px' }}>
              "{t.text}"
            </blockquote>
          </div>

          <figcaption className="testimonial-author">
            <span className="avatar-circle" aria-hidden="true">
              {initials(t.name)}
            </span>
            <div className="author-info">
              <strong>{t.name}</strong>
              <span>{t.role || 'Enterprise Partner'} {t.company ? `• ${t.company}` : ''}</span>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
