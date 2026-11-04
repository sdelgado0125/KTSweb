import { COMPANY } from '../company.js'

export default function CtaBand({
  title,
  desc,
  note,
  primaryLabel,
  onPrimary,
  callLabel,
  emailLabel,
  tone = 'default',
}) {
  return (
    <section className={`cta-band cta-band--${tone}`} id="contact">
      <div className="container cta-band-inner">
        <div className="cta-band-copy">
          <h2>{title}</h2>
          {desc ? <p>{desc}</p> : null}
          {note ? <p className="cta-band-note">{note}</p> : null}
        </div>
        <div className="cta-band-actions">
          {primaryLabel && onPrimary ? (
            <button type="button" className="btn btn-primary" onClick={onPrimary}>
              {primaryLabel}
            </button>
          ) : null}
          <a className="btn btn-ghost" href={`tel:${COMPANY.phoneE164}`}>
            {callLabel}
          </a>
          {emailLabel ? (
            <a className="btn btn-ghost" href={`mailto:${COMPANY.email}`}>
              {emailLabel}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}
