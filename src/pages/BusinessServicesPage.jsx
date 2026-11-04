import { COMPANY } from '../company.js'
import CtaBand from '../components/CtaBand.jsx'

export default function BusinessServicesPage({ s, onRequest }) {
  const p = s.business

  return (
    <div className="service-page service-page--biz">
      <section className="page-hero page-hero--biz">
        <div className="container page-hero-inner">
          <p className="eyebrow">{p.eyebrow}</p>
          <h1>{p.title}</h1>
          <p className="lede">{p.lead}</p>
          <div className="hero-actions">
            <button type="button" className="btn btn-primary" onClick={onRequest}>
              {p.ctaStrategy}
            </button>
            <button type="button" className="btn btn-secondary" onClick={onRequest}>
              {p.ctaQuote}
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-intro-title">{p.outcomesTitle}</h2>
          <div className="outcome-grid">
            {p.outcomes.map((o) => (
              <article key={o.title} className="outcome-item">
                <h3>{o.title}</h3>
                <p>{o.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
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

      <section className="section">
        <div className="container">
          <h2 className="section-intro-title">{p.industriesTitle}</h2>
          <div className="industry-row">
            {p.industries.map((name) => (
              <span key={name} className="industry-chip">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-intro">
            <h2>{p.pricingTitle}</h2>
            <p>{p.pricingNote}</p>
          </div>
          <div className="pricing-grid pricing-grid--tiers">
            {p.pricing.map((row) => (
              <article
                key={row.name}
                className={`pricing-item${row.highlighted ? ' pricing-item--featured' : ''}`}
              >
                <h3>{row.name}</h3>
                <p className="pricing-amount">{row.price}</p>
                <p className="pricing-detail">{row.detail}</p>
                <ul className="pricing-features">
                  {row.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <p className="pricing-best-for">{row.bestFor}</p>
              </article>
            ))}
          </div>
          <div className="deposit-note">
            <h3>{p.depositTitle}</h3>
            <p>{p.depositBody}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>{p.leadTitle}</h2>
            <ul className="check-list">
              {p.leadItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="strategy-panel">
            <h2>{p.strategyTitle}</h2>
            <p>{p.strategyDesc}</p>
            <button type="button" className="btn btn-primary" onClick={onRequest}>
              {p.ctaStrategy}
            </button>
          </div>
        </div>
      </section>

      <CtaBand
        title={p.contactTitle}
        desc={p.contactDesc}
        primaryLabel={p.ctaStrategy}
        onPrimary={onRequest}
        callLabel={s.callFull(COMPANY.phoneDisplay)}
        emailLabel={s.emailFull(COMPANY.email)}
        tone="biz"
      />
    </div>
  )
}
