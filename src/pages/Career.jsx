import PageHero from '../components/PageHero.jsx'
import ContactForm from '../components/ContactForm.jsx'
import Img from '../components/Img.jsx'
import Icon from '../components/Icon.jsx'
import Card3D from '../components/Card3D.jsx'
import CandidateHero3D from '../components/CandidateHero3D.jsx'
import CtaBand from '../components/CtaBand.jsx'

const candidateBenefits = [
  {
    title: 'Executive Profile Marketing',
    desc: 'We transform your technical resume into an ATS-beating, impact-driven portfolio that catches the attention of engineering leaders.',
    icon: 'target',
  },
  {
    title: '1-on-1 Interview Preparation',
    desc: 'Mock technical coding screens, system design walk-throughs, and behavioral interview coaching with seasoned IT practitioners.',
    icon: 'users',
  },
  {
    title: 'Direct Access to Decision Makers',
    desc: 'Skip the black hole of generic job portals. We introduce you directly to hiring VPs, CTOs, and tech directors.',
    icon: 'shield',
  },
  {
    title: 'Transparent Compensation Advocacy',
    desc: 'We negotiate top-of-market hourly rates or salaries with full clarity regarding project scopes, benefits, and contract extensions.',
    icon: 'check',
  },
]

const openDomains = [
  'Senior Cloud & AWS/Azure Architects',
  'Lead React & Node.js Full-Stack Engineers',
  'DevOps, Kubernetes & Platform Engineers',
  'AI / Machine Learning & Data Pipeline Engineers',
  'Cybersecurity & Enterprise Compliance Specialists',
  'Enterprise Java / Spring Boot & Microservices Developers',
]

export default function Career() {
  return (
    <>
      <PageHero
        title="Accelerate Your Technology Career"
        text="Looking for your next high-impact IT role? Connect with Careerforge Consulting to access exclusive contract and permanent opportunities with top-tier technology employers."
        eyebrow="Candidate Gateway"
        breadcrumb="Career"
      />

      {/* Main Split Section */}
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow-badge">Empowering IT Professionals</span>
            <h2>Dedicated Advocacy & Career Development</h2>
            <p className="lead">
              At Careerforge, you are not just a resume in a database. We act as your personal career agents, aligning your aspirations, technical strengths, and target compensation with high-caliber tech companies.
            </p>

            <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
              <CandidateHero3D />
            </div>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>High-Demand Tech Tracks We Place:</h3>
            <ul className="checks">
              {openDomains.map((domain) => (
                <li key={domain}>
                  <span className="check-icon-box">
                    <Icon name="check" size={14} />
                  </span>
                  <span>{domain}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Candidate Submission Form */}
          <div>
            <div style={{ marginBottom: '24px' }}>
              <span className="eyebrow-badge">Confidential Submission</span>
              <h2>Submit Your Profile</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                Share your details and desired technology track. Our talent advisors will review your qualifications and reach out within 24 business hours.
              </p>
            </div>

            <ContactForm
              subject="Career Opportunity Enquiry"
              submitLabel="Submit Candidate Profile"
              messageLabel="Summary of your technical skills, primary tech stack & target role"
              showInterest={true}
            />
          </div>
        </div>
      </section>

      {/* Candidate Benefits Grid */}
      <section className="section tint">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow-badge">The Careerforge Candidate Advantage</span>
            <h2>Why IT Specialists Trust Our Advisory Team</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              We invest deeply in every candidate's career progression, from portfolio polishing to executive compensation negotiations.
            </p>
          </div>

          <div className="card-grid">
            {candidateBenefits.map((b) => (
              <Card3D key={b.title} maxTilt={6}>
                <div className="card" style={{ padding: '36px 28px', height: '100%' }}>
                  <div className="contact-icon-box" style={{ marginBottom: '20px' }}>
                    <Icon name={b.icon} size={24} />
                  </div>
                  <h3>{b.title}</h3>
                  <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{b.desc}</p>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want a complimentary technical resume and market review?"
        text="Book a 1-on-1 career consultation with our senior talent advisors to evaluate current market demand and compensation ranges for your skill set."
        primaryBtnText="Book Career Advisory"
        primaryBtnLink="/book-a-demo"
      />
    </>
  )
}
