import { COMPANY } from '../company.js'
import CtaBand from '../components/CtaBand.jsx'

export default function HomeServicesPage({ s, onRequest }) {
  const p = s.homeServices

  return (
    <div className="service-page service-page--home">
      <section className="page-hero page-hero--home">
        <div className="container page-hero-inner">
          <p className="eyebrow">{p.eyebrow}</p>
          <h1>{p.title}</h1>
          <p className="lede">{p.lead}</p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={onRequest}>
              {p.ctaQuote}
            </button>
            <a className="btn btn-ghost" href={`tel:${COMPANY.phoneE164}`}>
              {s.callFull(COMPANY.phoneDisplay)}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-intro-title">{p.servicesTitle}</h2>
          <div className="feature-grid">
            {p.services.map((svc) => (
              <article key={svc.title} className="feature-block">
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container split">
          <div>
            <h2>{p.benefitsTitle}</h2>
            <ul className="check-list">
              {p.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div className="why-panel">
            <h2>{p.whyTitle}</h2>
            <p>{p.whyBody}</p>
            <ul className="check-list">
              {p.whyPoints.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
            <button type="button" className="btn btn-primary" onClick={onRequest}>
              {p.ctaQuote}
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-split">
          <div>
            <h2>{p.quoteTitle}</h2>
            <p className="lede">{p.quoteDesc}</p>
            <button type="button" className="btn btn-primary" onClick={onRequest}>
              {p.ctaQuote}
            </button>
          </div>
          <div>
            <h2>{p.contactTitle}</h2>
            <p className="lede">{p.contactDesc}</p>
            <div className="hero-actions">
              <a className="btn btn-secondary" href={`tel:${COMPANY.phoneE164}`}>
                {s.callFull(COMPANY.phoneDisplay)}
              </a>
              <a className="btn btn-ghost" href={`mailto:${COMPANY.email}`}>
                {s.emailFull(COMPANY.email)}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={p.quoteTitle}
        desc={p.quoteDesc}
        primaryLabel={p.ctaQuote}
        onPrimary={onRequest}
        callLabel={s.callFull(COMPANY.phoneDisplay)}
        tone="home"
      />
    </div>
  )
}
