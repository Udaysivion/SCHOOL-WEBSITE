import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Brain, Heart, Star, Users, Award, Shield, CheckCircle,
  ArrowRight, ChevronRight, Sparkles, BookOpen, MessageCircle,
  TrendingUp, Clock, Phone, Play, Smile, Sun, Zap, Rainbow,
  HeartHandshake, GraduationCap, Baby, Music, Palette, Target
} from 'lucide-react'
import './Home.css'

/* ── Reveal on scroll ── */
function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return ref
}

/* ── Animated Counter ── */
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null); const started = useRef(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        let v = 0; const step = target / (1800 / 16)
        const t = setInterval(() => { v = Math.min(v + step, target); setCount(Math.floor(v)); if (v >= target) clearInterval(t) }, 16)
      }
    }, { threshold: 0.5 })
    obs.observe(el); return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{count}{suffix}</span>
}

/* ── Data ── */
const stats = [
  { value: 500, suffix: '+', label: 'Children Supported', icon: <Users size={22} />, color: '#2563EB' },
  { value: 15, suffix: '+', label: 'Years of Excellence', icon: <Award size={22} />, color: '#7C3AED' },
  { value: 98, suffix: '%', label: 'Parent Satisfaction', icon: <Heart size={22} />, color: '#E11D48' },
  { value: 40, suffix: '+', label: 'Certified Specialists', icon: <Brain size={22} />, color: '#0D9488' },
]

const programs = [
  { icon: <Brain size={28} />, color: 'blue', title: 'ABA Therapy', desc: 'Evidence-based Applied Behaviour Analysis tailored to each child\'s unique learning profile.', tags: ['Evidence-based', 'Personalised'] },
  { icon: <MessageCircle size={28} />, color: 'purple', title: 'Speech & Language', desc: 'Helping children find their voice and build communication skills with confidence.', tags: ['Communication', 'Social Skills'] },
  { icon: <BookOpen size={28} />, color: 'teal', title: 'Early Intervention', desc: 'Targeted support for children aged 18 months to 5 years during the critical window.', tags: ['Ages 18m–5yr', 'Developmental'] },
  { icon: <TrendingUp size={28} />, color: 'warm', title: 'Occupational Therapy', desc: 'Building everyday life skills, sensory processing and fine motor abilities.', tags: ['Sensory', 'Life Skills'] },
  { icon: <Users size={28} />, color: 'rose', title: 'Social Skills Groups', desc: 'Fun, structured groups where children learn the art of friendship and belonging.', tags: ['Friendship', 'Emotion Regulation'] },
  { icon: <Heart size={28} />, color: 'emerald', title: 'Parent Training', desc: 'Empowering families with the same strategies our clinicians use every day.', tags: ['Family Support', 'Home Strategies'] },
]

const forChildren = [
  { icon: <Palette size={28} />, title: 'Fun & Play-Based Learning', desc: 'Therapy that feels like play! We use games, art, music and movement to make every session exciting and engaging.' },
  { icon: <Sun size={28} />, title: 'Bright, Sensory-Friendly Spaces', desc: 'Our specially designed rooms are colourful, calm and created to help children feel safe, happy and ready to learn.' },
  { icon: <Music size={28} />, title: 'Creative Therapy Activities', desc: 'From music therapy to role play, we use creative approaches that spark joy and build real-world skills.' },
  { icon: <Smile size={28} />, title: 'Celebrating Every Win', desc: 'Every milestone matters — big or small. We celebrate every achievement with enthusiasm and pride.' },
]

const forParents = [
  { icon: <HeartHandshake size={28} />, title: 'You Are Part of the Team', desc: 'We keep you fully informed and involved — regular updates, parent coaching and open communication always.' },
  { icon: <Shield size={28} />, title: 'Evidence-Based & Accountable', desc: 'Every decision is backed by peer-reviewed research. We track progress with data and adjust plans in real time.' },
  { icon: <Clock size={28} />, title: 'Flexible Around Your Life', desc: 'Morning, afternoon and weekend sessions. Telehealth options available. We work around your family\'s schedule.' },
  { icon: <GraduationCap size={28} />, title: 'Accredited & Fully Licensed', desc: 'CARF accredited facility. All clinicians are licensed and hold the highest certifications in their field.' },
]

const testimonials = [
  { name: 'Sarah M.', role: 'Parent of Ethan, age 6', text: 'BrightPath completely transformed our lives. Within 6 months, Ethan went from non-verbal to holding full conversations. The team genuinely cares — they feel like extended family.', rating: 5, avatar: 'SM', color: '#2563EB' },
  { name: 'James & Priya K.', role: 'Parents of Aanya, age 4', text: 'The early intervention programme gave our daughter the foundation she needed. The therapists are exceptional — warm, patient and incredibly skilled. We see progress every single week.', rating: 5, avatar: 'JP', color: '#7C3AED' },
  { name: 'Marcus T.', role: 'Parent of Leo, age 8', text: "We tried several centres before BrightPath. The difference is night and day. It's structured, compassionate, and truly individualised. Leo actually looks forward to going — that tells you everything.", rating: 5, avatar: 'MT', color: '#0D9488' },
  { name: 'Anita & David R.', role: 'Parents of Maya, age 5', text: 'From day one we felt supported, listened to and respected. The progress reports are detailed and the parent coaching has made a huge difference at home too. Truly exceptional care.', rating: 5, avatar: 'AD', color: '#F59E0B' },
]

const childActivities = [
  { emoji: '🎨', label: 'Art Therapy' },
  { emoji: '🎵', label: 'Music & Movement' },
  { emoji: '🧩', label: 'Puzzle Play' },
  { emoji: '📚', label: 'Story Time' },
  { emoji: '🌱', label: 'Sensory Garden' },
  { emoji: '🏃', label: 'Motor Skills' },
  { emoji: '🤝', label: 'Friendship Groups' },
  { emoji: '🎭', label: 'Role Play' },
  { emoji: '🧠', label: 'Brain Games' },
  { emoji: '⭐', label: 'Star Chart Rewards' },
]

const accreditations = [
  'CARF International Accredited',
  'BCBA Board Certified Clinicians',
  'Medicaid & Insurance Accepted',
  'State-Licensed Facility',
  'Evidence-Based Practice Standards',
  'HIPAA Compliant & Secure',
]

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const statsRef = useReveal()
  const programsRef = useReveal()
  const childRef = useReveal()
  const parentRef = useReveal()
  const testRef = useReveal()
  const ctaRef = useReveal()

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="home">

      {/* ══════════ HERO ══════════ */}
      <section className="hero">
        <div className="hero__orb hero__orb--blue" />
        <div className="hero__orb hero__orb--purple" />
        <div className="hero__orb hero__orb--teal" />
        <div className="hero__grid" />

        <div className="container hero__inner">
          <div className="hero__content">
            <div className="hero__badges-row">
              <div className="badge badge-primary"><Sparkles size={12} /> Award-Winning</div>
              <div className="badge badge-teal"><Shield size={12} /> CARF Accredited</div>
            </div>
            <h1 className="hero__title">
              Where Every Child
              <span className="hero__title-highlight"> Discovers Their</span>
              <span className="hero__title-sub"> Superpower ✨</span>
            </h1>
            <p className="hero__subtitle">
              BrightPath is a leading behavioural school offering expert ABA therapy, speech therapy, occupational therapy and early intervention — in a warm, fun environment children love.
            </p>
            <div className="hero__actions">
              <Link to="/programs" className="btn btn-primary hero__btn-main">
                Explore Programs <ArrowRight size={17} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Book Free Tour 🏫
              </Link>
            </div>
            <div className="hero__trust">
              {['BCBA Certified', 'CARF Accredited', 'Insurance Accepted', '500+ Families Served'].map(t => (
                <div key={t} className="hero__trust-item">
                  <CheckCircle size={14} style={{ color: '#10B981' }} /> {t}
                </div>
              ))}
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__circle" />
            <div className="hero__circle hero__circle--2" />
            <div className="hero__circle hero__circle--3" />

            <div className="hero__card-main">
              <div className="hero__card-emoji">🌟</div>
              <div>
                <span className="hero__card-num">500+</span>
                <span className="hero__card-label">Children Thriving</span>
              </div>
            </div>

            <div className="hero__activity-ring">
              {childActivities.slice(0, 6).map((a, i) => (
                <div key={i} className="hero__activity-item" style={{ '--i': i, '--total': 6 }}>
                  <div className="hero__activity-bubble">
                    <span>{a.emoji}</span>
                    <span className="hero__activity-label">{a.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="hero__float hero__float--1">
              <Heart size={16} style={{ color: '#E11D48' }} />
              <span>Family-Centred</span>
            </div>
            <div className="hero__float hero__float--2">
              <Award size={16} style={{ color: '#F59E0B' }} />
              <span>15+ Years</span>
            </div>
            <div className="hero__float hero__float--3">
              <Star size={16} fill="#A78BFA" color="#A78BFA" />
              <span>98% Satisfaction</span>
            </div>
          </div>
        </div>

        <div className="hero__scroll"><div className="hero__scroll-dot" /></div>
      </section>

      {/* ══════════ ACTIVITY TICKER ══════════ */}
      <div className="activity-ticker">
        <div className="activity-ticker__track">
          {[...childActivities, ...childActivities].map((a, i) => (
            <div key={i} className="activity-ticker__item">
              <span>{a.emoji}</span> {a.label}
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ STATS ══════════ */}
      <section className="stats-bar">
        <div className="container stats-bar__inner reveal" ref={statsRef}>
          {stats.map((s, i) => (
            <div key={i} className="stats-bar__item">
              <div className="stats-bar__icon" style={{ background: s.color + '22', border: `1px solid ${s.color}44`, color: s.color }}>{s.icon}</div>
              <div className="stats-bar__value"><Counter target={s.value} suffix={s.suffix} /></div>
              <div className="stats-bar__label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ PROGRAMS ══════════ */}
      <section className="section home-programs">
        <div className="container">
          <div className="section-header text-center reveal" ref={programsRef}>
            <div className="section-eyebrow"><Sparkles size={13} /> Our Specialisations</div>
            <h2 className="section-title">
              Programmes Built Around<br /><span className="highlight">Your Child's Unique Needs</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Our multidisciplinary team designs individualised programmes that nurture growth, build confidence and celebrate every milestone.
            </p>
          </div>

          <div className="programs-grid">
            {programs.map((p, i) => (
              <div key={i} className={`program-card program-card--${p.color} reveal`} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="program-card__icon">{p.icon}</div>
                <h3 className="program-card__title">{p.title}</h3>
                <p className="program-card__desc">{p.desc}</p>
                <div className="program-card__tags">
                  {p.tags.map(t => <span key={t} className="program-card__tag">{t}</span>)}
                </div>
                <Link to="/programs" className="program-card__link">
                  Learn More <ChevronRight size={15} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '48px' }}>
            <Link to="/programs" className="btn btn-primary">View All Programs <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      {/* ══════════ FOR CHILDREN ══════════ */}
      <section className="section home-children">
        <div className="home-children__bg" />
        <div className="container">
          <div className="section-header text-center reveal" ref={childRef}>
            <div className="section-eyebrow" style={{ color: '#F59E0B' }}><Smile size={13} /> For Your Child</div>
            <h2 className="section-title">A Place Kids <span className="highlight-warm">Actually Love 🎉</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              We believe therapy should be joyful. Our child-centred environment turns every session into an adventure — so children are excited to come back.
            </p>
          </div>

          <div className="children-grid">
            {forChildren.map((c, i) => (
              <div key={i} className="children-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="children-card__icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Activity Bubbles */}
          <div className="activities-showcase reveal">
            <div className="activities-showcase__title">What We Do Together</div>
            <div className="activities-showcase__grid">
              {childActivities.map((a, i) => (
                <div key={i} className="activity-bubble-card">
                  <span className="activity-bubble-card__emoji">{a.emoji}</span>
                  <span className="activity-bubble-card__label">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FOR PARENTS ══════════ */}
      <section className="section home-parents">
        <div className="container home-parents__inner">
          <div className="home-parents__left reveal-left" ref={parentRef}>
            <div className="section-eyebrow"><HeartHandshake size={13} /> For Parents</div>
            <h2 className="section-title">
              You Can <span className="highlight">Trust Us</span><br />With Your Child
            </h2>
            <p className="section-subtitle">
              We know how much courage it takes to reach out for help. We honour that trust with transparency, compassion and results you can see.
            </p>
            <div className="home-parents__accred">
              {accreditations.map((a, i) => (
                <div key={i} className="home-parents__accred-item">
                  <CheckCircle size={15} style={{ color: '#10B981' }} /> {a}
                </div>
              ))}
            </div>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: '32px' }}>
              Meet Our Team <ArrowRight size={17} />
            </Link>
          </div>

          <div className="home-parents__grid">
            {forParents.map((p, i) => (
              <div key={i} className="parent-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="parent-card__icon">{p.icon}</div>
                <div>
                  <h4 className="parent-card__title">{p.title}</h4>
                  <p className="parent-card__desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section className="section home-testimonials">
        <div className="container">
          <div className="section-header text-center reveal" ref={testRef}>
            <div className="section-eyebrow"><Heart size={13} /> Parent Stories</div>
            <h2 className="section-title">Real Families, <span className="highlight">Real Results</span></h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>Hear from the parents who've experienced the BrightPath difference first-hand.</p>
          </div>

          {/* Featured testimonial */}
          <div className="testimonial-featured">
            <div className="testimonial-featured__card">
              <div className="testimonial-featured__stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />)}
              </div>
              <p className="testimonial-featured__text">"{testimonials[activeTestimonial].text}"</p>
              <div className="testimonial-featured__author">
                <div className="testimonial-featured__avatar" style={{ background: testimonials[activeTestimonial].color }}>
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div>
                  <div className="testimonial-featured__name">{testimonials[activeTestimonial].name}</div>
                  <div className="testimonial-featured__role">{testimonials[activeTestimonial].role}</div>
                </div>
              </div>
            </div>
            <div className="testimonial-featured__dots">
              {testimonials.map((_, i) => (
                <button key={i} className={`testimonial-dot ${i === activeTestimonial ? 'testimonial-dot--active' : ''}`} onClick={() => setActiveTestimonial(i)} />
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className={`testimonial-card ${i === activeTestimonial ? 'testimonial-card--active' : ''} reveal`} style={{ transitionDelay: `${i * 80}ms` }} onClick={() => setActiveTestimonial(i)}>
                <div className="testimonial-card__stars">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={13} fill="#F59E0B" color="#F59E0B" />)}
                </div>
                <p className="testimonial-card__text">"{t.text.slice(0, 100)}…"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar" style={{ background: t.color }}>{t.avatar}</div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ HOW IT WORKS (Quick) ══════════ */}
      <section className="section home-process">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '56px' }}>
            <div className="section-eyebrow"><Target size={13} /> Simple Process</div>
            <h2 className="section-title">Getting Started is <span className="highlight">Easy</span></h2>
          </div>
          <div className="process-steps">
            {[
              { num: '1', emoji: '📞', title: 'Call or Enquire Online', desc: 'Reach out and we\'ll respond within 24 hours' },
              { num: '2', emoji: '🔍', title: 'Free Assessment', desc: 'Our team evaluates your child\'s needs at no cost' },
              { num: '3', emoji: '📋', title: 'Personalised Plan', desc: 'We design a programme built around your child' },
              { num: '4', emoji: '🚀', title: 'Start Thriving', desc: 'Sessions begin and the transformation unfolds' },
            ].map((s, i) => (
              <div key={i} className="process-step">
                <div className="process-step__emoji">{s.emoji}</div>
                <div className="process-step__num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
                {i < 3 && <div className="process-step__arrow"><ArrowRight size={20} /></div>}
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '48px' }}>
            <Link to="/admissions" className="btn btn-primary">See Full Admissions Process <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="section home-cta">
        <div className="home-cta__glow home-cta__glow--left" />
        <div className="home-cta__glow home-cta__glow--right" />
        <div className="container home-cta__inner reveal" ref={ctaRef}>
          <div className="home-cta__emoji">🌟</div>
          <h2 className="home-cta__title">
            Ready to Help Your Child<br /><span className="highlight">Reach Their Potential?</span>
          </h2>
          <p className="home-cta__subtitle">
            Book a free, no-obligation consultation. We'll listen, assess and build a personalised plan around your child's unique strengths.
          </p>
          <div className="home-cta__actions">
            <Link to="/contact" className="btn btn-primary">
              Book Free Consultation <ArrowRight size={17} />
            </Link>
            <a href="tel:+18005550199" className="btn btn-secondary">
              <Phone size={16} /> +1 (800) 555-0199
            </a>
          </div>
          <div className="home-cta__trust">
            {['No obligation', 'Free consultation', 'Same-week response', 'Insurance accepted'].map(t => (
              <div key={t} className="home-cta__trust-item"><CheckCircle size={14} />{t}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
