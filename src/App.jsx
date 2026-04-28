import './styles.css'

const COMPANY = {
  name: 'KTS General Solution LLC',
  email: 'ktsgeneralsolution@gmail.com',
  phoneDisplay: '404-641-6919',
  phoneE164: '+14046416919',
}

const SERVICES = [
  {
    title: 'AC Repair & HVAC Services',
    items: [
      'AC repair',
      'HVAC troubleshooting',
      'Thermostat installation',
      'Routine system maintenance',
    ],
  },
  {
    title: 'Plumbing Services',
    items: [
      'Leak repairs',
      'Drain unclogging',
      'Faucet and toilet repairs',
      'Fixture installations',
    ],
  },
  {
    title: 'Home Maintenance & Handyman Work',
    items: [
      'Painting',
      'Fixture installation',
      'Drywall patching',
      'Door repairs',
      'General home repairs',
    ],
  },
  {
    title: 'Building Cleaning Services',
    items: [
      'Apartment building cleaning',
      'Office cleaning',
      'Move-in/move-out cleaning',
      'Common-area maintenance',
    ],
  },
  {
    title: 'Valet Trash Services',
    items: [
      'Door-to-door trash pickup for apartment complexes with reliable nightly collection',
    ],
  },
]

const AUDIENCES = [
  'Homeowners & renters',
  'Airbnb / short-term rental hosts',
  'Multi-unit properties',
  'Apartment communities',
]

function PhoneLink({ className = 'btn btn-primary', children }) {
  return (
    <a className={className} href={`tel:${COMPANY.phoneE164}`}>
      {children ?? `Call ${COMPANY.phoneDisplay}`}
    </a>
  )
}

function EmailLink({ className = 'btn btn-secondary', children }) {
  return (
    <a className={className} href={`mailto:${COMPANY.email}`}>
      {children ?? `Email ${COMPANY.email}`}
    </a>
  )
}

export default function App() {
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
              <div className="brand-sub">Home services • Property support</div>
            </div>
          </a>

          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#who-we-serve">Who we serve</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-cta">
            <EmailLink className="btn btn-secondary">Email</EmailLink>
            <PhoneLink className="btn btn-primary">Call</PhoneLink>
          </div>
        </div>
      </header>

      <main id="top" className="container main">
        <section className="hero">
          <div className="hero-left">
            <div className="badges">
              <span className="badge">Family-owned</span>
              <span className="badge">Fast response</span>
              <span className="badge">20+ years experience</span>
            </div>

            <h1 className="hero-title">
              Quality repairs and dependable property support—done right, the first
              time.
            </h1>
            <p className="hero-subtitle">
              We help homeowners, renters, Airbnb hosts, and multi-unit properties
              with AC repair, plumbing, HVAC troubleshooting, general maintenance,
              cleaning/painting, and valet trash services for apartment communities.
            </p>

            <div className="hero-actions">
              <PhoneLink />
              <EmailLink />
            </div>

            <div className="hero-note">
              Prefer text or email? We respond quickly and keep communication clear.
            </div>
          </div>

          <aside className="card hero-card">
            <div className="card-title">What you can expect</div>
            <ul className="checklist">
              <li>Technician-level troubleshooting and practical repair solutions</li>
              <li>Quality workmanship with a clean, professional finish</li>
              <li>Dependable support for recurring property needs</li>
            </ul>

            <div className="mini-card">
              <div className="mini-label">Contact</div>
              <div className="mini-links">
                <a href={`tel:${COMPANY.phoneE164}`}>{COMPANY.phoneDisplay}</a>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </div>
            </div>
          </aside>
        </section>

        <section id="services" className="section">
          <div className="section-head">
            <div>
              <h2>Services</h2>
              <p>
                Skilled trades, home maintenance, commercial cleaning, and valet trash
                for properties of all sizes.
              </p>
            </div>
            <PhoneLink />
          </div>

          <div className="grid">
            {SERVICES.map((s) => (
              <div key={s.title} className="card service-card">
                <div className="service-title">{s.title}</div>
                <ul className="service-list">
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="who-we-serve" className="section">
          <div className="card pad">
            <h2>Who we serve</h2>
            <p className="muted maxw">
              From single-family homes to apartment communities, we show up ready to
              solve problems and keep properties running smoothly.
            </p>

            <div className="audience">
              {AUDIENCES.map((a) => (
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
              <h2>Ready to schedule service?</h2>
              <p className="muted">Tell us what you need and we’ll get you on the calendar.</p>

              <div className="hero-actions">
                <PhoneLink />
                <EmailLink />
              </div>

              <p className="fine">
                For apartment communities, ask about valet trash and recurring support.
              </p>
            </div>

            <div className="contact-side">
              <div className="mini-card">
                <div className="mini-label">Phone</div>
                <a className="big-link" href={`tel:${COMPANY.phoneE164}`}>
                  {COMPANY.phoneDisplay}
                </a>
              </div>
              <div className="mini-card">
                <div className="mini-label">Email</div>
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
                <a href="#services">Services</a>
                <a href="#who-we-serve">Who we serve</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  )
}

