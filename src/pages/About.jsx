import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Img from '../components/Img.jsx'
import Icon from '../components/Icon.jsx'
import Card3D from '../components/Card3D.jsx'
import { aboutPoints, keyMetrics, steps, why } from '../data/content.js'

const coreValues = [
  {
    title: 'Precision Technical Vetting',
    desc: 'We never forward uncalibrated resumes. Every specialist undergoes direct technical assessment to guarantee domain capability.',
    icon: 'target',
  },
  {
    title: 'Transparent Collaboration',
    desc: 'Clear communication, ethical terms, and honest compensation guidance for both enterprise clients and ambitious tech candidates.',
    icon: 'shield',
  },
  {
    title: 'Long-Term Retention Focus',
    desc: 'We optimize for tenure and cultural synergy, ensuring candidates thrive and businesses minimize costly turnover.',
    icon: 'users',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        title="About Careerforge Consulting"
        text="We are career architects and business enablers, bridging the gap between extraordinary technology talent and pioneering companies."
        eyebrow="Our Story & Vision"
        breadcrumb="About Us"
      />

      {/* Mission & Background */}
      <section className="section">
        <div className="container split">
          <Card3D maxTilt={7}>
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <Img name="about-team" className="rounded" alt="Careerforge consulting leadership" />
            </div>
          </Card3D>

          <div>
            <span className="eyebrow-badge">Focused Exclusively on Tech</span>
            <h2>Bridging Visionary Companies with Exceptional IT Minds</h2>
            <p className="lead">
              Founded on the belief that human potential drives digital transformation, Careerforge Consulting LLC serves as a premier technology talent advisor headquartered in Dallas, Texas.
            </p>
            <p>
              In today's fast-moving software landscape, hiring mistakes are expensive and roadmap delays are costly. We combine industry-tested technical acumen with high-touch consulting to deliver IT specialists who elevate your team's velocity and culture.
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
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
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

      {/* Core Values */}
      <section className="section tint">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-badge">Our Guiding Principles</span>
            <h2>Core Values That Define Our Partnership</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              We hold ourselves to rigorous ethical and engineering standards at every phase of the engagement.
            </p>
          </div>

          <div className="card-grid">
            {coreValues.map((v) => (
              <Card3D key={v.title} maxTilt={6}>
                <div className="card" style={{ padding: '36px 28px', height: '100%' }}>
                  <div className="contact-icon-box" style={{ marginBottom: '20px' }}>
                    <Icon name={v.icon} size={24} />
                  </div>
                  <h3>{v.title}</h3>
                  <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{v.desc}</p>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="section dark">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-badge dark">The Careerforge Standard</span>
            <h2>What Sets Us Apart in IT Staffing</h2>
            <p className="lead light" style={{ margin: '0 auto' }}>
              We combine deep technology domain knowledge with white-glove client care to produce lasting business outcomes.
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

      {/* How we work */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-badge">Systematic Methodology</span>
            <h2>Our Talent Delivery Lifecycle</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              A proven four-stage roadmap that ensures speed, compliance, and perfect cultural alignment.
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

      <CtaBand
        title="Ready to partner with a specialized IT talent advisor?"
        text="Let's schedule a 30-minute discovery session to discuss your upcoming project milestones and team expansion plans."
      />
    </>
  )
}
