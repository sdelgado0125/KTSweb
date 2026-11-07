export const STRINGS = {
  en: {
    langName: 'English',
    langToggleLabel: 'Language',
    menuOpenAria: 'Open menu',
    menuCloseAria: 'Close menu',
    brandSub: 'Homes • Businesses • Real solutions',
    navHome: 'Home',
    navHomeServices: 'Home Services',
    navBusiness: 'Business Growth',
    navAbout: 'About',
    navContact: 'Contact',
    callBtn: 'Call us',
    emailBtn: 'Email',
    emailFull: (email) => `Email ${email}`,
    callFull: (phone) => `Call ${phone}`,
    requestModalOpenBtn: 'Request a quote',
    requestModalTitle: 'Request a quote',
    requestModalLead:
      'Tell us what you need. We may call to confirm details before we schedule a visit or strategy call.',
    requestModalName: 'Full name',
    requestModalPhone: 'Phone',
    requestModalEmail: 'Email',
    requestModalService: 'Service type',
    requestModalServicePlaceholder: 'Select a service…',
    requestModalAddress: 'Service address or area',
    requestModalDescription: 'Describe the job or goal',
    requestModalDescribePhotosHint:
      'For home projects, photos help. Describe the issue here first—we often ask for pictures after we respond.',
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
    requestModalPhoneInvalid:
      'Please enter a 10-digit phone number (only numbers; dashes or spaces are OK).',
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
      { value: 'home-repairs', label: 'Home Repairs' },
      { value: 'renovations', label: 'Renovations / Remodeling' },
      { value: 'flooring-painting', label: 'Flooring / Painting' },
      { value: 'property-improvements', label: 'Property Improvements' },
      { value: 'website', label: 'Website Development' },
      { value: 'bilingual-web', label: 'Bilingual Website' },
      { value: 'local-seo', label: 'Local SEO / Google Business' },
      { value: 'automation', label: 'Business Automation' },
      { value: 'strategy-call', label: 'Strategy Call' },
      { value: 'other', label: 'Other / General' },
    ],

    home: {
      badge: 'Solutions company',
      heroTitle: 'Solutions That Help Homes and Businesses Grow',
      heroSubtitle:
        'KTS General Solution LLC provides home renovation services, business websites, digital growth solutions, and technology services designed to help clients succeed.',
      ctaHome: 'Home Improvement Services',
      ctaBiz: 'Business Growth Services',
      ctaQuote: 'Request a quote',
      aboutTitle: 'About KTS',
      aboutBody:
        'KTS helps homeowners and business owners solve practical problems and improve their investments—whether that means a better living space, a stronger online presence, or systems that save time and win customers.',
      aboutPoint1: 'One partner for real-world home and business needs',
      aboutPoint2: 'Clear communication and honest recommendations',
      aboutPoint3: 'Outcomes first—repairs that last and marketing that works',
      founderRole: 'Founder',
      servicesTitle: 'What we do',
      servicesLead: 'Choose the path that fits your goal. Every engagement starts with a conversation.',
      homeCardTitle: 'Home Services',
      homeCardItems: ['Repairs', 'Renovations', 'Property Improvements', 'Remodeling'],
      homeCardCta: 'Explore home services',
      bizCardTitle: 'Business Growth Services',
      bizCardItems: [
        'Website Development',
        'Bilingual Websites',
        'Local SEO',
        'Google Business Profile Optimization',
        'Business Automation',
      ],
      bizCardCta: 'Explore business growth',
      trustTitle: 'Why people call KTS',
      trustItems: [
        { title: 'Practical problem-solvers', body: 'We focus on what moves the needle—safer homes, clearer websites, more leads.' },
        { title: 'Family-led accountability', body: 'You work with a real local team that answers the phone and stands behind the work.' },
        { title: 'Bilingual by design', body: 'English and Spanish support so more of your customers—and family—feel included.' },
      ],
      ctaTitle: 'Ready for a quote or consultation?',
      ctaDesc: 'Tell us about your home project or business growth goal. We’ll respond quickly with next steps.',
      ctaNote: 'Prefer to talk first? Call or text—we keep it simple.',
    },

    homeServices: {
      eyebrow: 'Home improvement',
      title: 'Home Services That Protect and Improve Your Property',
      lead:
        'From everyday repairs to renovations and remodeling, KTS delivers clean workmanship and clear timelines—so your home feels better and holds its value.',
      ctaQuote: 'Request a home quote',
      servicesTitle: 'What we handle',
      services: [
        {
          title: 'Home Repairs',
          desc: 'Fix what’s broken—doors, drywall, fixtures, and the small jobs that pile up—done right the first time.',
        },
        {
          title: 'Renovations',
          desc: 'Refresh rooms and surfaces with practical upgrades that look intentional and last.',
        },
        {
          title: 'Remodeling',
          desc: 'Plan and execute larger changes that improve how you live in the space.',
        },
        {
          title: 'Flooring',
          desc: 'Repair, replace, or refresh floors for a cleaner, safer, more polished home.',
        },
        {
          title: 'Painting',
          desc: 'Interior and exterior painting with careful prep and a professional finish.',
        },
        {
          title: 'Property Improvements',
          desc: 'Curb appeal, function, and durability projects that make the property easier to enjoy and rent.',
        },
      ],
      benefitsTitle: 'Benefits of working with KTS',
      benefits: [
        'Straightforward quotes and communication',
        'Quality-focused craftsmanship',
        'Respect for your home and schedule',
        'One team that can also support your business online when you need it',
      ],
      whyTitle: 'Why choose KTS for your home',
      whyBody:
        'We treat home projects like investments—not just tasks. You get practical recommendations, reliable follow-through, and a partner who explains options in plain language.',
      whyPoints: [
        'Local, accountable service',
        'Experience across properties and real-world job sites',
        'English and Spanish communication',
      ],
      quoteTitle: 'Request a home project quote',
      quoteDesc: 'Share what you need repaired, renovated, or remodeled. We’ll follow up to confirm details and schedule.',
      contactTitle: 'Prefer to talk?',
      contactDesc: 'Call or email and we’ll help you decide the next step.',
    },

    business: {
      eyebrow: 'Business growth',
      title: 'Websites That Help Your Business Get More Customers',
      lead:
        'We build digital foundations that bring in calls, bookings, and trust—not just pretty pages. Every recommendation is aimed at growth for local businesses.',
      ctaStrategy: 'Book a strategy call',
      ctaQuote: 'Request a growth quote',
      outcomesTitle: 'What you gain',
      outcomes: [
        { title: 'More qualified leads', body: 'Clear offers and contact paths so visitors know how to reach you.' },
        { title: 'A site that works on phones', body: 'Fast, readable pages designed for how people actually search and call.' },
        { title: 'Stronger local visibility', body: 'SEO and Google Business Profile work that helps nearby customers find you.' },
        { title: 'Less busywork', body: 'Automation that captures inquiries and keeps follow-up consistent.' },
      ],
      demosTitle: 'Website demos',
      demosLead: 'Examples of sites built for local businesses—swipe through and picture your brand here.',
      demosPrev: 'Previous demo',
      demosNext: 'Next demo',
      demos: [
        {
          label: 'Auto Shop',
          caption: 'Apex Auto — lead-focused auto repair site',
          src: '/demos/auto-shop.jpg',
          alt: 'Demo website for an auto repair shop',
        },
        {
          label: 'Contractors',
          caption: 'Ridgeway Exteriors — power washing contractor site',
          src: '/demos/contractors.jpg',
          alt: 'Demo website for a power washing contractor',
        },
      ],
      servicesTitle: 'Growth services',
      services: [
        {
          title: 'Website Development',
          desc: 'Modern sites that explain what you do, build trust, and convert visitors into customers.',
        },
        {
          title: 'Bilingual English & Spanish Websites',
          desc: 'Reach both audiences with clear language options—built for real local markets.',
        },
        {
          title: 'Local SEO',
          desc: 'On-page and local search improvements so you show up when people nearby need your service.',
        },
        {
          title: 'Google Business Profile Optimization',
          desc: 'Photos, categories, posts, and details that turn map searches into calls.',
        },
        {
          title: 'AI Automation',
          desc: 'Practical automation for lead capture, reminders, and routine customer communication.',
        },
        {
          title: 'Online Presence Improvement',
          desc: 'Tighten your digital footprint so your brand looks consistent and professional everywhere.',
        },
      ],
      industriesTitle: 'Industries we serve',
      industries: [
        'Auto Repair Shops',
        'Contractors',
        'Roofers',
        'Landscapers',
        'Cleaning Companies',
        'Restaurants',
        'Barbershops',
      ],
      pricingTitle: 'Website packages',
      pricingNote: 'Choose the tier that matches where your business is today. Final scope is confirmed before work begins.',
      pricing: [
        {
          name: 'Starter',
          price: '$700 – $900',
          detail:
            'Perfect for new businesses and service professionals looking to establish a professional online presence.',
          features: [
            '1–3 Pages',
            'Mobile-Optimized Design',
            'Contact Form',
            'Local SEO Basics',
            'Google Indexing Setup',
            'Social Media Integration',
            'Professional Lead Capture',
          ],
          bestFor: 'Best For: Contractors, startups, trades, and local service providers.',
        },
        {
          name: 'Growth',
          price: '$1,200 – $1,500',
          detail:
            'Designed for businesses that want a stronger online presence and more customer inquiries.',
          features: [
            '5–7 Custom Pages',
            'Mobile-Optimized Design',
            'Contact Forms',
            'Google Maps Integration',
            'Customer Reviews Section',
            'Image Gallery',
            'SEO Setup',
            'Conversion-Focused Layout',
            'Call-to-Action Optimization',
          ],
          bestFor:
            'Best For: Auto repair shops, restaurants, landscaping companies, barbershops, and established local businesses.',
          highlighted: true,
        },
        {
          name: 'Premium',
          price: 'Starting at $2,000',
          detail:
            'Built for businesses that want automation, customer convenience, and higher conversion rates.',
          features: [
            'Everything in Growth',
            'Online Booking System',
            'CRM Integration',
            'Workflow Automations',
            'Lead Management',
            'Custom Features',
            'Advanced SEO Foundation',
            'Analytics & Tracking Setup',
          ],
          bestFor: 'Best For: Growing businesses that need systems, automation, and scalability.',
        },
      ],
      depositTitle: 'Project deposit policy',
      depositBody:
        'To protect both sides and keep projects moving, we require a deposit before work begins. Typical options: 50% upfront and 50% upon completion, or a $500 minimum deposit. No deposit = no project.',
      leadTitle: 'Built for lead generation',
      leadItems: [
        'Clear calls-to-action on every key page',
        'Mobile optimization for search traffic',
        'Forms and click-to-call that reduce friction',
        'Call tracking–ready setups so you can measure what works',
      ],
      strategyTitle: 'Book a strategy call',
      strategyDesc:
        'We’ll review your current online presence and outline the fastest path to more customers—no jargon, just a plan.',
      contactTitle: 'Start the conversation',
      contactDesc: 'Request a quote or strategy call. We’ll respond with clear next steps.',
    },

    footer: {
      tagline: 'Solutions for homes and businesses that want to grow.',
      rights: 'All rights reserved.',
    },
  },

  es: {
    langName: 'Español',
    langToggleLabel: 'Idioma',
    menuOpenAria: 'Abrir menú',
    menuCloseAria: 'Cerrar menú',
    brandSub: 'Hogares • Negocios • Soluciones reales',
    navHome: 'Inicio',
    navHomeServices: 'Servicios para el hogar',
    navBusiness: 'Crecimiento empresarial',
    navAbout: 'Nosotros',
    navContact: 'Contacto',
    callBtn: 'Llámenos',
    emailBtn: 'Correo',
    emailFull: (email) => `Correo ${email}`,
    callFull: (phone) => `Llamar ${phone}`,
    requestModalOpenBtn: 'Solicitar cotización',
    requestModalTitle: 'Solicitar cotización',
    requestModalLead:
      'Cuéntenos qué necesita. Podemos llamar para confirmar detalles antes de agendar una visita o una llamada de estrategia.',
    requestModalName: 'Nombre completo',
    requestModalPhone: 'Teléfono',
    requestModalEmail: 'Correo electrónico',
    requestModalService: 'Tipo de servicio',
    requestModalServicePlaceholder: 'Seleccione un servicio…',
    requestModalAddress: 'Dirección o zona del servicio',
    requestModalDescription: 'Describa el trabajo o el objetivo',
    requestModalDescribePhotosHint:
      'Para proyectos del hogar, las fotos ayudan. Describa primero el problema—luego podemos pedirle imágenes.',
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
      { value: 'home-repairs', label: 'Reparaciones del hogar' },
      { value: 'renovations', label: 'Renovaciones / Remodelación' },
      { value: 'flooring-painting', label: 'Pisos / Pintura' },
      { value: 'property-improvements', label: 'Mejoras de propiedad' },
      { value: 'website', label: 'Desarrollo de sitios web' },
      { value: 'bilingual-web', label: 'Sitio web bilingüe' },
      { value: 'local-seo', label: 'SEO local / Google Business' },
      { value: 'automation', label: 'Automatización de negocios' },
      { value: 'strategy-call', label: 'Llamada de estrategia' },
      { value: 'other', label: 'Otro / General' },
    ],

    home: {
      badge: 'Empresa de soluciones',
      heroTitle: 'Soluciones que ayudan a hogares y negocios a crecer',
      heroSubtitle:
        'KTS General Solution LLC ofrece servicios de renovación del hogar, sitios web para negocios, soluciones de crecimiento digital y tecnología pensada para que sus clientes tengan éxito.',
      ctaHome: 'Servicios de mejora del hogar',
      ctaBiz: 'Servicios de crecimiento empresarial',
      ctaQuote: 'Solicitar cotización',
      aboutTitle: 'Sobre KTS',
      aboutBody:
        'KTS ayuda a dueños de casa y dueños de negocio a resolver problemas prácticos y mejorar sus inversiones—ya sea un mejor espacio para vivir, una presencia en línea más fuerte o sistemas que ahorran tiempo y atraen clientes.',
      aboutPoint1: 'Un socio para necesidades reales del hogar y del negocio',
      aboutPoint2: 'Comunicación clara y recomendaciones honestas',
      aboutPoint3: 'Resultados primero—reparaciones que duran y marketing que funciona',
      founderRole: 'Fundador',
      servicesTitle: 'Qué hacemos',
      servicesLead: 'Elija el camino que se ajuste a su meta. Cada proyecto comienza con una conversación.',
      homeCardTitle: 'Servicios para el hogar',
      homeCardItems: ['Reparaciones', 'Renovaciones', 'Mejoras de propiedad', 'Remodelación'],
      homeCardCta: 'Ver servicios del hogar',
      bizCardTitle: 'Crecimiento empresarial',
      bizCardItems: [
        'Desarrollo de sitios web',
        'Sitios bilingües',
        'SEO local',
        'Optimización de Google Business Profile',
        'Automatización de negocios',
      ],
      bizCardCta: 'Ver crecimiento empresarial',
      trustTitle: 'Por qué llaman a KTS',
      trustItems: [
        { title: 'Solucionadores prácticos', body: 'Nos enfocamos en lo que importa—hogares más seguros, sitios más claros y más clientes.' },
        { title: 'Responsabilidad familiar', body: 'Trabaja con un equipo local real que contesta el teléfono y respalda el trabajo.' },
        { title: 'Bilingües por diseño', body: 'Atención en inglés y español para que más clientes—y familias—se sientan incluidos.' },
      ],
      ctaTitle: '¿Listo para una cotización o consulta?',
      ctaDesc: 'Cuéntenos sobre su proyecto del hogar o su meta de crecimiento. Respondemos rápido con los siguientes pasos.',
      ctaNote: '¿Prefiere hablar primero? Llame o envíe un mensaje—lo mantenemos simple.',
    },

    homeServices: {
      eyebrow: 'Mejoras del hogar',
      title: 'Servicios para el hogar que protegen y mejoran su propiedad',
      lead:
        'Desde reparaciones cotidianas hasta renovaciones y remodelación, KTS ofrece trabajo limpio y plazos claros—para que su hogar se sienta mejor y conserve su valor.',
      ctaQuote: 'Solicitar cotización del hogar',
      servicesTitle: 'Qué cubrimos',
      services: [
        {
          title: 'Reparaciones del hogar',
          desc: 'Arreglamos lo que está dañado—puertas, drywall, accesorios y los trabajos pequeños que se acumulan—bien hecho desde la primera vez.',
        },
        {
          title: 'Renovaciones',
          desc: 'Actualizamos habitaciones y superficies con mejoras prácticas que se ven intencionales y duran.',
        },
        {
          title: 'Remodelación',
          desc: 'Planificamos y ejecutamos cambios más grandes que mejoran cómo vive en el espacio.',
        },
        {
          title: 'Pisos',
          desc: 'Reparación, reemplazo o renovación de pisos para un hogar más limpio, seguro y pulido.',
        },
        {
          title: 'Pintura',
          desc: 'Pintura interior y exterior con preparación cuidadosa y un acabado profesional.',
        },
        {
          title: 'Mejoras de propiedad',
          desc: 'Proyectos de atractivo exterior, función y durabilidad que hacen la propiedad más fácil de disfrutar y rentar.',
        },
      ],
      benefitsTitle: 'Beneficios de trabajar con KTS',
      benefits: [
        'Cotizaciones y comunicación directas',
        'Mano de obra enfocada en la calidad',
        'Respeto por su hogar y su horario',
        'Un equipo que también puede apoyar su negocio en línea cuando lo necesite',
      ],
      whyTitle: 'Por qué elegir KTS para su hogar',
      whyBody:
        'Tratamos los proyectos del hogar como inversiones—no solo tareas. Recibe recomendaciones prácticas, seguimiento confiable y un socio que explica las opciones en lenguaje claro.',
      whyPoints: [
        'Servicio local y responsable',
        'Experiencia en propiedades y trabajos reales',
        'Comunicación en inglés y español',
      ],
      quoteTitle: 'Solicite una cotización para su proyecto',
      quoteDesc: 'Cuéntenos qué necesita reparar, renovar o remodelar. Confirmaremos detalles y agendaremos.',
      contactTitle: '¿Prefiere hablar?',
      contactDesc: 'Llame o escriba y le ayudamos a decidir el siguiente paso.',
    },

    business: {
      eyebrow: 'Crecimiento empresarial',
      title: 'Sitios web que ayudan a su negocio a conseguir más clientes',
      lead:
        'Construimos bases digitales que generan llamadas, citas y confianza—no solo páginas bonitas. Cada recomendación apunta al crecimiento de negocios locales.',
      ctaStrategy: 'Agendar llamada de estrategia',
      ctaQuote: 'Solicitar cotización de crecimiento',
      outcomesTitle: 'Lo que gana',
      outcomes: [
        { title: 'Más clientes calificados', body: 'Ofertas claras y caminos de contacto para que sepan cómo llegar a usted.' },
        { title: 'Un sitio que funciona en el celular', body: 'Páginas rápidas y legibles, pensadas para cómo la gente busca y llama.' },
        { title: 'Más visibilidad local', body: 'SEO y Google Business Profile para que los clientes cercanos lo encuentren.' },
        { title: 'Menos trabajo repetitivo', body: 'Automatización que captura consultas y mantiene el seguimiento constante.' },
      ],
      demosTitle: 'Demos de sitios web',
      demosLead: 'Ejemplos de sitios para negocios locales—revise las muestras e imagine su marca aquí.',
      demosPrev: 'Demo anterior',
      demosNext: 'Siguiente demo',
      demos: [
        {
          label: 'Taller de auto',
          caption: 'Apex Auto — sitio enfocado en leads para reparación de autos',
          src: '/demos/auto-shop.jpg',
          alt: 'Demo de sitio web para un taller de autos',
        },
        {
          label: 'Contratistas',
          caption: 'Ridgeway Exteriors — sitio para contratista de power washing',
          src: '/demos/contractors.jpg',
          alt: 'Demo de sitio web para un contratista de power washing',
        },
      ],
      servicesTitle: 'Servicios de crecimiento',
      services: [
        {
          title: 'Desarrollo de sitios web',
          desc: 'Sitios modernos que explican lo que hace, generan confianza y convierten visitantes en clientes.',
        },
        {
          title: 'Sitios bilingües inglés y español',
          desc: 'Llegue a ambos públicos con opciones de idioma claras—hechos para mercados locales reales.',
        },
        {
          title: 'SEO local',
          desc: 'Mejoras en la página y en búsquedas locales para aparecer cuando alguien cerca necesita su servicio.',
        },
        {
          title: 'Optimización de Google Business Profile',
          desc: 'Fotos, categorías, publicaciones y detalles que convierten búsquedas en el mapa en llamadas.',
        },
        {
          title: 'Automatización con IA',
          desc: 'Automatización práctica para capturar leads, recordatorios y comunicación rutinaria con clientes.',
        },
        {
          title: 'Mejora de presencia en línea',
          desc: 'Ajuste su huella digital para que su marca se vea consistente y profesional en todas partes.',
        },
      ],
      industriesTitle: 'Industrias que atendemos',
      industries: [
        'Talleres de auto',
        'Contratistas',
        'Techadores',
        'Jardinería / landscaping',
        'Empresas de limpieza',
        'Restaurantes',
        'Barberías',
      ],
      pricingTitle: 'Paquetes de sitio web',
      pricingNote:
        'Elija el nivel que se ajuste a dónde está su negocio hoy. El alcance final se confirma antes de comenzar.',
      pricing: [
        {
          name: 'Starter',
          price: '$700 – $900',
          detail:
            'Ideal para negocios nuevos y profesionales de servicio que quieren una presencia en línea profesional.',
          features: [
            '1–3 páginas',
            'Diseño optimizado para móvil',
            'Formulario de contacto',
            'SEO local básico',
            'Configuración de indexación en Google',
            'Integración con redes sociales',
            'Captura profesional de leads',
          ],
          bestFor: 'Ideal para: contratistas, startups, oficios y proveedores de servicios locales.',
        },
        {
          name: 'Growth',
          price: '$1,200 – $1,500',
          detail:
            'Pensado para negocios que quieren una presencia más fuerte y más consultas de clientes.',
          features: [
            '5–7 páginas personalizadas',
            'Diseño optimizado para móvil',
            'Formularios de contacto',
            'Integración con Google Maps',
            'Sección de reseñas de clientes',
            'Galería de imágenes',
            'Configuración SEO',
            'Diseño enfocado en conversión',
            'Optimización de llamadas a la acción',
          ],
          bestFor:
            'Ideal para: talleres de auto, restaurantes, landscaping, barberías y negocios locales establecidos.',
          highlighted: true,
        },
        {
          name: 'Premium',
          price: 'Desde $2,000',
          detail:
            'Para negocios que quieren automatización, comodidad para el cliente y mejores tasas de conversión.',
          features: [
            'Todo lo de Growth',
            'Sistema de reservas en línea',
            'Integración con CRM',
            'Automatizaciones de flujo de trabajo',
            'Gestión de leads',
            'Funciones personalizadas',
            'Base SEO avanzada',
            'Configuración de analítica y seguimiento',
          ],
          bestFor: 'Ideal para: negocios en crecimiento que necesitan sistemas, automatización y escalabilidad.',
        },
      ],
      depositTitle: 'Política de depósito',
      depositBody:
        'Para proteger a ambas partes y mantener los proyectos en marcha, pedimos un depósito antes de comenzar. Opciones típicas: 50% al inicio y 50% al completar, o un depósito mínimo de $500. Sin depósito = sin proyecto.',
      leadTitle: 'Diseñado para generar leads',
      leadItems: [
        'Llamadas a la acción claras en cada página clave',
        'Optimización móvil para el tráfico de búsqueda',
        'Formularios y clic para llamar que reducen fricción',
        'Preparados para seguimiento de llamadas y medir lo que funciona',
      ],
      strategyTitle: 'Agende una llamada de estrategia',
      strategyDesc:
        'Revisamos su presencia en línea actual y trazamos el camino más rápido hacia más clientes—sin jerga, solo un plan.',
      contactTitle: 'Inicie la conversación',
      contactDesc: 'Solicite una cotización o una llamada de estrategia. Responderemos con pasos claros.',
    },

    footer: {
      tagline: 'Soluciones para hogares y negocios que quieren crecer.',
      rights: 'Todos los derechos reservados.',
    },
  },
}

export function getInitialLang() {
  const saved = localStorage.getItem('kts.lang')
  if (saved === 'en' || saved === 'es') return saved
  const nav = (navigator.language || '').toLowerCase()
  return nav.startsWith('es') ? 'es' : 'en'
}
