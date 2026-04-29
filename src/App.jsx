import './styles.css'
import { useEffect, useMemo, useState } from 'react'

const COMPANY = {
  name: 'KTS General Solution LLC',
  email: 'ktsgeneralsolution@gmail.com',
  phoneDisplay: '404-641-6919',
  phoneE164: '+14046416919',
}

const STRINGS = {
  en: {
    langName: 'English',
    langToggleLabel: 'Language',
    navAbout: 'About',
    navServices: 'Services',
    navWho: 'Who we serve',
    navContact: 'Contact',
    brandSub: 'Home services • Property support',
    badgeFamily: 'Family-owned',
    badgeFast: 'Fast response',
    badgeExp: '20+ years experience',
    heroTitle: 'Quality repairs and dependable property support—done right, the first time.',
    heroSubtitle:
      'We help homeowners, renters, Airbnb hosts, and multi-unit properties with AC repair, plumbing, HVAC troubleshooting, general maintenance, cleaning/painting, and valet trash services for apartment communities.',
    heroNote: 'Prefer text or email? We respond quickly and keep communication clear.',
    expectTitle: 'What you can expect',
    expect1: 'Technician-level troubleshooting and practical repair solutions',
    expect2: 'Quality workmanship with a clean, professional finish',
    expect3: 'Dependable support for recurring property needs',
    contactLabel: 'Contact',
    aboutTitle: 'About us',
    aboutKicker: 'Family-owned. Technician-led.',
    aboutFounderName: 'Jorge Delgado',
    aboutFounderRole: 'Founder • Lead Technician',
    aboutBody:
      'KTS General Solution LLC is led by Jorge Delgado, an HVAC-licensed technician with 35+ years of hands-on experience. He’s worked closely with real estate companies across apartment complexes, homeowners, and office buildings. Bringing that same high standard to every job. Our goal is simple: deliver the best, affordable service and lead our team to long-term success through quality work and honest support.',
    servicesTitle: 'Services',
    servicesSubtitle:
      'Skilled trades, home maintenance, commercial cleaning, and valet trash for properties of all sizes.',
    whoTitle: 'Who we serve',
    whoDesc:
      'From single-family homes to apartment communities, we show up ready to solve problems and keep properties running smoothly.',
    ctaTitle: 'Ready to schedule service?',
    ctaDesc: 'Tell us what you need and we’ll get you on the calendar.',
    ctaNote: 'For apartment communities, ask about valet trash and recurring support.',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    emailBtn: 'Email',
    callBtn: 'Call',
    emailFull: (email) => `Email ${email}`,
    callFull: (phone) => `Call ${phone}`,
    audiences: ['Homeowners & renters', 'Airbnb / short-term rental hosts', 'Multi-unit properties', 'Apartment communities'],
    services: [
      {
        title: 'AC Repair & HVAC Services',
        items: ['AC repair', 'HVAC troubleshooting', 'Thermostat installation', 'Routine system maintenance'],
      },
      {
        title: 'Plumbing Services',
        items: ['Leak repairs', 'Drain unclogging', 'Faucet and toilet repairs', 'Fixture installations'],
      },
      {
        title: 'Home Maintenance & Handyman Work',
        items: ['Painting', 'Fixture installation', 'Drywall patching', 'Door repairs', 'General home repairs'],
      },
      {
        title: 'Building Cleaning Services',
        items: ['Apartment building cleaning', 'Office cleaning', 'Move-in/move-out cleaning', 'Common-area maintenance'],
      },
      {
        title: 'Pressure Washing',
        items: ['Driveways, sidewalks, patios, and exterior cleaning for a fresh look'],
      },
      {
        title: 'Valet Trash Services',
        items: ['Door-to-door trash pickup for apartment complexes with reliable nightly collection'],
      },
    ],
  },
  es: {
    langName: 'Español',
    langToggleLabel: 'Idioma',
    navAbout: 'Sobre nosotros',
    navServices: 'Servicios',
    navWho: 'A quién servimos',
    navContact: 'Contacto',
    brandSub: 'Servicios para el hogar • Apoyo para propiedades',
    badgeFamily: 'Negocio familiar',
    badgeFast: 'Respuesta rápida',
    badgeExp: 'Más de 20 años de experiencia',
    heroTitle:
      'Reparaciones de calidad y apoyo confiable para propiedades—bien hecho desde la primera vez.',
    heroSubtitle:
      'Ayudamos a propietarios, inquilinos, anfitriones de Airbnb y propiedades multifamiliares con reparación de A/C, plomería, diagnóstico HVAC, mantenimiento general, limpieza/pintura y servicio de valet trash para comunidades de apartamentos.',
    heroNote:
      '¿Prefiere texto o correo? Respondemos rápido y mantenemos una comunicación clara.',
    expectTitle: 'Qué puede esperar',
    expect1: 'Diagnóstico a nivel técnico y soluciones prácticas de reparación',
    expect2: 'Trabajo de calidad con un acabado limpio y profesional',
    expect3: 'Apoyo confiable para necesidades recurrentes de la propiedad',
    contactLabel: 'Contacto',
    aboutTitle: 'Sobre nosotros',
    aboutKicker: 'Negocio familiar. Liderado por técnicos.',
    aboutFounderName: 'Jorge Delgado',
    aboutFounderRole: 'Fundador • Técnico principal',
    aboutBody:
      'KTS General Solution LLC está liderado por Jorge Delgado, técnico con licencia de HVAC y más de 35 años de experiencia práctica. Ha trabajado de cerca con compañías de bienes raíces en complejos de apartamentos, con propietarios de viviendas y en edificios de oficinas. Traemos ese mismo estándar alto a cada trabajo. Nuestro objetivo es simple: ofrecer el mejor servicio a un precio accesible y guiar a nuestro equipo hacia el éxito a largo plazo con trabajo de calidad y apoyo honesto.',
    servicesTitle: 'Servicios',
    servicesSubtitle:
      'Oficios especializados, mantenimiento del hogar, limpieza comercial y valet trash para propiedades de todos los tamaños.',
    whoTitle: 'A quién servimos',
    whoDesc:
      'Desde casas unifamiliares hasta comunidades de apartamentos, llegamos listos para resolver problemas y mantener las propiedades funcionando sin contratiempos.',
    ctaTitle: '¿Listo para agendar servicio?',
    ctaDesc: 'Cuéntenos lo que necesita y lo programamos.',
    ctaNote:
      'Para comunidades de apartamentos, pregunte por valet trash y apoyo recurrente.',
    phoneLabel: 'Teléfono',
    emailLabel: 'Correo',
    emailBtn: 'Correo',
    callBtn: 'Llamar',
    emailFull: (email) => `Correo ${email}`,
    callFull: (phone) => `Llamar ${phone}`,
    audiences: ['Propietarios e inquilinos', 'Anfitriones de Airbnb / alquileres a corto plazo', 'Propiedades multifamiliares', 'Comunidades de apartamentos'],
    services: [
      {
        title: 'Reparación de A/C y Servicios HVAC',
        items: ['Reparación de A/C', 'Diagnóstico HVAC', 'Instalación de termostatos', 'Mantenimiento rutinario del sistema'],
      },
      {
        title: 'Servicios de Plomería',
        items: ['Reparación de fugas', 'Destape de drenajes', 'Reparación de grifos e inodoros', 'Instalación de accesorios'],
      },
      {
        title: 'Mantenimiento del Hogar y Handyman',
        items: ['Pintura', 'Instalación de accesorios', 'Resane de drywall', 'Reparación de puertas', 'Reparaciones generales del hogar'],
      },
      {
        title: 'Servicios de Limpieza de Edificios',
        items: ['Limpieza de edificios de apartamentos', 'Limpieza de oficinas', 'Limpieza de mudanza (entrada/salida)', 'Mantenimiento de áreas comunes'],
      },
      {
        title: 'Lavado a Presión',
        items: ['Entradas de autos, aceras, patios y limpieza exterior para una mejor apariencia'],
      },
      {
        title: 'Servicio de Valet Trash',
        items: ['Recolección puerta a puerta para complejos de apartamentos con recogida nocturna confiable'],
      },
    ],
  },
}

function getInitialLang() {
  const saved = localStorage.getItem('kts.lang')
  if (saved === 'en' || saved === 'es') return saved
  const nav = (navigator.language || '').toLowerCase()
  return nav.startsWith('es') ? 'es' : 'en'
}

function PhoneLink({ className = 'btn btn-primary', children, label }) {
  return (
    <a className={className} href={`tel:${COMPANY.phoneE164}`}>
      {children ?? label}
    </a>
  )
}

function EmailLink({ className = 'btn btn-secondary', children, label }) {
  return (
    <a className={className} href={`mailto:${COMPANY.email}`}>
      {children ?? label}
    </a>
  )
}

export default function App() {
  const [lang, setLang] = useState(() => getInitialLang())

  useEffect(() => {
    localStorage.setItem('kts.lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const s = useMemo(() => STRINGS[lang], [lang])
  const services = s.services
  const audiences = s.audiences

  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <a href="#top" className="brand">
            <div className="brand-mark" aria-hidden="true">
              <img className="brand-logo" src="/kts-logo.png" alt="" />
            </div>
            <div className="brand-text">
              <div className="brand-name">{COMPANY.name}</div>
              <div className="brand-sub">{s.brandSub}</div>
            </div>
          </a>

          <nav className="nav">
            <a href="#about">{s.navAbout}</a>
            <a href="#services">{s.navServices}</a>
            <a href="#who-we-serve">{s.navWho}</a>
            <a href="#contact">{s.navContact}</a>
          </nav>

          <div className="header-cta">
            <div className="lang-toggle" role="group" aria-label={s.langToggleLabel}>
              <button
                type="button"
                className={`lang-btn ${lang === 'en' ? 'is-active' : ''}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
              <button
                type="button"
                className={`lang-btn ${lang === 'es' ? 'is-active' : ''}`}
                onClick={() => setLang('es')}
              >
                ES
              </button>
            </div>
            <EmailLink className="btn btn-secondary" label={s.emailBtn}>
              {s.emailBtn}
            </EmailLink>
            <PhoneLink className="btn btn-primary" label={s.callBtn}>
              {s.callBtn}
            </PhoneLink>
          </div>
        </div>
      </header>

      <main id="top" className="container main">
        <section className="hero">
          <div className="hero-left">
            <div className="badges">
              <span className="badge">{s.badgeFamily}</span>
              <span className="badge">{s.badgeFast}</span>
              <span className="badge">{s.badgeExp}</span>
            </div>

            <h1 className="hero-title">{s.heroTitle}</h1>
            <p className="hero-subtitle">{s.heroSubtitle}</p>

            <div className="hero-actions">
              <PhoneLink label={s.callFull(COMPANY.phoneDisplay)} />
              <EmailLink label={s.emailFull(COMPANY.email)} />
            </div>

            <div className="hero-note">
              {s.heroNote}
            </div>
          </div>

          <aside className="card hero-card">
            <div className="card-title">{s.expectTitle}</div>
            <ul className="checklist">
              <li>{s.expect1}</li>
              <li>{s.expect2}</li>
              <li>{s.expect3}</li>
            </ul>

            <div className="mini-card">
              <div className="mini-label">{s.contactLabel}</div>
              <div className="mini-links">
                <a href={`tel:${COMPANY.phoneE164}`}>{COMPANY.phoneDisplay}</a>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="section">
          <div className="card pad about">
            <div className="about-head">
              <div>
                <h2>{s.aboutTitle}</h2>
                <p className="muted">{s.aboutKicker}</p>
              </div>
            </div>
            <div className="founder">
              <div className="founder-name">{s.aboutFounderName}</div>
              <div className="founder-role">{s.aboutFounderRole}</div>
            </div>
            <p className="about-body">{s.aboutBody}</p>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-head">
            <div>
              <h2>{s.servicesTitle}</h2>
              <p>{s.servicesSubtitle}</p>
            </div>
            <PhoneLink label={s.callFull(COMPANY.phoneDisplay)} />
          </div>

          <div className="grid">
            {services.map((svc) => (
              <div key={svc.title} className="card service-card">
                <div className="service-title">{svc.title}</div>
                <ul className="service-list">
                  {svc.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="who-we-serve" className="section">
          <div className="card pad">
            <h2>{s.whoTitle}</h2>
            <p className="muted maxw">{s.whoDesc}</p>

            <div className="audience">
              {audiences.map((a) => (
                <div key={a} className="pill">
                  {a}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="card contact">
            <div className="contact-main">
              <h2>{s.ctaTitle}</h2>
              <p className="muted">{s.ctaDesc}</p>

              <div className="hero-actions">
                <PhoneLink label={s.callFull(COMPANY.phoneDisplay)} />
                <EmailLink label={s.emailFull(COMPANY.email)} />
              </div>

              <p className="fine">{s.ctaNote}</p>
            </div>

            <div className="contact-side">
              <div className="mini-card">
                <div className="mini-label">{s.phoneLabel}</div>
                <a className="big-link" href={`tel:${COMPANY.phoneE164}`}>
                  {COMPANY.phoneDisplay}
                </a>
              </div>
              <div className="mini-card">
                <div className="mini-label">{s.emailLabel}</div>
                <a className="big-link" href={`mailto:${COMPANY.email}`}>
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>

          <footer className="footer">
            <div className="footer-inner">
              <div>© {new Date().getFullYear()} {COMPANY.name}</div>
              <div className="footer-links">
                <a href="#about">{s.navAbout}</a>
                <a href="#services">{s.navServices}</a>
                <a href="#who-we-serve">{s.navWho}</a>
                <a href="#contact">{s.navContact}</a>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  )
}

