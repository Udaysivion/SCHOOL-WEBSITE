import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Brain, ChevronDown } from 'lucide-react'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/programs', label: 'Programs' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <Brain size={22} />
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">BrightPath</span>
            <span className="navbar__logo-sub">Behavioural School</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="navbar__cta">
          <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '0.88rem' }}>
            Book a Tour
          </Link>
          <button
            className="navbar__burger"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${open ? 'navbar__mobile--open' : ''}`}>
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) => `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`}
          >
            {l.label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn btn-primary" style={{ marginTop: '8px', justifyContent: 'center' }}>
          Book a Tour
        </Link>
      </div>
    </header>
  )
}
