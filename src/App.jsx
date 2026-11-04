import './styles.css'
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import RequestModal from './RequestModal.jsx'
import { COMPANY } from './company.js'
import { STRINGS, getInitialLang } from './i18n.js'
import HomePage from './pages/HomePage.jsx'
import HomeServicesPage from './pages/HomeServicesPage.jsx'
import BusinessServicesPage from './pages/BusinessServicesPage.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const [lang, setLang] = useState(() => getInitialLang())
  const [requestOpen, setRequestOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const headerRef = useRef(null)
  const location = useLocation()

  const s = useMemo(() => STRINGS[lang], [lang])

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
  }, [lang, location.pathname])

  useEffect(() => {
    localStorage.setItem('kts.lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 900) setNavOpen(false)
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
    if (window.innerWidth >= 900) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [navOpen])

  const openRequest = () => setRequestOpen(true)

  return (
    <div className="page">
      <ScrollToTop />
      <header ref={headerRef} className="header">
        <div className="container header-inner">
          <Link to="/" className="brand" onClick={() => setNavOpen(false)}>
            <div className="brand-mark" aria-hidden="true">
              <img className="brand-logo" src="/kts-logo.png" alt="" />
            </div>
            <div className="brand-text">
              <div className="brand-name">{COMPANY.name}</div>
              <div className="brand-sub">{s.brandSub}</div>
            </div>
          </Link>

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
              <NavLink to="/" end onClick={() => setNavOpen(false)}>
                {s.navHome}
              </NavLink>
              <NavLink to="/home-services" onClick={() => setNavOpen(false)}>
                {s.navHomeServices}
              </NavLink>
              <NavLink to="/business-services" onClick={() => setNavOpen(false)}>
                {s.navBusiness}
              </NavLink>
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
                  openRequest()
                  setNavOpen(false)
                }}
              >
                {s.requestModalOpenBtn}
              </button>
              <a className="btn btn-primary" href={`tel:${COMPANY.phoneE164}`}>
                {s.callBtn}
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage s={s} onRequest={openRequest} />} />
          <Route
            path="/home-services"
            element={<HomeServicesPage s={s} onRequest={openRequest} />}
          />
          <Route
            path="/business-services"
            element={<BusinessServicesPage s={s} onRequest={openRequest} />}
          />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">{COMPANY.name}</div>
            <p>{s.footer.tagline}</p>
          </div>
          <div className="footer-links">
            <Link to="/">{s.navHome}</Link>
            <Link to="/home-services">{s.navHomeServices}</Link>
            <Link to="/business-services">{s.navBusiness}</Link>
            <a href={`tel:${COMPANY.phoneE164}`}>{COMPANY.phoneDisplay}</a>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </div>
          <div className="footer-copy">
            © {new Date().getFullYear()} {COMPANY.name}. {s.footer.rights}
          </div>
        </div>
      </footer>

      <RequestModal
        open={requestOpen}
        onClose={() => setRequestOpen(false)}
        copy={s}
        companyEmail={COMPANY.email}
      />
    </div>
  )
}
