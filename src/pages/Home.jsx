import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Brain, Heart, Star, Users, Award, Shield, CheckCircle,
  ArrowRight, Play, ChevronRight, Sparkles, BookOpen,
  MessageCircle, TrendingUp, Clock, Phone
} from 'lucide-react'
import './Home.css'

/* ── Reveal on scroll hook ── */
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/* ── Animated Counter ── */
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const duration = 1800
        const step = target / (duration / 16)
        const timer = setInterval(() => {
          start = Math.min(start + step, target)
          setCount(Math.floor(start))
          if (start >= target) clearInterval(timer)
        }, 16)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { value: 500, suffix: '+', label: 'Children Supported', icon: <Users size={22} /> },
  { value: 15, suffix: '+', label: 'Years of Excellence', icon: <Award size={22} /> },
  { value: 98, suffix: '%', label: 'Parent Satisfaction', icon: <Heart size={22} /> },
  { value: 40, suffix: '+', label: 'Certified Specialists', icon: <Brain size={22} /> },
]

const programs = [
  {
    icon: <Brain size={28} />,
    color: 'blue',
    title: 'ABA Therapy',
    desc: 'Applied Behaviour Analysis programmes tailored to each child\'s unique learning profile and developmental goals.',
    tags: ['Evidence-based', 'Personalised'],
  },
  {
    icon: <MessageCircle size={28} />,
    color: 'purple',
    title: 'Speech & Language',
    desc: 'Comprehensive speech therapy helping children find their voice, build communication skills and social confidence.',
    tags: ['Communication', 'Social Skills'],
  },
  {
    icon: <BookOpen size={28} />,
    color: 'teal',
    title: 'Early Intervention',
    desc: 'Targeted support for children aged 18 months to 5 years during the most critical window of brain development.',
    tags: ['Ages 18m–5yr', 'Developmental'],
  },
  {
    icon: <TrendingUp size={28} />,
    color: 'warm',
    title: 'Occupational Therapy',
    desc: 'Building everyday life skills, sensory processing and fine motor abilities for independent, confident children.',
    tags: ['Sensory', 'Life Skills'],
  },
]

const whyUs = [
  { icon: <Shield size={20} />, title: 'Evidence-Based Methods', desc: 'Every programme is grounded in peer-reviewed research and clinical best practices.' },
  { icon: <Users size={20} />, title: 'Multidisciplinary Team', desc: 'Psychologists, therapists, and educators working together seamlessly for your child.' },
  { icon: <Heart size={20} />, title: 'Family-Centred Care', desc: 'We partner with families every step of the way — you are always part of the team.' },
  { icon: <Clock size={20} />, title: 'Flexible Scheduling', desc: 'Morning, afternoon and weekend sessions designed around your family\'s lifestyle.' },
  { icon: <Award size={20} />, title: 'Accredited & Licensed', desc: 'Fully accredited facility with licensed clinicians holding the highest certifications.' },
  { icon: <Sparkles size={20} />, title: 'Child-First Environment', desc: 'A warm, sensory-sensitive, nurturing space where every child feels safe and celebrated.' },
]

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Parent of Ethan, 6',
    text: 'BrightPath completely transformed our lives. Within 6 months, Ethan went from non-verbal to holding full conversations. The team genuinely cares.',
    rating: 5,
    avatar: 'SM',
    color: '#2563EB',
  },
  {
    name: 'James & Priya K.',
    role: 'Parents of Aanya, 4',
    text: 'The early intervention programme gave our daughter the foundation she needed. The therapists are exceptional — warm, patient, and highly skilled.',
    rating: 5,
    avatar: 'JP',
    color: '#7C3AED',
  },
  {
    name: 'Marcus T.',
    role: 'Parent of Leo, 8',
    text: 'We tried several centres before BrightPath. The difference is night and day — structured, compassionate, and truly individualised. We are so grateful.',
    rating: 5,
    avatar: 'MT',
    color: '#0D9488',
  },
]

export default function Home() {
  const statsRef = useReveal()
  const programsRef = useReveal()
  const whyRef = useReveal()
  const testRef = useReveal()
  const ctaRef = useReveal()

  return (
    <div className="home">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__orb hero__orb--blue" />
        <div className="hero__orb hero__orb--purple" />
        <div className="hero__orb hero__orb--teal" />
        <div className="hero__grid" />

        <div className="container hero__inner">
          <div className="hero__content">
            <div className="badge badge-primary hero__badge animate-fadeInUp">
              <Sparkles size={13} /> Award-Winning Behavioural School
            </div>
            <h1 className="hero__title animate-fadeInUp delay-100">
              Every Child Deserves to
              <span className="hero__title-highlight"> Thrive &amp; Belong</span>
            </h1>
            <p className="hero__subtitle animate-fadeInUp delay-200">
              BrightPath is a leading behavioural school offering evidence-based therapy, early intervention and specialised education — empowering children with unique needs to reach their full potential.
            </p>
            <div className="hero__actions animate-fadeInUp delay-300">
              <Link to="/programs" className="btn btn-primary hero__btn-main">
                Explore Programs <ArrowRight size={17} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Book a Free Tour
              </Link>
            </div>
            <div className="hero__trust animate-fadeInUp delay-400">
              {['BCBA Certified', 'CARF Accredited', 'Medicaid Accepted'].map(t => (
                <div key={t} className="hero__trust-item">
                  <CheckCircle size={15} style={{ color: '#10B981' }} /> {t}
                </div>
              ))}
            </div>
          </div>

          <div className="hero__visual animate-fadeInRight delay-200">
            <div className="hero__card-main">
              <div className="hero__card-icon"><Brain size={36} /></div>
              <div className="hero__card-stat">
                <span className="hero__card-num">500+</span>
                <span className="hero__card-label">Children Supported</span>
              </div>
            </div>
            <div className="hero__card-float hero__card-float--1">
              <Heart size={18} style={{ color: '#E11D48' }} />
              <span>Family-Centred Care</span>
            </div>
            <div className="hero__card-float hero__card-float--2">
              <Award size={18} style={{ color: '#F59E0B' }} />
              <span>15+ Years Excellence</span>
            </div>
            <div className="hero__card-float hero__card-float--3">
              <Star size={18} style={{ color: '#A78BFA' }} />
              <span>98% Satisfaction</span>
            </div>
            <div className="hero__circle" />
            <div className="hero__circle hero__circle--2" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll">
          <div className="hero__scroll-dot" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-bar">
        <div className="container stats-bar__inner reveal" ref={statsRef}>
          {stats.map((s, i) => (
            <div key={i} className="stats-bar__item">
              <div className="stats-bar__icon">{s.icon}</div>
              <div className="stats-bar__value">
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="stats-bar__label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="section home-programs">
        <div className="container">
          <div className="section-header text-center reveal" ref={programsRef}>
            <div className="section-eyebrow"><Sparkles size={13} /> Our Specialisations</div>
            <h2 className="section-title">
              Programmes Built Around<br /><span className="highlight">Your Child's Needs</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Every child is unique. Our multidisciplinary team designs individualised programmes that nurture growth, build confidence and celebrate every milestone.
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

      {/* ── WHY US ── */}
      <section className="section home-why">
        <div className="home-why__bg" />
        <div className="container home-why__inner">
          <div className="home-why__left reveal-left" ref={whyRef}>
            <div className="section-eyebrow"><Shield size={13} /> Why BrightPath</div>
            <h2 className="section-title">
              The <span className="highlight">Trusted Choice</span> for<br />Families Across the Region
            </h2>
            <p className="section-subtitle">
              We combine clinical excellence with genuine compassion — creating a school where children are safe, respected and empowered to grow.
            </p>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: '32px' }}>
              Our Story <ArrowRight size={17} />
            </Link>
          </div>

          <div className="home-why__grid">
            {whyUs.map((w, i) => (
              <div key={i} className="why-card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="why-card__icon">{w.icon}</div>
                <div>
                  <h4 className="why-card__title">{w.title}</h4>
                  <p className="why-card__desc">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section home-testimonials">
        <div className="container">
          <div className="section-header text-center reveal" ref={testRef}>
            <div className="section-eyebrow"><Heart size={13} /> Parent Stories</div>
            <h2 className="section-title">
              Real Families, <span className="highlight">Real Results</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Hear from the families who've experienced the BrightPath difference first-hand.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="testimonial-card__stars">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} fill="#F59E0B" color="#F59E0B" />)}
                </div>
                <p className="testimonial-card__text">"{t.text}"</p>
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

      {/* ── CTA ── */}
      <section className="section home-cta">
        <div className="home-cta__glow home-cta__glow--left" />
        <div className="home-cta__glow home-cta__glow--right" />
        <div className="container home-cta__inner reveal" ref={ctaRef}>
          <div className="home-cta__badge"><Sparkles size={14} /> Start Your Journey Today</div>
          <h2 className="home-cta__title">
            Ready to Help Your Child<br /><span className="highlight">Reach Their Potential?</span>
          </h2>
          <p className="home-cta__subtitle">
            Book a free, no-obligation consultation with our team. We'll listen, assess and create a personalised plan built around your child's unique strengths.
          </p>
          <div className="home-cta__actions">
            <Link to="/contact" className="btn btn-primary">
              Book Free Consultation <ArrowRight size={17} />
            </Link>
            <a href="tel:+18005550199" className="btn btn-secondary">
              <Phone size={16} /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
