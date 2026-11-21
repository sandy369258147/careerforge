import { useState } from 'react'
import { faqs } from '../data/content.js'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <div className="faq" role="region" aria-label="Frequently Asked Questions">
      {faqs.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
                id={`faq-btn-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{f.q}</span>
                <span className="faq-toggle-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 1V13M1 7H13"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            {isOpen && (
              <div id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-btn-${i}`}>
                <p className="faq-answer">{f.a}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
