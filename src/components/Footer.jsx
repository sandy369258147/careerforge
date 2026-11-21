import { Link } from 'react-router-dom'
import { company, nav } from '../data/content.js'
import BrandLogo from './BrandLogo.jsx'
import Icon from './Icon.jsx'

const serviceLinks = [
  { label: 'Talent Acquisition', to: '/services' },
  { label: 'Contract Staffing', to: '/services' },
  { label: 'Profile Marketing', to: '/services' },
  { label: 'Career Counseling', to: '/career' },
  { label: 'Corporate Training', to: '/services' },
  { label: 'Client Strategic Staffing', to: '/services' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Brand & Overview */}
        <div>
          <div className="footer-brand">
            <BrandLogo light />
          </div>
          <p className="footer-desc">
            Empowering modern enterprises with exceptional IT talent and high-impact tech teams. Specialized IT staffing, talent acquisition, profile marketing, and enterprise training tailored to your technological roadmap.
          </p>
          <div className="social">
            {company.social.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Visit Careerforge on ${s.name}`}
              >
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to}>{n.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/book-a-demo">Book a Consultation</Link>
            </li>
          </ul>
        </div>

        {/* Core Services */}
        <div>
          <h3>Our Services</h3>
          <ul>
            {serviceLinks.map((s) => (
              <li key={s.label}>
                <Link to={s.to}>{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Reach Us / Headquarters */}
        <div>
          <h3>Dallas Headquarters</h3>
          <ul className="contact-list">
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            </li>
            <li>
              <Icon name="pin" size={18} />
              <span>{company.address}</span>
            </li>
            <li>
              <Icon name="clock" size={18} />
              <span>{company.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom / Legal */}
      <div className="container footer-bottom">
        <div>
          <p>
            © {new Date().getFullYear()} Careerforge Consulting LLC. All rights reserved.
          </p>
          <p style={{ fontSize: '0.82rem', marginTop: '4px', color: '#64748B' }}>
            {company.legal}
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="btn btn-ghost-light"
          style={{ padding: '0.5em 1.2em', fontSize: '0.85rem', borderRadius: 'var(--radius-pill)' }}
          aria-label="Scroll back to top"
        >
          <span>Back to Top</span>
          <span style={{ fontSize: '1rem', lineHeight: 1 }}>↑</span>
        </button>
      </div>
    </footer>
  )
}
