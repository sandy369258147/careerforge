import { useState, useEffect } from 'react'

const liveUpdates = [
  { role: 'Senior Cloud DevOps Architect', location: 'Dallas, TX', type: 'Direct Placement', time: '8m ago' },
  { role: 'Principal React / Next.js Lead', location: 'Austin, TX (Remote)', type: 'Contract Augmentation', time: '24m ago' },
  { role: 'Enterprise Data & AI Engineer', location: 'Plano, TX', type: 'Shortlisted in 48h', time: '1h ago' },
  { role: 'Cybersecurity Threat Specialist', location: 'Fort Worth, TX', type: 'Executive Search', time: '2h ago' },
]

export default function LiveActivityTicker() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % liveUpdates.length)
        setFade(true)
      }, 300)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const current = liveUpdates[index]

  return (
    <div
      className="live-activity-bar"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        padding: '6px 16px',
        borderRadius: '9999px',
        background: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--color-border)',
        boxShadow: '0 4px 16px -2px rgba(22, 59, 101, 0.08)',
        fontSize: '0.82rem',
        fontWeight: 600,
        color: 'var(--color-heading)',
      }}
    >
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          color: 'var(--color-success)',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          fontSize: '0.72rem',
        }}
      >
        <span
          className="anim-pulse-dot"
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--color-success)',
            boxShadow: '0 0 8px var(--color-success)',
            display: 'inline-block',
          }}
        />
        Live Match
      </span>

      <span
        style={{
          opacity: fade ? 1 : 0,
          transform: fade ? 'translateY(0)' : 'translateY(4px)',
          transition: 'all 0.3s ease',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{ fontWeight: 700 }}>{current.role}</span>
        <span style={{ color: 'var(--color-text-muted)' }}>• {current.location}</span>
        <span
          style={{
            background: 'var(--electric-soft)',
            color: 'var(--color-brand-primary)',
            padding: '2px 8px',
            borderRadius: '9999px',
            fontSize: '0.72rem',
            fontWeight: 700,
          }}
        >
          {current.type}
        </span>
      </span>
    </div>
  )
}
