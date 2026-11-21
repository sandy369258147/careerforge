import PageHero from '../components/PageHero.jsx'
import ContactForm from '../components/ContactForm.jsx'
import Icon from '../components/Icon.jsx'
import Card3D from '../components/Card3D.jsx'
import { company } from '../data/content.js'

const consultationSteps = [
  {
    step: '1',
    title: 'Requirement Deep-Dive',
    desc: 'We map your target tech stack, project deliverables, and team dynamics.',
  },
  {
    step: '2',
    title: 'Talent Sourcing Roadmap',
    desc: 'Receive immediate insights on talent availability, salary/rate benchmarking, and screening criteria.',
  },
  {
    step: '3',
    title: '48h Candidate Delivery',
    desc: 'Review 2-3 elite pre-vetted candidate dossiers ready for immediate technical interviews.',
  },
]

export default function BookDemo() {
  return (
    <>
      <PageHero
        title="Schedule an IT Staffing Consultation"
        text="Speak directly with our senior technology talent architects. We will evaluate your hiring requirements, establish a tailored timeline, and outline your candidate delivery roadmap."
        eyebrow="VIP Discovery Session"
        breadcrumb="Book Consultation"
      />

      <section className="section">
        <div className="container split contact-split">
          {/* Left Column: What to expect */}
          <div>
            <span className="eyebrow-badge">What to Expect</span>
            <h2>A 30-Minute Strategic Session Engineered to Save Weeks</h2>
            <p className="lead">
              No generic sales pitches. You’ll consult directly with an IT workforce strategist who understands your engineering stack and technical deadlines.
            </p>

            <div style={{ display: 'grid', gap: '20px', margin: '32px 0 36px' }}>
              {consultationSteps.map((s) => (
                <div
                  key={s.step}
                  style={{
                    display: 'flex',
                    gap: '18px',
                    alignItems: 'flex-start',
                    background: 'var(--bg-surface)',
                    padding: '20px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <span
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      background: 'var(--color-brand-primary)',
                      color: '#FFFFFF',
                      display: 'grid',
                      placeItems: 'center',
                      fontFamily: 'var(--font-head)',
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {s.step}
                  </span>
                  <div>
                    <h4 style={{ margin: '0 0 4px', fontSize: '1.05rem', color: 'var(--color-heading)' }}>
                      {s.title}
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Card3D maxTilt={5}>
              <div
                style={{
                  background: 'var(--color-surface-muted)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <Icon name="phone" size={18} />
                  <strong style={{ color: 'var(--color-heading)', fontSize: '0.95rem' }}>Prefer an immediate phone consultation?</strong>
                </div>
                <p style={{ margin: '0 0 12px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  Call our Dallas office directly during business hours:
                </p>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="btn btn-primary"
                  style={{ padding: '0.6em 1.4em', fontSize: '0.9rem', display: 'inline-flex' }}
                >
                  <Icon name="phone" size={16} />
                  <span>Call {company.phone}</span>
                </a>
              </div>
            </Card3D>
          </div>

          {/* Right Column: Consultation Form */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <span className="eyebrow-badge">Consultation Form</span>
              <h2>Book Your Session</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                Complete the details below, and an account director will confirm your discovery call slot within 2 hours.
              </p>
            </div>

            <ContactForm
              subject="Consultation Request"
              showInterest={true}
              submitLabel="Confirm Consultation Request"
              messageLabel="Tell us about the roles, tech stack, or career goals you wish to discuss"
            />
          </div>
        </div>
      </section>
    </>
  )
}
