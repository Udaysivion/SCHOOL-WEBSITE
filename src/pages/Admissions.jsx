import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, FileText, Users, MessageCircle, Calendar, Phone } from 'lucide-react'
import './Admissions.css'

const steps = [
  { num: '01', icon: <Phone size={24} />, title: 'Initial Enquiry', desc: 'Call us or submit the online form. Our admissions team will reach out within 24 hours to answer your questions and guide you through the process.' },
  { num: '02', icon: <MessageCircle size={24} />, title: 'Discovery Call', desc: "A 30-minute call with our intake coordinator to understand your child's needs, current challenges, and what you hope to achieve together." },
  { num: '03', icon: <FileText size={24} />, title: 'Comprehensive Assessment', desc: 'Our multidisciplinary team conducts a thorough evaluation covering behaviour, communication, sensory needs and developmental milestones.' },
  { num: '04', icon: <Users size={24} />, title: 'Programme Design', desc: "We create a fully personalised treatment plan and programme recommendations tailored specifically to your child's unique profile." },
  { num: '05', icon: <Calendar size={24} />, title: 'Enrolment & Start', desc: "Once you're happy with the plan, we finalise funding, schedule sessions, and welcome your child into the BrightPath family." },
]

const faqs = [
  { q: 'What ages do you support?', a: 'We support children aged 18 months to 18 years across all our programmes, with specialist early intervention for ages 18m–5 years.' },
  { q: 'Does insurance or Medicaid cover services?', a: 'Yes. We accept most major insurance plans, Medicaid, and state-funded waivers. Our billing team will verify your benefits before enrolment at no cost to you.' },
  { q: 'How long does the assessment process take?', a: 'The assessment is typically completed within 1–2 weeks of your discovery call, depending on availability. We aim to keep the process as quick and stress-free as possible.' },
  { q: 'Can parents observe therapy sessions?', a: 'Absolutely. We encourage parent observation and active involvement. We also run structured parent coaching alongside your child\'s programme.' },
  { q: 'What if my child has multiple diagnoses?', a: 'We specialise in complex, co-occurring needs. Our multidisciplinary team collaborates across disciplines to create a cohesive, integrated plan for each child.' },
  { q: 'Do you offer telehealth sessions?', a: 'Yes. We offer telehealth for parent training, behaviour consultations and certain speech therapy sessions. Ask our team about availability.' },
  { q: 'Is there a waiting list?', a: 'We work hard to minimise wait times. After your assessment, most children begin their programme within 2–4 weeks. Contact us for current availability.' },
  { q: 'Do you provide a written report after assessment?', a: 'Yes. Every family receives a comprehensive written assessment report with findings, recommendations, and the proposed treatment plan.' },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button className="faq-item__q" onClick={() => setOpen(o => !o)}>
        {q}
        <span className="faq-item__icon">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="faq-item__a">{a}</p>}
    </div>
  )
}

const funding = [
  { title: 'Private Insurance', desc: 'We are in-network with most major providers. Our team handles pre-authorisation and billing on your behalf.' },
  { title: 'Medicaid / CHIP', desc: 'We accept Medicaid and Children\'s Health Insurance Program funding for eligible families.' },
  { title: 'State Waivers', desc: 'We work with developmental disability waivers and state-funded programmes across our service area.' },
  { title: 'Private Pay', desc: 'Flexible self-pay options and sliding-scale fees are available. Contact us to discuss your situation.' },
]

export default function Admissions() {
  return (
    <div className="admissions-page">
      {/* Hero */}
      <section className="adm-hero">
        <div className="adm-hero__orb adm-hero__orb--1" />
        <div className="adm-hero__orb adm-hero__orb--2" />
        <div className="container adm-hero__inner">
          <div className="badge badge-warm">Admissions</div>
          <h1 className="adm-hero__title">
            Starting Your Child's Journey is <span className="gradient-text">Simpler Than You Think</span>
          </h1>
          <p className="adm-hero__subtitle">
            Our welcoming admissions process is designed to be clear, compassionate, and stress-free. We're here to guide you every step of the way.
          </p>
          <div className="adm-hero__badges">
            {['No Waitlist Fees', 'Free Assessment', 'Insurance Accepted', 'Same-Week Response'].map(b => (
              <div key={b} className="adm-hero__badge-item"><CheckCircle size={15} />{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section adm-steps">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <div className="section-eyebrow">The Process</div>
            <h2 className="section-title">5 Simple <span className="highlight">Steps to Enrolment</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>A clear, supportive pathway from your first call to your child's first session.</p>
          </div>
          <div className="adm-steps__list">
            {steps.map((s, i) => (
              <div key={i} className="adm-step">
                <div className="adm-step__num">{s.num}</div>
                <div className="adm-step__card">
                  <div className="adm-step__icon">{s.icon}</div>
                  <h3 className="adm-step__title">{s.title}</h3>
                  <p className="adm-step__desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding */}
      <section className="section adm-funding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <div className="section-eyebrow">Funding Options</div>
            <h2 className="section-title">We Help You <span className="highlight">Navigate the Costs</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Financial barriers should never stand between a child and the support they need. We accept multiple funding types and our billing team handles the paperwork.
            </p>
          </div>
          <div className="adm-funding__grid">
            {funding.map((f, i) => (
              <div key={i} className="adm-funding__card">
                <div className="adm-funding__num">{String(i + 1).padStart(2, '0')}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="adm-funding__note">
            <CheckCircle size={18} style={{ color: '#10B981', flexShrink: 0 }} />
            <p>Not sure what you're eligible for? Call our team — we'll check your benefits for free before you commit to anything.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section adm-faq">
        <div className="container adm-faq__inner">
          <div className="adm-faq__left">
            <div className="section-eyebrow">FAQs</div>
            <h2 className="section-title">Common <span className="highlight">Questions</span></h2>
            <p className="section-subtitle">Can't find your answer? Our team is a phone call away.</p>
            <a href="tel:+18005550199" className="btn btn-primary" style={{ marginTop: '28px' }}>
              <Phone size={16} /> Call Us Now
            </a>
          </div>
          <div className="adm-faq__list">
            {faqs.map((f, i) => <FaqItem key={i} {...f} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section adm-cta text-center">
        <div className="container">
          <h2 className="section-title">Ready to Take the First Step? <span className="highlight">We're Ready Too.</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto 36px' }}>
            Contact our admissions team today — there's no obligation, no pressure, just genuine support.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Start Enquiry <ArrowRight size={17} /></Link>
            <a href="tel:+18005550199" className="btn btn-secondary"><Phone size={16} /> Call: +1 800 555 0199</a>
          </div>
        </div>
      </section>
    </div>
  )
}
