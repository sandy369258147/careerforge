import { useState, useRef } from 'react'

export default function CandidateHero3D({ className = '' }) {
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

  const rotX = isHovered ? coords.y * -12 : 0
  const rotY = isHovered ? coords.x * 14 : 0

  return (
    <div
      ref={containerRef}
      className={`candidate-character-3d-root ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setCoords({ x: 0, y: 0 })
      }}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '440px',
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
          aspectRatio: '1 / 1.05',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Ambient Glow */}
        <div
          style={{
            position: 'absolute',
            inset: '12%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34, 77, 135, 0.22) 0%, rgba(62, 109, 158, 0.08) 50%, transparent 70%)',
            filter: 'blur(30px)',
            transform: 'translateZ(-20px)',
          }}
        />

        {/* 3D Character Vector Artwork */}
        <div
          className="anim-levitate"
          style={{
            position: 'absolute',
            inset: 0,
            transform: `translateZ(40px) translateX(${coords.x * 6}px) translateY(${coords.y * 6}px)`,
            transition: 'transform 0.15s ease-out',
          }}
        >
          <svg
            viewBox="0 0 480 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 20px 30px rgba(22, 59, 101, 0.15))' }}
          >
            <defs>
              <linearGradient id="candHoodie" x1="140" y1="280" x2="340" y2="490" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#3E6D9E" />
                <stop offset="60%" stop-color="#224D87" />
                <stop offset="100%" stop-color="#163B65" />
              </linearGradient>
              <linearGradient id="candSkin" x1="200" y1="120" x2="280" y2="270" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#FDE68A" />
                <stop offset="100%" stop-color="#F59E0B" />
              </linearGradient>
              <linearGradient id="laptopGrad" x1="120" y1="360" x2="360" y2="460" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#0F172A" />
                <stop offset="100%" stop-color="#1E293B" />
              </linearGradient>
              <linearGradient id="screenGlow" x1="150" y1="350" x2="330" y2="430" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#8FACC3" />
                <stop offset="100%" stop-color="#3E6D9E" />
              </linearGradient>
            </defs>

            {/* Torso / Tech Hoodie */}
            <path
              d="M150 340C130 370 120 450 110 500H370C360 450 350 370 330 340C300 310 260 305 240 305C220 305 180 310 150 340Z"
              fill="url(#candHoodie)"
            />

            {/* Laptop Base & Glowing Screen */}
            <path d="M140 430L340 430L360 470L120 470Z" fill="url(#laptopGrad)" />
            <rect x="155" y="340" width="170" height="100" rx="8" fill="#0F172A" stroke="#3E6D9E" strokeWidth="2.5" />
            <rect x="163" y="348" width="154" height="84" rx="4" fill="url(#screenGlow)" opacity="0.95" />
            {/* Terminal code lines on screen */}
            <line x1="172" y1="362" x2="225" y2="362" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="172" y1="374" x2="270" y2="374" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
            <line x1="184" y1="386" x2="250" y2="386" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            <line x1="172" y1="398" x2="210" y2="398" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />

            {/* Head & Neck */}
            <rect x="220" y="240" width="40" height="50" rx="10" fill="url(#candSkin)" />
            <path
              d="M195 150C195 105 215 85 240 85C265 85 285 105 285 150C285 205 270 245 240 245C210 245 195 205 195 150Z"
              fill="url(#candSkin)"
            />

            {/* Modern Hair */}
            <path
              d="M185 140C180 95 205 70 240 70C275 70 295 95 295 140C285 100 265 85 240 85C215 85 195 100 185 140Z"
              fill="#0F172A"
            />

            {/* Glowing Studio Headphones */}
            <path d="M182 155C175 155 170 162 170 175C170 188 175 195 182 195V155Z" fill="#3E6D9E" filter="drop-shadow(0 0 6px rgba(62, 109, 158, 0.4))" />
            <path d="M298 155C305 155 310 162 310 175C310 188 305 195 298 195V155Z" fill="#3E6D9E" filter="drop-shadow(0 0 6px rgba(62, 109, 158, 0.4))" />
            <path d="M180 160C180 110 210 95 240 95C270 95 300 110 300 160" stroke="#224D87" strokeWidth="6" strokeLinecap="round" fill="none" />

            {/* Eyes & Smile */}
            <circle cx="225" cy="165" r="3.5" fill="#1E293B" />
            <circle cx="255" cy="165" r="3.5" fill="#1E293B" />
            <path d="M232 190C236 195 244 195 248 190" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Floating Holographic Career Rocket Badge */}
        <div
          className="anim-float-primary"
          style={{
            position: 'absolute',
            top: '20%',
            right: '-6%',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(16px)',
            borderRadius: '16px',
            padding: '12px 16px',
            boxShadow: '0 12px 30px -6px rgba(22, 59, 101, 0.12)',
            border: '1px solid var(--color-border)',
            transform: `translateZ(90px) translateX(${coords.x * -14}px)`,
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span style={{ fontSize: '1.4rem' }}>🚀</span>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#3E6D9E', textTransform: 'uppercase' }}>
              Career Acceleration
            </div>
            <div style={{ fontSize: '1rem', fontWeight: 800, color: '#163B65' }}>
              +45% Comp Growth
            </div>
          </div>
        </div>

        {/* Floating Skill Capsule */}
        <div
          className="anim-float-alt"
          style={{
            position: 'absolute',
            bottom: '18%',
            left: '-6%',
            background: 'linear-gradient(135deg, #224D87, #163B65)',
            color: '#FFFFFF',
            borderRadius: '9999px',
            padding: '8px 18px',
            boxShadow: '0 10px 24px rgba(22, 59, 101, 0.25)',
            transform: `translateZ(80px) translateX(${coords.x * 12}px)`,
            zIndex: 10,
            fontSize: '0.85rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#15803D', boxShadow: '0 0 8px #15803D' }} />
          Verified High-Impact Role
        </div>
      </div>
    </div>
  )
}
