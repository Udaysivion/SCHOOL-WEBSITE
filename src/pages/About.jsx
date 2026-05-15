import { Link } from 'react-router-dom'
import { Brain, Heart, Award, Users, Shield, Star, CheckCircle, ArrowRight } from 'lucide-react'
import './About.css'

const team = [
  { name: 'Dr. Rachel Adams', role: 'Clinical Director, BCBA-D', initials: 'RA', color: '#2563EB', exp: '20 yrs', spec: 'ABA & Autism Spectrum' },
  { name: 'Michael Torres', role: 'Lead Speech Pathologist, CCC-SLP', initials: 'MT', color: '#7C3AED', exp: '14 yrs', spec: 'AAC & Language Development' },
  { name: 'Dr. Priya Sharma', role: 'Occupational Therapist, OTD', initials: 'PS', color: '#0D9488', exp: '12 yrs', spec: 'Sensory Integration' },
  { name: 'James O\'Brien', role: 'Behaviour Analyst, BCBA', initials: 'JO', color: '#F59E0B', exp: '10 yrs', spec: 'Challenging Behaviour' },
  { name: 'Dr. Lisa Chen', role: 'Child Psychologist, PhD', initials: 'LC', color: '#E11D48', exp: '16 yrs', spec: 'Developmental Assessment' },
  { name: 'Aisha Williams', role: 'Special Education Teacher, M.Ed.', initials: 'AW', color: '#10B981', exp: '9 yrs', spec: 'Inclusive Learning' },
]

const values = [
  { icon: <Heart size={24} />, title: 'Compassion', desc: 'Every interaction is guided by empathy, respect and a genuine love for children.' },
  { icon: <Shield size={24} />, title: 'Integrity', desc: 'We are transparent, honest and accountable to every family we serve.' },
  { icon: <Award size={24} />, title: 'Excellence', desc: 'We hold ourselves to the highest clinical and ethical standards in everything we do.' },
  { icon: <Users size={24} />, title: 'Collaboration', desc: 'Families, educators and clinicians working as one unified team.' },
]

const milestones = [
  { year: '2009', event: 'BrightPath founded with 3 therapists and 12 children' },
  { year: '2013', event: 'CARF International Accreditation achieved' },
  { year: '2016', event: 'Expanded to full-day school programme' },
  { year: '2019', event: 'Opened second campus & telehealth services' },
  { year: '2022', event: 'Launched parent training & community outreach' },
  { year: '2024', event: '500+ children supported, 40+ specialist team' },
]

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__orb about-hero__orb--1" />
        <div className="about-hero__orb about-hero__orb--2" />
        <div className="container about-hero__inner">
          <div className="badge badge-accent">About BrightPath</div>
          <h1 className="about-hero__title">
            Our Mission: <span className="gradient-text">Every Child,<br />Every Possibility</span>
          </h1>
          <p className="about-hero__subtitle">
            Founded in 2009, BrightPath Behavioural School was built on a simple belief — that every child, regardless of their challenges, deserves the chance to grow, connect and thrive. Today we are a team of 40+ specialists united by that mission.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section about-mission">
        <div className="container about-mission__grid">
          <div className="about-mission__card">
            <div className="about-mission__icon" style={{ background: 'linear-gradient(135deg,#2563EB,#7C3AED)' }}><Brain size={28} /></div>
            <h3>Our Mission</h3>
            <p>To provide evidence-based, compassionate behavioural and therapeutic services that empower children with diverse needs to reach their fullest potential — in school, at home, and in life.</p>
          </div>
          <div className="about-mission__card">
            <div className="about-mission__icon" style={{ background: 'linear-gradient(135deg,#0D9488,#2563EB)' }}><Star size={28} /></div>
            <h3>Our Vision</h3>
            <p>A world where every child is understood, celebrated and given the tools they need to live a meaningful, connected and independent life — and where families never feel alone on that journey.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <div className="section-eyebrow"><Heart size={13} /> What We Stand For</div>
            <h2 className="section-title">Our Core <span className="highlight">Values</span></h2>
          </div>
          <div className="about-values__grid">
            {values.map((v, i) => (
              <div key={i} className="about-value-card">
                <div className="about-value-card__icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section about-timeline">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <div className="section-eyebrow"><Award size={13} /> Our Journey</div>
            <h2 className="section-title">15 Years of <span className="highlight">Growth</span></h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={i} className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}>
                <div className="timeline__content">
                  <div className="timeline__year">{m.year}</div>
                  <p className="timeline__event">{m.event}</p>
                </div>
                <div className="timeline__dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section about-team">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <div className="section-eyebrow"><Users size={13} /> Meet the Team</div>
            <h2 className="section-title">Expert Specialists, <span className="highlight">Genuine Hearts</span></h2>
          </div>
          <div className="team-grid">
            {team.map((t, i) => (
              <div key={i} className="team-card">
                <div className="team-card__avatar" style={{ background: t.color }}>{t.initials}</div>
                <h4 className="team-card__name">{t.name}</h4>
                <p className="team-card__role">{t.role}</p>
                <div className="team-card__tags">
                  <span>{t.exp} exp.</span>
                  <span>{t.spec}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section about-cta">
        <div className="container text-center">
          <h2 className="section-title">Come Meet Us <span className="highlight">In Person</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto 36px' }}>Schedule a free tour and see our warm, purpose-built facility — and meet the team who will support your child.</p>
          <Link to="/contact" className="btn btn-primary">Book a Free Tour <ArrowRight size={17} /></Link>
        </div>
      </section>
    </div>
  )
}
