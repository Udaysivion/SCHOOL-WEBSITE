import { Link } from 'react-router-dom'
import { Brain, Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__glow footer__glow--left" />
      <div className="footer__glow footer__glow--right" />

      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <div className="footer__logo-icon"><Brain size={20} /></div>
            <div>
              <div className="footer__logo-name">BrightPath</div>
              <div className="footer__logo-sub">Behavioural School</div>
            </div>
          </Link>
          <p className="footer__tagline">
            Empowering every child through evidence-based behavioural therapy, compassionate care, and individualised learning pathways.
          </p>
          <div className="footer__socials">
            <a href="#" aria-label="Facebook" className="footer__social"><Facebook size={18} /></a>
            <a href="#" aria-label="Instagram" className="footer__social"><Instagram size={18} /></a>
            <a href="#" aria-label="YouTube" className="footer__social"><Youtube size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__list">
            {[['/', 'Home'], ['/about', 'About Us'], ['/programs', 'Our Programs'], ['/admissions', 'Admissions'], ['/contact', 'Contact']].map(([to, label]) => (
              <li key={to}><Link to={to} className="footer__link"><ArrowRight size={13} />{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div className="footer__col">
          <h4 className="footer__heading">Programs</h4>
          <ul className="footer__list">
            {['ABA Therapy', 'Speech & Language', 'Occupational Therapy', 'Social Skills', 'Early Intervention', 'Parent Training'].map(p => (
              <li key={p}><span className="footer__link footer__link--plain"><ArrowRight size={13} />{p}</span></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__heading">Get in Touch</h4>
          <ul className="footer__contact-list">
            <li><Phone size={16} /><span>+1 (800) 555-0199</span></li>
            <li><Mail size={16} /><a href="mailto:hello@brightpathschool.edu">hello@brightpathschool.edu</a></li>
            <li><MapPin size={16} /><span>123 Learning Lane, Springfield, IL 62701</span></li>
          </ul>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: '20px', fontSize: '0.85rem', padding: '10px 20px' }}>
            Book a Free Consultation
          </Link>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} BrightPath Behavioural School. All rights reserved.</span>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
