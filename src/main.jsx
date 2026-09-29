import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import * as THREE from "three";
import { gsap } from "gsap";
import "./styles.css";
import TechnicalSkills from "./TechnicalSkills.jsx";
import ProjectsSection from "./ProjectsSection.jsx";
import ContactSection from "./ContactSection.jsx";

const skills = {
  Languages: [
    ["Java", "Advanced", 88, "Java development and DSA practice"],
    ["Python", "Advanced", 90, "AI, ML, automation and data work"],
    ["C++", "Intermediate", 74, "Problem solving and core programming"],
    ["C", "Intermediate", 70, "Programming fundamentals"],
    ["SQL", "Intermediate", 78, "Queries, joins and analytics"],
    ["JavaScript", "Intermediate", 72, "Modern web development"]
  ],
  "AI / ML": [
    ["Machine Learning", "Intermediate", 84, "Model building and evaluation"],
    ["Deep Learning", "Intermediate", 80, "Neural networks and CNN workflows"],
    ["TensorFlow", "Intermediate", 78, "Deep learning model development"],
    ["PyTorch", "Intermediate", 74, "Computer vision and transforms"],
    ["OpenCV", "Intermediate", 70, "Computer vision applications"],
    ["NLP", "Beginner", 62, "Text processing and classification"]
  ],
  Development: [
    ["HTML", "Advanced", 90, "Semantic responsive interfaces"],
    ["CSS", "Advanced", 85, "Modern responsive UI and animation"],
    ["JavaScript", "Intermediate", 72, "Interactive web applications"],
    ["React", "Intermediate", 70, "Component-based frontend"],
    ["Vite", "Intermediate", 78, "Fast frontend tooling"],
    ["Tailwind CSS", "Intermediate", 75, "Utility-first UI development"]
  ],
  "Tools & Platforms": [
    ["Git", "Advanced", 90, "Version control"],
    ["GitHub", "Advanced", 88, "Repositories and collaboration"],
    ["VS Code", "Advanced", 92, "Primary development environment"],
    ["Streamlit", "Intermediate", 80, "Rapid data and ML apps"],
    ["Power BI", "Intermediate", 76, "Dashboards and visualization"],
    ["Jupyter", "Intermediate", 82, "Data exploration and notebooks"]
  ]
};

const marqueeSkills = [
  "Java", "Python", "C++", "C", "SQL", "JavaScript",
  "React", "Machine Learning", "TensorFlow", "PyTorch",
  "OpenCV", "Git", "GitHub", "Streamlit", "Power BI", "Jupyter"
];

const sectionIds = ["home", "about", "education", "skills", "projects", "contact"];

const projects = [
  {
    title: "AI Support Ticket Categorizer",
    desc: "NLP-powered ticket classification using TF-IDF and machine learning.",
    tags: ["NLP", "ML", "Python"],
    icon: "✦"
  },
  {
    title: "Predictive Forecasting Dashboard",
    desc: "Forecasting workflow for care-load and placement demand.",
    tags: ["Python", "ML", "Streamlit"],
    icon: "⌁"
  },
  {
    title: "Superstore Data Analytics",
    desc: "Data cleaning, EDA and interactive business visualization.",
    tags: ["Power BI", "DAX", "Analytics"],
    icon: "◫"
  },
  {
    title: "Driver Drowsiness Detection",
    desc: "Computer-vision based drowsiness detection prototype.",
    tags: ["Python", "OpenCV", "DL"],
    icon: "◉"
  },
  {
    title: "AI Video Detection Prototype",
    desc: "Video classification, anomaly detection and deepfake detection prototype.",
    tags: ["Python", "PyTorch", "OpenCV"],
    icon: "◌"
  }
];

function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const currentScroll = window.scrollY || document.documentElement.scrollTop;
            const progress = Math.min(1, Math.max(0, currentScroll / totalHeight));
            setScrollProgress(progress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="top-scroll-track" aria-hidden="true">
      <div 
        className="top-scroll-bar" 
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
    </div>
  );
}

function App() {
  const [active, setActive] = useState("home");
  const [intro, setIntro] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedEduDetail, setSelectedEduDetail] = useState(null);
  const cursorRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIntro(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // Prevent all scrolling while the welcome intro is active
  useEffect(() => {
    if (!intro) return;

    window.scrollTo(0, 0);

    const preventScroll = (e) => {
      e.preventDefault();
    };

    const preventKeys = (e) => {
      if (
        ["Space", "ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(e.code) ||
        [32, 33, 34, 35, 36, 38, 40].includes(e.keyCode)
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventKeys, { passive: false });

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeys);
    };
  }, [intro]);

  // Lock background scroll when intro, Explore More modal or Project modal is open
  useEffect(() => {
    if (intro || selectedEduDetail || selectedProject) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
      };
    }
  }, [intro, selectedEduDetail, selectedProject]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const spotlight = spotlightRef.current;
    if (!cursor) return;

    let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
    let x = tx, y = ty;
    let raf;

    const move = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    let lastTime = performance.now();
    const loop = (now) => {
      const currentTime = now || performance.now();
      const dt = Math.min((currentTime - lastTime) / 1000, 0.08);
      lastTime = currentTime;
      const factor = 1 - Math.exp(-18 * dt);
      x += (tx - x) * factor;
      y += (ty - y) * factor;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (spotlight) {
        spotlight.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sy = window.scrollY;
          const heroHeight = window.innerHeight || 800;
          if (sy < heroHeight * 1.5) {
            const progress = Math.min(Math.max(sy / (heroHeight * 0.75), 0), 1);
            document.documentElement.style.setProperty("--home-slide-y", `${-progress * 85}px`);
            document.documentElement.style.setProperty("--home-fade", "1");
            document.documentElement.style.setProperty("--home-scale", `${1 - progress * 0.05}`);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          setActive(id);
        },
        { rootMargin: "-35% 0px -55% 0px" }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const currentHash = window.location.hash.replace("#", "").trim();

    if (currentHash && currentHash !== "home") {
      window.history.replaceState(null, "", window.location.pathname);
      window.location.hash = "home";
    } else {
      window.history.replaceState(null, "", window.location.pathname);
      window.location.hash = "home";
    }

    setActive("home");
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".reveal-section");
    sections.forEach((section) => section.classList.add("is-revealed"));
  }, []);

  return (
    <>
      <ScrollProgressBar />
      <ThreeBackground />
      <AsciiRain />
      <div className={`intro ${intro ? "intro--active" : "intro--done"}`}>
        <div className="intro-word">
          <button
            className="intro-name"
            type="button"
            onClick={() => {
              setIntro(false);
              setActive("home");
              window.location.hash = "home";
            }}
            aria-label="Enter Sritharan's portfolio"
          >
            WELCOME
          </button>
        </div>
      </div>

      <div ref={spotlightRef} className="mouse-spotlight" aria-hidden="true" />
      <div ref={cursorRef} className="cursor-dot" aria-hidden="true" />

      <header className="nav">
        <a className="brand" href="#home" onClick={() => setActive("home")}>SRITHARAN R</a>
        <nav>
          {["home", "about", "education", "skills", "projects", "contact"].map((item) => (
            <a key={item} className={active === item ? "active" : ""} href={`#${item}`}>
              {item.toUpperCase()}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact">HIRE ME <span>↗</span></a>
      </header>

      <main>
        <section id="home" className="hero section-shell">
          <div className="availability"><span aria-hidden="true" />OPEN TO INTERNSHIPS & ENTRY-LEVEL JOBS</div>
          <div className="hero-copy">
            <div className="eyebrow">Hi, I am</div>
            <h1>SRITHARAN R</h1>
            <RoleCarousel />
            <div className="actions">
              <a className="button primary" href="#projects">VIEW MY WORK <span aria-hidden="true">↗</span></a>
              <a className="button secondary radial-reveal-button" href="/Sritharan-Resume.pdf" download="Sritharan-Resume.pdf">DOWNLOAD RESUME <span aria-hidden="true">↓</span></a>
            </div>
            <div className="social-heading"><span /> CONNECT WITH ME <span /></div>
            <div className="socials">
              <a href="https://www.linkedin.com/in/sritharan-ravi-31d2005/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.5a1.95 1.95 0 1 1 0 3.9 1.95 1.95 0 0 1 0-3.9ZM3.5 9h3.4v11.5H3.5V9Zm5.55 0h3.25v1.57h.05c.45-.86 1.56-1.77 3.21-1.77 3.43 0 4.07 2.25 4.07 5.18v6.52h-3.39v-5.78c0-1.38-.03-3.15-1.92-3.15-1.93 0-2.23 1.5-2.23 3.05v5.88H8.95V9Z" /></svg>
              </a>
              <a href="https://github.com/Sritharan2005" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.54 1.06 1.54 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.9c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.92.68 1.86 0 1.35-.01 2.44-.01 2.77 0 .27.18.6.69.49A10.22 10.22 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" /></svg>
              </a>
              <a href="https://wa.me/918072428883" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="#contact" aria-label="Contact via Email">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-ring ring-one" />
            <div className="hero-ring ring-two" />
            <div className="hero-platform" />
            <div className="portrait-wrap">
              <img src="/images/sritharan-profile.jpg" alt="Sritharan working at a laptop" />
            </div>
            <div className="hero-orb orb-a" />
            <div className="hero-orb orb-b" />
          </div>
          <a href="#about" className="scroll-cue" aria-label="Scroll to About section"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section id="about" className="section-shell about section-pad reveal-section reveal-section--about">
          <div className="about-grid">
            <div className="about-text">
              <div className="section-heading about-heading">
                <h2 className="section-title-main">
                  <span className="section-title-white">ABOUT</span>
                  <span className="section-title-cyan">ME</span>
                </h2>
                <div className="section-title-bar" />
              </div>

              <h3 className="about-bio-title">
                I am <span className="highlight-cyan">Sritharan R,</span>
              </h3>
              <p className="about-intro-p">
                A final year Computer Science Engineering (AI &amp; ML) undergraduate with hands-on
                experience building projects in Machine Learning, Deep Learning, Computer Vision, and
                Data Analysis. Comfortable working with Python, TensorFlow, PyTorch, Scikit-learn,
                Pandas, NumPy, OpenCV, and SQL. Interested in turning real-world problems into practical,
                data-driven solutions while continuously improving technical and problem-solving skills
                through hands-on projects. Seeking a full-time Software Engineer / AI Engineer role to apply my
                skills, contribute to impactful projects, and grow in the tech industry.
              </p>

              <div className="about-stat-cards">
                <div className="about-stat-card about-stat-card--teal">
                  <div className="about-stat-icon-wrap icon-teal">
                    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <div className="about-stat-content">
                    <div className="about-stat-title">4th Year</div>
                    <div className="about-stat-sub">B.E. CSE (AI &amp; ML)</div>
                  </div>
                </div>

                <div className="about-stat-card about-stat-card--blue">
                  <div className="about-stat-icon-wrap icon-blue">
                    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                      <line x1="14" y1="4" x2="10" y2="20" />
                    </svg>
                  </div>
                  <div className="about-stat-content">
                    <div className="about-stat-title">10+</div>
                    <div className="about-stat-sub">Real-World Projects</div>
                  </div>
                </div>

                <div className="about-stat-card about-stat-card--coral">
                  <div className="about-stat-icon-wrap icon-coral">
                    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                      <path d="M19 5l-5 5" />
                    </svg>
                  </div>
                  <div className="about-stat-content">
                    <div className="about-stat-title">Open to</div>
                    <div className="about-stat-sub">Full-time Opportunities</div>
                  </div>
                </div>
              </div>
            </div>

            <InteractiveIdeCard />
          </div>
        </section>

        <section id="education" className="section-shell section-pad education reveal-section reveal-section--education">
          <EducationExperienceSection onOpenDetail={setSelectedEduDetail} />
        </section>

        <section id="skills" className="section-shell section-pad skills reveal-section reveal-section--skills">
          <TechnicalSkills />
        </section>

        <section id="projects" className="section-shell section-pad projects reveal-section reveal-section--projects">
          <ProjectsSection onOpenProject={setSelectedProject} isModalOpen={Boolean(selectedProject)} />
        </section>

        <section id="contact" className="section-shell section-pad contact reveal-section reveal-section--contact">
          <ContactSection />
          <footer>
            <span>Designed &amp; Built by Sritharan</span>
            <div className="footer-links">
              <a href="https://www.linkedin.com/in/sritharan-ravi-31d2005/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="mailto:srirogu@gmail.com">Email</a>
              <a href="https://github.com/Sritharan2005" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </footer>
        </section>
      </main>

      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal glass" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project modal">✕</button>
            <span className="modal-kicker">REAL-WORLD PROJECT</span>
            <h2>{selectedProject.title}</h2>
            <p className="proj-modal-desc">{selectedProject.details?.overview || selectedProject.desc}</p>

            {selectedProject.details?.highlights && (
              <div className="proj-modal-highlights">
                <h4 className="proj-modal-subheading">Key Highlights</h4>
                <ul className="proj-modal-list">
                  {selectedProject.details.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            {(selectedProject.performance || selectedProject.details?.performance) && (
              <div className="proj-modal-perf-box">
                <h4 className="proj-modal-subheading">Performance</h4>
                <div className="proj-modal-perf-val">
                  {selectedProject.performance || selectedProject.details?.performance}
                </div>
              </div>
            )}

            <div className="proj-modal-tech-box">
              <h4 className="proj-modal-subheading">Technologies</h4>
              <div className="proj-modal-tags">
                {selectedProject.tags.map((t) => (
                  <span className="proj-modal-tag-pill" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-actions">
              <a className="button primary" href={selectedProject.github || "https://github.com/Sritharan2005"} target="_blank" rel="noreferrer">
                GITHUB ↗
              </a>
              <button className="button secondary" onClick={() => setSelectedProject(null)}>
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedEduDetail && (
        <div className="modal-backdrop" onClick={() => setSelectedEduDetail(null)}>
          <div className="edu-custom-modal" onClick={(e) => e.stopPropagation()}>
            <button className="edu-custom-close-btn" onClick={() => setSelectedEduDetail(null)} aria-label="Close modal">
              ✕
            </button>

            {selectedEduDetail.type === "internship" ? (
              <>
                {/* Top Hero Section: Title & Isometric 3D Laptop AI Visual */}
                <div className="edu-modal-hero">
                  <div className="edu-modal-hero-left">
                    <div className="edu-modal-tag-pill">2026</div>
                    <h2 className="edu-modal-main-title">
                      <span>Machine Learning </span><span className="edu-title-cyan">Internship</span>
                    </h2>
                    
                    <div className="edu-modal-inst-meta" style={{ marginTop: "12px" }}>
                      <div className="edu-meta-item">
                        <svg className="edu-meta-icon edu-icon-purple" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M14 10v11M12 2L2 7h20L12 2z"/>
                        </svg>
                        <span style={{ color: "#e2e8f0", fontWeight: "600" }}>Unified Mentor Pvt. Ltd.</span>
                      </div>
                      <div className="edu-meta-item">
                        <svg className="edu-meta-icon edu-icon-cyan" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>Remote &nbsp;|&nbsp; India</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Middle 3 Stat Cards */}
                <div className="edu-modal-stat-grid">
                  {/* Stat 1: DURATION */}
                  <div className="edu-modal-stat-card stat-teal">
                    <div className="edu-stat-icon-wrap icon-teal">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <div className="edu-stat-info">
                      <span className="edu-stat-kicker kicker-teal">DURATION</span>
                      <div className="edu-stat-val">
                        <span className="edu-val-cyan">3 Months</span>
                      </div>
                    </div>
                  </div>

                  {/* Stat 2: ROLE */}
                  <div className="edu-modal-stat-card stat-purple">
                    <div className="edu-stat-icon-wrap icon-purple">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </div>
                    <div className="edu-stat-info">
                      <span className="edu-stat-kicker kicker-purple">ROLE</span>
                      <div className="edu-stat-val edu-stat-val-med">
                        Machine Learning Intern
                      </div>
                    </div>
                  </div>

                  {/* Stat 3: MODE */}
                  <div className="edu-modal-stat-card stat-blue">
                    <div className="edu-stat-icon-wrap icon-blue">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M14 10v11M12 2L2 7h20L12 2z"/>
                      </svg>
                    </div>
                    <div className="edu-stat-info">
                      <span className="edu-stat-kicker kicker-blue">MODE</span>
                      <div className="edu-stat-val">
                        Remote
                      </div>
                      <span className="edu-stat-sub">India</span>
                    </div>
                  </div>
                </div>

                {/* Section 1: KEY RESPONSIBILITIES */}
                <div className="edu-modal-section-card">
                  <div className="edu-sec-icon-col">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5fe7cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="2" r="2" />
                    </svg>
                  </div>
                  <div className="edu-sec-content">
                    <h4 className="edu-sec-title">KEY RESPONSIBILITIES</h4>
                    <ul className="edu-modal-bullet-list">
                      <li className="edu-modal-bullet-item">
                        <span className="edu-bullet-dot" />
                        <span>Worked on ML model development and evaluation.</span>
                      </li>
                      <li className="edu-modal-bullet-item">
                        <span className="edu-bullet-dot" />
                        <span>Handled data preprocessing and analysis.</span>
                      </li>
                      <li className="edu-modal-bullet-item">
                        <span className="edu-bullet-dot" />
                        <span>Implemented models using Python and Scikit-learn.</span>
                      </li>
                      <li className="edu-modal-bullet-item">
                        <span className="edu-bullet-dot" />
                        <span>Worked on real-world datasets under mentor guidance.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Section 2: TOOLS & TECHNOLOGIES */}
                <div className="edu-modal-section-card">
                  <div className="edu-sec-icon-col">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5fe7cc" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </div>
                  <div className="edu-sec-content">
                    <h4 className="edu-sec-title">TOOLS & TECHNOLOGIES</h4>
                    <div className="edu-course-pills-wrap">
                      <span className="edu-course-pill pill-cyan">Python</span>
                      <span className="edu-course-pill pill-purple">Scikit-learn</span>
                      <span className="edu-course-pill pill-cyan">Pandas</span>
                      <span className="edu-course-pill pill-purple">NumPy</span>
                      <span className="edu-course-pill pill-blue">Matplotlib</span>
                    </div>
                  </div>
                </div>

                {/* Section 3: KEY LEARNINGS */}
                <div className="edu-modal-section-card sec-purple">
                  <div className="edu-sec-icon-col">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18h6M10 22h4M15 2a6 6 0 0 0-6 6c0 2.22 1.2 4.15 3 5.19V15a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1.81c1.8-1.04 3-2.97 3-5.19a6 6 0 0 0-6-6z" />
                    </svg>
                  </div>
                  <div className="edu-sec-content">
                    <h4 className="edu-sec-title">KEY LEARNINGS</h4>
                    <ul className="edu-modal-bullet-list">
                      <li className="edu-modal-bullet-item">
                        <span className="edu-bullet-dot dot-purple" />
                        <span>Gained hands-on experience in applying ML concepts to real-world problems.</span>
                      </li>
                      <li className="edu-modal-bullet-item">
                        <span className="edu-bullet-dot dot-purple" />
                        <span>Improved data analysis and model evaluation skills.</span>
                      </li>
                      <li className="edu-modal-bullet-item">
                        <span className="edu-bullet-dot dot-purple" />
                        <span>Understood end-to-end ML workflow.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            ) : (
              /* Education Modal */
              <>
                {/* Top Hero Section: Title & Isometric 3D Cap Visual */}
                <div className="edu-modal-hero">
                  <div className="edu-modal-hero-left">
                    <div className="edu-modal-tag-pill">2023 — PRESENT</div>
                    <h2 className="edu-modal-main-title">
                      <span>Educat</span><span className="edu-title-cyan">ion</span>
                    </h2>
                <h3 className="edu-modal-deg-title">B.E. Computer Science Engineering (AI & ML)</h3>
                
                <div className="edu-modal-inst-meta">
                  <div className="edu-meta-item">
                    <svg className="edu-meta-icon edu-icon-purple" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M14 10v11M12 2L2 7h20L12 2z"/>
                    </svg>
                    <span>Velalar College of Engineering and Technology</span>
                  </div>
                  <div className="edu-meta-item">
                    <svg className="edu-meta-icon edu-icon-cyan" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>Erode, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle 3 Stat Cards */}
            <div className="edu-modal-stat-grid">
              {/* Stat 1: Academic Status */}
              <div className="edu-modal-stat-card stat-teal">
                <div className="edu-stat-icon-wrap icon-teal">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div className="edu-stat-info">
                  <span className="edu-stat-kicker kicker-teal">ACADEMIC STATUS</span>
                  <div className="edu-stat-val">
                    <span>4th </span><span className="edu-val-cyan">Year</span>
                  </div>
                  <span className="edu-stat-sub">Undergraduate</span>
                </div>
              </div>

              {/* Stat 2: Specialization */}
              <div className="edu-modal-stat-card stat-purple">
                <div className="edu-stat-icon-wrap icon-purple">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <div className="edu-stat-info">
                  <span className="edu-stat-kicker kicker-purple">SPECIALIZATION</span>
                  <div className="edu-stat-val edu-stat-val-med">
                    Artificial Intelligence & Machine Learning
                  </div>
                </div>
              </div>

              {/* Stat 3: Duration */}
              <div className="edu-modal-stat-card stat-blue">
                <div className="edu-stat-icon-wrap icon-blue">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div className="edu-stat-info">
                  <span className="edu-stat-kicker kicker-blue">DURATION</span>
                  <div className="edu-stat-val">
                    2023 — Present
                  </div>
                  <span className="edu-stat-sub">(Expected Graduation: 2027)</span>
                </div>
              </div>
            </div>

            {/* Section 1: RELEVANT COURSEWORK */}
            <div className="edu-modal-section-card">
              <div className="edu-sec-icon-col">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5fe7cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <div className="edu-sec-content">
                <h4 className="edu-sec-title">RELEVANT COURSEWORK</h4>
                <div className="edu-course-pills-wrap">
                  <span className="edu-course-pill pill-purple">Data Structures & Algorithms</span>
                  <span className="edu-course-pill pill-cyan">Machine Learning</span>
                  <span className="edu-course-pill pill-purple">Deep Learning</span>
                  <span className="edu-course-pill pill-cyan">Artificial Intelligence</span>
                  <span className="edu-course-pill pill-cyan">Computer Vision</span>
                  <span className="edu-course-pill pill-purple">Database Management Systems</span>
                  <span className="edu-course-pill pill-blue">Software Engineering</span>
                </div>
              </div>
            </div>

            {/* Section 2: ACADEMIC FOCUS */}
            <div className="edu-modal-section-card">
              <div className="edu-sec-icon-col">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5fe7cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <div className="edu-sec-content">
                <h4 className="edu-sec-title">ACADEMIC FOCUS</h4>
                <p className="edu-sec-body-text">
                  Building a strong foundation in computer science with a focus on AI & ML, while applying concepts through hands-on projects and continuous learning.
                </p>
              </div>
            </div>

            {/* Section 3: CURRENT FOCUS */}
            <div className="edu-modal-section-card">
              <div className="edu-sec-icon-col">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5fe7cc" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <div className="edu-sec-content">
                <h4 className="edu-sec-title">CURRENT FOCUS</h4>
                <div className="edu-course-pills-wrap">
                  <span className="edu-course-pill pill-cyan">DSA</span>
                  <span className="edu-course-pill pill-cyan">AI & ML</span>
                  <span className="edu-course-pill pill-cyan">Python</span>
                  <span className="edu-course-pill pill-cyan">Java</span>
                  <span className="edu-course-pill pill-cyan">SQL</span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Bottom Modal Action */}
        <div className="edu-modal-bottom-row">
          <button className="edu-modal-close-action-btn" onClick={() => setSelectedEduDetail(null)}>
            CLOSE
          </button>
        </div>
      </div>
    </div>
  )}
    </>
  );
}

function ThreeBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { rootMargin: "150px 0px" }
    );
    observer.observe(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const group = new THREE.Group();
    scene.add(group);

    const particleGeo = new THREE.BufferGeometry();
    const count = 220;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 28;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({ color: 0xc9d7ff, size: 0.025, transparent: true, opacity: 0.45 });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    const geo = new THREE.IcosahedronGeometry(0.65, 0);
    const mats = [
      new THREE.MeshStandardMaterial({ color: 0x1b2d47, metalness: 0.7, roughness: 0.25 }),
      new THREE.MeshStandardMaterial({ color: 0x194d4b, metalness: 0.75, roughness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: 0x203a5d, metalness: 0.65, roughness: 0.3 })
    ];
    const forms = [];
    for (let i = 0; i < 6; i++) {
      const m = new THREE.Mesh(geo, mats[i % mats.length]);
      m.position.set((Math.random() - .5) * 15, (Math.random() - .5) * 10, -1 - Math.random() * 7);
      m.scale.setScalar(.35 + Math.random() * .65);
      group.add(m);
      forms.push(m);
    }

    const ambient = new THREE.AmbientLight(0x9db6d8, 1.5);
    scene.add(ambient);
    const key = new THREE.PointLight(0x55c9c5, 10, 20);
    key.position.set(3, 3, 5);
    scene.add(key);
    const warm = new THREE.PointLight(0x78b9b0, 7, 18);
    warm.position.set(-5, -2, 3);
    scene.add(warm);

    const mouse = new THREE.Vector2(0, 0);
    const target = new THREE.Vector2(0, 0);
    const dragOrbit = new THREE.Vector2(0, 0);
    let dragging = false;
    let lastPointer = { x: 0, y: 0 };

    const onMove = (e) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = -(e.clientY / window.innerHeight - 0.5) * 2;
      if (!dragging) return;
      dragOrbit.x += (e.clientX - lastPointer.x) * 0.007;
      dragOrbit.y += (e.clientY - lastPointer.y) * 0.0035;
      lastPointer = { x: e.clientX, y: e.clientY };
    };
    const onPointerDown = (e) => {
      if (e.button !== 0 || e.target.closest("a, button, input, textarea")) return;
      dragging = true;
      lastPointer = { x: e.clientX, y: e.clientY };
      document.body.classList.add("is-orbiting");
    };
    const onPointerUp = () => {
      dragging = false;
      document.body.classList.remove("is-orbiting");
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onPointerDown, { passive: true });
    window.addEventListener("mouseup", onPointerUp, { passive: true });

    let raf;
    let lastRender = 0;
    const clock = new THREE.Clock();

    const animate = (time) => {
      if (!isVisible) {
        raf = requestAnimationFrame(animate);
        return;
      }
      if (time - lastRender < 30) {
        raf = requestAnimationFrame(animate);
        return;
      }
      lastRender = time;
      const t = clock.getElapsedTime();
      mouse.lerp(target, 0.04);
      group.rotation.y = dragOrbit.x + mouse.x * 0.08 + Math.sin(t * 0.08) * 0.03;
      group.rotation.x = dragOrbit.y + mouse.y * 0.05;
      particles.rotation.y = t * 0.008;
      key.position.x = mouse.x * 4;
      key.position.y = mouse.y * 3 + 2;

      forms.forEach((m, i) => {
        m.rotation.x += 0.001 + i * 0.00015;
        m.rotation.y += 0.0014;
        m.position.y += Math.sin(t * 0.35 + i) * 0.0008;
      });

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", resize, { passive: true });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mouseup", onPointerUp);
      document.body.classList.remove("is-orbiting");
      window.removeEventListener("resize", resize);
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      geo.dispose();
      mats.forEach(m => m.dispose());
    };
  }, []);

  return <canvas ref={ref} className="three-bg" aria-hidden="true" />;
}

function InteractiveIdeCard() {
  const [lang, setLang] = useState("java"); // "java" | "python"
  const langRef = useRef(lang);
  const panelRef = useRef(null);
  const codeContainerRef = useRef(null);
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const isMorphingRef = useRef(false);
  const isInViewRef = useRef(true);
  const activeTweenRef = useRef(null);

  useEffect(() => {
    langRef.current = lang;
  }, [lang]);

  const resetStyles = useCallback(() => {
    const el = codeContainerRef.current;
    const disp = document.getElementById("ideMeltDisplacement");
    if (el) {
      el.style.filter = "none";
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.textShadow = "none";
    }
    if (disp) {
      disp.setAttribute("scale", "0");
    }
    isMorphingRef.current = false;
  }, []);

  const triggerMorphTransition = useCallback((targetLang) => {
    if (isMorphingRef.current) return;
    const el = codeContainerRef.current;
    if (!el) {
      setLang(targetLang);
      return;
    }

    isMorphingRef.current = true;

    if (activeTweenRef.current) {
      activeTweenRef.current.kill();
    }

    const turb = document.getElementById("ideMeltTurbulence");
    const disp = document.getElementById("ideMeltDisplacement");

    const morphObj = { scale: 0, freq: 0.03, aberration: 0, blur: 0, opacity: 1 };

    // Phase 1: Fluid Liquid Melt & Chromatic Dispersion (power2.in)
    activeTweenRef.current = gsap.to(morphObj, {
      scale: 32,
      freq: 0.08,
      aberration: 4,
      blur: 1.8,
      opacity: 0.35,
      duration: 0.45,
      ease: "power2.in",
      onUpdate: () => {
        if (disp) disp.setAttribute("scale", String(morphObj.scale));
        if (turb) turb.setAttribute("baseFrequency", `${morphObj.freq} ${morphObj.freq * 1.4}`);
        if (el) {
          el.style.filter = `url(#ideMeltFilter) blur(${morphObj.blur}px)`;
          el.style.opacity = String(morphObj.opacity);
          el.style.textShadow = `${morphObj.aberration}px 0 rgba(255, 60, 60, 0.65), -${morphObj.aberration}px 0 rgba(56, 189, 248, 0.65)`;
        }
      },
      onComplete: () => {
        // Switch language at the peak of the melt morph
        setLang(targetLang);

        // Phase 2: Smooth Fluid Solidification into new language (power2.out)
        activeTweenRef.current = gsap.to(morphObj, {
          scale: 0,
          freq: 0.02,
          aberration: 0,
          blur: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power2.out",
          onUpdate: () => {
            if (disp) disp.setAttribute("scale", String(morphObj.scale));
            if (turb) turb.setAttribute("baseFrequency", `${morphObj.freq} ${morphObj.freq * 1.4}`);
            if (el) {
              el.style.filter = morphObj.scale > 0.5 ? `url(#ideMeltFilter) blur(${morphObj.blur}px)` : "none";
              el.style.opacity = String(morphObj.opacity);
              el.style.textShadow = morphObj.aberration > 0.2 ? `${morphObj.aberration}px 0 rgba(255, 60, 60, 0.65), -${morphObj.aberration}px 0 rgba(56, 189, 248, 0.65)` : "none";
            }
          },
          onComplete: () => {
            resetStyles();
            activeTweenRef.current = null;
          }
        });
      }
    });
  }, [resetStyles]);

  // Viewport intersection observer to avoid off-screen animation loops and guarantee text is always shown on scroll
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        isInViewRef.current = inView;
        if (!inView) {
          if (activeTweenRef.current) {
            activeTweenRef.current.kill();
            activeTweenRef.current = null;
          }
          resetStyles();
        } else {
          resetStyles();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(panel);
    return () => {
      observer.disconnect();
      if (activeTweenRef.current) {
        activeTweenRef.current.kill();
      }
    };
  }, [resetStyles]);

  useEffect(() => {
    const handleGlobalPointerUp = () => {
      isDraggingRef.current = false;
    };
    const handleVisibilityChange = () => {
      if (!document.hidden && isInViewRef.current) {
        resetStyles();
      }
    };

    window.addEventListener("pointerup", handleGlobalPointerUp);
    window.addEventListener("mouseup", handleGlobalPointerUp);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const timer = setInterval(() => {
      if (
        !isInViewRef.current ||
        isHoveredRef.current ||
        isDraggingRef.current ||
        isMorphingRef.current ||
        document.hidden
      ) {
        return;
      }
      const nextLang = langRef.current === "java" ? "python" : "java";
      triggerMorphTransition(nextLang);
    }, 5000);

    return () => {
      clearInterval(timer);
      window.removeEventListener("pointerup", handleGlobalPointerUp);
      window.removeEventListener("mouseup", handleGlobalPointerUp);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [triggerMorphTransition, resetStyles]);

  const switchLanguage = (targetLang) => {
    if (lang === targetLang || isMorphingRef.current) return;
    triggerMorphTransition(targetLang);
  };

  return (
    <div
      ref={panelRef}
      className="about-code-panel glass"
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
      onPointerDown={() => {
        isDraggingRef.current = true;
      }}
    >
      {/* Liquid Melt & Morph Shader Filter */}
      <svg style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }} aria-hidden="true">
        <defs>
          <filter id="ideMeltFilter" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence id="ideMeltTurbulence" type="fractalNoise" baseFrequency="0.03 0.04" numOctaves="3" result="noise" />
            <feDisplacementMap id="ideMeltDisplacement" in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      <div className="ide-header">
        <div className="ide-header-spacer" aria-hidden="true" />

        <div className="ide-tab-group">
          <button
            type="button"
            className={`ide-tab ${lang === "java" ? "is-active" : ""}`}
            onClick={() => switchLanguage("java")}
            title="Switch to Java"
          >
            <span className="ide-tab-icon">//</span>
            <span className="ide-filename">BASIC_INFO.java</span>
          </button>
          <button
            type="button"
            className={`ide-tab ${lang === "python" ? "is-active" : ""}`}
            onClick={() => switchLanguage("python")}
            title="Switch to Python"
          >
            <span className="ide-tab-icon ide-py-hash">#</span>
            <span className="ide-filename">BASIC_INFO.py</span>
          </button>
        </div>

        <div className="ide-header-right">
          {lang === "java" ? (
            <div className="ide-logo-badge ide-java-badge">
              <svg className="ide-java-logo" viewBox="0 0 100 100" width="28" height="28" aria-hidden="true">
                <defs>
                  <linearGradient id="flameGrad" x1="0%" y1="100%" x2="50%" y2="0%">
                    <stop offset="0%" stopColor="#FF9800" />
                    <stop offset="50%" stopColor="#FF5722" />
                    <stop offset="100%" stopColor="#F44336" />
                  </linearGradient>
                  <linearGradient id="cupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#0284C7" />
                  </linearGradient>
                </defs>
                {/* Flame / Steam 1 (Left) */}
                <path
                  d="M44 48c-4-9 2-18 6-25-8 5-11 13-8 20 2 4 5 7 2 11 3-2 3-4 0-6z"
                  fill="url(#flameGrad)"
                />
                {/* Flame / Steam 2 (Right - Main) */}
                <path
                  d="M58 48c4-11-2-21-9-33 11 8 16 19 12 28-3 6-8 10-3 15-4-3-4-6 0-10z"
                  fill="url(#flameGrad)"
                />
                {/* Cup Upper Rim */}
                <path
                  d="M28 54c12-4 32-4 44 0 5 2 5 5 0 7-12 4-32 4-44 0-5-2-5-5 0-7z"
                  fill="url(#cupGrad)"
                />
                {/* Cup Handle */}
                <path
                  d="M68 53c8 1 14 5 14 11 0 7-7 11-14 12 3-3 5-7 5-11 0-5-2-9-5-12z"
                  fill="url(#cupGrad)"
                />
                {/* Cup Body Mid Band */}
                <path
                  d="M33 64c10-3 24-3 34 0 4 1 4 4 0 5-10 3-24 3-34 0-4-1-4-4 0-5z"
                  fill="url(#cupGrad)"
                />
                {/* Cup Body Lower Bowl */}
                <path
                  d="M37 72c7-2 18-2 26 0 3 1 3 3 0 4-8 2-18 2-26 0-3-1-3-3 0-4z"
                  fill="url(#cupGrad)"
                />
                {/* Saucer Base Disc */}
                <path
                  d="M22 83c16-5 40-5 56 0 5 2 4 6-2 7-16 4-38 4-54 0-5-1-5-5 0-7z"
                  fill="url(#cupGrad)"
                />
              </svg>
            </div>
          ) : (
            <div className="ide-logo-badge ide-python-badge">
              <svg className="ide-py-logo" viewBox="0 0 110 110" width="24" height="24" aria-hidden="true">
                <path
                  d="M54.5 4.5c-27 0-25.3 11.7-25.3 11.7l.03 12.1h25.7v3.6H21.3S4.5 30 4.5 57.3c0 27.2 14.6 26.3 14.6 26.3h8.7v-12.2s-.5-14.6 14.3-14.6h24.7s13.8.2 13.8-13.4V17.9S82.4 4.5 54.5 4.5zM39.6 13.6c2.7 0 4.9 2.2 4.9 4.9s-2.2 4.9-4.9 4.9-4.9-2.2-4.9-4.9 2.2-4.9 4.9-4.9z"
                  fill="#387eb8"
                />
                <path
                  d="M55.5 105.5c27 0 25.3-11.7 25.3-11.7l-.03-12.1H55.1v-3.6h33.6s16.8 1.9 16.8-25.4c0-27.2-14.6-26.3-14.6-26.3h-8.7v12.2s.5 14.6-14.3 14.6H43.2s-13.8-.2-13.8 13.4v25.5s-1.8 13.4 26.1 13.4zm14.9-9.1c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9z"
                  fill="#ffe052"
                />
              </svg>
            </div>
          )}
        </div>
      </div>

      <div className="ide-body" ref={codeContainerRef}>
        <div className="ide-code-section">
          {lang === "java" ? (
            <table className="ide-code-table">
              <tbody>
                <tr className="ide-code-row"><td className="ide-line-num">01</td><td className="ide-line-code"><span className="c-kw">class</span> <span className="c-cls">BasicInfo</span> <span className="c-punc">{"{"}</span></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">02</td><td className="ide-line-code">&nbsp;&nbsp;<span className="c-kw">public static void</span> <span className="c-fn">main</span>(<span className="c-type">String</span>[] <span className="c-var">args</span>) <span className="c-punc">{"{"}</span></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">03</td><td className="ide-line-code">&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-cm">// Personal &amp; Professional Profile</span></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">04</td><td className="ide-line-code">&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-type">String</span> <span className="c-var">name</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span className="c-str">"Sritharan R"</span>;</td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">05</td><td className="ide-line-code">&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-type">String</span> <span className="c-var">course</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span className="c-str">"B.E CSE (AI &amp; ML)"</span>;</td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">06</td><td className="ide-line-code">&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-type">String</span> <span className="c-var">passion</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span className="c-str">"AI, Machine Learning, Problem Solving"</span>;</td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">07</td><td className="ide-line-code">&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-type">String</span> <span className="c-var">goal</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span className="c-str">"To become an AI/ML Engineer &amp;</span></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num"></td><td className="ide-line-code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-str">&nbsp;build solutions for real-world problems."</span>;</td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">08</td><td className="ide-line-code">&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-cm">// Personal Details</span></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">09</td><td className="ide-line-code">&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-type">String</span> <span className="c-var">dob</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span className="c-str">"31 Dec 2005"</span>;</td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">10</td><td className="ide-line-code">&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-type">String</span> <span className="c-var">gender</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span className="c-str">"Male"</span>;</td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">11</td><td className="ide-line-code">&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-type">String</span> <span className="c-var">location</span>&nbsp;&nbsp;&nbsp;&nbsp;= <span className="c-str">"Tamil Nadu, India"</span>;</td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">12</td><td className="ide-line-code">&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-cm">// Contact Information</span></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">13</td><td className="ide-line-code">&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-type">String</span> <span className="c-var">email</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span className="c-str">"srirogu@gmail.com"</span>;</td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">14</td><td className="ide-line-code">&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-type">String</span> <span className="c-var">phone</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <span className="c-str">"+91 8072428883"</span>;</td></tr>
              </tbody>
            </table>
          ) : (
            <table className="ide-code-table">
              <tbody>
                <tr className="ide-code-row"><td className="ide-line-num">01</td><td className="ide-line-code"><span className="c-cm"># Personal &amp; Professional Profile</span></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">02</td><td className="ide-line-code"><span className="c-py-var">name</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-punc">=</span> <span className="c-str">"Sritharan R"</span></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">03</td><td className="ide-line-code"><span className="c-py-var">course</span>&nbsp;&nbsp;&nbsp;<span className="c-punc">=</span> <span className="c-str">"B.E CSE (AI &amp; ML)"</span></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">04</td><td className="ide-line-code"><span className="c-py-var">passion</span>&nbsp;&nbsp;<span className="c-punc">=</span> <span className="c-str">"AI, Machine Learning, Problem Solving"</span></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">05</td><td className="ide-line-code"><span className="c-py-var">goal</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-punc">=</span> <span className="c-str">"To become an AI/ML Engineer &amp;</span></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">06</td><td className="ide-line-code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-str">build solutions for real-world problems."</span></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">07</td><td className="ide-line-code"></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">08</td><td className="ide-line-code"><span className="c-cm"># Personal Details</span></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">09</td><td className="ide-line-code"><span className="c-py-var">dob</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-punc">=</span> <span className="c-str">"31 Dec 2005"</span></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">10</td><td className="ide-line-code"><span className="c-py-var">gender</span>&nbsp;&nbsp;&nbsp;<span className="c-punc">=</span> <span className="c-str">"Male"</span></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">11</td><td className="ide-line-code"><span className="c-py-var">location</span>&nbsp;<span className="c-punc">=</span> <span className="c-str">"Tamil Nadu, India"</span></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">12</td><td className="ide-line-code"></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">13</td><td className="ide-line-code"><span className="c-cm"># Contact Information</span></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">14</td><td className="ide-line-code"><span className="c-py-var">email</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-punc">=</span> <span className="c-str">"srirogu@gmail.com"</span></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">15</td><td className="ide-line-code"><span className="c-py-var">phone</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-punc">=</span> <span className="c-str">"+91 8072428883"</span></td></tr>
              </tbody>
            </table>
          )}
        </div>

        <div className="ide-portrait-section">
          <div className="ide-portrait-frame">
            <img src="/images/about page image.png" alt="Sritharan R" />
          </div>
        </div>

        <div className="ide-bottom-code">
          {lang === "java" ? (
            <table className="ide-code-table">
              <tbody>
                <tr className="ide-code-row"><td className="ide-line-num">15</td><td className="ide-line-code"></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">16</td><td className="ide-line-code">&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-cm">// Display</span></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">17</td><td className="ide-line-code">&nbsp;&nbsp;&nbsp;&nbsp;<span className="c-cls">System</span>.<span className="c-var">out</span>.<span className="c-fn">println</span>(<span className="c-str">"Developer Profile Initialized Successfully!"</span>);</td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">18</td><td className="ide-line-code">&nbsp;&nbsp;<span className="c-punc">{"}"}</span></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">19</td><td className="ide-line-code"><span className="c-punc">{"}"}</span></td></tr>
              </tbody>
            </table>
          ) : (
            <table className="ide-code-table">
              <tbody>
                <tr className="ide-code-row"><td className="ide-line-num">16</td><td className="ide-line-code"></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">17</td><td className="ide-line-code"><span className="c-cm"># Display</span></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">18</td><td className="ide-line-code"><span className="c-py-fn">print</span>(<span className="c-str">"Developer Profile Initialized Successfully!"</span>)</td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">19</td><td className="ide-line-code"></td></tr>
                <tr className="ide-code-row"><td className="ide-line-num">20</td><td className="ide-line-code"></td></tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ number, title, subtitle }) {
  return (
    <div className="section-heading">
      {number ? <span className="section-number">{number}</span> : null}
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

function RoleCarousel() {
  const roles = ["AI/ML Engineer", "Web Developer", "Java Developer", "Python Developer"];

  return (
    <div className="hero-role-rotator" aria-label="AI/ML Engineer, Web Developer, Java Developer, and Python Developer">
      <div className="role-carousel" aria-hidden="true">
        {roles.map((role, index) => {
          const previous = roles[(index + roles.length - 1) % roles.length];
          const next = roles[(index + 1) % roles.length];
          return (
            <div className="role-carousel-scene" style={{ "--scene-delay": `${-index * 2}s` }} key={role}>
              <span className="role-neighbor role-neighbor--previous">{previous}</span>
              <span className="role-active">{role}</span>
              <span className="role-neighbor role-neighbor--next">{next}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Stat({ n, t }) {
  return <div className="stat"><strong>{n}</strong><span>{t}</span></div>;
}

function GraduationCapHologram() {
  return (
    <div className="hologram-graphic hologram-cap">
      <svg viewBox="0 0 260 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="hologram-svg">
        <defs>
          <radialGradient id="capGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5fe7cc" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#5fe7cc" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5fe7cc" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>

        {/* Floor Hologram Rings */}
        <ellipse cx="130" cy="140" rx="100" ry="24" stroke="rgba(95, 231, 204, 0.18)" strokeWidth="1" strokeDasharray="4 4" />
        <ellipse cx="130" cy="140" rx="72" ry="16" stroke="rgba(95, 231, 204, 0.35)" strokeWidth="1.2" />
        <ellipse cx="130" cy="140" rx="42" ry="9" stroke="rgba(95, 231, 204, 0.55)" strokeWidth="1" />
        <circle cx="130" cy="140" r="30" fill="url(#capGlow)" />

        {/* Radial floor grid lines */}
        <line x1="30" y1="140" x2="230" y2="140" stroke="rgba(95, 231, 204, 0.22)" strokeWidth="0.8" />
        <line x1="70" y1="126" x2="190" y2="154" stroke="rgba(95, 231, 204, 0.15)" strokeWidth="0.8" />
        <line x1="70" y1="154" x2="190" y2="126" stroke="rgba(95, 231, 204, 0.15)" strokeWidth="0.8" />

        {/* Skullcap / base under cap */}
        <path d="M96 74 L96 102 C96 116 164 116 164 102 L164 74" stroke="rgba(95, 231, 204, 0.65)" strokeWidth="1.2" fill="rgba(8, 28, 36, 0.45)" />
        <path d="M106 79 L106 102 C106 112 154 112 154 102 L154 79" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="0.8" />
        <line x1="130" y1="78" x2="130" y2="108" stroke="rgba(95, 231, 204, 0.4)" strokeWidth="0.8" strokeDasharray="2 2" />

        {/* Cap Top Diamond Mesh */}
        <polygon points="130,28 226,64 130,100 34,64" stroke="url(#cyanGrad)" strokeWidth="1.8" fill="rgba(6, 26, 32, 0.6)" />
        
        {/* Wireframe Internal Grid on Top Diamond */}
        <line x1="130" y1="28" x2="130" y2="100" stroke="rgba(95, 231, 204, 0.45)" strokeWidth="1" />
        <line x1="34" y1="64" x2="226" y2="64" stroke="rgba(95, 231, 204, 0.45)" strokeWidth="1" />
        <line x1="82" y1="46" x2="178" y2="82" stroke="rgba(95, 231, 204, 0.3)" strokeWidth="0.8" />
        <line x1="82" y1="82" x2="178" y2="46" stroke="rgba(95, 231, 204, 0.3)" strokeWidth="0.8" />
        <polygon points="130,46 178,64 130,82 82,64" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="0.8" strokeDasharray="3 3" />

        {/* Center Node Button on top */}
        <circle cx="130" cy="64" r="3.5" fill="#5fe7cc" filter="drop-shadow(0 0 4px #5fe7cc)" />

        {/* Tassel */}
        <path d="M130 64 Q178 72 195 90 L195 125" stroke="#5fe7cc" strokeWidth="1.4" strokeDasharray="3 2" fill="none" />
        <circle cx="195" cy="90" r="2.5" fill="#5fe7cc" />
        {/* Tassel threads / brush */}
        <line x1="192" y1="125" x2="192" y2="142" stroke="rgba(95, 231, 204, 0.7)" strokeWidth="1" />
        <line x1="195" y1="125" x2="195" y2="145" stroke="#5fe7cc" strokeWidth="1.2" />
        <line x1="198" y1="125" x2="198" y2="142" stroke="rgba(95, 231, 204, 0.7)" strokeWidth="1" />
        <circle cx="195" cy="125" r="3" fill="#5fe7cc" />

        {/* Glowing Vertex Points */}
        <circle cx="34" cy="64" r="2.5" fill="#5fe7cc" filter="drop-shadow(0 0 3px #5fe7cc)" />
        <circle cx="226" cy="64" r="2.5" fill="#5fe7cc" filter="drop-shadow(0 0 3px #5fe7cc)" />
        <circle cx="130" cy="28" r="2.5" fill="#5fe7cc" filter="drop-shadow(0 0 3px #5fe7cc)" />
        <circle cx="130" cy="100" r="2.5" fill="#5fe7cc" filter="drop-shadow(0 0 3px #5fe7cc)" />

        {/* Floating Particle Orbits */}
        <circle cx="58" cy="128" r="1.5" fill="#5fe7cc" opacity="0.8" />
        <circle cx="204" cy="48" r="1.8" fill="#5fe7cc" opacity="0.9" filter="drop-shadow(0 0 3px #5fe7cc)" />
        <circle cx="218" cy="115" r="1.2" fill="#5fe7cc" opacity="0.6" />
        <circle cx="78" cy="38" r="1.5" fill="#38bdf8" opacity="0.7" />
        <circle cx="155" cy="148" r="1.5" fill="#5fe7cc" opacity="0.8" />
      </svg>
    </div>
  );
}

function LaptopHologram() {
  return (
    <div className="hologram-graphic hologram-laptop">
      <svg viewBox="0 0 260 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="hologram-svg">
        <defs>
          <radialGradient id="lapGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5fe7cc" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#5fe7cc" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(95, 231, 204, 0.25)" />
            <stop offset="100%" stopColor="rgba(56, 189, 248, 0.08)" />
          </linearGradient>
        </defs>

        {/* Floor Hologram Rings */}
        <ellipse cx="130" cy="148" rx="104" ry="22" stroke="rgba(95, 231, 204, 0.18)" strokeWidth="1" strokeDasharray="4 4" />
        <ellipse cx="130" cy="148" rx="76" ry="15" stroke="rgba(95, 231, 204, 0.35)" strokeWidth="1.2" />
        <ellipse cx="130" cy="148" rx="44" ry="8" stroke="rgba(95, 231, 204, 0.55)" strokeWidth="1" />
        <circle cx="130" cy="148" r="30" fill="url(#lapGlow)" />

        {/* Perspective Laptop Base Plate */}
        <polygon points="60,118 200,118 226,146 34,146" stroke="#5fe7cc" strokeWidth="1.5" fill="rgba(8, 26, 34, 0.65)" />
        <polygon points="62,119 198,119 223,144 37,144" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="0.8" fill="none" />
        
        {/* Keyboard Mesh Lines */}
        <polygon points="68,122 192,122 208,135 52,135" stroke="rgba(95, 231, 204, 0.45)" strokeWidth="0.9" fill="rgba(6, 20, 28, 0.5)" />
        <line x1="75" y1="128" x2="185" y2="128" stroke="rgba(95, 231, 204, 0.3)" strokeWidth="0.7" />
        <line x1="92" y1="122" x2="84" y2="135" stroke="rgba(95, 231, 204, 0.3)" strokeWidth="0.7" />
        <line x1="116" y1="122" x2="112" y2="135" stroke="rgba(95, 231, 204, 0.3)" strokeWidth="0.7" />
        <line x1="144" y1="122" x2="148" y2="135" stroke="rgba(95, 231, 204, 0.3)" strokeWidth="0.7" />
        <line x1="168" y1="122" x2="176" y2="135" stroke="rgba(95, 231, 204, 0.3)" strokeWidth="0.7" />

        {/* Trackpad */}
        <polygon points="115,138 145,138 148,144 112,144" stroke="rgba(95, 231, 204, 0.5)" strokeWidth="0.8" fill="none" />

        {/* Laptop Screen (Tilted Perspective) */}
        <polygon points="76,32 196,36 200,118 60,118" stroke="#5fe7cc" strokeWidth="1.6" fill="rgba(8, 28, 38, 0.75)" />
        <polygon points="82,38 190,42 194,112 68,112" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1" fill="url(#screenGrad)" />

        {/* Screen Wireframe Grid */}
        <line x1="82" y1="75" x2="192" y2="77" stroke="rgba(95, 231, 204, 0.2)" strokeWidth="0.7" strokeDasharray="3 3" />
        <line x1="136" y1="40" x2="131" y2="112" stroke="rgba(95, 231, 204, 0.2)" strokeWidth="0.7" strokeDasharray="3 3" />

        {/* Glowing Code Symbol </> on screen */}
        <path d="M112 66 L98 76 L112 86" stroke="#5fe7cc" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" filter="drop-shadow(0 0 5px #5fe7cc)" />
        <line x1="134" y1="62" x2="126" y2="90" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" filter="drop-shadow(0 0 4px #38bdf8)" />
        <path d="M148 66 L162 76 L148 86" stroke="#5fe7cc" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" filter="drop-shadow(0 0 5px #5fe7cc)" />

        {/* Screen Top WebCam dot */}
        <circle cx="136" cy="37" r="1.5" fill="#5fe7cc" />

        {/* Glowing Vertex Points */}
        <circle cx="76" cy="32" r="2" fill="#5fe7cc" filter="drop-shadow(0 0 3px #5fe7cc)" />
        <circle cx="196" cy="36" r="2" fill="#5fe7cc" filter="drop-shadow(0 0 3px #5fe7cc)" />
        <circle cx="34" cy="146" r="2" fill="#5fe7cc" filter="drop-shadow(0 0 3px #5fe7cc)" />
        <circle cx="226" cy="146" r="2" fill="#5fe7cc" filter="drop-shadow(0 0 3px #5fe7cc)" />

        {/* Floating Particle Orbits */}
        <circle cx="48" cy="98" r="1.5" fill="#5fe7cc" opacity="0.8" />
        <circle cx="214" cy="74" r="1.8" fill="#5fe7cc" opacity="0.9" filter="drop-shadow(0 0 3px #5fe7cc)" />
        <circle cx="198" cy="148" r="1.2" fill="#38bdf8" opacity="0.7" />
        <circle cx="62" cy="45" r="1.5" fill="#5fe7cc" opacity="0.7" />
      </svg>
    </div>
  );
}

function EducationExperienceSection({ onOpenDetail }) {
  const eduDetails = {
    education: {
      type: "education",
      title: "Education",
      subtitle: "B.E. Computer Science Engineering (AI & ML)",
      institution: "Velalar College of Engineering and Technology",
      period: "2023 — PRESENT",
      quote: "Learning today for a smarter tomorrow.",
      highlights: [
        "Specializing in Artificial Intelligence and Machine Learning curriculum at Velalar College of Engineering and Technology.",
        "Core foundational studies: Data Structures & Algorithms, Deep Learning, Computer Vision, and Cloud Architectures.",
        "Created projects leveraging modern AI frameworks, NLP models, and full-stack web technologies.",
        "Active participant in technical symposiums, research coding, and collaborative hackathons."
      ],
      skills: ["Artificial Intelligence", "Machine Learning", "Python", "Data Structures", "TensorFlow", "React.js"]
    },
    internship: {
      type: "internship",
      title: "Machine Learning Internship",
      subtitle: "Machine Learning Intern",
      period: "2026",
      quote: "Turning knowledge into real-world impact.",
      highlights: [
        "Worked on real-world AI projects and machine learning model development pipelines.",
        "Handled data cleaning, feature engineering, and exploratory analysis on large datasets.",
        "Trained, evaluated, and fine-tuned predictive machine learning models for high accuracy.",
        "Integrated AI backends with interactive web applications and automated workflows."
      ],
      skills: ["Machine Learning", "Model Evaluation", "Python", "Data Analysis", "REST APIs", "PyTorch / Scikit-Learn"]
    }
  };

  return (
    <div className="edu-experience-wrapper">
      {/* Section Header */}
      <div className="edu-heading-wrap">
        <div className="edu-heading-left">
          <div className="edu-heading-titles">
            <h2 className="edu-main-title section-title-main">
              <span className="section-title-white">EDUCATION &</span>
              <span className="section-title-cyan">EXPERIENCE</span>
            </h2>
            <div className="section-title-bar" />
            <p className="edu-subtitle">M Y &nbsp; A C A D E M I C &nbsp; J O U R N E Y &nbsp; A N D &nbsp; P R A C T I C A L &nbsp; E X P E R I E N C E .</p>
          </div>
        </div>
      </div>

      {/* 2-Column Side-by-Side Sci-Fi Grid */}
      <div className="edu-cards-container">
        {/* Card 1: Education */}
        <div className="edu-timeline-item">
          <div className="edu-node-badge">
            <span className="edu-node-num">01</span>
            <div className="edu-node-circle" />
            <div className="edu-node-stem" />
          </div>

          <div className="edu-card-wrap">
            <article className="edu-glass-box edu-sci-fi-card tilt-card">
              {/* Sci-Fi Chamfered Glowing Border Frame */}
              <div className="edu-card-frame-wrap" aria-hidden="true">
                <svg className="edu-card-frame-svg" viewBox="0 0 600 300" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="cardGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                      <stop offset="40%" stopColor="#5fe7cc" stopOpacity="0.6" />
                      <stop offset="75%" stopColor="#38bdf8" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#818cf8" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>
                  {/* Outer Chamfered Contour */}
                  <path 
                    d="M 20,4 L 525,4 L 565,4 L 596,40 L 596,260 L 565,296 L 380,296 L 365,290 L 235,290 L 220,296 L 20,296 L 4,278 L 4,22 Z" 
                    fill="none" 
                    stroke="url(#cardGrad1)" 
                    strokeWidth="1.8" 
                  />
                  {/* Top-Right Chamfer Accent Notch */}
                  <line x1="550" y1="4" x2="596" y2="48" stroke="#5fe7cc" strokeWidth="2.8" filter="drop-shadow(0 0 6px #5fe7cc)" />
                  {/* Bottom Center Neon Accent Tab */}
                  <line x1="230" y1="296" x2="370" y2="296" stroke="#5fe7cc" strokeWidth="3" filter="drop-shadow(0 0 8px #5fe7cc)" />
                  {/* Top Notch Accents */}
                  <line x1="250" y1="4" x2="295" y2="4" stroke="#5fe7cc" strokeWidth="2" />
                </svg>
              </div>

              <div className="edu-box-glow-top" />
              
              {/* Top Row: Date Badge & Top-Right Chamfer Pill */}
              <div className="edu-card-top-row">
                <div className="edu-badge-tag">2023 — PRESENT</div>
                <div className="edu-chamfer-badge-row">
                  <div className="edu-chamfer-icon-pill">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5fe7cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <div className="edu-chamfer-slash" />
                </div>
              </div>

              {/* Main Content: Info */}
              <div className="edu-card-content-grid">
                <div className="edu-col-main-info">
                  <div className="edu-glass-icon-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5fe7cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>

                  <div className="edu-text-group">
                    <h3 className="edu-box-title">Education</h3>
                    <h4 className="edu-box-subtitle">B.E. Computer Science Engineering (AI & ML)</h4>
                    
                    <div className="edu-box-bullets">
                      <div className="edu-bullet-row">
                        <svg className="edu-bullet-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5fe7cc" strokeWidth="2">
                          <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M14 10v11M12 2L2 7h20L12 2z"/>
                        </svg>
                        <span>Velalar College of Engineering and Technology</span>
                      </div>
                      <div className="edu-bullet-row">
                        <svg className="edu-bullet-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5fe7cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>Erode, Tamil Nadu, India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Center Explore Button */}
              <div className="edu-card-bottom-bar">
                <button 
                  className="edu-explore-btn" 
                  onClick={() => onOpenDetail(eduDetails.education)}
                  aria-label="Explore Education Details"
                >
                  <span>EXPLORE MORE</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </article>
          </div>
        </div>

        {/* Card 2: Internship */}
        <div className="edu-timeline-item">
          <div className="edu-node-badge">
            <span className="edu-node-num">02</span>
            <div className="edu-node-circle" />
            <div className="edu-node-stem" />
          </div>

          <div className="edu-card-wrap">
            <article className="edu-glass-box edu-sci-fi-card tilt-card">
              {/* Sci-Fi Chamfered Glowing Border Frame */}
              <div className="edu-card-frame-wrap" aria-hidden="true">
                <svg className="edu-card-frame-svg" viewBox="0 0 600 300" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="cardGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                      <stop offset="40%" stopColor="#5fe7cc" stopOpacity="0.6" />
                      <stop offset="75%" stopColor="#38bdf8" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#818cf8" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>
                  {/* Outer Chamfered Contour */}
                  <path 
                    d="M 20,4 L 525,4 L 565,4 L 596,40 L 596,260 L 565,296 L 380,296 L 365,290 L 235,290 L 220,296 L 20,296 L 4,278 L 4,22 Z" 
                    fill="none" 
                    stroke="url(#cardGrad2)" 
                    strokeWidth="1.8" 
                  />
                  {/* Top-Right Chamfer Accent Notch */}
                  <line x1="550" y1="4" x2="596" y2="48" stroke="#5fe7cc" strokeWidth="2.8" filter="drop-shadow(0 0 6px #5fe7cc)" />
                  {/* Bottom Center Neon Accent Tab */}
                  <line x1="230" y1="296" x2="370" y2="296" stroke="#5fe7cc" strokeWidth="3" filter="drop-shadow(0 0 8px #5fe7cc)" />
                  {/* Top Notch Accents */}
                  <line x1="250" y1="4" x2="295" y2="4" stroke="#5fe7cc" strokeWidth="2" />
                </svg>
              </div>

              <div className="edu-box-glow-top" />
              
              {/* Top Row: Date Badge & Top-Right Chamfer Pill */}
              <div className="edu-card-top-row">
                <div className="edu-badge-tag">2026</div>
                <div className="edu-chamfer-badge-row">
                  <div className="edu-chamfer-icon-pill">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5fe7cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <div className="edu-chamfer-slash" />
                </div>
              </div>

              {/* Main Content: Info */}
              <div className="edu-card-content-grid">
                <div className="edu-col-main-info">
                  <div className="edu-glass-icon-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5fe7cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>

                  <div className="edu-text-group">
                    <h3 className="edu-box-title">Internship</h3>
                    <h4 className="edu-box-subtitle">Machine Learning Intern</h4>
                    
                    <div className="edu-box-bullets">
                      <div className="edu-bullet-row">
                        <svg className="edu-bullet-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5fe7cc" strokeWidth="2">
                          <path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M14 10v11M12 2L2 7h20L12 2z"/>
                        </svg>
                        <span>Unified Mentor Pvt. Ltd.</span>
                      </div>
                      <div className="edu-bullet-row">
                        <svg className="edu-bullet-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5fe7cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>Remote &nbsp;|&nbsp; India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Center Explore Button */}
              <div className="edu-card-bottom-bar">
                <button 
                  className="edu-explore-btn" 
                  onClick={() => onOpenDetail(eduDetails.internship)}
                  aria-label="Explore Internship Details"
                >
                  <span>EXPLORE MORE</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillGroup({ title, list }) {
  return (
    <article className="skill-group glass">
      <h3>{title}</h3>
      <div className="skill-list">
        {list.map(([name, level, value, desc]) => (
          <div className="skill-item" key={`${title}-${name}`} tabIndex="0">
            <div className="skill-top"><span>{name}</span><b>{level}</b></div>
            <div className="bar"><i style={{ width: `${value}%` }} /></div>
            <div className="skill-tip"><strong>{name}</strong><span>{level}</span><small>{desc}</small></div>
          </div>
        ))}
      </div>
    </article>
  );
}

function SkillDock() {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const items = [...el.querySelectorAll(".dock-item")];
    items.forEach((item) => {
      const r = item.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const distance = Math.abs(e.clientX - cx);
      const scale = Math.max(1, 2.12 - distance / 88);
      item.style.setProperty("--dock-scale", Math.min(scale, 2.12).toFixed(2));
      item.style.setProperty("--dock-y", `${Math.max(0, 16 - distance / 7)}px`);
    });
  };

  const reset = () => {
    ref.current?.querySelectorAll(".dock-item").forEach(item => {
      item.style.setProperty("--dock-scale", "1");
      item.style.setProperty("--dock-y", "0px");
    });
  };

  return (
    <div className="dock-wrap" onMouseMove={onMove} onMouseLeave={reset}>
      <div className="dock-track" ref={ref}>
        {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
          <div
            className={`dock-item ${hovered === skill ? "hovered" : ""}`}
            key={`${skill}-${i}`}
            onMouseEnter={() => setHovered(skill)}
          >
            <span>{skill.slice(0, 2)}</span>
            <b>{skill}</b>
          </div>
        ))}
      </div>
      <div className="dock-hint">{hovered ? `Exploring ${hovered}` : "Hover or drag across technologies"}</div>
    </div>
  );
}

function ProjectMarquee({ onOpen }) {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);
  const drag = useRef({ active: false, x: 0 });
  const offset = useRef(0);
  const singleWidth = useRef(0);

  useEffect(() => {
    let raf;
    const track = trackRef.current;
    if (track) {
      singleWidth.current = track.scrollWidth / 2;
    }

    const tick = () => {
      if (!paused && !drag.current.active) {
        offset.current -= 0.7;
        const sw = singleWidth.current;
        if (sw > 0 && Math.abs(offset.current) >= sw) {
          offset.current += sw;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${offset.current}px, 0, 0)`;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  const down = (e) => {
    drag.current = { active: true, x: e.clientX };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const move = (e) => {
    if (!drag.current.active) return;
    const delta = e.clientX - drag.current.x;
    drag.current.x = e.clientX;
    offset.current += delta;
    const sw = singleWidth.current;
    if (sw > 0) {
      if (offset.current > 0) offset.current -= sw;
      if (Math.abs(offset.current) >= sw) offset.current += sw;
    }
    if (trackRef.current) trackRef.current.style.transform = `translate3d(${offset.current}px, 0, 0)`;
  };
  const up = () => { drag.current.active = false; };

  return (
    <div
      className="project-window"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); up(); }}
      onPointerDown={down}
      onPointerMove={move}
      onPointerUp={up}
    >
      <div className="project-track" ref={trackRef}>
        {[...projects, ...projects].map((p, i) => (
          <article className="project-card glass tilt-card" key={`${p.title}-${i}`} onClick={() => onOpen(p)}>
            <div className="project-art">
              <div className="art-grid" />
              <span>{p.icon}</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tag-row">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
            <button type="button">VIEW PROJECT ↗</button>
          </article>
        ))}
      </div>
      <div className="curve-line" />
      <div className="project-controls"><span>←</span><small>{paused ? "PAUSED — HOVER TO EXPLORE" : "MOVING GALLERY"}</small><span>→</span></div>
    </div>
  );
}

function ContactLine({ label, value }) {
  return (
    <div className="contact-line">
      <span>{label}</span>
      <b>{value}</b>
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 3500);
  };
  return (
    <form className="contact-form glass" onSubmit={submit}>
      <div className="form-row">
        <input required placeholder="Your Name" aria-label="Your Name" />
        <input required type="email" placeholder="Your Email" aria-label="Your Email" />
      </div>
      <textarea required placeholder="Your Message" aria-label="Your Message" />
      <button className="button primary" type="submit">{sent ? "MESSAGE READY ✓" : "SEND MESSAGE ↗"}</button>
      <small className="form-note">Demo form — connect your email service before production.</small>
    </form>
  );
}

function AsciiRain({
  headColor = "#FFFFFF",
  trailColor = "#0A7A0B",
  glyphSize = 13,
  speed = 8,
  density = 42,
  trail = 38,
  glyphs = "ｱｲｳｴｵｶｷｸ0123456789ABCDEFｸｿﾝ",
}) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!wrap || !canvas || !context) return undefined;

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { rootMargin: "150px 0px" }
    );
    observer.observe(wrap);

    const chars = [...glyphs];
    const pick = () => chars[Math.floor(Math.random() * chars.length)];
    const gap = glyphSize * (1 + (50 - density) / 12);
    const tailLength = Math.max(1, Math.round(trail));
    const streams = [];
    let width = 0;
    let height = 0;
    let columns = 0;
    let animationFrame;
    let lastTime = 0;
    let lastPaint = 0;
    let nextRelease = [];
    let alive = true;

    const spawn = (y, span) => ({
      y,
      rate: speed * glyphSize * (0.75 + Math.random() * 0.5),
      burnout: Math.random() < 0.35 ? Infinity : 0.75 + Math.random() * 0.25,
      alpha: 1,
      chars: Array.from({ length: tailLength }, pick),
      span,
    });

    const layout = () => {
      const ratio = Math.min(1.25, window.devicePixelRatio || 1);
      width = wrap.clientWidth || window.innerWidth;
      height = wrap.clientHeight || window.innerHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const span = Math.hypot(width, height);
      columns = Math.max(1, Math.ceil(span / gap));
      streams.length = columns;
      nextRelease = [];
      for (let index = 0; index < columns; index++) {
        streams[index] = [spawn(Math.random() * span, span)];
        nextRelease[index] = span * (0.3 + Math.random() * 0.5);
      }
    };

    const draw = (delta) => {
      context.clearRect(0, 0, width, height);
      const span = Math.hypot(width, height);
      context.save();
      context.translate(width / 2, height / 2);
      context.font = `${glyphSize}px ui-monospace, Menlo, monospace`;
      context.textAlign = "center";
      context.textBaseline = "middle";

      for (let index = 0; index < columns; index++) {
        const column = streams[index];
        if (!column) continue;
        const x = -span / 2 + index * gap + gap / 2;
        column.forEach((stream) => {
          stream.y += stream.rate * delta;
          if (stream.burnout !== Infinity && stream.y / span > stream.burnout) {
            stream.alpha -= delta * 1.5;
          }

          const headY = -span / 2 + stream.y;
          for (let glyphIndex = 0; glyphIndex < tailLength; glyphIndex++) {
            const y = headY - glyphIndex * glyphSize;
            if (y < -span / 2 - glyphSize || y > span / 2 + glyphSize) continue;
            context.globalAlpha = Math.max(0, stream.alpha) * (glyphIndex === 0 ? 1 : 1 - glyphIndex / tailLength);
            context.fillStyle = glyphIndex === 0 ? headColor : trailColor;
            context.fillText(stream.chars[glyphIndex], x, y);
          }
        });

        streams[index] = column.filter((stream) => stream.alpha > 0 && stream.y - tailLength * glyphSize <= span);
        const newest = streams[index][streams[index].length - 1];
        if (!newest || newest.y >= nextRelease[index]) {
          streams[index].push(spawn(-tailLength * glyphSize, span));
          nextRelease[index] = span * (0.3 + Math.random() * 0.5);
        }
      }
      context.globalAlpha = 1;
      context.restore();
    };

    const loop = (time) => {
      if (!alive) return;
      if (!isVisible) {
        animationFrame = requestAnimationFrame(loop);
        return;
      }
      if (time - lastPaint < 33) {
        animationFrame = requestAnimationFrame(loop);
        return;
      }
      lastPaint = time;
      const delta = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 1 / 60;
      lastTime = time;
      draw(delta);
      animationFrame = requestAnimationFrame(loop);
    };

    layout();
    const resizeObserver = new ResizeObserver(layout);
    resizeObserver.observe(wrap);
    animationFrame = requestAnimationFrame(loop);

    return () => {
      alive = false;
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, [density, glyphSize, glyphs, headColor, speed, trail, trailColor]);

  return <div ref={wrapRef} className="ascii-rain" aria-hidden="true"><canvas ref={canvasRef} /></div>;
}

createRoot(document.getElementById("root")).render(<App />);
