import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("idle"); // "idle" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    if (isSending) return;

    setIsSending(true);
    setStatus("idle");
    setErrorMessage("");

    const serviceId = (import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_niyuzzf").trim();
    const templateId = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_7ejcbpo").trim();
    const publicKey = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "OdzARSITdUOqqQla_").trim();

    console.log(`[EmailJS DEBUG]\nserviceId = ${serviceId}\ntemplateId = ${templateId}\npublicKey = ${publicKey}`);

    try {
      emailjs.init({ publicKey });

      const templateParams = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        reply_to: formData.email.trim(),
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("EmailJS sending error:", error);
      setStatus("error");
      setErrorMessage(
        (error && (error.text || error.message)) ||
          "Failed to send message. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-cyber-wrapper">
      {/* ==========================================================================
          TOP SECTION HEADER
          ========================================================================== */}
      <div className="contact-top-banner">
        <div className="contact-heading-left">
          <div className="contact-title-block">
            <span className="contact-eyebrow">G E T &nbsp; I N &nbsp; T O U C H</span>
            <h2 className="contact-title-main section-title-main">
              <span className="contact-title-white section-title-white">LET'S </span>
              <span className="contact-title-cyan section-title-cyan">CONNECT.</span>
            </h2>
            <div className="contact-title-bar section-title-bar" />
          </div>
        </div>
      </div>

      {/* ==========================================================================
          MAIN 3-COLUMN CONTACT GRID
          ========================================================================== */}
      <div className="contact-main-grid">
        {/* --- LEFT COLUMN: 4 Cyber Glassmorphism Contact Cards --- */}
        <div className="contact-left-col">
          {/* Card 1: Email (Non-clickable static card) */}
          <div className="contact-info-card contact-info-card-static">
            <div className="contact-card-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="contact-card-text">
              <span className="contact-card-label">EMAIL</span>
              <span className="contact-card-val">srirogu@gmail.com</span>
            </div>
          </div>

          {/* Card 2: Location (Non-clickable static card) */}
          <div className="contact-info-card contact-info-card-static">
            <div className="contact-card-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="contact-card-text">
              <span className="contact-card-label">LOCATION</span>
              <span className="contact-card-val">Tamil Nadu, India</span>
            </div>
          </div>

          {/* Card 3: LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sritharan-ravi-31d2005/"
            className="contact-info-card"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-card-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <div className="contact-card-text">
              <span className="contact-card-label">LINKEDIN</span>
              <span className="contact-card-val">linkedin.com/in/sritharan-ravi-31d2005</span>
            </div>
            <span className="contact-card-arrow">↗</span>
          </a>

          {/* Card 4: GitHub */}
          <a
            href="https://github.com/Sritharan2005"
            className="contact-info-card"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-card-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </div>
            <div className="contact-card-text">
              <span className="contact-card-label">GITHUB</span>
              <span className="contact-card-val">github.com/Sritharan2005</span>
            </div>
            <span className="contact-card-arrow">↗</span>
          </a>

          {/* Card 5: WhatsApp */}
          <a
            href="https://wa.me/918072428883"
            className="contact-info-card"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-card-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#00E5FF">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div className="contact-card-text">
              <span className="contact-card-label">WHATSAPP</span>
              <span className="contact-card-val">+91 80724 28883</span>
            </div>
            <span className="contact-card-arrow">↗</span>
          </a>
        </div>

        {/* --- CENTER COLUMN: Cyber Glassmorphism Interactive Form Card --- */}
        <div className="contact-center-col">
          <div className="contact-form-glass-card">
            {/* SVG Chamfer Cyber Frame */}
            <div className="contact-form-frame-svg-wrap" aria-hidden="true">
              <svg className="contact-form-frame-svg" viewBox="0 0 540 460" preserveAspectRatio="none">
                <path
                  d="M 22 2 H 518 L 538 22 V 438 L 518 458 H 22 L 2 438 V 22 Z"
                  stroke="#00E5FF"
                  strokeWidth="1.6"
                  fill="none"
                />
              </svg>
            </div>

            {/* Top Header Row of Form */}
            <div className="contact-form-header">
              <span className="contact-form-kicker">S E N D &nbsp; A &nbsp; M E S S A G E</span>
              <div className="contact-online-badge">
                <span className="online-dot" />
                <span className="online-text">ONLINE</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form-body">
              {/* Row 1: Name & Email */}
              <div className="contact-form-input-row">
                <div className="contact-input-field-wrap">
                  <div className="contact-field-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="contact-input-field-wrap">
                  <div className="contact-field-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Row 2: Textarea */}
              <div className="contact-textarea-field-wrap">
                <div className="contact-field-icon-textarea">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                    <path d="m15 5 4 4" />
                  </svg>
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  maxLength={500}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <span className="contact-char-count">{formData.message.length}/500</span>
              </div>

              {/* Row 3: Action Button & Sent State */}
              <div className="contact-form-action-row">
                <button type="submit" className="contact-send-btn" disabled={isSending || status === "success"}>
                  <span>
                    {isSending
                      ? "TRANSMITTING MESSAGE..."
                      : status === "success"
                        ? "MESSAGE SENT SUCCESSFULLY ✓"
                        : "SEND MESSAGE →"}
                  </span>
                </button>
                <button
                  type="submit"
                  className="contact-plane-badge"
                  disabled={isSending || status === "success"}
                  aria-label="Send Message"
                  title="Send Message"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>

              {/* Status feedback message if error */}
              {status === "error" && (
                <div style={{ color: "#FF5370", fontSize: "11.5px", fontFamily: "Inter, sans-serif", display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
                  <span>⚠</span>
                  <span>{errorMessage || "Failed to send message. Please try again."}</span>
                </div>
              )}

              {/* Row 4: Reply Info Note */}
              <div className="contact-reply-note">
                <span className="reply-info-icon">ⓘ</span>
                <span>I usually reply within 24 hours.</span>
              </div>
            </form>
          </div>
        </div>

        {/* --- RIGHT COLUMN: Holographic Cyber Globe --- */}
        <div className="contact-right-col">
          {/* 3D Cyber Holographic Globe Stage */}
          <div className="contact-globe-stage">
            {/* Visual Earth Hologram Core Layer */}
            <div className="contact-earth-core-wrap">
              <img
                src={`${import.meta.env.BASE_URL}images/contact-earth.png`}
                alt="Cyber Holographic Earth Globe"
                className="contact-earth-img"
              />
            </div>

            {/* Floating Cyber Callout Badges */}
            {/* Callout 1: DISCUSS Ideas */}
            <div className="globe-callout-badge callout-discuss">
              <span className="callout-tag">DISCUSS</span>
              <span className="callout-sub">Ideas</span>
            </div>

            {/* Callout 2: COLLABORATE Projects */}
            <div className="globe-callout-badge callout-collaborate">
              <span className="callout-tag">COLLABORATE</span>
              <span className="callout-sub">Projects</span>
            </div>

            {/* Callout 3: BUILD Solutions */}
            <div className="globe-callout-badge callout-build">
              <span className="callout-tag">BUILD</span>
              <span className="callout-sub">Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================================================================
          BOTTOM STATUS CAPSULE BAR
          ========================================================================== */}
      <div className="contact-bottom-hud-wrapper">
        <div className="contact-bottom-hud-capsule">
          {/* Milestone 1 */}
          <div className="contact-hud-item">
            <div className="contact-hud-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18h6" />
                <path d="M10 22h4" />
                <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
              </svg>
            </div>
            <div className="contact-hud-text">
              <span className="contact-hud-title">Open to</span>
              <span className="contact-hud-desc">Projects &amp; Opportunities</span>
            </div>
          </div>

          <div className="contact-hud-divider" />

          {/* Milestone 2 */}
          <div className="contact-hud-item">
            <div className="contact-hud-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="contact-hud-text">
              <span className="contact-hud-title">Let's Work On</span>
              <span className="contact-hud-desc">AI • ML • Software • More</span>
            </div>
          </div>

          <div className="contact-hud-divider" />

          {/* Milestone 3 */}
          <div className="contact-hud-item">
            <div className="contact-hud-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
            </div>
            <div className="contact-hud-text">
              <span className="contact-hud-title">Available For</span>
              <span className="contact-hud-desc">Internships • Entry-Level Jobs</span>
            </div>
          </div>

          <div className="contact-hud-divider" />

          {/* Milestone 4 */}
          <div className="contact-hud-item">
            <div className="contact-hud-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <div className="contact-hud-text">
              <span className="contact-hud-title">Goal</span>
              <span className="contact-hud-desc">Build Intelligent Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
