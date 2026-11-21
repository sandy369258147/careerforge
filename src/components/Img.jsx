import { useState } from 'react'
import { asset } from '../assets/index.js'
import { manifest } from '../assets/manifest.js'

export default function Img({ name, alt, className = '', ...rest }) {
  const [loaded, setLoaded] = useState(false)
  const key = typeof name === 'object' && name ? name.key : name
  const src = asset(key)
  const resolvedAlt = alt ?? manifest[key]?.alt ?? 'Careerforge Consulting Asset'

  return (
    <div
      className={`img-frame ${className} ${loaded ? 'is-loaded' : 'is-loading'}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(34, 77, 135, 0.04), rgba(62, 109, 158, 0.06))',
      }}
    >
      <img
        src={src}
        alt={resolvedAlt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          opacity: loaded ? 1 : 0.8,
          transition: 'opacity 0.4s ease, transform 0.5s ease',
        }}
        {...rest}
      />
    </div>
  )
}
