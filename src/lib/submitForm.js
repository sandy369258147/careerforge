// Local-only form handler. Replace the body with a fetch() to your backend / form service
// (Formspree, EmailJS, your own API...) when you deploy.
import { company } from '../data/content.js'

export async function submitForm(values, subject = 'Website enquiry') {
  const body = Object.entries(values).map(([k, v]) => `${k}: ${v}`).join('\n')
  const href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = href
  return { ok: true }
}
