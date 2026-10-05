import React from "react";
import "./App.css";

/* =========================================================
   HELPERS
   ========================================================= */

const thumb = (url) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200`;

const placeholder = (label) =>
  `https://dummyimage.com/1200x700/e6e9f5/1a1f36.png&text=${encodeURIComponent(
    label
  )}`;

const logoPlaceholder = (label) =>
  `https://dummyimage.com/400x220/f4f6ff/1a1f36.png&text=${encodeURIComponent(
    label
  )}`;

const createProject = ({
  title,
  type,
  href = null,
  image,
  imageFit = "cover",
  bullets = [],
}) => ({
  title,
  type,
  href,
  image: image || (href ? thumb(href) : placeholder(title)),
  fallbackImage: placeholder(title),
  imageFit,
  bullets,
});

/* =========================================================
   REUSABLE COMPONENTS
   ========================================================= */

function RemoteImg({
  src,
  alt,
  fallbackSrc,
  className,
  style,
  fit = "contain",
  loading = "lazy",
}) {
  const handleError = (event) => {
    if (!fallbackSrc) return;

    const image = event.currentTarget;

    if (image.src === fallbackSrc) return;

    image.onerror = null;
    image.src = fallbackSrc;
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={handleError}
      data-fit={fit}
    />
  );
}

function ExternalLink({
  href,
  children,
  className,
  title,
  ariaLabel,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={className}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function InfoCard({ title, meta, items }) {
  return (
    <article className="card">
      <h3>{title}</h3>

      <p className="card-meta">{meta}</p>

      <ul>
        {items.map((item, index) => (
          <li key={`${title}-${index}`}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function TechLogo({ technology }) {
  return (
    <ExternalLink
      href={technology.href}
      className="tech-link"
      title={`Open ${technology.alt} website`}
      ariaLabel={`Open ${technology.alt} official website`}
    >
      <RemoteImg
        src={technology.src}
        alt={technology.alt}
        fallbackSrc={logoPlaceholder(technology.alt)}
        style={
          technology.h
            ? {
                height: technology.h,
              }
            : undefined
        }
        className="tech-logo"
        fit="contain"
      />
    </ExternalLink>
  );
}

function TechGroup({ technologies, className = "" }) {
  return (
    <div className={`tech-logos ${className}`.trim()}>
      {technologies.map((technology) => (
        <TechLogo
          key={technology.alt}
          technology={technology}
        />
      ))}
    </div>
  );
}

function ProjectContent({ project }) {
  return (
    <>
      <div className="project-image">
        <RemoteImg
          src={project.image}
          alt={`${project.title} screenshot`}
          fallbackSrc={project.fallbackImage}
          className="project-cover"
          fit={project.imageFit}
        />
      </div>

      <div className="project-body">
        <h3>{project.title}</h3>

        <p className="project-type">
          {project.type}
        </p>

        <ul>
          {project.bullets.map((bullet, index) => (
            <li key={`${project.title}-${index}`}>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function ProjectCard({ project }) {
  if (!project.href) {
    return (
      <article className="project">
        <ProjectContent project={project} />
      </article>
    );
  }

  return (
    <ExternalLink
      href={project.href}
      className="project"
      title={`Open ${project.title}`}
      ariaLabel={`Open project ${project.title}`}
    >
      <ProjectContent project={project} />
    </ExternalLink>
  );
}

function ContactItem({
  icon,
  alt,
  href,
  label,
  external = true,
}) {
  const content = (
    <>
      <RemoteImg
        src={icon}
        alt={alt}
        fallbackSrc={logoPlaceholder(alt)}
        fit="contain"
      />

      <span>{label}</span>
    </>
  );

  if (external) {
    return (
      <div className="contact-item">
        <ExternalLink
          href={href}
          ariaLabel={`Open ${label}`}
        >
          {content}
        </ExternalLink>
      </div>
    );
  }

  return (
    <div className="contact-item">
      <a href={href}>
        {content}
      </a>
    </div>
  );
}

/* =========================================================
   PROFILE
   ========================================================= */

const PROFILE = {
  fullName: "Vincent Desmouceaux",

  headline:
    "Machine Learning Engineer | Full-Stack Developer",

  location: "Paris, France",

  summary: [
    "I build data-driven products and automation pipelines, from data preparation to production deployment.",

    "Currently pursuing a Data Scientist Machine Learning program (OpenClassrooms) and strengthening my MLOps + cloud deployment skills through hands-on projects.",

    "Open to remote and on-site opportunities.",
  ],

  avatarUrl:
    "https://github.com/VincentDesmouceaux.png",

  avatarFallback:
    "https://ui-avatars.com/api/?name=Vincent+Desmouceaux&background=0b0b2a&color=ffffff&size=240",
};

/* =========================================================
   LINKS
   ========================================================= */

const LINKS = [
  {
    label: "LinkedIn",
    href:
      "https://www.linkedin.com/in/vincent-desmouceaux-277b3b244/",
  },
  {
    label: "GitHub",
    href:
      "https://github.com/VincentDesmouceaux",
  },
];

/* =========================================================
   EDUCATION
   ========================================================= */

const EDUCATION = [
  {
    title:
      "Data Scientist Machine Learning (in progress)",

    org: "OpenClassrooms",

    period: "2025 – present",

    details: [
      "Advanced data analysis and business predictions with machine learning.",

      "End-to-end projects: problem framing, data prep, modeling, evaluation, and deployment.",

      "Focus areas: ML, Deep Learning, NLP/RAG, MLOps, cloud deployment.",
    ],
  },

  {
    title:
      "Application Developer (Python & Django)",

    org: "OpenClassrooms",

    period: "2023 – 2025",

    details: [
      "Web apps and APIs with Python/Django, scalable backend practices.",
    ],
  },

  {
    title:
      "Full-Stack JavaScript Web & Mobile (MERN)",

    org: "Le Réacteur",

    period: "2022",

    details: [
      "MongoDB, Express, React, Node.js (web + mobile fundamentals).",
    ],
  },
];

/* =========================================================
   EXPERIENCE
   ========================================================= */

const EXPERIENCE = [
  {
    role:
      "Machine Learning Engineer (Apprenticeship)",

    company: "MediaBy",

    location: "Paris",

    period: "2024 – 2025",

    bullets: [
      "Maintained ML pipelines orchestrated by Node.js and scheduled with PM2/CRON.",

      "Monitoring, bug fixes, stability and performance improvements for automated jobs.",
    ],
  },

  {
    role:
      "Backend Developer / Traffic Manager (Apprenticeship)",

    company: "TradeSpotting",

    location: "Paris",

    period: "2023 – 2024",

    bullets: [
      "Technical implementation of marketing campaigns and tracking plans.",

      "Hands-on with GTM, Meta, Xandr, TikTok and proprietary tools.",
    ],
  },
];

/* =========================================================
   PROJECTS
   ========================================================= */

const PROJECTS = [
  createProject({
    title:
      "ThermoVision – Video Heatmap Processor",

    type:
      "Machine Learning / Computer Vision project",

    href:
      "https://p01--thermovision-video-api--5rcbdjs6tgqv.code.run/",

    bullets: [
      "Video processing with Python, OpenCV and NumPy",
      "Pseudo-thermal heatmap generation",
      "Configurable image-processing parameters",
      "Production deployment on Northflank",
    ],
  }),

  createProject({
    title:
      "Kerosene Flight Optimisator",

    type:
      "Machine Learning / Data Science project",

    href:
      "https://p01--kerozene--5rcbdjs6tgqv.code.run/",

    bullets: [
      "Aircraft fuel optimisation simulation",
      "Multi-aircraft comparison",
      "Weather and wind parameter integration",
      "Python application deployed on Northflank",
    ],
  }),

  createProject({
    title: "Cafe with a Vue",

    type: "Front-End project",

    href:
      "https://cafewithavue.netlify.app/",

    bullets: [
      "Using the Vue.js framework",
      "Data recovery",
      "Order cart",
    ],
  }),

  createProject({
    title: "Search bar module",

    type: "Front-End project",

    href:
      "https://mysearchbar-vd.netlify.app/",

    bullets: [
      "Operation of three APIs",
      "Autocomplete search",
    ],
  }),

  createProject({
    title:
      "The Photographer Portfolio",

    type: "Front-End project",

    href:
      "https://photographer-by-vd.netlify.app/",

    bullets: [
      "Mastery of the basics of HTML5 and CSS3",
    ],
  }),

  createProject({
    title: "Deliveroo Web",

    type: "Front-End project",

    href:
      "https://deliveroo-by-vincent.netlify.app/",

    bullets: [
      "Data recovery",
      "Order cart",
    ],
  }),

  createProject({
    title: "Tripadvisor Web",

    type: "Front-End project",

    href:
      "https://tripadvisor-by-vincent.netlify.app/",

    bullets: [
      "Photo carousel",
      "Automated sending of emails",
    ],
  }),

  createProject({
    title: "Netflix Web",

    type: "Front-End project",

    href:
      "https://main--flix-net-vd.netlify.app/",

    bullets: [
      "Photo carousel",
      "Operation of an API",
    ],
  }),

  createProject({
    title: "Vinted Web",

    type: "Full-Stack project",

    href:
      "https://vinted-vincent.netlify.app/",

    bullets: [
      "Registration / login",
      "Data recovery",
      "Posting",
      "Announcements",
      "Search bar",
      "Payment",
      "Photo upload",
    ],
  }),

  createProject({
    title: "Rawg Web",

    type: "Full-Stack project",

    href:
      "https://rawg-by-vincent.netlify.app/",

    bullets: [
      "Registration / login",
      "Operation of an API",
      "Search bar",
      "Filters",
    ],
  }),

  createProject({
    title: "Airbnb Mobile",

    type: "Full-Stack project",

    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",

    imageFit: "contain",

    bullets: [
      "Registration / login",
      "Editing the user profile",
      "Map display",
      "Geolocation",
      "Access to the image gallery",
      "Access to the camera",
    ],
  }),
];

/* =========================================================
   TECHNOLOGIES
   Every technology links to its official website/docs.
   ========================================================= */

const TECHNOLOGIES = [
  {
    src:
      "https://www.logiquetechno.com/wp-content/uploads/2022/12/logo-python-1024x576.png",

    alt: "Python",

    href:
      "https://www.python.org/",

    h: 130,

    primary: true,
  },

  {
    src:
      "https://raw.githubusercontent.com/Unitech/pm2/master/pres/pm2-v4.png",

    alt: "PM2",

    href:
      "https://pm2.keymetrics.io/",

    h: 95,

    primary: true,
  },

  {
    src:
      "https://i0.wp.com/www.opengis.ch/wp-content/uploads/2020/04/django-python-logo.png?w=500&ssl=1",

    alt: "Django",

    href:
      "https://www.djangoproject.com/",

    h: 130,

    primary: true,
  },

  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",

    alt: "React",

    href:
      "https://react.dev/",

    h: 100,
  },

  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",

    alt: "MongoDB",

    href:
      "https://www.mongodb.com/",

    h: 90,
  },

  {
    src:
      "https://cdn.icon-icons.com/icons2/2415/PNG/512/vuejs_original_wordmark_logo_icon_146305.png",

    alt: "Vue.js",

    href:
      "https://vuejs.org/",

    h: 95,
  },

  {
    src:
      "https://raw.githubusercontent.com/jsx-ir/logo/master/jsx.png",

    alt: "JSX",

    href:
      "https://react.dev/learn/writing-markup-with-jsx",

    h: 95,
  },

  {
    src:
      "https://blog.nashtechglobal.com/wp-content/uploads/2025/08/image-33-1024x576.png",

    alt: "Expo",

    href:
      "https://expo.dev/",

    h: 110,
  },

  {
    src:
      "https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png",

    alt: "GitHub",

    href:
      "https://github.com/",

    h: 95,
  },

  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png",

    alt: "Visual Studio Code",

    href:
      "https://code.visualstudio.com/",

    h: 95,
  },

  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/langfr-1024px-Node.js_logo.svg.png",

    alt: "Node.js",

    href:
      "https://nodejs.org/",

    h: 95,
  },

  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg",

    alt: "Netlify",

    href:
      "https://www.netlify.com/",

    h: 90,
  },

  {
    src:
      "https://sabbiabianca.fr/wp-content/uploads/2020/12/paiement-securise-caymeric.png",

    alt: "Stripe",

    href:
      "https://stripe.com/",

    h: 95,
  },

  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/b/b0/Cloudinary_logo_blue_0720_2x.png",

    alt: "Cloudinary",

    href:
      "https://cloudinary.com/",

    h: 80,
  },

  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Android_Studio_Trademark.svg",

    alt: "Android Studio",

    href:
      "https://developer.android.com/studio",

    h: 80,
  },

  {
    src:
      "https://logos-download.com/wp-content/uploads/2020/06/Postman_Logo.png",

    alt: "Postman",

    href:
      "https://www.postman.com/",

    h: 85,
  },

  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/d/d1/Axios_%28computer_library%29_logo.svg",

    alt: "Axios",

    href:
      "https://axios-http.com/",

    h: 70,
  },

  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",

    alt: "JavaScript",

    href:
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",

    h: 85,
  },

  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",

    alt: "HTML5",

    href:
      "https://developer.mozilla.org/en-US/docs/Web/HTML",

    h: 85,
  },

  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",

    alt: "CSS3",

    href:
      "https://developer.mozilla.org/en-US/docs/Web/CSS",

    h: 85,
  },

  {
    src:
      "https://flask-fr.readthedocs.io/_images/flask-logo.png",

    alt: "Flask",

    href:
      "https://flask.palletsprojects.com/",

    h: 110,
  },

  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZH3UFCZ7zd0NUhS80jxTYqgS892f2yp7UKA&s",

    alt: "Northflank",

    href:
      "https://northflank.com/",

    h: 110,
  },

  {
    src:
      "https://www.bocasay.com/wp-content/uploads/2020/03/MERN-stack.png",

    alt: "MERN Stack",

    href:
      "https://www.mongodb.com/resources/languages/mern-stack",

    h: 110,
  },

  {
    src:
      "https://www.okoone.com/wp-content/uploads/2024/06/mariaDB-logo.png",

    alt: "MariaDB",

    href:
      "https://mariadb.org/",

    h: 110,
  },

  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/PhpMyAdmin_logo.png",

    alt: "phpMyAdmin",

    href:
      "https://www.phpmyadmin.net/",

    h: 110,
  },

  {
    src:
      "https://static.macupdate.com/products/26593/l/xquartz-logo.webp?v=1670848209",

    alt: "XQuartz",

    href:
      "https://www.xquartz.org/",

    h: 110,
  },
];

const PRIMARY_TECHNOLOGIES =
  TECHNOLOGIES.filter(
    (technology) => technology.primary
  );

const SECONDARY_TECHNOLOGIES =
  TECHNOLOGIES.filter(
    (technology) => !technology.primary
  );

/* =========================================================
   CONTACT
   ========================================================= */

const CONTACT = {
  email:
    "desmontvincent@gmail.com",

  linkedin:
    "https://www.linkedin.com/in/vincent-desmouceaux-277b3b244/",

  github:
    "https://github.com/VincentDesmouceaux",

  icons: {
    mail:
      "https://www.svgrepo.com/show/522935/mail.svg",

    linkedin:
      "https://www.svgrepo.com/show/521725/linkedin.svg",

    github:
      "https://www.svgrepo.com/show/512317/github-142.svg",
  },
};

/* =========================================================
   APP
   ========================================================= */

function App() {
  return (
    <div className="app">

      <header className="header">

        <div className="header-inner">

          <div>
            <h1 className="title">
              {PROFILE.fullName}
            </h1>

            <p className="subtitle">
              {PROFILE.headline}
            </p>

            <p className="meta">
              {PROFILE.location}
            </p>
          </div>

          <div className="header-media">
            <RemoteImg
              className="profile-pic"
              src={PROFILE.avatarUrl}
              alt={`Portrait of ${PROFILE.fullName}`}
              fallbackSrc={PROFILE.avatarFallback}
              fit="cover"
              loading="eager"
            />
          </div>

        </div>

        <nav
          className="nav"
          aria-label="Portfolio navigation"
        >
          <a href="#about-me">
            About me
          </a>

          <a href="#education">
            Education
          </a>

          <a href="#experience">
            Experience
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>
        </nav>

      </header>

      <main className="main">

        <Section
          id="about-me"
          title="About me"
        >
          <div className="about">

            <div className="about-text">

              <p className="about-lead">

                <strong>
                  {PROFILE.fullName}
                </strong>

                <br />

                <span className="muted">
                  {PROFILE.headline}
                </span>

                {" — "}

                {PROFILE.location}

              </p>

              {PROFILE.summary.map(
                (paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                )
              )}

              <div className="links">

                {LINKS.map((link) => (
                  <ExternalLink
                    key={link.label}
                    href={link.href}
                    ariaLabel={`Open ${link.label}`}
                  >
                    {link.label}
                  </ExternalLink>
                ))}

              </div>

            </div>

            <div className="about-gifs">

              <RemoteImg
                className="gif"
                src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"
                alt="Computer animation"
                fallbackSrc={logoPlaceholder(
                  "computer gif"
                )}
                fit="cover"
              />

              <RemoteImg
                className="gif"
                src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif"
                alt="Developer animation"
                fallbackSrc={logoPlaceholder(
                  "developer gif"
                )}
                fit="cover"
              />

            </div>

          </div>
        </Section>

        <Section
          id="education"
          title="Education"
        >

          <div className="cards">

            {EDUCATION.map((education) => (
              <InfoCard
                key={education.title}
                title={education.title}
                meta={`${education.org} — ${education.period}`}
                items={education.details}
              />
            ))}

          </div>

          <TechGroup
            technologies={
              PRIMARY_TECHNOLOGIES
            }
            className="tech-logos-primary"
          />

          <TechGroup
            technologies={
              SECONDARY_TECHNOLOGIES
            }
            className="tech-logos-secondary"
          />

        </Section>

        <Section
          id="experience"
          title="Experience"
        >

          <div className="cards">

            {EXPERIENCE.map((experience) => (
              <InfoCard
                key={`${experience.company}-${experience.role}`}
                title={experience.role}
                meta={`${experience.company} — ${experience.location} — ${experience.period}`}
                items={experience.bullets}
              />
            ))}

          </div>

        </Section>

        <Section
          id="projects"
          title="Machine Learning & Software Projects"
        >

          <div className="projects">

            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}

          </div>

        </Section>

        <Section
          id="contact"
          title="Contact"
        >

          <div className="contact">

            <ContactItem
              icon={CONTACT.icons.mail}
              alt="Email"
              href={`mailto:${CONTACT.email}`}
              label={CONTACT.email}
              external={false}
            />

            <ContactItem
              icon={CONTACT.icons.linkedin}
              alt="LinkedIn"
              href={CONTACT.linkedin}
              label="LinkedIn"
            />

            <ContactItem
              icon={CONTACT.icons.github}
              alt="GitHub"
              href={CONTACT.github}
              label="GitHub"
            />

          </div>

        </Section>

      </main>

      <footer className="footer">

        <p>
          Portfolio — {PROFILE.fullName}
        </p>

        <p>
          Built with React
        </p>

        <p>
          {new Date().getFullYear()}
        </p>

      </footer>

    </div>
  );
}

export default App;
