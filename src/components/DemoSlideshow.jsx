import { useEffect, useState } from 'react'

const AUTO_MS = 5000

export default function DemoSlideshow({ title, lead, prevLabel, nextLabel, slides }) {
  const [index, setIndex] = useState(0)
  const count = slides.length
  const safeIndex = count ? ((index % count) + count) % count : 0
  const current = slides[safeIndex]

  useEffect(() => {
    if (count < 2) return undefined
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const id = window.setInterval(() => {
      setIndex((i) => i + 1)
    }, AUTO_MS)

    return () => window.clearInterval(id)
  }, [count, safeIndex])

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
            {slides.map((slide, i) => (
              <img
                key={slide.src}
                className={`demo-image${i === safeIndex ? ' is-active' : ''}`}
                src={slide.src}
                alt={slide.alt || slide.label}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                aria-hidden={i !== safeIndex}
              />
            ))}
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
