import React, { useRef, useEffect } from "react";

// ==========================================================================
// HIGH-TECH CYBER SVG ARTWORK PREVIEWS FOR PROJECT CARDS
// ==========================================================================

export const ProjectArtworks = {
  Drowsiness: () => (
    <div className="proj-art-canvas proj-art-drowsiness" style={{ padding: 0, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", userSelect: "none" }}>
      <img
        src={`${import.meta.env.BASE_URL}images/drowsiness-detection.png`}
        alt="Driver Drowsiness Detection"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          borderRadius: "10px",
          pointerEvents: "none",
          userSelect: "none",
          WebkitUserDrag: "none",
          WebkitUserSelect: "none"
        }}
      />
    </div>
  ),

  VirtualMouse: () => (
    <div className="proj-art-canvas proj-art-virtual-mouse" style={{ padding: 0, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", userSelect: "none" }}>
      <img
        src={`${import.meta.env.BASE_URL}images/virtual-mouse.png`}
        alt="AI Virtual Mouse (Gesture3DMouse)"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          borderRadius: "10px",
          pointerEvents: "none",
          userSelect: "none",
          WebkitUserDrag: "none",
          WebkitUserSelect: "none"
        }}
      />
    </div>
  ),

  TicketCategorizer: () => (
    <div className="proj-art-canvas proj-art-tickets">
      {/* Neural Brain Network Node Graph on Left */}
      <div className="art-brain-hud">
        <svg className="art-brain-svg" viewBox="0 0 100 90" fill="none">
          {/* Brain outline & connections */}
          <path
            d="M 50 15 C 35 15 20 25 20 45 C 20 65 35 75 50 75 C 65 75 80 65 80 45 C 80 25 65 15 50 15 Z"
            stroke="#00E5FF"
            strokeWidth="1.2"
            opacity="0.4"
            strokeDasharray="3 3"
          />
          {/* Synapse Lines */}
          <line x1="50" y1="20" x2="35" y2="35" stroke="#00E5FF" strokeWidth="1" opacity="0.6" />
          <line x1="50" y1="20" x2="65" y2="35" stroke="#00E5FF" strokeWidth="1" opacity="0.6" />
          <line x1="35" y1="35" x2="30" y2="55" stroke="#00E5FF" strokeWidth="1" opacity="0.6" />
          <line x1="65" y1="35" x2="70" y2="55" stroke="#00E5FF" strokeWidth="1" opacity="0.6" />
          <line x1="30" y1="55" x2="50" y2="70" stroke="#00E5FF" strokeWidth="1" opacity="0.6" />
          <line x1="70" y1="55" x2="50" y2="70" stroke="#00E5FF" strokeWidth="1" opacity="0.6" />
          <line x1="50" y1="35" x2="50" y2="55" stroke="#00E5FF" strokeWidth="1.2" opacity="0.8" />
          {/* Synapse Nodes */}
          <circle cx="50" cy="20" r="3" fill="#00E5FF" />
          <circle cx="35" cy="35" r="3" fill="#00E5FF" />
          <circle cx="65" cy="35" r="3" fill="#00E5FF" />
          <circle cx="50" cy="45" r="4" fill="#5FE7CC" />
          <circle cx="30" cy="55" r="3" fill="#00E5FF" />
          <circle cx="70" cy="55" r="3" fill="#00E5FF" />
          <circle cx="50" cy="70" r="3" fill="#00E5FF" />
        </svg>
      </div>
      {/* Category Pills Stack on Right */}
      <div className="art-ticket-pills">
        <div className="art-ticket-pill pill-billing">
          <span className="art-pill-dot" />
          <span>Billing</span>
          <span className="art-pill-arrow">›</span>
        </div>
        <div className="art-ticket-pill pill-tech">
          <span className="art-pill-dot" />
          <span>Technical</span>
          <span className="art-pill-arrow">›</span>
        </div>
        <div className="art-ticket-pill pill-hr">
          <span className="art-pill-dot" />
          <span>HR</span>
          <span className="art-pill-arrow">›</span>
        </div>
        <div className="art-ticket-pill pill-general">
          <span className="art-pill-dot" />
          <span>General</span>
          <span className="art-pill-arrow">›</span>
        </div>
      </div>
    </div>
  ),

  Forecasting: () => (
    <div className="proj-art-canvas proj-art-forecast" style={{ padding: 0, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", userSelect: "none" }}>
      <img
        src={`${import.meta.env.BASE_URL}images/forecasting-dashboard.png`}
        alt="Predictive Forecasting Dashboard"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          borderRadius: "10px",
          pointerEvents: "none",
          userSelect: "none",
          WebkitUserDrag: "none",
          WebkitUserSelect: "none"
        }}
      />
    </div>
  ),

  Superstore: () => (
    <div className="proj-art-canvas proj-art-superstore">
      {/* Geospatial Map World Mesh */}
      <div className="art-geo-header">
        <span className="art-geo-title">Superstore Analytics</span>
        <span className="art-geo-tag">LIVE</span>
      </div>
      <div className="art-geo-body">
        {/* World Map Vector Points */}
        <svg className="art-world-svg" viewBox="0 0 130 55" fill="none">
          <ellipse cx="65" cy="28" rx="55" ry="24" stroke="rgba(0, 229, 255, 0.25)" strokeWidth="0.8" strokeDasharray="3 3" />
          {/* Simulated Continents / Geo Nodes */}
          <circle cx="35" cy="22" r="3" fill="#00E5FF" />
          <circle cx="50" cy="18" r="2.5" fill="#00E5FF" />
          <circle cx="75" cy="20" r="3.5" fill="#00E5FF" />
          <circle cx="95" cy="26" r="3" fill="#00E5FF" />
          <circle cx="45" cy="38" r="2" fill="#5FE7CC" />
          <circle cx="85" cy="36" r="2" fill="#5FE7CC" />
          {/* Data links */}
          <line x1="35" y1="22" x2="75" y2="20" stroke="#00E5FF" strokeWidth="0.8" opacity="0.6" strokeDasharray="2 2" />
          <line x1="75" y1="20" x2="95" y2="26" stroke="#00E5FF" strokeWidth="0.8" opacity="0.6" strokeDasharray="2 2" />
        </svg>
        {/* Mini KPI Bar Cluster */}
        <div className="art-kpi-bars">
          <div className="art-bar-row">
            <span className="art-bar-lbl">Sales</span>
            <div className="art-bar-track"><div className="art-bar-fill" style={{ width: "85%" }} /></div>
          </div>
          <div className="art-bar-row">
            <span className="art-bar-lbl">Profit</span>
            <div className="art-bar-track"><div className="art-bar-fill" style={{ width: "68%" }} /></div>
          </div>
          <div className="art-bar-row">
            <span className="art-bar-lbl">Region</span>
            <div className="art-bar-track"><div className="art-bar-fill" style={{ width: "92%" }} /></div>
          </div>
        </div>
      </div>
    </div>
  ),

  Deepfake: () => (
    <div className="proj-art-canvas proj-art-deepfake" style={{ padding: 0, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", userSelect: "none" }}>
      <img
        src={`${import.meta.env.BASE_URL}images/fake-detection.png`}
        alt="AI-Powered Fake Image & Video Detection"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          borderRadius: "10px",
          pointerEvents: "none",
          userSelect: "none",
          WebkitUserDrag: "none",
          WebkitUserSelect: "none"
        }}
      />
    </div>
  ),

  NeuroVision: () => (
    <div className="proj-art-canvas proj-art-neurovision" style={{ padding: 0, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", userSelect: "none" }}>
      <img
        src={`${import.meta.env.BASE_URL}images/neurovision.png`}
        alt="NeuroVision"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          borderRadius: "10px",
          pointerEvents: "none",
          userSelect: "none",
          WebkitUserDrag: "none",
          WebkitUserSelect: "none"
        }}
      />
    </div>
  ),

  SmpsDigitalTwin: () => (
    <div className="proj-art-canvas proj-art-smps" style={{ padding: 0, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", userSelect: "none" }}>
      <img
        src={`${import.meta.env.BASE_URL}images/smps-digital-twin.png`}
        alt="AI Digital Twin for SMPS Fault Diagnosis"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          borderRadius: "10px",
          pointerEvents: "none",
          userSelect: "none",
          WebkitUserDrag: "none",
          WebkitUserSelect: "none"
        }}
      />
    </div>
  ),

  PrintingAutomation: () => (
    <div className="proj-art-canvas proj-art-printing" style={{ padding: 0, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", userSelect: "none" }}>
      <img
        src={`${import.meta.env.BASE_URL}images/printing-automation.png`}
        alt="Printing Automation System"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          borderRadius: "10px",
          pointerEvents: "none",
          userSelect: "none",
          WebkitUserDrag: "none",
          WebkitUserSelect: "none"
        }}
      />
    </div>
  ),

  Slot06: () => (
    <div className="proj-art-canvas proj-art-slot06" style={{ padding: 0, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", userSelect: "none" }}>
      <img
        src={`${import.meta.env.BASE_URL}images/slot-06.png`}
        alt="Predictive Forecasting Dashboard"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          borderRadius: "10px",
          pointerEvents: "none",
          userSelect: "none",
          WebkitUserDrag: "none",
          WebkitUserSelect: "none"
        }}
      />
    </div>
  ),

  SlotGeneric: ({ slotNum, title, tag }) => (
    <div className="proj-art-canvas proj-art-generic-slot">
      <div className="art-slot-hud-box">
        <div className="art-slot-reticle">
          <span className="art-slot-num">{slotNum}</span>
          <span className="art-slot-status">ACTIVE</span>
        </div>
        <div className="art-slot-waveform">
          <span className="art-wave-bar" style={{ height: "45%" }} />
          <span className="art-wave-bar" style={{ height: "75%" }} />
          <span className="art-wave-bar" style={{ height: "100%" }} />
          <span className="art-wave-bar" style={{ height: "60%" }} />
          <span className="art-wave-bar" style={{ height: "85%" }} />
          <span className="art-wave-bar" style={{ height: "40%" }} />
          <span className="art-wave-bar" style={{ height: "90%" }} />
          <span className="art-wave-bar" style={{ height: "65%" }} />
        </div>
        <div className="art-slot-tag-row">
          <span className="art-slot-chip">{tag}</span>
        </div>
      </div>
    </div>
  )
};

// ==========================================================================
// 10 PROJECTS DATA (8 LIVE + EXTRA CUSTOMIZABLE SLOTS)
// ==========================================================================

export const projectsList = [
  {
    id: "deepfake",
    title: "AI-Powered Fake Image & Video Detection System",
    desc: "AI-based system that identifies manipulated and synthetic images and videos using deep learning and visual feature analysis.",
    tags: ["Python", "PyTorch", "OpenCV", "NumPy", "CNN"],
    performance: "94% F1-score",
    icon: ProjectArtworks.Deepfake,
    github: "https://github.com/Sritharan2005",
    details: {
      overview: "AI-based system that identifies manipulated and synthetic images and videos using deep learning and visual feature analysis.",
      highlights: [
        "Detects manipulated and synthetic images and videos.",
        "Uses CNN-based deep learning for visual classification.",
        "Applies data preprocessing and augmentation to improve model generalization.",
        "Achieved 94% F1-score on the benchmark dataset."
      ],
      performance: "94% F1-score",
      technologies: ["Python", "PyTorch", "OpenCV", "NumPy", "CNN"]
    }
  },
  {
    id: "drowsiness",
    title: "Driver Drowsiness Detection",
    desc: "Real-time computer vision system that monitors facial and eye patterns to detect driver drowsiness and provide timely alerts.",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "dlib", "CNN"],
    performance: "98% Detection Accuracy",
    icon: ProjectArtworks.Drowsiness,
    github: "https://github.com/Sritharan2005",
    details: {
      overview: "Real-time computer vision system that monitors facial and eye patterns to detect driver drowsiness and provide timely alerts.",
      highlights: [
        "Performs real-time facial landmark detection through webcam input.",
        "Uses Eye Aspect Ratio (EAR) to identify prolonged eye closure.",
        "Detects drowsiness and triggers audio/visual alerts.",
        "Achieved 98% detection accuracy using a CNN-based model."
      ],
      performance: "98% Detection Accuracy",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "dlib", "CNN"]
    }
  },
  {
    id: "virtual-mouse",
    title: "AI Virtual Mouse (Gesture3DMouse)",
    desc: "Touchless virtual mouse that uses hand gestures to control computer actions such as cursor movement, clicking, scrolling, and dragging.",
    tags: ["Python", "MediaPipe", "OpenCV", "PyAutoGUI"],
    performance: "Real-time gesture recognition and control",
    icon: ProjectArtworks.VirtualMouse,
    github: "https://github.com/Sritharan2005",
    details: {
      overview: "Touchless virtual mouse that uses hand gestures to control computer actions such as cursor movement, clicking, scrolling, and dragging.",
      highlights: [
        "Tracks hand landmarks in real time using a webcam.",
        "Converts recognized hand gestures into mouse actions.",
        "Supports cursor movement, clicking, scrolling, and dragging.",
        "Enables touchless computer interaction without a physical mouse."
      ],
      performance: "Real-time gesture recognition and control",
      technologies: ["Python", "MediaPipe", "OpenCV", "PyAutoGUI"]
    }
  },
  {
    id: "neurovision",
    title: "NeuroVision",
    desc: "Browser-based multimodal AI framework that combines motor, drawing, speech, and reaction-time assessments for preliminary neurological risk screening.",
    tags: ["Python", "React", "Flask", "OpenCV", "NumPy", "SciPy", "Machine Learning"],
    performance: "Preliminary screening prototype — not a medical diagnosis",
    icon: ProjectArtworks.NeuroVision,
    github: "https://github.com/Sritharan2005",
    details: {
      overview: "Browser-based multimodal AI framework that combines motor, drawing, speech, and reaction-time assessments for preliminary neurological risk screening.",
      highlights: [
        "Performs motor and tremor assessment using camera input.",
        "Analyzes drawing patterns, speech features, and reaction time.",
        "Combines multiple assessment features through multimodal processing.",
        "Generates a Neuro Risk Index with dashboard-based results."
      ],
      performance: "Preliminary screening prototype — not a medical diagnosis",
      technologies: ["Python", "React", "Flask", "OpenCV", "NumPy", "SciPy", "Machine Learning"]
    }
  },
  {
    id: "smps-digital-twin",
    title: "AI-Based Digital Twin for SMPS Fault Diagnosis",
    desc: "AI-based digital twin framework that simulates SMPS buck converter faults and analyzes electrical signals for automated fault detection and diagnosis.",
    tags: ["LTspice", "KiCad", "NGspice", "Python", "Machine Learning", "Deep Learning"],
    performance: "Tested under different operating conditions and noise levels",
    icon: ProjectArtworks.SmpsDigitalTwin,
    github: "https://github.com/Sritharan2005",
    details: {
      overview: "AI-based digital twin framework that simulates SMPS buck converter faults and analyzes electrical signals for automated fault detection and diagnosis.",
      highlights: [
        "Creates a digital twin model of an SMPS buck converter.",
        "Simulates multiple fault conditions using circuit simulation.",
        "Extracts electrical signal features from simulated fault conditions.",
        "Applies ML and deep learning for fault classification and localization."
      ],
      performance: "Tested under different operating conditions and noise levels",
      technologies: ["LTspice", "KiCad", "NGspice", "Python", "Machine Learning", "Deep Learning"]
    }
  },
  {
    id: "forecasting",
    title: "Predictive Forecasting of Care Load & Placement Demand",
    desc: "Machine learning forecasting system that analyzes historical HHS care data and predicts short-term care demand through a seven-day forecasting pipeline.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Streamlit", "Plotly"],
    performance: "R²: 0.752 · MAE: 65.77 · RMSE: 87.70 (Forecast-safe Random Forest model)",
    icon: ProjectArtworks.Forecasting,
    github: "https://github.com/Sritharan2005",
    details: {
      overview: "Machine learning forecasting system that analyzes historical HHS care data and predicts short-term care demand through a seven-day forecasting pipeline.",
      highlights: [
        "Cleans and analyzes historical HHS care data.",
        "Engineers lag and rolling features for time-series prediction.",
        "Compares Random Forest and XGBoost regression models.",
        "Generates seven-day forecasts with preliminary demand risk classification."
      ],
      performance: "R²: 0.752 · MAE: 65.77 · RMSE: 87.70\n(Forecast-safe Random Forest model)",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Streamlit", "Plotly"]
    }
  },
  {
    id: "printing-automation",
    title: "Printing Automation System",
    desc: "Web-based platform that simplifies Xerox shop operations by managing print orders, pricing, queues, payments, and printer status through a centralized dashboard.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    performance: "30% Workflow Efficiency Improvement · 50% Reduction in Manual Tasks",
    icon: ProjectArtworks.PrintingAutomation,
    github: "https://github.com/Sritharan2005",
    details: {
      overview: "Web-based platform that simplifies Xerox shop operations by managing print orders, pricing, queues, payments, and printer status through a centralized dashboard.",
      highlights: [
        "Digitizes print-order submission and order tracking.",
        "Automates page-based pricing and queue management.",
        "Integrates UPI payment workflow and printer status monitoring.",
        "Improved workflow efficiency by 30% and reduced manual tasks by 50%."
      ],
      performance: "30% Workflow Efficiency Improvement\n50% Reduction in Manual Tasks",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"]
    }
  }
];

// ==========================================================================
// PROJECTS SECTION COMPONENT WITH INFINITE RIGHT-TO-LEFT LOOP
// ==========================================================================

export default function ProjectsSection({ onOpenProject, isModalOpen = false }) {
  const trackRef = useRef(null);
  const animFrameId = useRef(null);

  // Smooth continuous right-to-left glide state
  const scrollPos = useRef(0);
  const targetScrollPos = useRef(0);
  const singleSetWidth = useRef(0);
  const isHovered = useRef(false);
  const isPointerDown = useRef(false);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const dragDistance = useRef(0);
  const flickVelocity = useRef(0);
  const lastPointerX = useRef(0);
  const lastPointerTime = useRef(0);

  const isModalOpenRef = useRef(isModalOpen);
  useEffect(() => {
    isModalOpenRef.current = isModalOpen;
  }, [isModalOpen]);

  // 3-times repeated array for completely seamless infinite loop wrapping
  const repeatedProjects = [...projectsList, ...projectsList, ...projectsList];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measureWidth = () => {
      if (track) {
        const oldSw = singleSetWidth.current;
        const newSw = track.scrollWidth / 3;
        if (oldSw > 0 && newSw > 0) {
          const ratio = newSw / oldSw;
          scrollPos.current *= ratio;
          targetScrollPos.current *= ratio;
        }
        singleSetWidth.current = newSw;
      }
    };
    measureWidth();
    window.addEventListener("resize", measureWidth, { passive: true });

    // 60/120/144 FPS delta-time smooth infinite glide loop
    let lastTime = performance.now();
    const glideLoop = (now) => {
      const currentTime = now || performance.now();
      const dt = Math.min((currentTime - lastTime) / 1000, 0.08);
      lastTime = currentTime;
      const sw = singleSetWidth.current;

      // When project details modal is active, completely STOP the loop
      if (!isModalOpenRef.current) {
        // Coasting momentum physics if dragged/flicked
        if (Math.abs(flickVelocity.current) > 1) {
          targetScrollPos.current -= flickVelocity.current * dt;
          flickVelocity.current *= Math.exp(-3.2 * dt);
        } else {
          flickVelocity.current = 0;
        }

        // Auto-glide speed: ultra-slow (10px/s) when mouse hovered/dragged, gentle pace otherwise (48px/s)
        if (!isPointerDown.current) {
          const baseSpeed = isHovered.current ? 10 : 48; // pixels per second
          targetScrollPos.current += baseSpeed * dt;
        }

        // Smooth exponential decay interpolation (frame-rate independent)
        const smoothingFactor = 1 - Math.exp(-12 * dt);
        scrollPos.current += (targetScrollPos.current - scrollPos.current) * smoothingFactor;

        if (sw > 0) {
          while (scrollPos.current >= sw) {
            scrollPos.current -= sw;
            targetScrollPos.current -= sw;
          }
          while (scrollPos.current < 0) {
            scrollPos.current += sw;
            targetScrollPos.current += sw;
          }
        }

        if (track) {
          track.style.transform = `translate3d(${-scrollPos.current}px, 0, 0)`;
        }
      }

      animFrameId.current = requestAnimationFrame(glideLoop);
    };

    animFrameId.current = requestAnimationFrame(glideLoop);

    return () => {
      cancelAnimationFrame(animFrameId.current);
      window.removeEventListener("resize", measureWidth);
    };
  }, []);

  // Pointer & Drag Handlers
  const handlePointerDown = (e) => {
    if (isModalOpenRef.current) return;
    isPointerDown.current = true;
    startX.current = e.clientX;
    lastPointerX.current = e.clientX;
    lastPointerTime.current = performance.now();
    flickVelocity.current = 0;
    dragDistance.current = 0;
    isDragging.current = false;
    isHovered.current = true;
    document.body.style.userSelect = "none";
  };

  const handlePointerMove = (e) => {
    if (isPointerDown.current && !isModalOpenRef.current) {
      const now = performance.now();
      const delta = e.clientX - startX.current;
      startX.current = e.clientX;
      dragDistance.current += Math.abs(delta);
      if (dragDistance.current > 5) {
        isDragging.current = true;
      }
      targetScrollPos.current -= delta;
      scrollPos.current -= delta;

      // Calculate instantaneous velocity for flick coasting
      const dt = (now - lastPointerTime.current) / 1000;
      if (dt > 0.005) {
        const instantV = (e.clientX - lastPointerX.current) / dt;
        flickVelocity.current = instantV;
        lastPointerX.current = e.clientX;
        lastPointerTime.current = now;
      }
    }
  };

  const handlePointerUp = () => {
    isPointerDown.current = false;
    document.body.style.userSelect = "";
    if (Math.abs(flickVelocity.current) > 2000) {
      flickVelocity.current = Math.sign(flickVelocity.current) * 2000;
    }
    setTimeout(() => {
      isDragging.current = false;
      dragDistance.current = 0;
    }, 80);
  };

  const handlePointerEnter = () => {
    isHovered.current = true;
  };

  const handlePointerLeave = () => {
    isHovered.current = false;
    isPointerDown.current = false;
    document.body.style.userSelect = "";
    setTimeout(() => {
      isDragging.current = false;
      dragDistance.current = 0;
    }, 80);
  };

  const handleCardClick = (e, project) => {
    if (isDragging.current || dragDistance.current > 5) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onOpenProject?.(project);
  };

  const scrollSlider = (direction) => {
    if (isModalOpenRef.current) return;
    const velocityBurst = direction === "left" ? 1100 : -1100;
    flickVelocity.current = velocityBurst;
    const step = direction === "left" ? -380 : 380;
    targetScrollPos.current += step;
  };

  return (
    <div className="proj-section-wrapper">
      {/* ==========================================================================
          TOP HEADER ROW
          ========================================================================== */}
      <div className="proj-header-banner">
        <div className="proj-header-left-col">
          <div className="proj-title-reticle-wrap">
            <div className="proj-title-group">
              <h2 className="proj-title-main section-title-main">
                <span className="proj-title-white section-title-white">REAL-WORLD</span>
                <span className="proj-title-cyan section-title-cyan">PROJECTS</span>
              </h2>
              <div className="proj-title-bar section-title-bar" />
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================================================
          MIDDLE CAROUSEL SLIDER WITH ARROWS & 10 HIGH-TECH CARDS
          ========================================================================== */}
      <div className="proj-slider-stage-wrapper">
        {/* Left Arrow Button */}
        <button
          className="proj-slider-arrow-btn proj-arrow-left"
          onClick={() => scrollSlider("left")}
          aria-label="Previous projects"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Viewport & Moving Infinite Track */}
        <div
          className="proj-slider-viewport"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
          <div className="proj-marquee-track" ref={trackRef}>
            {repeatedProjects.map((p, idx) => {
              const ArtComponent = p.icon;
              return (
                <article
                  className="proj-glass-card"
                  key={`${p.id}-${idx}`}
                  onClick={(e) => handleCardClick(e, p)}
                >
                  {/* SVG Chamfer Cyber Frame Overlay */}
                  <div className="proj-card-frame-svg-wrap" aria-hidden="true">
                    <svg className="proj-card-frame-svg" viewBox="0 0 340 460" fill="none" preserveAspectRatio="none">
                      <path
                        d="M 16 1 H 324 L 339 16 V 444 L 324 459 H 16 L 1 444 V 16 Z"
                        stroke="#00E5FF"
                        strokeWidth="1.6"
                        fill="none"
                      />
                    </svg>
                  </div>

                  {/* Top Preview Artwork Box */}
                  <div className="proj-card-top-art">
                    <ArtComponent />
                  </div>

                  {/* Card Content */}
                  <div className="proj-card-content">
                    <h3 className="proj-card-title">{p.title}</h3>
                    <p className="proj-card-desc">{p.desc}</p>

                    {/* Tech Pills */}
                    <div className="proj-card-tags">
                      {p.tags.map((tag) => (
                        <span className="proj-card-tag-pill" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Row: VIEW PROJECT on Left + GITHUB in Right Down Corner */}
                    <div className="proj-card-action-row">
                      <button
                        type="button"
                        className="proj-card-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(e, p);
                        }}
                      >
                        VIEW PROJECT <span className="proj-btn-arrow">›</span>
                      </button>
                      <a
                        href={p.github || "https://github.com/Sritharan2005"}
                        target="_blank"
                        rel="noreferrer"
                        className="proj-card-gh-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        title="View on GitHub"
                        aria-label={`View ${p.title} on GitHub`}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        <span>GITHUB ↗</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          className="proj-slider-arrow-btn proj-arrow-right"
          onClick={() => scrollSlider("right")}
          aria-label="Next projects"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
