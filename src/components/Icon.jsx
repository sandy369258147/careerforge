import { icons } from '../assets/index.js'

// Renders an SVG file from src/assets/icons as a CSS mask so it inherits the text color.
export default function Icon({ name, size = 20, className = '' }) {
  const url = icons[name]
  return (
    <span
      aria-hidden="true"
      className={`icon ${className}`}
      style={{ width: size, height: size, WebkitMaskImage: `url(${url})`, maskImage: `url(${url})` }}
    />
  )
}
