import { Link } from 'react-router-dom'
import { COMPANY } from '../company.js'
import CtaBand from '../components/CtaBand.jsx'

export default function HomePage({ s, onRequest }) {
  const h = s.home

  return (
    <>
      <section className="hero hero--home">
        <div className="hero-atmosphere" aria-hidden="true" />
        <div className="container hero-content">
          <p className="hero-brand">{COMPANY.name}</p>
          <p className="eyebrow">{h.badge}</p>
          <h1 className="hero-title">{h.heroTitle}</h1>
          <p className="hero-subtitle">{h.heroSubtitle}</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/home-services">
              {h.ctaHome}
            </Link>
            <Link className="btn btn-secondary" to="/business-services">
              {h.ctaBiz}
            </Link>
          </div>
          <button type="button" className="hero-quote-link" onClick={onRequest}>
            {h.ctaQuote}
          </button>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container about-grid">
          <div className="about-copy">
            <h2>{h.aboutTitle}</h2>
            <p className="lede">{h.aboutBody}</p>
            <ul className="check-list">
              <li>{h.aboutPoint1}</li>
              <li>{h.aboutPoint2}</li>
              <li>{h.aboutPoint3}</li>
            </ul>
          </div>
          <figure className="about-photo-wrap">
            <img
              className="about-photo"
              src="/jorge-delgado.png"
              alt={COMPANY.founderName}
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <strong>{COMPANY.founderName}</strong>
              <span>{h.founderRole}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section services-overview">
        <div className="container">
          <div className="section-intro">
            <h2>{h.servicesTitle}</h2>
            <p>{h.servicesLead}</p>
          </div>
          <div className="path-grid">
            <Link to="/home-services" className="path-panel path-panel--home">
              <span className="path-kicker">01</span>
              <h3>{h.homeCardTitle}</h3>
              <ul>
                {h.homeCardItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <span className="path-cta">{h.homeCardCta}</span>
            </Link>
            <Link to="/business-services" className="path-panel path-panel--biz">
              <span className="path-kicker">02</span>
              <h3>{h.bizCardTitle}</h3>
              <ul>
                {h.bizCardItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <span className="path-cta">{h.bizCardCta}</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="container">
          <h2 className="section-intro-title">{h.trustTitle}</h2>
          <div className="trust-grid">
            {h.trustItems.map((item) => (
              <div key={item.title} className="trust-item">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={h.ctaTitle}
        desc={h.ctaDesc}
        note={h.ctaNote}
        primaryLabel={h.ctaQuote}
        onPrimary={onRequest}
        callLabel={s.callFull(COMPANY.phoneDisplay)}
        emailLabel={s.emailFull(COMPANY.email)}
      />
    </>
  )
}
