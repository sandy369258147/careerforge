import { useState, useRef } from 'react'

export default function TechArchitect3D({ className = '' }) {
  const containerRef = useRef(null)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
    setCoords({ x, y })
  }

  const handleMouseEnter = () => setIsHovered(true)

  const handleMouseLeave = () => {
    setIsHovered(false)
    setCoords({ x: 0, y: 0 })
  }

  // Calculate dynamic 3D tilt angles
  const rotX = isHovered ? coords.y * -14 : 0
  const rotY = isHovered ? coords.x * 16 : 0

  return (
    <div
      ref={containerRef}
      className={`tech-character-3d-root ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '460px',
        margin: '0 auto',
        perspective: '1200px',
        cursor: 'pointer',
      }}
    >
      <div
        className="character-stage"
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '1 / 1.1',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* =================================================================
            LAYER 0: Glowing Ambient Energy Halo (Backdrop)
            ================================================================= */}
        <div
          className="character-halo"
          style={{
            position: 'absolute',
            inset: '10%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34, 77, 135, 0.25) 0%, rgba(62, 109, 158, 0.1) 40%, transparent 70%)',
            filter: 'blur(32px)',
            transform: 'translateZ(-30px)',
            pointerEvents: 'none',
          }}
        />

        {/* =================================================================
            LAYER 1: Rotating Cybernetic Orbital Rings (SVG)
            ================================================================= */}
        <div
          className="orbital-ring-container"
          style={{
            position: 'absolute',
            inset: '0',
            transform: 'translateZ(10px)',
            pointerEvents: 'none',
          }}
        >
          <svg
            viewBox="0 0 500 550"
            className="orbital-ring-svg anim-spin-slow"
            style={{ width: '100%', height: '100%', overflow: 'visible' }}
          >
            <circle
              cx="250"
              cy="275"
              r="210"
              fill="none"
              stroke="#3E6D9E"
              strokeWidth="2"
              strokeDasharray="16 24"
              opacity="0.35"
            />
            <circle
              cx="250"
              cy="275"
              r="170"
              fill="none"
              stroke="#8FACC3"
              strokeWidth="1.5"
              strokeDasharray="8 30"
              opacity="0.45"
            />
            {/* Orbital tech satellite dots */}
            <circle cx="250" cy="65" r="7" fill="#3E6D9E" filter="drop-shadow(0 0 6px #3E6D9E)" />
            <circle cx="460" cy="275" r="5" fill="#8FACC3" filter="drop-shadow(0 0 4px #8FACC3)" />
            <circle cx="90" cy="380" r="6" fill="#224D87" filter="drop-shadow(0 0 6px #224D87)" />
          </svg>
        </div>

        {/* =================================================================
            LAYER 2: 3D Vector Character Body (SVG Artwork)
            ================================================================= */}
        <div
          className="character-body-wrap anim-levitate"
          style={{
            position: 'absolute',
            inset: '0',
            transform: `translateZ(45px) translateX(${coords.x * 6}px) translateY(${coords.y * 6}px)`,
            transition: 'transform 0.15s ease-out',
          }}
        >
          <svg
            viewBox="0 0 500 550"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 20px 30px rgba(22, 59, 101, 0.18))' }}
          >
            <defs>
              <linearGradient id="charSuit" x1="160" y1="280" x2="340" y2="520" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#224D87" />
                <stop offset="60%" stop-color="#163B65" />
                <stop offset="100%" stop-color="#0F2744" />
              </linearGradient>
              <linearGradient id="charLapel" x1="200" y1="300" x2="300" y2="480" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#3E6D9E" />
                <stop offset="100%" stop-color="#224D87" />
              </linearGradient>
              <linearGradient id="charSkin" x1="210" y1="120" x2="290" y2="280" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#FFDFBA" />
                <stop offset="100%" stop-color="#F1B688" />
              </linearGradient>
              <linearGradient id="charHair" x1="190" y1="80" x2="310" y2="180" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#1E293B" />
                <stop offset="100%" stop-color="#0F172A" />
              </linearGradient>
              <linearGradient id="charVisor" x1="190" y1="170" x2="310" y2="210" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#224D87" />
                <stop offset="50%" stop-color="#3E6D9E" />
                <stop offset="100%" stop-color="#8FACC3" />
              </linearGradient>
              <linearGradient id="hologramCard" x1="0" y1="0" x2="180" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.9" />
                <stop offset="100%" stop-color="#F1F5F9" stop-opacity="0.7" />
              </linearGradient>
              <filter id="glowDrop" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#3E6D9E" flood-opacity="0.25" />
              </filter>
            </defs>

            {/* --- TORSO & EXECUTIVE SUIT --- */}
            <path
              d="M170 330C150 360 130 460 120 540H380C370 460 350 360 330 330C305 310 260 305 250 305C240 305 195 310 170 330Z"
              fill="url(#charSuit)"
            />
            {/* Shirt collar */}
            <path d="M220 280L250 340L280 280C270 270 230 270 220 280Z" fill="#FFFFFF" />
            <path d="M245 320L250 480L255 320Z" stroke="#224D87" strokeWidth="4" />
            {/* Lapels */}
            <path
              d="M200 320L235 430L250 340L220 290Z"
              fill="url(#charLapel)"
              opacity="0.95"
            />
            <path
              d="M300 320L265 430L250 340L280 290Z"
              fill="url(#charLapel)"
              opacity="0.95"
            />

            {/* --- NECK --- */}
            <path d="M225 240H275V290C275 305 225 305 225 290V240Z" fill="url(#charSkin)" />

            {/* --- HEAD --- */}
            <path
              d="M200 160C200 110 220 90 250 90C280 90 300 110 300 160C300 215 285 255 250 255C215 255 200 215 200 160Z"
              fill="url(#charSkin)"
            />

            {/* --- STYLISH MODERN HAIR --- */}
            <path
              d="M190 145C185 110 205 75 250 75C295 75 315 105 312 145C305 115 290 98 250 98C215 98 198 120 190 145Z"
              fill="url(#charHair)"
            />
            <path
              d="M195 130C190 90 225 65 265 70C295 73 315 90 310 120C300 95 270 85 240 85C210 85 200 105 195 130Z"
              fill="#334155"
            />

            {/* --- TECH AR VISOR / GLASSES --- */}
            <rect
              x="205"
              y="160"
              width="90"
              height="32"
              rx="10"
              fill="url(#charVisor)"
              opacity="0.9"
              filter="url(#glowDrop)"
            />
            {/* Visor Glare & Tech HUD Lines */}
            <line x1="215" y1="170" x2="285" y2="170" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
            <line x1="215" y1="178" x2="255" y2="178" stroke="#8FACC3" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="280" cy="178" r="2.5" fill="#8FACC3" />

            {/* Confident Smile */}
            <path
              d="M236 220C242 226 258 226 264 220"
              stroke="#B45309"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Corporate Badge on Chest */}
            <rect x="175" y="380" width="34" height="48" rx="6" fill="#FFFFFF" filter="url(#glowDrop)" />
            <rect x="180" y="385" width="24" height="18" rx="3" fill="#224D87" />
            <line x1="180" y1="410" x2="204" y2="410" stroke="#3E6D9E" strokeWidth="2.5" />
            <line x1="180" y1="416" x2="198" y2="416" stroke="#94A3B8" strokeWidth="2" />
          </svg>
        </div>

        {/* =================================================================
            LAYER 3: Floating 3D Holographic UI / Talent Cards (Forefront)
            ================================================================= */}
        {/* Left Floating Hologram: Candidate Match Score */}
        <div
          className="holo-badge badge-left anim-float-alt"
          style={{
            position: 'absolute',
            top: '35%',
            left: '-6%',
            background: 'rgba(255, 255, 255, 0.94)',
            backdropFilter: 'blur(16px)',
            borderRadius: '16px',
            padding: '12px 18px',
            boxShadow: '0 12px 30px -6px rgba(22, 59, 101, 0.12)',
            border: '1.5px solid var(--color-border)',
            transform: `translateZ(85px) translateX(${coords.x * -12}px) translateY(${coords.y * -12}px)`,
            transition: 'transform 0.12s ease-out',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #224D87, #163B65)',
              color: '#FFFFFF',
              display: 'grid',
              placeItems: 'center',
              fontWeight: 800,
              fontSize: '1rem',
            }}
          >
            ⚡
          </div>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#3E6D9E', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Vetting Match
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#163B65', lineHeight: 1.1 }}>
              Top 1% IT Talent
            </div>
          </div>
        </div>

        {/* Right Floating Hologram: Cloud / Architecture Verified */}
        <div
          className="holo-badge badge-right anim-float-primary"
          style={{
            position: 'absolute',
            bottom: '22%',
            right: '-8%',
            background: 'rgba(255, 255, 255, 0.94)',
            backdropFilter: 'blur(16px)',
            borderRadius: '16px',
            padding: '12px 18px',
            boxShadow: '0 12px 30px -6px rgba(22, 59, 101, 0.12)',
            border: '1.5px solid var(--color-border)',
            transform: `translateZ(95px) translateX(${coords.x * -16}px) translateY(${coords.y * -16}px)`,
            transition: 'transform 0.12s ease-out',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #3E6D9E, #224D87)',
              color: '#FFFFFF',
              display: 'grid',
              placeItems: 'center',
              fontWeight: 800,
              fontSize: '1rem',
            }}
          >
            ☁️
          </div>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#15803D', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              ● CRM
            </div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#163B65', lineHeight: 1.1 }}>
              Sales Performance
            </div>
          </div>
        </div>

        {/* Floating Holographic Tech Badges (Floating Orbiting Pills) */}
        {/* <div
          style={{
            position: 'absolute',
            top: '8%',
            right: '12%',
            background: 'linear-gradient(135deg, #224D87, #163B65)',
            color: '#FFFFFF',
            fontSize: '0.78rem',
            fontWeight: 700,
            padding: '6px 14px',
            borderRadius: '9999px',
            boxShadow: '0 8px 20px rgba(22, 59, 101, 0.25)',
            transform: `translateZ(105px) translateX(${coords.x * -8}px)`,
            transition: 'transform 0.12s ease-out',
            zIndex: 12,
          }}
        >
          &lt;/&gt; DevOps & Full-Stack
        </div> */}
      </div>
    </div>
  )
}
