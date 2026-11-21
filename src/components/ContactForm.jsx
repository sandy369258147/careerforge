import { useState } from 'react'
import { submitForm } from '../lib/submitForm.js'
import Icon from './Icon.jsx'

export default function ContactForm({
  subject = 'Website enquiry',
  submitLabel = 'Send Message',
  showInterest = false,
  messageLabel = 'Project Details or Requirements',
}) {
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    const values = Object.fromEntries(new FormData(e.currentTarget))
    const next = {}

    if (!values.Name?.trim()) next.Name = 'Please enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(values.Email || '')) next.Email = 'Please provide a valid business email address.'
    if (!values.Phone?.trim()) next.Phone = 'Please provide a contact phone number.'

    setErrors(next)
    if (Object.keys(next).length) return

    setSubmitting(true)
    try {
      await submitForm(values, subject)
      setSent(true)
      e.currentTarget.reset()
    } finally {
      setSubmitting(false)
    }
  }

  const field = (name, label, type = 'text', placeholder = '') => (
    <div className="field">
      <label htmlFor={`f-${name}`}>
        {label} <span style={{ color: 'var(--color-brand-primary)' }}>*</span>
      </label>
      <input
        id={`f-${name}`}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `e-${name}` : undefined}
      />
      {errors[name] && (
        <p className="error" id={`e-${name}`} role="alert">
          {errors[name]}
        </p>
      )}
    </div>
  )

  return (
    <div className="form-card">
      <form className="form" onSubmit={onSubmit} noValidate>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {field('Name', 'Full Name', 'text', 'e.g. Michael Vance')}
          {field('Email', 'Work Email', 'email', 'e.g. mvance@enterprise.com')}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {field('Phone', 'Contact Number', 'tel', 'e.g. +1 (555) 019-2834')}
          {showInterest ? (
            <div className="field">
              <label htmlFor="f-Interest">I am looking for</label>
              <select id="f-Interest" name="Interest" defaultValue="Hiring IT talent">
                <option value="Hiring IT talent">Hiring IT talent (Direct Placement)</option>
                <option value="Contract staffing">Contract Staffing & Augmentation</option>
                <option value="A new role">Candidate: Looking for a New Role</option>
                <option value="Career counseling">Candidate: Career Counseling & Prep</option>
                <option value="Employee training">Corporate: Enterprise Upskilling</option>
              </select>
            </div>
          ) : (
            <div className="field">
              <label htmlFor="f-Company">Company / Organization (Optional)</label>
              <input id="f-Company" name="Company" type="text" placeholder="e.g. CloudTech Inc." />
            </div>
          )}
        </div>

        <div className="field">
          <label htmlFor="f-Message">{messageLabel}</label>
          <textarea
            id="f-Message"
            name="Message"
            rows="4"
            placeholder="Tell us about the roles you need to fill, required tech stack, target timelines, or career goals..."
          />
        </div>

        <button
          className="btn btn-primary"
          type="submit"
          disabled={submitting}
          style={{ width: '100%', padding: '1em', fontSize: '1.02rem', marginTop: '6px' }}
        >
          {submitting ? 'Preparing Transmission...' : submitLabel}
          <Icon name="arrow-right" size={18} />
        </button>

        {sent && (
          <div className="success-state" role="status">
            <span style={{ fontSize: '1.4rem' }}>✓</span>
            <div>
              <strong>Request Received!</strong>
              <p style={{ margin: 0, fontSize: '0.88rem' }}>
                Your default email client opened with your inquiry pre-filled. We typically respond within 2-4 business hours.
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
