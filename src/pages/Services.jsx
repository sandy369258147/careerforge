import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import CtaBand from '../components/CtaBand.jsx'
import Img from '../components/Img.jsx'
import Icon from '../components/Icon.jsx'
import Card3D from '../components/Card3D.jsx'
import { serviceCommitments, services } from '../data/content.js'

const engagementModels = [
  {
    title: 'Staff Augmentation',
    tag: 'Agile & Flexible',
    desc: 'Rapidly scale your existing engineering pods with high-caliber contract engineers on flexible hourly or monthly terms.',
    features: ['Direct integration into active sprints', 'Full compliance & payroll handled', '48-72h talent deployment', 'Zero long-term commitment'],
  },
  {
    title: 'Direct Hire Placement',
    tag: 'Long-Term Growth',
    desc: 'Targeted headhunting for mission-critical permanent roles, principal architects, tech leads, and executive tech leadership.',
    features: ['Deep market candidate mapping', 'Multi-stage technical audits', 'Comprehensive background vetting', 'Guaranteed replacement warranty'],
  },
  {
    title: 'Contract-to-Hire',
    tag: 'Risk-Free Evaluation',
    desc: 'Assess an engineer’s technical prowess, speed, and team cohesion in real project conditions before extending a permanent offer.',
    features: ['Seamless conversion pathway', 'Minimized hiring risk', 'Pre-agreed conversion terms', 'Continuous performance support'],
  },
]

export default function Services() {
  return (
    <>
      <PageHero
        title="Comprehensive IT Workforce Solutions"
        text="Tailored IT staffing, contract augmentation, executive placement, profile marketing, and custom corporate upskilling engineered for engineering excellence."
        eyebrow="Capabilities & Services"
        breadcrumb="Services"
      />

      {/* Service Commitments Highlight Strip */}
      <section className="section" style={{ paddingBottom: '32px' }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-badge">Our Quality Pledge</span>
            <h2>The Careerforge Service Commitment</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              We hold ourselves accountable to strict delivery benchmarks and SLAs for every client engagement.
            </p>
          </div>

          <div className="card-grid" style={{ marginBottom: '64px' }}>
            {serviceCommitments.map((c, i) => (
              <div
                key={i}
                className="card"
                style={{
                  padding: '28px 24px',
                  borderLeft: '4px solid var(--color-brand-primary)',
                  background: 'var(--color-surface)',
                  justifyContent: 'center',
                }}
              >
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <span className="check-icon-box" style={{ marginTop: '2px' }}>
                    <Icon name="check" size={14} />
                  </span>
                  <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-primary)', fontSize: '1rem' }}>
                    {c}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Service Rows */}
          <div className="services-detailed-list">
            {services.map((s, i) => (
              <article key={s.key} className={`service-row ${i % 2 !== 0 ? 'flip' : ''}`}>
                <Card3D maxTilt={6}>
                  <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                    <Img name={s.key} className="rounded" alt={s.title} />
                  </div>
                </Card3D>

                <div>
                  <span className="eyebrow-badge">{s.category}</span>
                  <h2>{s.title}</h2>
                  <p className="lead">{s.text}</p>

                  {s.deliverables && (
                    <div style={{ marginBottom: '28px' }}>
                      <h4 style={{ fontSize: '1rem', color: 'var(--color-heading)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Key Capabilities & Deliverables:
                      </h4>
                      <ul className="checks" style={{ marginBottom: 0 }}>
                        {s.deliverables.map((d) => (
                          <li key={d}>
                            <span className="check-icon-box">
                              <Icon name="check" size={14} />
                            </span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Link to="/book-a-demo" className="btn btn-primary">
                      <span>Schedule a Consultation</span>
                      <Icon name="arrow-right" size={16} />
                    </Link>
                    <Link to="/contact-us" className="btn btn-ghost">
                      <span>Inquire Directly</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section tint">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-badge">Flexible Collaboration</span>
            <h2>Engagement Models Built for Scalability</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Choose the hiring and staffing structure that aligns with your operational dynamics and budgetary requirements.
            </p>
          </div>

          <div className="card-grid">
            {engagementModels.map((m) => (
              <Card3D key={m.title} maxTilt={6}>
                <div className="card" style={{ padding: '36px 28px', height: '100%' }}>
                  <span className="eyebrow-badge" style={{ alignSelf: 'flex-start', marginBottom: '16px' }}>
                    {m.tag}
                  </span>
                  <h3>{m.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>{m.desc}</p>
                  <ul className="card-deliverables" style={{ marginTop: 'auto', marginBottom: 0 }}>
                    {m.features.map((f) => (
                      <li key={f}>
                        <span className="bullet" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to build your next high-performance IT squad?"
        text="Connect with our staffing specialists today to discuss target roles, tech stacks, and start receiving pre-screened candidate dossiers."
      />
    </>
  )
}
