import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react'
import './Contact.css'

const contactInfo = [
  { icon: <Phone size={22} />, label: 'Phone', value: '+1 (800) 555-0199', href: 'tel:+18005550199', color: '#2563EB' },
  { icon: <Mail size={22} />, label: 'Email', value: 'hello@brightpathschool.edu', href: 'mailto:hello@brightpathschool.edu', color: '#7C3AED' },
  { icon: <MapPin size={22} />, label: 'Address', value: '123 Learning Lane, Springfield, IL 62701', href: '#', color: '#0D9488' },
  { icon: <Clock size={22} />, label: 'Hours', value: 'Mon–Fri: 8am–6pm | Sat: 9am–1pm', href: null, color: '#F59E0B' },
]

const services = [
  'ABA Therapy', 'Speech & Language Therapy', 'Occupational Therapy',
  'Early Intervention', 'Social Skills Groups', 'Parent Training', 'General Enquiry',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', child_age: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1500)
  }

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero__orb contact-hero__orb--1" />
        <div className="contact-hero__orb contact-hero__orb--2" />
        <div className="container contact-hero__inner">
          <div className="badge badge-primary">Get in Touch</div>
          <h1 className="contact-hero__title">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h1>
          <p className="contact-hero__subtitle">
            Have questions? Ready to enrol? We respond to every message within 24 hours — usually much sooner. We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section contact-main">
        <div className="container contact-main__grid">
          {/* Info */}
          <div className="contact-info">
            <h2 className="contact-info__title">How to Reach Us</h2>
            <p className="contact-info__sub">Our team is available Monday through Saturday. For urgent matters, please call us directly.</p>

            <div className="contact-info__cards">
              {contactInfo.map((c, i) => (
                <div key={i} className="contact-info__card">
                  <div className="contact-info__icon" style={{ background: c.color + '22', border: `1px solid ${c.color}44`, color: c.color }}>{c.icon}</div>
                  <div>
                    <div className="contact-info__label">{c.label}</div>
                    {c.href && c.href !== '#'
                      ? <a href={c.href} className="contact-info__value">{c.value}</a>
                      : <div className="contact-info__value">{c.value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="contact-map">
              <div className="contact-map__inner">
                <MapPin size={32} style={{ color: '#3B82F6', marginBottom: '8px' }} />
                <p style={{ color: '#94A3B8', fontSize: '0.85rem' }}>123 Learning Lane, Springfield, IL 62701</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ marginTop: '16px', fontSize: '0.82rem', padding: '10px 18px' }}
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success__icon"><CheckCircle size={48} /></div>
                <h3>Message Received!</h3>
                <p>Thank you for reaching out. A member of our admissions team will contact you within 24 hours.</p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)}>Send Another Message</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2 className="contact-form__title">Send Us a Message</h2>
                <p className="contact-form__sub">Fill out the form and we'll get back to you shortly.</p>

                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="name">Your Name *</label>
                    <input id="name" name="name" type="text" required placeholder="Jane Smith" value={form.name} onChange={handleChange} />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" required placeholder="jane@email.com" value={form.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__field">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="child_age">Child's Age</label>
                    <input id="child_age" name="child_age" type="text" placeholder="e.g. 5 years" value={form.child_age} onChange={handleChange} />
                  </div>
                </div>

                <div className="contact-form__field">
                  <label htmlFor="service">Area of Interest</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a programme or topic…</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="contact-form__field">
                  <label htmlFor="message">Your Message *</label>
                  <textarea id="message" name="message" rows={5} required placeholder="Tell us a bit about your child and what you're looking for…" value={form.message} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary contact-form__submit" disabled={loading}>
                  {loading ? <span className="contact-form__spinner" /> : <Send size={17} />}
                  {loading ? 'Sending…' : 'Send Message'}
                </button>

                <p className="contact-form__privacy">
                  <CheckCircle size={13} /> Your information is secure and will never be shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
