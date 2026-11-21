import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  aboutPoints,
  clients,
  company,
  keyMetrics,
  serviceCommitments,
  services,
  steps,
  why,
  work,
} from '../data/content.js'
import Img from '../components/Img.jsx'
import Icon from '../components/Icon.jsx'
import Card3D from '../components/Card3D.jsx'
import ThreeCanvas3D from '../components/ThreeCanvas3D.jsx'
import TechArchitect3D from '../components/TechArchitect3D.jsx'
import LiveActivityTicker from '../components/LiveActivityTicker.jsx'
import Faq from '../components/Faq.jsx'
import Testimonials from '../components/Testimonials.jsx'
import ContactForm from '../components/ContactForm.jsx'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Enterprise Staffing', 'Career Growth', 'Enterprise Training']

  const filteredServices =
    selectedCategory === 'All'
      ? services
      : services.filter((s) => s.category === selectedCategory)

  return (
    <>
      {/* ====================================================================
          HERO SECTION with Interactive 3D Canvas & Floating 3D Badges
          ==================================================================== */}
      <section className="hero">
        <ThreeCanvas3D variant="hero" />

        <div className="container hero-grid">
          <div className="hero-content">
            <div style={{ marginBottom: '18px' }}>
              <LiveActivityTicker />
            </div>

            <span className="eyebrow-badge">
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-brand-secondary)' }} />
              Premier IT Talent & Staffing Solutions
            </span>

            <h1>
              We believe in the power of <span className="text-gradient">exceptional talent</span> to transform modern enterprises.
            </h1>

            <p className="lead">
              Careerforge Consulting LLC connects visionary tech companies with world-class IT talent. We architect high-performance engineering teams and empower ambitious technical professionals to accelerate their career trajectories.
            </p>

            <div className="actions" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
              <Link to="/services" className="btn btn-primary">
                <span>Explore Solutions</span>
                <Icon name="arrow-right" size={18} />
              </Link>
              <Link to="/book-a-demo" className="btn btn-ghost">
                <span>Book Consultation</span>
              </Link>
            </div>

            {/* Quick Tech Domain Tags */}
            {/* <div className="hero-tags">
              <span className="hero-tag-item"><span className="bullet" />Cloud & DevOps</span>
              <span className="hero-tag-item"><span className="bullet" />Full-Stack Engineering</span>
              <span className="hero-tag-item"><span className="bullet" />AI & Data Systems</span>
              <span className="hero-tag-item"><span className="bullet" />Cybersecurity</span>
            </div> */}
          </div>

          {/* 3D Vector Character Motion Hero Visual */}
          <div className="hero-visual" style={{ display: 'flex', justifyContent: 'center' }}>
            <TechArchitect3D />
          </div>
        </div>
      </section>

      {/* ====================================================================
          KEY METRICS STRIP
          ==================================================================== */}
      <section className="metrics-strip">
        <div className="container">
          <div className="metrics-grid">
            {keyMetrics.map((m) => (
              <div key={m.label} className="metric-item">
                <span className="metric-value">{m.value}</span>
                <span className="metric-label">{m.label}</span>
                <span className="metric-detail">{m.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          ABOUT US & PHILOSOPHY
          ==================================================================== */}
      <section className="section" id="about">
        <div className="container split">
          <Card3D maxTilt={7}>
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <Img name="process" className="rounded" alt="Careerforge Talent Strategy and Assessment" />
            </div>
          </Card3D>

          <div>
            <span className="eyebrow-badge">
              Strategic Talent Architects
            </span>
            <h2>We are career architects and business enablers.</h2>
            <p className="lead">
              With a laser focus on the enterprise IT ecosystem, Careerforge bridges the critical gap between top 3% technology talent and innovative organizations.
            </p>
            <p>
              Whether scaling critical cloud infrastructure, deploying modern microservices, or building specialized AI/ML pipelines, our advisory approach delivers candidates who contribute from sprint one.
            </p>

            <ul className="checks">
              {aboutPoints.map((p) => (
                <li key={p}>
                  <span className="check-icon-box">
                    <Icon name="check" size={14} />
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <Link to="/about-us" className="text-link" style={{ fontSize: '1.05rem' }}>
              <span>Learn more about our methodology</span>
              <Icon name="arrow-right" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          CORE SERVICES with Interactive Filter & 3D Cards
          ==================================================================== */}
      <section className="section tint" id="services">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-badge">Tailored IT Workforce Capabilities</span>
            <h2>Enterprise Staffing & Career Solutions</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              End-to-end recruitment, flexible contract staffing, candidate positioning, and corporate upskilling engineered for rapid digital transformation.
            </p>

            {/* Interactive Filter Pills */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginTop: '28px' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-ghost'}`}
                  style={{ padding: '0.6em 1.3em', fontSize: '0.88rem' }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="card-grid">
            {filteredServices.map((s) => (
              <Card3D key={s.key} maxTilt={6}>
                <article className="card">
                  <div className="card-image-wrap">
                    <Img name={s.key} alt={s.title} />
                    <span className="card-tag">{s.tag}</span>
                  </div>
                  <div className="card-body">
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>

                    {s.deliverables && (
                      <ul className="card-deliverables">
                        {s.deliverables.slice(0, 3).map((d) => (
                          <li key={d}>
                            <span className="bullet" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div style={{ marginTop: 'auto', paddingTop: '12px' }}>
                      <Link to="/book-a-demo" className="text-link">
                        <span>Inquire about this solution</span>
                        <Icon name="arrow-right" size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          WHY CHOOSE US (Dark 3D Glassmorphism)
          ==================================================================== */}
      <section className="section dark">
        <ThreeCanvas3D variant="accent" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-head">
            <span className="eyebrow-badge dark">The Careerforge Advantage</span>
            <h2>Why Forward-Thinking Companies Choose Careerforge</h2>
            <p className="lead light" style={{ margin: '0 auto' }}>
              We reject the high-volume, transactional recruiting model. We forge lasting relationships through rigorous technical calibration and human-centered consulting.
            </p>
          </div>

          <div className="why-grid">
            {why.map((w) => (
              <div key={w.title} className="why-card">
                <span className="why-badge">{w.badge}</span>
                <div className="why-icon-box">
                  <Icon name={w.icon} size={28} />
                </div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          HOW WE WORK (Interactive 4-Step Process)
          ==================================================================== */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-badge">Precision Process</span>
            <h2>How We Deliver Exceptional Matches</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              A systematic, transparent 4-stage talent delivery lifecycle that minimizes hiring friction and protects your engineering roadmaps.
            </p>
          </div>

          <div className="steps-container">
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.title} className="step-card">
                  <div className="step-header">
                    <span className="step-number">{s.number}</span>
                    <span className="step-phase">{s.phase}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ====================================================================
          CLIENTS & ENTERPRISE TRUST
          ==================================================================== */}
      <section className="section tint">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-badge">Client Trust</span>
            <h2>Trusted by Industry Pioneers & Enterprise Leaders</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              We partner with global enterprises, high-growth technology unicorns, and dynamic consulting teams to build resilient tech workforces.
            </p>
          </div>

          <div className="logos-grid">
            {clients.map((c) => (
              <div key={c.key} className="client-logo-card">
                <Img name={c.key} alt={c.name} />
                <span className="client-logo-tier">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          CASE STUDIES & SUCCESS STORIES
          ==================================================================== */}
      <section className="section" id="work">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-badge">Proven Results</span>
            <h2>Case Studies & Technical Engagements</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Real-world examples of how Careerforge helped leading teams solve complex staffing bottlenecks and accelerate digital delivery.
            </p>
          </div>

          <div className="gallery">
            {work.map((w) => (
              <Card3D key={w.key} maxTilt={6}>
                <article className="case-study-card">
                  <div className="case-image-wrap">
                    <Img name={w.key} alt={w.title} />
                    {w.metrics && <span className="case-metric-pill">{w.metrics}</span>}
                  </div>
                  <div className="case-content">
                    <span className="case-tag">{w.tag}</span>
                    <h3>{w.title}</h3>
                    <p>{w.text}</p>
                  </div>
                </article>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          TESTIMONIALS
          ==================================================================== */}
      <section className="section tint">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-badge">Client & Candidate Praise</span>
            <h2>What Our Partners Say About Careerforge</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Honest feedback from hiring directors, engineering leaders, and IT professionals who experienced our consultative approach.
            </p>
          </div>

          <Testimonials limit={3} />
        </div>
      </section>

      {/* ====================================================================
          FREE QUOTE & CONSULTATION REQUEST
          ==================================================================== */}
      <section className="section" id="contact">
        <div className="container split contact-split">
          <div>
            <span className="eyebrow-badge">Direct Communication</span>
            <h2>Ready to transform your IT hiring experience?</h2>
            <p className="lead">
              Reach out to our Dallas headquarters today. Whether you have an immediate contract opening or need strategic hiring counsel, our specialists are ready to help.
            </p>

            <ul className="contact-list big">
              <li>
                <div className="contact-icon-box">
                  <Icon name="mail" size={22} />
                </div>
                <div>
                  <strong>Direct Inquiries</strong>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </li>
              <li>
                <div className="contact-icon-box">
                  <Icon name="phone" size={22} />
                </div>
                <div>
                  <strong>Office Phone</strong>
                  <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
                </div>
              </li>
              <li>
                <div className="contact-icon-box">
                  <Icon name="pin" size={22} />
                </div>
                <div>
                  <strong>Dallas Headquarters</strong>
                  <span>{company.address}</span>
                </div>
              </li>
              <li>
                <div className="contact-icon-box">
                  <Icon name="clock" size={22} />
                </div>
                <div>
                  <strong>Hours of Operation</strong>
                  <span>{company.hours}</span>
                </div>
              </li>
            </ul>
          </div>

          <ContactForm subject="Quote Request" submitLabel="Submit Quote Request" showInterest={true} />
        </div>
      </section>

      {/* ====================================================================
          FREQUENTLY ASKED QUESTIONS
          ==================================================================== */}
      <section className="section tint">
        <div className="container split">
          <div>
            <span className="eyebrow-badge">Clarity & Confidence</span>
            <h2>Frequently Asked Questions</h2>
            <p className="lead">
              Have questions about our vetting process, contract terms, or nationwide reach? Find quick answers here or contact our team directly.
            </p>
            <div style={{ marginTop: '24px' }}>
              <Link to="/contact-us" className="btn btn-ghost">
                Ask a Specific Question
              </Link>
            </div>
          </div>
          <Faq />
        </div>
      </section>
    </>
  )
}
