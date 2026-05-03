import './styles.css'
import {
  startTransition,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import RequestModal from './RequestModal.jsx'

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
    menuOpenAria: 'Open menu',
    menuCloseAria: 'Close menu',
    navAbout: 'About the owner',
    navServices: 'Services',
    navWho: 'Proudly Serving',
    navContact: 'Contact',
    brandSub: 'Home services • Property support',
    badgeFamily: 'Family-owned',
    badgeFast: 'Fast response',
    badgeExp: '35+ years of experience',
    heroTitle: 'Quality repairs and dependable property support—done right, the first time.',
    heroSubtitle:
      'We help homeowners, renters, Airbnb hosts, and multi-unit properties with AC repair, plumbing, HVAC troubleshooting, general maintenance, cleaning/painting, and valet trash services for apartment communities.',
    heroNote: 'Prefer text or email? We respond quickly and keep communication clear.',
    expectTitle: 'What you can expect',
    expect1: 'Technician-level troubleshooting and practical repair solutions',
    expect2: 'Quality workmanship with a clean, professional finish',
    expect3: 'Dependable support for recurring property needs',
    contactLabel: 'Contact',
    aboutTitle: 'About the owner',
    aboutKicker: 'Family-owned. Technician-led.',
    aboutFounderName: 'Jorge Delgado',
    aboutFounderRole: 'Founder • Lead Technician',
    aboutBody:
      'KTS General Solution LLC is led by Jorge Delgado, an HVAC-licensed technician with 35+ years of hands-on experience. He’s worked closely with real estate companies across apartment complexes, homeowners, and office buildings. Bringing that same high standard to every job. Our goal is simple: deliver the best, affordable service and lead our team to long-term success through quality work and honest support.',
    servicesTitle: 'Services',
    servicesSubtitle:
      'Skilled trades, home maintenance, commercial cleaning, and valet trash for properties of all sizes.',
    whoTitle: 'Proudly Serving',
    whoDesc:
      'From single-family homes to apartment communities, we show up ready to solve problems and keep properties running smoothly.',
    ctaTitle: 'Ready to schedule service?',
    ctaDesc: 'Tell us what you need and we’ll get you on the calendar.',
    ctaNote: 'For apartment communities, ask about valet trash and recurring support.',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    emailBtn: 'Email',
    callBtn: 'Call us',
    emailFull: (email) => `Email ${email}`,
    callFull: (phone) => `Call ${phone}`,
    requestModalOpenBtn: 'Request service',
    requestModalTitle: 'Request service',
    requestModalLead:
      'Tell us what you need. We may call to confirm details and answer questions before we schedule a visit.',
    requestModalName: 'Full name',
    requestModalPhone: 'Phone',
    requestModalEmail: 'Email',
    requestModalService: 'Service type',
    requestModalServicePlaceholder: 'Select a service…',
    requestModalAddress: 'Service address or area',
    requestModalDescription: 'Describe the job',
    requestModalDescribePhotosHint:
      'If you have photos, describe the issue here first—we often ask customers to text or email pictures after we respond.',
    requestModalConsent:
      'I understand KTS may contact me by phone or email to confirm details or ask follow-up questions.',
    requestModalSubmit: 'Send request',
    requestModalSubmitting: 'Sending…',
    requestModalCancel: 'Cancel',
    requestModalClose: 'Close dialog',
    requestModalDone: 'Done',
    requestModalSuccessTitle: 'Request received',
    requestModalSuccessBody:
      'Thank you. We received your request and will follow up soon. We may call to confirm the details. You can also reach us directly by phone or email anytime.',
    requestModalErrorGeneric: 'Something went wrong. Please try again or call us.',
    requestModalConfigError:
      'Web3Forms key is missing. Open the `.env` file in this project folder, paste your key right after `VITE_WEB3FORMS_ACCESS_KEY=` (no spaces), save, then restart `npm run dev`. Get a free key at web3forms.com. Live site: Netlify → Environment variables → same name → redeploy.',
    requestModalConsentError: 'Please check the box to continue.',
    requestModalPhoneInvalid: 'Please enter a 10-digit phone number (only numbers; dashes or spaces are OK).',
    requestModalEmailInvalid:
      'Please enter a valid email address in the format name@example.com (include @ and a domain such as .com).',
    requestModalEmailSubjectPrefix: '[KTS Web]',
    requestModalEmailServiceLine: 'Service',
    requestModalEmailAddressLine: 'Address / area',
    requestModalEmailDetailsLine: 'Details',
    requestModalEmailPhoneLine: 'Phone',
    requestModalEmailCompanyLine: 'Company inbox (set this in Web3Forms dashboard)',
    requestModalFine:
      'Web3Forms delivers mail to the inbox set in your web3forms.com dashboard for this form key—it should be {email}. The customer’s email is used as Reply-To so you can respond directly.',
    requestServiceOptions: [
      { value: 'ac-hvac', label: 'AC Repair & HVAC Services' },
      { value: 'plumbing', label: 'Plumbing Services' },
      { value: 'handyman', label: 'Home Maintenance & Handyman Work' },
      { value: 'cleaning', label: 'Building Cleaning Services' },
      { value: 'pressure', label: 'Pressure Washing' },
      { value: 'valet', label: 'Valet Trash Services' },
      { value: 'other', label: 'Other / General' },
    ],
    audiences: ['Homeowners & renters', 'Airbnb / short-term rental hosts', 'Multi-unit properties', 'Apartment communities'],
    services: [
      {
        title: 'AC Repair & HVAC Services',
        items: ['AC repair', 'HVAC troubleshooting', 'Thermostat installation', 'Routine system maintenance'],
      },
      {
        title: 'Plumbing Services',
        items: ['Leak repairs', 'Drain unclogging', 'Faucet and toilet repairs', 'Fixture installations', 'Water Heater Repair', 'Water Heater Installation', 'Water Heater Replacement'],
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
    menuOpenAria: 'Abrir menú',
    menuCloseAria: 'Cerrar menú',
    navAbout: 'Sobre el dueño',
    navServices: 'Servicios',
    navWho: 'Servimos con Orgullo',
    navContact: 'Contacto',
    brandSub: 'Servicios para el hogar • Apoyo para propiedades',
    badgeFamily: 'Negocio familiar',
    badgeFast: 'Respuesta rápida',
    badgeExp: 'Más de 35 años de experiencia',
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
    aboutTitle: 'Sobre el dueño',
    aboutKicker: 'Negocio familiar. Liderado por técnicos.',
    aboutFounderName: 'Jorge Delgado',
    aboutFounderRole: 'Fundador • Técnico principal',
    aboutBody:
      'KTS General Solution LLC está liderado por Jorge Delgado, técnico con licencia de HVAC y más de 35 años de experiencia práctica. Ha trabajado de cerca con compañías de bienes raíces en complejos de apartamentos, con propietarios de viviendas y en edificios de oficinas. Traemos ese mismo estándar alto a cada trabajo. Nuestro objetivo es simple: ofrecer el mejor servicio a un precio accesible y guiar a nuestro equipo hacia el éxito a largo plazo con trabajo de calidad y apoyo honesto.',
    servicesTitle: 'Servicios',
    servicesSubtitle:
      'Oficios especializados, mantenimiento del hogar, limpieza comercial y valet trash para propiedades de todos los tamaños.',
    whoTitle: 'Servimos con Orgullo',
    whoDesc:
      'Desde casas unifamiliares hasta comunidades de apartamentos, llegamos listos para resolver problemas y mantener las propiedades funcionando sin contratiempos.',
    ctaTitle: '¿Listo para agendar servicio?',
    ctaDesc: 'Cuéntenos lo que necesita y lo programamos.',
    ctaNote:
      'Para comunidades de apartamentos, pregunte por valet trash y apoyo recurrente.',
    phoneLabel: 'Teléfono',
    emailLabel: 'Correo',
    emailBtn: 'Correo',
    callBtn: 'Llámenos',
    emailFull: (email) => `Correo ${email}`,
    callFull: (phone) => `Llamar ${phone}`,
    requestModalOpenBtn: 'Solicitar servicio',
    requestModalTitle: 'Solicitar servicio',
    requestModalLead:
      'Cuéntenos qué necesita. Podemos llamar para confirmar detalles y responder preguntas antes de programar la visita.',
    requestModalName: 'Nombre completo',
    requestModalPhone: 'Teléfono',
    requestModalEmail: 'Correo electrónico',
    requestModalService: 'Tipo de servicio',
    requestModalServicePlaceholder: 'Seleccione un servicio…',
    requestModalAddress: 'Dirección o zona del servicio',
    requestModalDescription: 'Describa el trabajo',
    requestModalDescribePhotosHint:
      'Si tiene fotos, describa primero el problema aquí—luego podemos pedirle que envíe imágenes por mensaje o correo.',
    requestModalConsent:
      'Entiendo que KTS puede contactarme por teléfono o correo para confirmar detalles o hacer preguntas.',
    requestModalSubmit: 'Enviar solicitud',
    requestModalSubmitting: 'Enviando…',
    requestModalCancel: 'Cancelar',
    requestModalClose: 'Cerrar ventana',
    requestModalDone: 'Listo',
    requestModalSuccessTitle: 'Solicitud recibida',
    requestModalSuccessBody:
      'Gracias. Recibimos su solicitud y nos comunicaremos pronto. Podemos llamar para confirmar los detalles. También puede llamarnos o escribirnos cuando quiera.',
    requestModalErrorGeneric: 'Algo salió mal. Inténtelo de nuevo o llámenos.',
    requestModalConfigError:
      'Falta la clave de Web3Forms. Abra `.env` en esta carpeta del proyecto, pegue la clave después de `VITE_WEB3FORMS_ACCESS_KEY=` (sin espacios), guarde y reinicie `npm run dev`. Clave gratuita en web3forms.com. Sitio en vivo: Netlify → Variables de entorno → mismo nombre → publicar de nuevo.',
    requestModalConsentError: 'Marque la casilla para continuar.',
    requestModalPhoneInvalid:
      'Ingrese un número de teléfono de 10 dígitos (solo números; puede usar guiones o espacios).',
    requestModalEmailInvalid:
      'Ingrese un correo válido con el formato nombre@ejemplo.com (incluya @ y un dominio como .com).',
    requestModalEmailSubjectPrefix: '[KTS Web]',
    requestModalEmailServiceLine: 'Servicio',
    requestModalEmailAddressLine: 'Dirección / zona',
    requestModalEmailDetailsLine: 'Detalles',
    requestModalEmailPhoneLine: 'Teléfono',
    requestModalEmailCompanyLine: 'Correo de la empresa (configúrelo en el panel de Web3Forms)',
    requestModalFine:
      'Web3Forms envía el correo al buzón configurado en web3forms.com para esta clave—debería ser {email}. El correo del cliente se usa como “Responder a” para que pueda contestarle directamente.',
    requestServiceOptions: [
      { value: 'ac-hvac', label: 'Reparación de A/C y Servicios HVAC' },
      { value: 'plumbing', label: 'Servicios de Plomería' },
      { value: 'handyman', label: 'Mantenimiento del Hogar y Handyman' },
      { value: 'cleaning', label: 'Servicios de Limpieza de Edificios' },
      { value: 'pressure', label: 'Lavado a Presión' },
      { value: 'valet', label: 'Servicio de Valet Trash' },
      { value: 'other', label: 'Otro / General' },
    ],
    audiences: ['Propietarios e inquilinos', 'Anfitriones de Airbnb / alquileres a corto plazo', 'Propiedades multifamiliares', 'Comunidades de apartamentos'],
    services: [
      {
        title: 'Reparación de A/C y Servicios HVAC',
        items: ['Reparación de A/C', 'Diagnóstico HVAC', 'Instalación de termostatos', 'Mantenimiento rutinario del sistema'],
      },
      {
        title: 'Servicios de Plomería',
        items: [
          'Reparación de fugas',
          'Destape de drenajes',
          'Reparación de grifos e inodoros',
          'Instalación de accesorios',
          'Reparación de calentadores de agua',
          'Instalación de calentadores de agua',
          'Reemplazo de calentadores de agua',
        ],
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
  const [requestOpen, setRequestOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const headerRef = useRef(null)

  useLayoutEffect(() => {
    const el = headerRef.current
    if (!el || typeof ResizeObserver === 'undefined') return undefined

    function syncHeaderHeight() {
      const h = Math.ceil(el.getBoundingClientRect().height)
      document.documentElement.style.setProperty('--header-h', `${h}px`)
    }

    syncHeaderHeight()
    const ro = new ResizeObserver(syncHeaderHeight)
    ro.observe(el)
    window.addEventListener('resize', syncHeaderHeight)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', syncHeaderHeight)
      document.documentElement.style.removeProperty('--header-h')
    }
  }, [lang])

  useEffect(() => {
    localStorage.setItem('kts.lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 760) setNavOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!navOpen) return
    function onKey(e) {
      if (e.key === 'Escape') setNavOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [navOpen])

  useEffect(() => {
    if (!navOpen || typeof window === 'undefined') return
    if (window.innerWidth >= 760) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [navOpen])

  const s = useMemo(() => STRINGS[lang], [lang])
  const services = s.services
  const audiences = s.audiences

  const servicesSectionRef = useRef(null)
  const [servicesRevealed, setServicesRevealed] = useState(false)

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      startTransition(() => setServicesRevealed(true))
      return undefined
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      startTransition(() => setServicesRevealed(true))
      return undefined
    }

    const el = servicesSectionRef.current
    if (!el) return undefined

    // Same reveal on mobile and desktop; slightly earlier trigger on narrow viewports
    // so the animation reliably fires while scrolling on phones.
    const narrow =
      typeof window !== 'undefined' && window.matchMedia('(max-width: 759px)').matches
    const rootMargin = narrow ? '0px 0px 10% 0px' : '0px 0px -6% 0px'

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting) return
        startTransition(() => setServicesRevealed(true))
        observer.disconnect()
      },
      {
        threshold: [0, 0.06, 0.12],
        rootMargin,
      },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const audienceRef = useRef(null)
  const [audienceInView, setAudienceInView] = useState(false)

  useLayoutEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      startTransition(() => setAudienceInView(true))
      return undefined
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      startTransition(() => setAudienceInView(true))
      return undefined
    }

    const el = audienceRef.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        startTransition(() => setAudienceInView(entry.isIntersecting))
      },
      {
        threshold: [0, 0.12, 0.2],
        rootMargin: '0px 0px -6% 0px',
      },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
    }
  }, [lang])

  return (
    <div className="page">
      <header ref={headerRef} className="header">
        <div className="container header-inner">
          <a href="#top" className="brand" onClick={() => setNavOpen(false)}>
            <div className="brand-mark" aria-hidden="true">
              <img className="brand-logo" src="/kts-logo.png" alt="" />
            </div>
            <div className="brand-text">
              <div className="brand-name">{COMPANY.name}</div>
              <div className="brand-sub">{s.brandSub}</div>
            </div>
          </a>

          <button
            type="button"
            className={`header-menu-toggle ${navOpen ? 'is-open' : ''}`}
            aria-expanded={navOpen}
            aria-controls="primary-navigation"
            aria-label={navOpen ? s.menuCloseAria : s.menuOpenAria}
            onClick={() => setNavOpen((open) => !open)}
          >
            <span className="header-menu-bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="header-menu-close" aria-hidden="true">
              ×
            </span>
          </button>

          {navOpen ? (
            <div
              className="header-menu-backdrop"
              aria-hidden
              onClick={() => setNavOpen(false)}
            />
          ) : null}

          <div
            id="primary-navigation"
            className={`header-links ${navOpen ? 'is-open' : ''}`}
          >
            <nav className="nav">
              <a href="#services" onClick={() => setNavOpen(false)}>
                {s.navServices}
              </a>
              <a href="#who-we-serve" onClick={() => setNavOpen(false)}>
                {s.navWho}
              </a>
              <a href="#about" onClick={() => setNavOpen(false)}>
                {s.navAbout}
              </a>
              <a href="#contact" onClick={() => setNavOpen(false)}>
                {s.navContact}
              </a>
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
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => {
                  setRequestOpen(true)
                  setNavOpen(false)
                }}
              >
                {s.requestModalOpenBtn}
              </button>
              <PhoneLink className="btn btn-primary" label={s.callBtn}>
                {s.callBtn}
              </PhoneLink>
            </div>
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
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setRequestOpen(true)}
              >
                {s.requestModalOpenBtn}
              </button>
              <PhoneLink label={s.callFull(COMPANY.phoneDisplay)} />
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
              </div>
            </div>
          </aside>
        </section>

        <section
          id="services"
          ref={servicesSectionRef}
          className={`section services-section${servicesRevealed ? ' services-section--revealed' : ''}`}
        >
          <div className="services-section-inner">
            <div className="section-head">
              <div>
                <h2>{s.servicesTitle}</h2>
                <p>{s.servicesSubtitle}</p>
              </div>
              <PhoneLink label={s.callFull(COMPANY.phoneDisplay)} />
            </div>

            <div className="grid services-grid">
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
          </div>
        </section>

        <section id="who-we-serve" className="section">
          <div className="card pad">
            <h2>{s.whoTitle}</h2>
            <p className="muted maxw">{s.whoDesc}</p>

            <div
              ref={audienceRef}
              className={`audience ${audienceInView ? 'audience--inview' : ''}`}
            >
              {audiences.map((a, i) => (
                <div key={a} className="pill" style={{ '--pill-i': i }}>
                  {a}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="card pad about">
            <div className="about-layout">
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
              <figure className="about-photo-wrap">
                <img
                  className="about-photo"
                  src="/jorge-delgado.png"
                  alt={s.aboutFounderName}
                  width={640}
                  height={800}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <p className="about-body">{s.aboutBody}</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="card contact">
            <div className="contact-main">
              <h2>{s.ctaTitle}</h2>
              <p className="muted">{s.ctaDesc}</p>

              <div className="hero-actions">
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setRequestOpen(true)}
                >
                  {s.requestModalOpenBtn}
                </button>
                <PhoneLink label={s.callFull(COMPANY.phoneDisplay)} />
                <EmailLink label={s.emailFull(COMPANY.email)} />
              </div>

              <p className="fine">{s.ctaNote}</p>
            </div>
          </div>

          <footer className="footer">
            <div className="footer-inner">
              <div>© {new Date().getFullYear()} {COMPANY.name}</div>
              <div className="footer-links">
                <a href="#services">{s.navServices}</a>
                <a href="#who-we-serve">{s.navWho}</a>
                <a href="#about">{s.navAbout}</a>
                <a href="#contact">{s.navContact}</a>
              </div>
            </div>
          </footer>
        </section>
      </main>

      <RequestModal
        open={requestOpen}
        onClose={() => setRequestOpen(false)}
        copy={s}
        companyEmail={COMPANY.email}
      />
    </div>
  )
}

