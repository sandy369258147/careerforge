import PageHero from '../components/PageHero.jsx'
import ContactForm from '../components/ContactForm.jsx'
import Icon from '../components/Icon.jsx'
import Faq from '../components/Faq.jsx'
import Card3D from '../components/Card3D.jsx'
import { company } from '../data/content.js'

export default function Contact() {
  return (
    <>
      <PageHero
        title="Get in Touch with Our Team"
        text="Whether you have an immediate IT staffing requirement, need executive talent advisory, or seek career development guidance, our Dallas team is ready to assist."
        eyebrow="Reach Our Specialists"
        breadcrumb="Contact Us"
      />

      <section className="section">
        <div className="container split contact-split">
          {/* Contact Details & HQ Card */}
          <div>
            <span className="eyebrow-badge">Dallas Headquarters</span>
            <h2>We’re Here to Power Your Tech Ambitions</h2>
            <p className="lead">
              Connect with Careerforge Consulting LLC. Reach out via email, phone, or submit the contact form, and an IT talent specialist will get back to you promptly.
            </p>

            <ul className="contact-list big" style={{ marginBottom: '36px' }}>
              <li>
                <div className="contact-icon-box">
                  <Icon name="mail" size={22} />
                </div>
                <div>
                  <strong>Official Email</strong>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </li>
              <li>
                <div className="contact-icon-box">
                  <Icon name="phone" size={22} />
                </div>
                <div>
                  <strong>Direct Line</strong>
                  <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
                </div>
              </li>
              <li>
                <div className="contact-icon-box">
                  <Icon name="pin" size={22} />
                </div>
                <div>
                  <strong>Physical Address</strong>
                  <span>{company.address}</span>
                </div>
              </li>
              <li>
                <div className="contact-icon-box">
                  <Icon name="clock" size={22} />
                </div>
                <div>
                  <strong>Operating Hours</strong>
                  <span>{company.hours}</span>
                </div>
              </li>
            </ul>

            {/* Dallas HQ 3D Location Card */}
            <Card3D maxTilt={5}>
              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      background: 'var(--color-success)',
                      boxShadow: '0 0 8px var(--color-success)',
                    }}
                  />
                  <span style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--color-heading)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Texas Licensed Consulting Entity
                  </span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0 }}>
                  {company.legal}
                </p>
              </div>
            </Card3D>
          </div>

          {/* Form */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <span className="eyebrow-badge">Direct Inquiry</span>
              <h2>Send Us a Message</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                Fill out the form below and we will contact you to discuss your specific IT staffing or career needs.
              </p>
            </div>
            <ContactForm subject="General Contact Inquiry" submitLabel="Send Your Message" />
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section tint">
        <div className="container split">
          <div>
            <span className="eyebrow-badge">Help & FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p className="lead">
              Got questions before reaching out? Explore our answers regarding talent turnaround times, contract terms, and candidate screening.
            </p>
          </div>
          <Faq />
        </div>
      </section>
    </>
  )
}
