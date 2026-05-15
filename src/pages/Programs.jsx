import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Brain, MessageCircle, BookOpen, TrendingUp, Heart, Users, ChevronDown, ArrowRight, CheckCircle } from 'lucide-react'
import './Programs.css'

const programs = [
  {
    id: 'aba',
    icon: <Brain size={32} />,
    color: 'blue',
    title: 'Applied Behaviour Analysis (ABA)',
    tagline: 'The gold standard in autism and behavioural therapy',
    desc: 'Our ABA programmes are designed by Board Certified Behaviour Analysts (BCBAs) and delivered by trained therapists. Using positive reinforcement and data-driven methods, we build communication, social, and daily living skills in a way that is meaningful and sustainable for each child.',
    features: [
      'Individualised Treatment Plan (ITP)',
      'Regular progress monitoring & data review',
      'Natural Environment Teaching (NET)',
      'Discrete Trial Training (DTT)',
      'Parent coaching sessions included',
      'BCBA supervision every week',
    ],
    ages: '2–18 years',
    intensity: 'Part-time to full-time (10–40 hrs/week)',
  },
  {
    id: 'speech',
    icon: <MessageCircle size={32} />,
    color: 'purple',
    title: 'Speech & Language Therapy',
    tagline: 'Finding their voice, building real connections',
    desc: 'Our certified Speech-Language Pathologists (SLPs) work with children to develop expressive and receptive language, articulation, fluency, and social communication. We also specialise in Augmentative and Alternative Communication (AAC) for non-speaking children.',
    features: [
      'Expressive & receptive language goals',
      'AAC device training & support',
      'Articulation & phonological therapy',
      'Social communication groups',
      'Feeding & swallowing support',
      'Collaboration with classroom teachers',
    ],
    ages: '18 months – 16 years',
    intensity: '1–5 sessions per week',
  },
  {
    id: 'early',
    icon: <BookOpen size={32} />,
    color: 'teal',
    title: 'Early Intervention Programme',
    tagline: 'The most powerful window — ages 18 months to 5 years',
    desc: "Research shows that early support delivers the greatest long-term outcomes. Our Early Intervention programme combines ABA, speech therapy, OT, and play-based learning in a nurturing environment, targeting the critical developmental milestones that set children up for life.",
    features: [
      'Developmental screening & assessment',
      'Play-based & naturalistic learning',
      'Integrated therapy across disciplines',
      'Transition support to mainstream school',
      'Parent coaching & home programme',
      'Small group social skills play sessions',
    ],
    ages: '18 months – 5 years',
    intensity: 'Half-day or full-day options',
  },
  {
    id: 'ot',
    icon: <TrendingUp size={32} />,
    color: 'warm',
    title: 'Occupational Therapy',
    tagline: 'Building everyday independence, one skill at a time',
    desc: 'Our Occupational Therapists help children develop the fine motor, sensory processing, and daily living skills they need to participate fully in school and home life. Using sensory integration techniques and meaningful activities, we build confidence and competence.',
    features: [
      'Sensory processing assessment',
      'Fine & gross motor skill development',
      'Handwriting & pre-writing skills',
      'Self-care & daily living training',
      'Sensory diet plans for home',
      'Classroom & teacher consultation',
    ],
    ages: '2–16 years',
    intensity: '1–3 sessions per week',
  },
  {
    id: 'social',
    icon: <Users size={32} />,
    color: 'rose',
    title: 'Social Skills Groups',
    tagline: 'Learning friendship, connection and belonging',
    desc: 'Our evidence-based social skills groups teach children the nuanced art of friendship — reading social cues, starting conversations, managing emotions, and navigating group dynamics. Groups are small (4–6 children) and age-matched for maximum impact.',
    features: [
      'PEERS® curriculum (UCLA validated)',
      'Age-matched small groups (4–6 kids)',
      'Peer role modelling & coaching',
      'Emotion regulation strategies',
      'Conflict resolution & problem solving',
      'Parent homework & coaching sessions',
    ],
    ages: '5–16 years',
    intensity: 'Weekly 90-minute sessions',
  },
  {
    id: 'parent',
    icon: <Heart size={32} />,
    color: 'emerald',
    title: 'Parent Training Programme',
    tagline: 'Empowering families to be the best support system',
    desc: 'Parents are the most important people in a child\'s life. Our certified parent training programme teaches you the strategies our clinicians use — so you can reinforce learning at home, manage challenging behaviour confidently, and feel supported every step of the way.',
    features: [
      'Certified BCBA-led workshops',
      'Home visit & coaching sessions',
      'Behaviour management strategies',
      'Communication & AAC training',
      'Sibling support resources',
      'Online resources & video library',
    ],
    ages: 'All ages (parent focus)',
    intensity: 'Weekly or bi-weekly sessions',
  },
]

const colorMap = {
  blue: { accent: '#2563EB', light: '#3B82F6', glow: 'rgba(37,99,235,0.2)' },
  purple: { accent: '#7C3AED', light: '#A78BFA', glow: 'rgba(124,58,237,0.2)' },
  teal: { accent: '#0D9488', light: '#2DD4BF', glow: 'rgba(13,148,136,0.2)' },
  warm: { accent: '#D97706', light: '#FCD34D', glow: 'rgba(217,119,6,0.2)' },
  rose: { accent: '#E11D48', light: '#FB7185', glow: 'rgba(225,29,72,0.2)' },
  emerald: { accent: '#059669', light: '#34D399', glow: 'rgba(5,150,105,0.2)' },
}

function AccordionCard({ program, isOpen, onToggle }) {
  const c = colorMap[program.color]
  return (
    <div className={`prog-card ${isOpen ? 'prog-card--open' : ''}`} style={{ '--accent': c.accent, '--light': c.light, '--glow': c.glow }}>
      <button className="prog-card__header" onClick={onToggle}>
        <div className="prog-card__icon-wrap">{program.icon}</div>
        <div className="prog-card__header-text">
          <h3>{program.title}</h3>
          <p>{program.tagline}</p>
        </div>
        <div className="prog-card__meta">
          <span className="prog-card__age">{program.ages}</span>
          <ChevronDown size={20} className={`prog-card__chevron ${isOpen ? 'prog-card__chevron--open' : ''}`} />
        </div>
      </button>

      {isOpen && (
        <div className="prog-card__body">
          <div className="prog-card__body-grid">
            <div>
              <p className="prog-card__desc">{program.desc}</p>
              <div className="prog-card__intensity">
                <span>Intensity:</span> {program.intensity}
              </div>
            </div>
            <div>
              <h4 className="prog-card__features-title">What's Included</h4>
              <ul className="prog-card__features">
                {program.features.map(f => (
                  <li key={f}><CheckCircle size={15} />{f}</li>
                ))}
              </ul>
              <Link to="/admissions" className="btn btn-primary" style={{ marginTop: '20px', fontSize: '0.88rem', padding: '12px 22px' }}>
                Apply for This Programme <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Programs() {
  const [openId, setOpenId] = useState('aba')

  return (
    <div className="programs-page">
      {/* Hero */}
      <section className="prog-hero">
        <div className="prog-hero__orb prog-hero__orb--1" />
        <div className="prog-hero__orb prog-hero__orb--2" />
        <div className="container prog-hero__inner">
          <div className="badge badge-teal">Our Programmes</div>
          <h1 className="prog-hero__title">
            Specialised Care for <span className="gradient-text-teal">Every Child's Journey</span>
          </h1>
          <p className="prog-hero__subtitle">
            From early intervention to advanced skill-building — our multidisciplinary programmes are built on science, delivered with heart.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="section prog-list">
        <div className="container">
          <div className="prog-list__cards">
            {programs.map(p => (
              <AccordionCard
                key={p.id}
                program={p}
                isOpen={openId === p.id}
                onToggle={() => setOpenId(openId === p.id ? null : p.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section prog-cta">
        <div className="container text-center">
          <h2 className="section-title">Not Sure Which Programme is Right? <span className="highlight">Let's Talk.</span></h2>
          <p className="section-subtitle" style={{ margin: '0 auto 36px' }}>Our assessment team will evaluate your child's needs and recommend the ideal pathway — at no cost.</p>
          <Link to="/contact" className="btn btn-primary">Get a Free Assessment <ArrowRight size={17} /></Link>
        </div>
      </section>
    </div>
  )
}
