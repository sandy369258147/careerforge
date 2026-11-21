import logoTransparent from '../assets/logo/carrerforge-logo-transparent.png'
import logoLight from '../assets/logo/carrerforge-logo-light.png'
import shieldImg from '../assets/logo/carrerforge-shield.png'

export default function BrandLogo({
  size = 'default',
  light = false,
  symbolOnly = false,
  className = '',
}) {
  const isLarge = size === 'large'
  const isSmall = size === 'small'

  // Height sizing
  const logoHeight = isLarge ? 58 : isSmall ? 40 : 48
  const shieldHeight = isLarge ? 48 : isSmall ? 32 : 40

  if (symbolOnly) {
    return (
      <div
        className={`brand-symbol ${className}`}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          transition: 'transform 0.25s ease',
        }}
      >
        <img
          src={shieldImg}
          alt="CarrerForge Shield"
          style={{
            height: `${shieldHeight}px`,
            width: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 10px rgba(19, 68, 143, 0.25))',
          }}
        />
      </div>
    )
  }

  return (
    <div
      className={`brand-logo-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        lineHeight: 1,
      }}
    >
      <img
        src={light ? logoLight : logoTransparent}
        alt="CarrerForge Consulting - Transforming Potential into Performance"
        className="brand-logo-img"
        style={{
          height: `${logoHeight}px`,
          width: 'auto',
          maxWidth: '260px',
          objectFit: 'contain',
          display: 'block',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
    </div>
  )
}
