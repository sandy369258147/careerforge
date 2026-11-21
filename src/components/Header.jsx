import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, company } from '../data/content.js'
import BrandLogo from './BrandLogo.jsx'
import Icon from './Icon.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const location = useLocation()

  // Close mobile popover on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Track scroll for dynamic island compression
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="dynamic-island-header" ref={navRef}>
      <div className={`dynamic-island-navbar ${scrolled ? 'is-condensed' : ''}`}>
        {/* Brand Logo */}
        <Link to="/" className="island-brand" onClick={close} aria-label="Careerforge Consulting home">
          <BrandLogo size="default" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="island-desktop-nav" aria-label="Main Navigation">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) => `island-nav-link ${isActive ? 'is-active' : ''}`}
            >
              <span>{n.label}</span>
              <span className="island-nav-indicator" />
            </NavLink>
          ))}
        </nav>

        {/* Right Action CTA */}
        <div className="island-actions">
          <Link to="/book-a-demo" className="btn btn-primary island-cta-btn">
            <span className="live-pulse-dot" />
            <span>Get Consultation</span>
            <Icon name="arrow-right" size={15} />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className={`island-menu-toggle ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-popover-nav"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Navigation Menu"
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>

        {/* =================================================================
            MOBILE RESPONSIVE: POP NAV LIST AT TOP RIGHT
            ================================================================= */}
        {open && (
          <div
            id="mobile-popover-nav"
            className="mobile-popover-card anim-pop-top-right"
            role="dialog"
            aria-modal="true"
          >
            <div className="popover-header">
              <span className="popover-title">Navigation</span>
              <button
                className="popover-close-btn"
                onClick={close}
                aria-label="Close menu"
              >
                <Icon name="close" size={16} />
              </button>
            </div>

            <nav className="popover-nav-list">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === '/'}
                  onClick={close}
                  className={({ isActive }) => `popover-nav-item ${isActive ? 'active' : ''}`}
                >
                  <span>{n.label}</span>
                  <Icon name="arrow-right" size={14} className="popover-arrow" />
                </NavLink>
              ))}
            </nav>

            <div className="popover-footer">
              <Link to="/book-a-demo" className="btn btn-primary" style={{ width: '100%', padding: '0.7em' }} onClick={close}>
                <span>Get Consultation</span>
                <Icon name="arrow-right" size={15} />
              </Link>
              <a href={`tel:${company.phoneHref}`} className="popover-call-link" onClick={close}>
                <Icon name="phone" size={16} />
                <span>{company.phone}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
