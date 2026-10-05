import React from "react";

import "./App.css";

/**
 * Screenshot provider.
 * If a screenshot fails, we fallback to a generated placeholder image.
 */
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

const safeSetFallback = (e, fallbackSrc) => {
  if (e.currentTarget.src !== fallbackSrc) {
    e.currentTarget.src = fallbackSrc;
  }
};

function RemoteImg({
  src,
  alt,
  fallbackSrc,
  className,
  style,
  fit = "contain",
  loading = "lazy",
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={(e) => fallbackSrc && safeSetFallback(e, fallbackSrc)}
      data-fit={fit}
    />
  );
}

const PROFILE = {
  fullName: "Vincent Desmouceaux",
  headline: "Machine Learning Engineer | Full-Stack Developer",
  location: "Paris, France",
  summary: [
    "I build data-driven products and automation pipelines, from data preparation to production deployment.",
    "Currently pursuing a Data Scientist Machine Learning program (OpenClassrooms) and strengthening my MLOps + cloud deployment skills through hands-on projects.",
    "Open to remote and on-site opportunities.",
  ],
  avatarUrl: "https://github.com/VincentDesmouceaux.png",
  avatarFallback:
    "https://ui-avatars.com/api/?name=Vincent+Desmouceaux&background=0b0b2a&color=ffffff&size=240",
};

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vincent-desmouceaux-277b3b244/",
  },
  {
    label: "GitHub",
    href: "https://github.com/VincentDesmouceaux",
  },
];

const EDUCATION = [
  {
    title: "Data Scientist Machine Learning (in progress)",
    org: "OpenClassrooms",
    period: "2025 – present",
    details: [
      "Advanced data analysis and business predictions with machine learning.",
      "End-to-end projects: problem framing, data prep, modeling, evaluation, and deployment.",
      "Focus areas: ML, Deep Learning, NLP/RAG, MLOps, cloud deployment.",
    ],
  },
  {
    title: "Application Developer (Python & Django)",
    org: "OpenClassrooms",
    period: "2023 – 2025",
    details: [
      "Web apps and APIs with Python/Django, scalable backend practices.",
    ],
  },
  {
    title: "Full-Stack JavaScript Web & Mobile (MERN)",
    org: "Le Réacteur",
    period: "2022",
    details: [
      "MongoDB, Express, React, Node.js (web + mobile fundamentals).",
    ],
  },
];

const EXPERIENCE = [
  {
    role: "Machine Learning Engineer (Apprenticeship)",
    company: "MediaBy",
    location: "Paris",
    period: "2024 – 2025",
    bullets: [
      "Maintained ML pipelines orchestrated by Node.js and scheduled with PM2/CRON.",
      "Monitoring, bug fixes, stability and performance improvements for automated jobs.",
    ],
  },
  {
    role: "Backend Developer / Traffic Manager (Apprenticeship)",
    company: "TradeSpotting",
    location: "Paris",
    period: "2023 – 2024",
    bullets: [
      "Technical implementation of marketing campaigns and tracking plans.",
      "Hands-on with GTM, Meta, Xandr, TikTok and proprietary tools.",
    ],
  },
];

const PROJECTS = [
  {
    title: "ThermoVision – Video Heatmap Processor",
    type: "Machine Learning / Computer Vision project",
    href: "https://p01--thermovision-video-api--5rcbdjs6tgqv.code.run/",
    image: thumb(
      "https://p01--thermovision-video-api--5rcbdjs6tgqv.code.run/"
    ),
    fallbackImage: placeholder("ThermoVision"),
    imageFit: "cover",
    bullets: [
      "Video processing with Python, OpenCV and NumPy",
      "Pseudo-thermal heatmap generation",
      "Configurable image-processing parameters",
      "Production deployment on Northflank",
    ],
  },
  {
    title: "Kerosene Flight Optimisator",
    type: "Machine Learning / Data Science project",
    href: "https://p01--kerozene--5rcbdjs6tgqv.code.run/",
    image: thumb("https://p01--kerozene--5rcbdjs6tgqv.code.run/"),
    fallbackImage: placeholder("Kerosene Flight Optimisator"),
    imageFit: "cover",
    bullets: [
      "Aircraft fuel optimisation simulation",
      "Multi-aircraft comparison",
      "Weather and wind parameter integration",
      "Python application deployed on Northflank",
    ],
  },
  {
    title: "Cafe with a Vue",
    type: "Front-End project",
    href: "https://cafewithavue.netlify.app/",
    image: thumb("https://cafewithavue.netlify.app/"),
    fallbackImage: placeholder("Cafe with a Vue"),
    imageFit: "cover",
    bullets: ["Using the Vue.js framework", "Data recovery", "Order cart"],
  },
  {
    title: "Search bar module",
    type: "Front-End project",
    href: "https://mysearchbar-vd.netlify.app/",
    image: thumb("https://mysearchbar-vd.netlify.app/"),
    fallbackImage: placeholder("Search bar module"),
    imageFit: "cover",
    bullets: ["Operation of three APIs", "Autocomplete search"],
  },
  {
    title: "The Photographer Portfolio",
    type: "Front-End project",
    href: "https://photographer-by-vd.netlify.app/",
    image: thumb("https://photographer-by-vd.netlify.app/"),
    fallbackImage: placeholder("The Photographer Portfolio"),
    imageFit: "cover",
    bullets: ["Mastery of the basics of HTML5 and CSS3"],
  },
  {
    title: "Deliveroo Web",
    type: "Front-End project",
    href: "https://deliveroo-by-vincent.netlify.app/",
    image: thumb("https://deliveroo-by-vincent.netlify.app/"),
    fallbackImage: placeholder("Deliveroo Web"),
    imageFit: "cover",
    bullets: ["Data recovery", "Order cart"],
  },
  {
    title: "Tripadvisor Web",
    type: "Front-End project",
    href: "https://tripadvisor-by-vincent.netlify.app/",
    image: thumb("https://tripadvisor-by-vincent.netlify.app/"),
    fallbackImage: placeholder("Tripadvisor Web"),
    imageFit: "cover",
    bullets: ["Photo carousel", "Automated sending of emails"],
  },
  {
    title: "Netflix Web",
    type: "Front-End project",
    href: "https://main--flix-net-vd.netlify.app/",
    image: thumb("https://main--flix-net-vd.netlify.app/"),
    fallbackImage: placeholder("Netflix Web"),
    imageFit: "cover",
    bullets: ["Photo carousel", "Operation of an API"],
  },
  {
    title: "Vinted Web",
    type: "Full-Stack project",
    href: "https://vinted-vincent.netlify.app/",
    image: thumb("https://vinted-vincent.netlify.app/"),
    fallbackImage: placeholder("Vinted Web"),
    imageFit: "cover",
    bullets: [
      "Registration / login",
      "Data recovery",
      "Posting",
      "Announcements",
      "Search bar",
      "Payment",
      "Photo upload",
    ],
  },
  {
    title: "Rawg Web",
    type: "Full-Stack project",
    href: "https://rawg-by-vincent.netlify.app/",
    image: thumb("https://rawg-by-vincent.netlify.app/"),
    fallbackImage: placeholder("Rawg Web"),
    imageFit: "cover",
    bullets: [
      "Registration / login",
      "Operation of an API",
      "Search bar",
      "Filters",
    ],
  },
  {
    title: "Airbnb Mobile",
    type: "Full-Stack project",
    href: null,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    fallbackImage: placeholder("Airbnb Mobile"),
    imageFit: "contain",
    bullets: [
      "Registration / login",
      "Editing the user profile",
      "Map display",
      "Geolocation",
      "Access to the image gallery",
      "Access to the camera",
    ],
  },
];

const CONTACT = {
  email: "desmontvincent@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/vincent-desmouceaux-277b3b244/",
  github: "https://github.com/VincentDesmouceaux",
  icons: {
    mail: "https://www.svgrepo.com/show/522935/mail.svg",
    linkedin: "https://www.svgrepo.com/show/521725/linkedin.svg",
    github: "https://www.svgrepo.com/show/512317/github-142.svg",
  },
};

const TECH_LOGOS_GROUP_1 = [
  {
    src: "https://www.logiquetechno.com/wp-content/uploads/2022/12/logo-python-1024x576.png",
    alt: "Python",
    h: 130,
  },
  {
    src: "https://raw.githubusercontent.com/Unitech/pm2/master/pres/pm2-v4.png",
    alt: "PM2",
    h: 95,
  },
  {
    src: "https://i0.wp.com/www.opengis.ch/wp-content/uploads/2020/04/django-python-logo.png?w=500&ssl=1",
    alt: "Django",
    h: 130,
  },
];

const TECH_LOGOS_GROUP_2 = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "React",
    h: 100,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    alt: "MongoDB",
    h: 90,
  },
  {
    src: "https://cdn.icon-icons.com/icons2/2415/PNG/512/vuejs_original_wordmark_logo_icon_146305.png",
    alt: "Vue.js",
    h: 95,
  },
  {
    src: "https://raw.githubusercontent.com/jsx-ir/logo/master/jsx.png",
    alt: "JSX",
    h: 95,
  },
  {
    src: "https://blog.nashtechglobal.com/wp-content/uploads/2025/08/image-33-1024x576.png",
    alt: "Expo",
    h: 110,
  },
  {
    src: "https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png",
    alt: "GitHub",
    h: 95,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png",
    alt: "Visual Studio Code",
    h: 95,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/langfr-1024px-Node.js_logo.svg.png",
    alt: "Node.js",
    h: 95,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg",
    alt: "Netlify",
    h: 90,
  },
  {
    src: "https://sabbiabianca.fr/wp-content/uploads/2020/12/paiement-securise-caymeric.png",
    alt: "Stripe",
    h: 95,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Cloudinary_logo_blue_0720_2x.png",
    alt: "Cloudinary",
    h: 80,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/92/Android_Studio_Trademark.svg",
    alt: "Android Studio",
    h: 80,
  },
  {
    src: "https://logos-download.com/wp-content/uploads/2020/06/Postman_Logo.png",
    alt: "Postman",
    h: 85,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Axios_%28computer_library%29_logo.svg",
    alt: "Axios",
    h: 70,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript",
    h: 85,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
    alt: "HTML5",
    h: 85,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    alt: "CSS3",
    h: 85,
  },
  {
    src: "https://flask-fr.readthedocs.io/_images/flask-logo.png",
    alt: "Flask",
    h: 110,
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZH3UFCZ7zd0NUhS80jxTYqgS892f2yp7UKA&s",
    alt: "Northflank",
    h: 110,
  },
  {
    src: "https://www.bocasay.com/wp-content/uploads/2020/03/MERN-stack.png",
    alt: "MERN Stack",
    h: 110,
  },
  {
    src: "https://www.okoone.com/wp-content/uploads/2024/06/mariaDB-logo.png",
    alt: "MariaDB",
    h: 110,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/95/PhpMyAdmin_logo.png",
    alt: "phpMyAdmin",
    h: 110,
  },
  {
    src: "https://static.macupdate.com/products/26593/l/xquartz-logo.webp?v=1670848209",
    alt: "Quartz",
    h: 110,
  },
  {
    src: "https://i.ytimg.com/vi/fDEE_ymwdyw/maxresdefault.jpg",
    alt: "Node PM2",
    h: 110,
  },
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div>
            <h1 className="title">{PROFILE.fullName}</h1>
            <p className="subtitle">{PROFILE.headline}</p>
            <p className="meta">{PROFILE.location}</p>
          </div>

          <div className="header-media">
            <RemoteImg
              className="profile-pic"
              src={PROFILE.avatarUrl}
              alt="Portrait of Vincent Desmouceaux"
              fallbackSrc={PROFILE.avatarFallback}
              fit="cover"
              loading="eager"
            />
          </div>
        </div>

        <nav className="nav">
          <a href="#about-me">About me</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main">
        <Section id="about-me" title="About me">
          <div className="about">
            <div className="about-text">
              <p className="about-lead">
                <strong>{PROFILE.fullName}</strong>
                <br />
                <span className="muted">{PROFILE.headline}</span> —{" "}
                {PROFILE.location}
              </p>

              {PROFILE.summary.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}

              <div className="links">
                {LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="about-gifs">
              <RemoteImg
                className="gif"
                src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"
                alt="Computer animation"
                fallbackSrc={logoPlaceholder("computer gif")}
                fit="cover"
              />

              <RemoteImg
                className="gif"
                src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif"
                alt="Developer animation"
                fallbackSrc={logoPlaceholder("developer gif")}
                fit="cover"
              />
            </div>
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="cards">
            {EDUCATION.map((edu) => (
              <article key={edu.title} className="card">
                <h3>{edu.title}</h3>

                <p className="card-meta">
                  {edu.org} — <span>{edu.period}</span>
                </p>

                <ul>
                  {edu.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="tech-logos tech-logos-primary">
            {TECH_LOGOS_GROUP_1.map((logo) => (
              <RemoteImg
                key={`${logo.alt}-${logo.src}`}
                src={logo.src}
                alt={logo.alt}
                fallbackSrc={logoPlaceholder(logo.alt)}
                style={logo.h ? { height: logo.h } : undefined}
                className="tech-logo"
                fit="contain"
              />
            ))}
          </div>

          <div className="tech-logos tech-logos-secondary">
            {TECH_LOGOS_GROUP_2.map((logo) => (
              <RemoteImg
                key={`${logo.alt}-${logo.src}`}
                src={logo.src}
                alt={logo.alt}
                fallbackSrc={logoPlaceholder(logo.alt)}
                style={logo.h ? { height: logo.h } : undefined}
                className="tech-logo"
                fit="contain"
              />
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="cards">
            {EXPERIENCE.map((xp) => (
              <article
                key={`${xp.company}-${xp.role}`}
                className="card"
              >
                <h3>{xp.role}</h3>

                <p className="card-meta">
                  {xp.company} — {xp.location} —{" "}
                  <span>{xp.period}</span>
                </p>

                <ul>
                  {xp.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Machine Learning & Software Projects">
          <div className="projects">
            {PROJECTS.map((project) => {
              const content = (
                <>
                  <div className="project-image">
                    <RemoteImg
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fallbackSrc={project.fallbackImage}
                      className="project-cover"
                      fit={project.imageFit || "cover"}
                    />
                  </div>

                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p className="project-type">{project.type}</p>

                    <ul>
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </>
              );

              return project.href ? (
                <a
                  key={project.title}
                  className="project"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {content}
                </a>
              ) : (
                <div key={project.title} className="project">
                  {content}
                </div>
              );
            })}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="contact">
            <div className="contact-item">
              <RemoteImg
                src={CONTACT.icons.mail}
                alt="Email"
                fallbackSrc={logoPlaceholder("mail")}
                fit="contain"
              />

              <a href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
            </div>

            <div className="contact-item">
              <RemoteImg
                src={CONTACT.icons.linkedin}
                alt="LinkedIn"
                fallbackSrc={logoPlaceholder("linkedin")}
                fit="contain"
              />

              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
            </div>

            <div className="contact-item">
              <RemoteImg
                src={CONTACT.icons.github}
                alt="GitHub"
                fallbackSrc={logoPlaceholder("github")}
                fit="contain"
              />

              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <p>Portfolio — {PROFILE.fullName}</p>
        <p>Built with React</p>
        <p>{new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;