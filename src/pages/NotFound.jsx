import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Page Not Found (404)"
        text="The page you are looking for may have been moved, updated, or is temporarily unavailable."
        eyebrow="404 Error"
        breadcrumb="Not Found"
      />
      <section className="section" style={{ minHeight: '400px', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Let's get you back on track</h2>
          <p className="lead" style={{ margin: '0 auto 32px' }}>
            Explore our core IT staffing services, discover active candidate opportunities, or return to the homepage.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary">
              <span>Back to Homepage</span>
              <Icon name="arrow-right" size={16} />
            </Link>
            <Link to="/services" className="btn btn-ghost">
              <span>View IT Services</span>
            </Link>
            <Link to="/contact-us" className="btn btn-ghost">
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
