import { useState } from 'react'

export default function DemoSlideshow({ title, lead, prevLabel, nextLabel, slides }) {
  const [index, setIndex] = useState(0)
  const count = slides.length
  const safeIndex = count ? ((index % count) + count) % count : 0
  const current = slides[safeIndex]

  if (!count || !current) return null

  const go = (dir) => {
    setIndex((i) => i + dir)
  }

  return (
    <section className="section section--tint demo-section">
      <div className="container">
        <div className="section-intro">
          <h2>{title}</h2>
          {lead ? <p>{lead}</p> : null}
        </div>

        <div className="demo-slideshow" aria-roledescription="carousel" aria-label={title}>
          <div className="demo-frame">
            <img
              key={current.src}
              className="demo-image"
              src={current.src}
              alt={current.alt || current.label}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="demo-controls">
            <button
              type="button"
              className="btn btn-ghost demo-nav-btn"
              onClick={() => go(-1)}
              aria-label={prevLabel}
            >
              ‹
            </button>

            <div className="demo-meta">
              <p className="demo-label">{current.label}</p>
              {current.caption ? <p className="demo-caption">{current.caption}</p> : null}
              <div className="demo-dots" role="tablist" aria-label={title}>
                {slides.map((slide, i) => (
                  <button
                    key={slide.src}
                    type="button"
                    role="tab"
                    aria-selected={i === safeIndex}
                    className={`demo-dot${i === safeIndex ? ' is-active' : ''}`}
                    onClick={() => setIndex(i)}
                    aria-label={slide.label}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              className="btn btn-ghost demo-nav-btn"
              onClick={() => go(1)}
              aria-label={nextLabel}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
