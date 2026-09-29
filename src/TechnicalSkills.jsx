import React, { useRef } from "react";

// ==========================================
// AUTHENTIC BRAND & TECH SVG ICONS
// ==========================================

export const TechIcons = {
  Java: () => (
    <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
      <path d="M12.2 23.4c0 0-2.2.4-1.5 1.7.7 1.4 5.2 1.4 5.8 1.4 3.3 0 7-.8 7-.8s.8.6-.3 1.1c-4.5 2-13.6 1-14.3-.8-.6-1.6 1.7-2.3 3.3-2.6z" fill="#EA2D2E" />
      <path d="M10.6 20.2c0 0-2.4.6-1.7 1.9.8 1.5 4.1 1.6 5.6 1.6 3.6 0 6.9-.8 6.9-.8s.8.6-.2 1c-4.6 2-13.1 1.1-13.8-.7-.7-1.6 1.6-2.8 3.2-3z" fill="#EA2D2E" />
      <path d="M16.9 15.2c1.3 1.5-1.3 2.8-1.3 2.8s3.5-1.8 1.9-4.1c-1.5-2.1-2.9-3.1 4-6.7-3.1 1.5-6.1 3.5-5.4 5.4.4 1 1 1.7 1 2.6z" fill="#EA2D2E" />
      <path d="M22.3 22.5s1.1 1-.8 1.7c-3.6 1.3-7.6 1.4-11.7 1.4-1.8 0-3.6-.2-3.6-.2s-.6.6.3.9c4 1.1 13.2 1.2 16.8-.6 1.4-.8 1.1-2-.9-3.2z" fill="#5382A1" />
      <path d="M13.5 9.8c.7 1.4-1.9 2.9-1.9 2.9s2.7-1.4 1.7-3.2c-.9-1.7-2.5-2.6 3.4-5.5-3.1 1.2-4.2 3.5-3.2 5.8z" fill="#5382A1" />
      <path d="M24.8 25.6c-4.4 2.3-13.2 2.5-17.5.5-.8-.4-.2-.9-.2-.9s2.3.9 6.5.9c6.1 0 10.6-1.2 11.2-1.6.5-.3 0 1.1 0 1.1z" fill="#5382A1" />
    </svg>
  ),
  Python: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="py-b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#387EB8" />
          <stop offset="100%" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="py-y" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE873" />
          <stop offset="100%" stopColor="#FFD43B" />
        </linearGradient>
      </defs>
      <path fill="url(#py-b)" d="M11.92 2c-5.52 0-5.17 2.39-5.17 2.39l.01 2.48h5.27v.74H4.55S1 8.02 1 12.78c0 4.77 3.1 4.6 3.1 4.6h1.85v-2.59s-.1-3.1 3.05-3.1h5.23v-.78s.45-3.1-2.91-3.1H7.01V6.21s-.34-2.21 4.92-2.21h3.39V2H11.92zm-2.82 1.59a.93.93 0 1 1 0 1.86.93.93 0 0 1 0-1.86z" />
      <path fill="url(#py-y)" d="M12.08 22c5.52 0 5.17-2.39 5.17-2.39l-.01-2.48h-5.27v-.74h7.48s3.55-.41 3.55-5.17c0-4.76-3.1-4.6-3.1-4.6h-1.85v2.59s.1 3.1-3.05 3.1H9.72v.78s-.45 3.1 2.91 3.1h4.32v1.61s.34 2.21-4.92 2.21H8.64V22h3.44zm2.82-1.59a.93.93 0 1 1 0-1.86.93.93 0 0 1 0 1.86z" />
    </svg>
  ),
  SQL: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="5" rx="8" ry="3" fill="rgba(0, 229, 255, 0.22)" stroke="#00E5FF" strokeWidth="1.8" />
      <path d="M4 5V11C4 12.66 7.58 14 12 14C16.42 14 20 12.66 20 11V5" stroke="#00E5FF" strokeWidth="1.8" />
      <path d="M4 11V17C4 18.66 7.58 20 12 20C16.42 20 20 18.66 20 17V11" stroke="#00E5FF" strokeWidth="1.8" />
      <path d="M4 8C4 9.66 7.58 11 12 11C16.42 11 20 9.66 20 8" stroke="#00E5FF" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
      <path d="M4 14C4 15.66 7.58 17 12 17C16.42 17 20 15.66 20 14" stroke="#00E5FF" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
    </svg>
  ),
  JavaScript: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path d="M6.8 17.2L8.9 16.8c.4 1 .9 1.6 1.8 1.6 1 0 1.6-.5 1.6-1.5V9.5h2.6v7.4c0 2.5-1.5 3.6-3.8 3.6-2 0-3.3-1-3.8-2.8l-.5-.5zM15 17.6l2.1-.8c.4.8 1.1 1.3 2 1.3 1 0 1.6-.6 1.6-1.3 0-.9-.7-1.3-1.9-1.8-1.7-.7-2.8-1.5-2.8-3.2 0-1.8 1.4-3.1 3.5-3.1 1.6 0 2.8.6 3.4 2l-1.9 1.1c-.3-.7-.7-1-1.5-1-.7 0-1.2.4-1.2 1 0 .7.5 1 1.7 1.5 2 .9 3 1.7 3 3.5 0 2-1.6 3.3-3.9 3.3-2.2 0-3.6-1.1-4.1-2.7z" fill="#000000" />
    </svg>
  ),
  HTML: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 2L4.8 19.5L12 21.5L19.2 19.5L21 2H3Z" fill="#E44D26" />
      <path d="M12 3.6V19.8L17.7 18.2L19.2 3.6H12Z" fill="#F16529" />
      <path d="M7.4 6.8H16.6L16.3 9.4H12V11.2H16.1L15.6 15.7L12 16.7V14.6L14 14.1L14.2 12.2H8L7.4 6.8Z" fill="#EBEBEB" />
      <path d="M12 6.8H7.4L8 12.2H12V9.4H9.6L9.4 8.2H12V6.8ZM12 14.6V16.7L8.4 15.7L8.2 13.5H9.6L9.7 14.7L12 15.3V14.6Z" fill="#FFFFFF" />
    </svg>
  ),
  CSS: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 2L4.8 19.5L12 21.5L19.2 19.5L21 2H3Z" fill="#1572B6" />
      <path d="M12 3.6V19.8L17.7 18.2L19.2 3.6H12Z" fill="#33A9DC" />
      <path d="M16.4 6.8H7.6L7.8 9.4H12H16.1L15.6 14.1L12 15.1L8.4 14.1L8.2 12.2H6.8L7.1 15.6L12 17L16.9 15.6L17.5 6.8H16.4Z" fill="#EBEBEB" />
      <path d="M12 6.8H7.6L7.8 9.4H12V6.8ZM12 12.2H9.6L9.7 13.6L12 14.2V12.2Z" fill="#FFFFFF" />
    </svg>
  ),
  React: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.6" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="#00D8FF" strokeWidth="1.6" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" stroke="#00D8FF" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="2.2" fill="#00D8FF" />
    </svg>
  ),
  MachineLearning: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="13.5" width="4" height="7.5" rx="1.2" fill="#00E5FF" />
      <rect x="9.5" y="8.5" width="4" height="12.5" rx="1.2" fill="#00E5FF" />
      <rect x="16" y="3.5" width="4" height="17.5" rx="1.2" fill="#00E5FF" />
      <path d="M4 11L10.5 6L17.5 2.5" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" />
      <circle cx="17.5" cy="2.5" r="1.8" fill="#00E5FF" />
    </svg>
  ),
  DeepLearning: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 6L12 12M19 6L12 12M5 18L12 12M19 18L12 12" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3.2" fill="#00E5FF" stroke="#06141D" strokeWidth="1" />
      <circle cx="5" cy="6" r="2.6" fill="#00E5FF" />
      <circle cx="19" cy="6" r="2.6" fill="#00E5FF" />
      <circle cx="5" cy="18" r="2.6" fill="#00E5FF" />
      <circle cx="19" cy="18" r="2.6" fill="#00E5FF" />
    </svg>
  ),
  TensorFlow: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3.5 7V17L7 15V9.5L12 6.5L17 9.5V15L20.5 17V7L12 2Z" fill="#FF9100" />
      <path d="M12 8L7.5 10.5V18.5L12 21L16.5 18.5V10.5L12 8Z" fill="#FF6D00" />
      <path d="M10 12L12 10.8L14 12V17L12 18.2L10 17V12Z" fill="#FFA000" />
    </svg>
  ),
  PyTorch: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M13.5 2.5C13.5 2.5 13.8 3.5 13.2 4.6C12.6 5.8 11.2 6.5 11.2 7.8C11.2 9 12.1 9.8 13.1 9.8C14.7 9.8 15.8 8.4 15.9 6.8C17.8 8.8 18.8 11.6 18.4 14.6C17.9 18.2 15 21.1 11.4 21.5C6.9 22 3 18.5 3 14C3 11 4.5 8.4 6.8 6.9C6.8 7.3 6.9 7.7 7.1 8C7.6 8.9 8.6 9.4 9.6 9.3C8.4 7.9 8.2 5.9 9.1 4.3C9.9 2.9 11.5 2.2 13.5 2.5Z" fill="#EE4C2C" />
      <circle cx="16.5" cy="5.8" r="1.6" fill="#EE4C2C" />
    </svg>
  ),
  ScikitLearn: () => (
    <svg width="24" height="24" viewBox="0 0 32 24" fill="none">
      <circle cx="10" cy="12" r="7.5" fill="#3599CD" />
      <circle cx="19" cy="12" r="7.5" fill="#F89939" />
      <path d="M7 11.5c2.5-3 5.5-1 7.5 1s4 4 7 1" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 15c2-1 4-2 6-1 2 1 4 2 6 0" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="14.5" cy="12" r="1.2" fill="#FFFFFF" />
    </svg>
  ),
  Keras: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#D00000" />
      <path d="M7 5.5h2.8v5.2l4.8-5.2h3.4l-5.6 5.8 5.8 7.2h-3.5L10 13v5.5H7V5.5z" fill="#FFFFFF" />
    </svg>
  ),
  OpenCV: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="6.8" r="4.2" fill="#EA4335" stroke="#FFFFFF" strokeWidth="0.8" />
      <circle cx="12" cy="6.8" r="1.8" fill="#06141D" />
      <circle cx="6.8" cy="16.2" r="4.2" fill="#34A853" stroke="#FFFFFF" strokeWidth="0.8" />
      <circle cx="6.8" cy="16.2" r="1.8" fill="#06141D" />
      <circle cx="17.2" cy="16.2" r="4.2" fill="#4285F4" stroke="#FFFFFF" strokeWidth="0.8" />
      <circle cx="17.2" cy="16.2" r="1.8" fill="#06141D" />
    </svg>
  ),
  MediaPipe: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="6" width="3" height="12" rx="1.5" fill="#0097A7" />
      <rect x="7.5" y="4" width="3" height="16" rx="1.5" fill="#00ACC1" />
      <rect x="12" y="7" width="3" height="10" rx="1.5" fill="#26C6DA" />
      <rect x="16.5" y="4" width="3" height="16" rx="1.5" fill="#00ACC1" />
    </svg>
  ),
  NumPy: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 2.5L20 7V17L12 21.5L4 17V7L12 2.5Z" fill="#013243" stroke="#4DABF7" strokeWidth="1.5" />
      <path d="M12 2.5V21.5M4 7L20 17M20 7L4 17" stroke="#4DABF7" strokeWidth="1" opacity="0.6" />
      <path d="M8.5 7.5V16.5L12 11.5L15.5 16.5V7.5" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Pandas: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="9" width="3.2" height="11" rx="1.2" fill="#130654" />
      <rect x="4" y="4" width="3.2" height="3.2" rx="1" fill="#FFD43B" />
      <rect x="10.4" y="4" width="3.2" height="11" rx="1.2" fill="#E70488" />
      <rect x="10.4" y="17" width="3.2" height="3.2" rx="1" fill="#130654" />
      <rect x="16.8" y="7" width="3.2" height="13" rx="1.2" fill="#FFD43B" />
      <rect x="16.8" y="4" width="3.2" height="1.8" rx="0.9" fill="#E70488" />
    </svg>
  ),
  Matplotlib: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#112233" stroke="#225588" strokeWidth="1" />
      <circle cx="12" cy="12" r="2.2" fill="#FF9900" />
      <path d="M12 4v4M12 16v4M4 12h4M16 12h4M6.5 6.5l3 3M14.5 14.5l3 3M6.5 17.5l3-3M14.5 9.5l3-3" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Seaborn: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#385D7F" />
      <path d="M5 14.5C7.5 11 10 11 12 13.5C14 16 16.5 16 19 12.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M5 11C7.5 7.5 10 7.5 12 10C14 12.5 16.5 12.5 19 9" stroke="#90CAF9" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  ComputerVision: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 7H7.5L9 5H15L16.5 7H20C21.1 7 22 7.9 22 9V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V9C2 7.9 2.9 7 4 7Z" stroke="#00E5FF" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(0, 229, 255, 0.15)" />
      <circle cx="12" cy="13.5" r="4" stroke="#00E5FF" strokeWidth="1.8" />
      <circle cx="12" cy="13.5" r="1.8" fill="#00E5FF" />
      <circle cx="18" cy="10" r="1" fill="#00E5FF" />
    </svg>
  ),
  NLP: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2.5" y="4" width="19" height="13.5" rx="3.5" stroke="#00E5FF" strokeWidth="1.8" fill="rgba(0, 229, 255, 0.15)" />
      <path d="M8 17.5L5 20.5V17.5" stroke="#00E5FF" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="7.5" cy="10.8" r="1.3" fill="#00E5FF" />
      <circle cx="12" cy="10.8" r="1.3" fill="#00E5FF" />
      <circle cx="16.5" cy="10.8" r="1.3" fill="#00E5FF" />
    </svg>
  ),
  GenerativeAI: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3.5C8.8 3.5 6.5 5.5 6.5 8C5 8 3.5 9.5 3.5 11.5C3.5 13.2 4.7 14.6 6.2 15C6.2 18 8.8 20.5 12 20.5C15.2 20.5 17.8 18 17.8 15C19.3 14.6 20.5 13.2 20.5 11.5C20.5 9.5 19 8 17.5 8C17.5 5.5 15.2 3.5 12 3.5Z" stroke="#C084FC" strokeWidth="1.6" fill="rgba(192, 132, 252, 0.15)" />
      <path d="M12 3.5V20.5M7 10L12 12L17 10M7 15L12 12L17 15" stroke="#E879F9" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="7" cy="10" r="1.4" fill="#F472B6" />
      <circle cx="17" cy="10" r="1.4" fill="#F472B6" />
      <circle cx="12" cy="12" r="1.6" fill="#FFFFFF" />
      <circle cx="7" cy="15" r="1.4" fill="#F472B6" />
      <circle cx="17" cy="15" r="1.4" fill="#F472B6" />
      <circle cx="12" cy="5" r="1.2" fill="#F472B6" />
      <circle cx="12" cy="19" r="1.2" fill="#F472B6" />
    </svg>
  ),
  Git: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M22.5 10.7L13.3 1.5C12.7.9 11.6.9 11 1.5L9.3 3.2L11.7 5.6C12.3 5.4 13.1 5.6 13.6 6.1C14.1 6.6 14.3 7.4 14.1 8L16.4 10.3C17 10.1 17.8 10.3 18.3 10.8C19 11.5 19 12.6 18.3 13.3C17.6 14 16.5 14 15.8 13.3C15.3 12.8 15.1 12 15.3 11.4L13.1 9.2V15C13.3 15.2 13.4 15.5 13.4 15.8C13.4 16.9 12.5 17.8 11.4 17.8C10.3 17.8 9.4 16.9 9.4 15.8C9.4 14.9 10 14.2 10.8 13.9V8.9C10 8.6 9.4 7.9 9.4 7C9.4 6.5 9.6 6.1 9.9 5.7L7.5 3.3L1.5 9.3C.9 9.9.9 11 1.5 11.6L10.7 20.8C11.3 21.4 12.4 21.4 13 20.8L22.5 11.3C23.1 10.7 23.1 9.7 22.5 9.1" fill="#F05032" />
    </svg>
  ),
  GitHub: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017C2 16.446 4.843 20.198 8.805 21.52C9.305 21.61 9.487 21.303 9.487 21.037C9.487 20.803 9.479 20.183 9.474 19.362C6.692 19.967 6.105 18.018 6.105 18.018C5.65 16.865 4.994 16.558 4.994 16.558C4.086 15.937 5.063 15.95 5.063 15.95C6.066 16.02 6.594 16.98 6.594 16.98C7.487 18.508 8.932 18.067 9.5 17.812C9.591 17.164 9.85 16.722 10.136 16.471C7.914 16.218 5.578 15.357 5.578 11.517C5.578 10.422 5.969 9.527 6.609 8.827C6.505 8.573 6.161 7.553 6.707 6.183C6.707 6.183 7.548 5.913 9.46 7.208C10.259 6.986 11.11 6.875 11.96 6.871C12.81 6.875 13.661 6.986 14.462 7.208C16.372 5.913 17.211 6.183 17.211 6.183C17.759 7.553 17.415 8.573 17.311 8.827C17.953 9.527 18.341 10.422 18.341 11.517C18.341 15.368 15.999 16.215 13.77 16.463C14.129 16.772 14.45 17.382 14.45 18.314C14.45 19.651 14.438 20.729 14.438 21.037C14.438 21.307 14.618 21.618 15.127 21.519C19.085 20.194 21.926 16.444 21.926 12.017C21.926 6.484 17.48 2 12 2Z" fill="#F3F4F6" />
    </svg>
  ),
  VSCode: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M17.5 2.5L7 10.5L3.5 7.8L2 8.8L4.5 12L2 15.2L3.5 16.2L7 13.5L17.5 21.5L22 19.3V4.7L17.5 2.5Z" fill="#0066B8" />
      <path d="M17.5 2.5L7 10.5L17.5 18.5V2.5Z" fill="#007ACC" />
      <path d="M17.5 18.5L7 10.5L3.5 13.5L2 15.2L4.5 12L17.5 21.5V18.5Z" fill="#1F9CF0" />
      <path d="M17.5 2.5V5.5L4.5 12L2 8.8L3.5 7.8L7 10.5L17.5 2.5Z" fill="#0065A9" />
    </svg>
  ),
  Jupyter: () => (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
      <path d="M14 4.5C8.8 4.5 5.5 6.2 5.5 8.2C5.5 10.2 8.8 11.9 14 11.9C19.2 11.9 22.5 10.2 22.5 8.2C22.5 6.2 19.2 4.5 14 4.5Z" fill="#F37626" />
      <path d="M14 16.1C8.8 16.1 5.5 17.8 5.5 19.8C5.5 21.8 8.8 23.5 14 23.5C19.2 23.5 22.5 21.8 22.5 19.8C22.5 17.8 19.2 16.1 14 16.1Z" fill="#F37626" />
      <circle cx="8" cy="14" r="1.6" fill="#767676" />
      <circle cx="14" cy="14" r="1.6" fill="#767676" />
      <circle cx="20" cy="14" r="1.6" fill="#767676" />
      <circle cx="21" cy="6" r="1.1" fill="#767676" />
    </svg>
  ),
  GoogleColab: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M7 7.5C4.5 7.5 2.5 9.5 2.5 12C2.5 14.5 4.5 16.5 7 16.5C9.5 16.5 11 14.5 12 12C11 9.5 9.5 7.5 7 7.5Z" fill="#F9AB00" />
      <path d="M17 7.5C14.5 7.5 13 9.5 12 12C13 14.5 14.5 16.5 17 16.5C19.5 16.5 21.5 14.5 21.5 12C21.5 9.5 19.5 7.5 17 7.5Z" fill="#E37400" />
      <circle cx="12" cy="12" r="2.2" fill="#081018" />
    </svg>
  ),
  Docker: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M22.5 11.5C21.8 11.3 20.3 11.1 19.2 11.8C18.6 11.3 17.8 11 17 11C16.8 9.2 15.5 7.8 13.8 7.3L13.3 8.3C14.6 8.7 15.6 9.8 15.8 11.2C14.8 11.4 14 12.2 13.8 13.2H4.8C4.5 13.2 4.2 13 4 12.8L2.2 14.2C3.1 15.4 4.5 16.2 6.2 16.2C13.2 16.2 18.5 14.8 20.8 12.3C21.4 12.5 22 12.4 22.5 11.5Z" fill="#2496ED" />
      <rect x="5.5" y="9.5" width="2.2" height="2.2" rx="0.3" fill="#2496ED" />
      <rect x="8.3" y="9.5" width="2.2" height="2.2" rx="0.3" fill="#2496ED" />
      <rect x="11.1" y="9.5" width="2.2" height="2.2" rx="0.3" fill="#2496ED" />
      <rect x="8.3" y="6.7" width="2.2" height="2.2" rx="0.3" fill="#2496ED" />
      <rect x="11.1" y="6.7" width="2.2" height="2.2" rx="0.3" fill="#2496ED" />
    </svg>
  ),
  FastAPI: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#009688" />
      <path d="M12.8 4.5L6.5 13.2H12L11.2 19.5L17.5 10.8H12L12.8 4.5Z" fill="#FFFFFF" />
    </svg>
  ),
  Postman: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#FF6C37" />
      <path d="M6.5 17.5l8.5-8.5c.6-.6 1.4-.6 2 0s.6 1.4 0 2L8.5 19.5 6.5 17.5z" fill="#FFFFFF" />
      <path d="M14.5 7.5l3.5 3.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="13" cy="10" r="1.2" fill="#FF6C37" />
      <path d="M8 12.5l2.5 2.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  AWS: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#232F3E" />
      <text x="12" y="11" fill="#FFFFFF" fontSize="6.5" fontFamily="sans-serif" fontWeight="800" textAnchor="middle">aws</text>
      <path d="M6 14.5C9 17 15 17 18 14.5" stroke="#FF9900" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16.5 13.5L18.5 14.5L17.5 16.5" stroke="#FF9900" strokeWidth="1.2" strokeLinejoin="round" fill="#FF9900" />
    </svg>
  ),
  Azure: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 19.5L11 3.5H16L6.5 19.5H4Z" fill="#0089D6" />
      <path d="M12.5 13L15.5 8H20L15.5 19.5H10.5L12.5 13Z" fill="#0078D4" />
      <path d="M11 19.5H20L17.5 14H13L11 19.5Z" fill="#50E6FF" opacity="0.8" />
    </svg>
  ),
  PowerBI: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="12" width="4.5" height="9" rx="1.2" fill="#E6AD10" />
      <rect x="9.8" y="7" width="4.5" height="14" rx="1.2" fill="#F2C811" />
      <rect x="16" y="3" width="4.5" height="18" rx="1.2" fill="#F9DE4B" />
    </svg>
  )
};

// ==========================================
// TECHNICAL SKILLS SECTION COMPONENT
// ==========================================

export default function TechnicalSkills() {
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const animFrameId = useRef(null);

  // Smooth continuous ticker physics state
  const scrollPos = useRef(0);
  const targetScrollPos = useRef(0);
  const singleSetWidth = useRef(0);
  const isHovered = useRef(false);
  const isPointerDown = useRef(false);
  const startX = useRef(0);
  const lastPointerX = useRef(0);
  const lastPointerTime = useRef(0);
  const flickVelocity = useRef(0);
  const mouseX = useRef(null);

  // Card 1: 4 Programming Languages
  const programmingLanguages = [
    { name: "Java", icon: <TechIcons.Java /> },
    { name: "Python", icon: <TechIcons.Python /> },
    { name: "SQL", icon: <TechIcons.SQL /> },
    { name: "JavaScript", icon: <TechIcons.JavaScript /> },
  ];

  // Card 2: 8 AI & Machine Learning Skills
  const aiMachineLearning = [
    { name: "Machine Learning", icon: <TechIcons.MachineLearning /> },
    { name: "Deep Learning", icon: <TechIcons.DeepLearning /> },
    { name: "TensorFlow", icon: <TechIcons.TensorFlow /> },
    { name: "PyTorch", icon: <TechIcons.PyTorch /> },
    { name: "Scikit-learn", icon: <TechIcons.ScikitLearn /> },
    { name: "Computer Vision", icon: <TechIcons.ComputerVision /> },
    { name: "NLP", icon: <TechIcons.NLP /> },
    { name: "Generative AI / LLM", icon: <TechIcons.GenerativeAI /> },
  ];

  // Card 3: 8 Development & Tools
  const devTools = [
    { name: "Git", icon: <TechIcons.Git /> },
    { name: "GitHub", icon: <TechIcons.GitHub /> },
    { name: "VS Code", icon: <TechIcons.VSCode /> },
    { name: "Jupyter Notebook", icon: <TechIcons.Jupyter /> },
    { name: "Google Colab", icon: <TechIcons.GoogleColab /> },
    { name: "Docker", icon: <TechIcons.Docker /> },
    { name: "FastAPI", icon: <TechIcons.FastAPI /> },
    { name: "Postman", icon: <TechIcons.Postman /> },
  ];

  // Complete list of all 28 technologies in the EXACT order shown in the user's reference image
  const allTechnologies = [
    { name: "Java", icon: <TechIcons.Java /> },
    { name: "Python", icon: <TechIcons.Python /> },
    { name: "SQL", icon: <TechIcons.SQL /> },
    { name: "JavaScript", icon: <TechIcons.JavaScript /> },
    { name: "HTML", icon: <TechIcons.HTML /> },
    { name: "CSS", icon: <TechIcons.CSS /> },
    { name: "React", icon: <TechIcons.React /> },
    { name: "TensorFlow", icon: <TechIcons.TensorFlow /> },
    { name: "PyTorch", icon: <TechIcons.PyTorch /> },
    { name: "Scikit-learn", icon: <TechIcons.ScikitLearn /> },
    { name: "Keras", icon: <TechIcons.Keras /> },
    { name: "OpenCV", icon: <TechIcons.OpenCV /> },
    { name: "MediaPipe", icon: <TechIcons.MediaPipe /> },
    { name: "NumPy", icon: <TechIcons.NumPy /> },
    { name: "Pandas", icon: <TechIcons.Pandas /> },
    { name: "Matplotlib", icon: <TechIcons.Matplotlib /> },
    { name: "Seaborn", icon: <TechIcons.Seaborn /> },
    { name: "Jupyter", icon: <TechIcons.Jupyter /> },
    { name: "Google Colab", icon: <TechIcons.GoogleColab /> },
    { name: "Git", icon: <TechIcons.Git /> },
    { name: "GitHub", icon: <TechIcons.GitHub /> },
    { name: "VS Code", icon: <TechIcons.VSCode /> },
    { name: "Docker", icon: <TechIcons.Docker /> },
    { name: "FastAPI", icon: <TechIcons.FastAPI /> },
    { name: "Postman", icon: <TechIcons.Postman /> },
    { name: "AWS", icon: <TechIcons.AWS /> },
    { name: "Azure", icon: <TechIcons.Azure /> },
    { name: "Power BI", icon: <TechIcons.PowerBI /> },
  ];

  // 3 sets for 100% seamless infinite loop wrapping
  const repeatedTechnologies = [
    ...allTechnologies,
    ...allTechnologies,
    ...allTechnologies,
  ];

  // Per-item spring physics state for liquid Apple macOS Dock magnification
  const itemPhysics = useRef(
    repeatedTechnologies.map(() => ({ scale: 1, lift: 0, targetScale: 1, targetLift: 0 }))
  );

  React.useEffect(() => {
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

    // High-performance 60fps/120fps/144fps delta-time physics loop with momentum flick inertia
    let lastTime = performance.now();
    const physicsLoop = (now) => {
      const currentTime = now || performance.now();
      const dt = Math.min((currentTime - lastTime) / 1000, 0.08);
      lastTime = currentTime;
      const sw = singleSetWidth.current;

      // 1. Smooth Right-to-Left Ticker Glide with Momentum Inertia
      if (!isPointerDown.current) {
        const baseSpeed = isHovered.current ? 28 : 105;

        // Apply throw/flick momentum with natural exponential friction decay
        if (Math.abs(flickVelocity.current) > 3) {
          targetScrollPos.current += flickVelocity.current * dt;
          flickVelocity.current *= Math.exp(-3.2 * dt);
        } else {
          flickVelocity.current = 0;
          targetScrollPos.current += baseSpeed * dt;
        }
      }

      // Smooth exponential decay interpolation
      const smoothingFactor = 1 - Math.exp(-14 * dt);
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

      // 2. Liquid Apple macOS Dock Spring Proximity Physics
      const mX = mouseX.current;
      const items = itemRefs.current;
      const physics = itemPhysics.current;
      const maxDistance = 150; // Proximity radius in px
      const springFactor = 1 - Math.exp(-16 * dt);

      for (let i = 0; i < items.length; i++) {
        const el = items[i];
        if (!el) continue;
        const p = physics[i];

        if (mX !== null) {
          const rect = el.getBoundingClientRect();
          const center = rect.left + rect.width / 2;
          const dist = Math.abs(mX - center);

          if (dist < maxDistance) {
            const norm = Math.cos((dist / maxDistance) * (Math.PI / 2));
            p.targetScale = 1 + norm * 0.55; // 1.0 to 1.55x
            p.targetLift = -norm * 14; // Up to 14px lift
          } else {
            p.targetScale = 1;
            p.targetLift = 0;
          }
        } else {
          p.targetScale = 1;
          p.targetLift = 0;
        }

        // Spring lerp interpolation with delta-time
        p.scale += (p.targetScale - p.scale) * springFactor;
        p.lift += (p.targetLift - p.lift) * springFactor;

        if (Math.abs(p.scale - 1) > 0.002 || Math.abs(p.targetScale - p.scale) > 0.002) {
          el.style.transform = `translate3d(0, ${p.lift.toFixed(2)}px, 0) scale(${p.scale.toFixed(3)})`;
          el.style.zIndex = Math.round(p.scale * 15);
          if (p.scale > 1.1) {
            el.classList.add("tech-dock-item-magnified");
          } else {
            el.classList.remove("tech-dock-item-magnified");
          }
        } else if (el.style.transform !== "") {
          el.style.transform = "";
          el.style.zIndex = "";
          el.classList.remove("tech-dock-item-magnified");
        }
      }

      animFrameId.current = requestAnimationFrame(physicsLoop);
    };

    animFrameId.current = requestAnimationFrame(physicsLoop);

    return () => {
      cancelAnimationFrame(animFrameId.current);
      window.removeEventListener("resize", measureWidth);
    };
  }, []);

  // Smooth pointer interaction handlers with momentum tracking
  const handlePointerDown = (e) => {
    isPointerDown.current = true;
    startX.current = e.clientX;
    lastPointerX.current = e.clientX;
    lastPointerTime.current = performance.now();
    flickVelocity.current = 0;
    mouseX.current = e.clientX;
    isHovered.current = true;
    document.body.style.userSelect = "none";
  };

  const handlePointerMove = (e) => {
    mouseX.current = e.clientX;
    if (isPointerDown.current) {
      const now = performance.now();
      const dt = (now - lastPointerTime.current) / 1000;
      const delta = e.clientX - startX.current;

      if (dt > 0.005) {
        // Calculate instantaneous throw velocity (px/s)
        const instantVelocity = -delta / Math.max(dt, 0.008);
        flickVelocity.current = flickVelocity.current * 0.35 + instantVelocity * 0.65;
        lastPointerTime.current = now;
        lastPointerX.current = e.clientX;
      }

      startX.current = e.clientX;
      targetScrollPos.current -= delta;
      scrollPos.current -= delta;
    }
  };

  const handlePointerUp = () => {
    isPointerDown.current = false;
    document.body.style.userSelect = "";
    const timeSinceLastMove = (performance.now() - lastPointerTime.current) / 1000;
    if (timeSinceLastMove > 0.08) {
      // Held still before release
      flickVelocity.current = 0;
    } else {
      // Smoothly limit max throw speed
      flickVelocity.current = Math.max(Math.min(flickVelocity.current, 2200), -2200);
    }
  };

  const handlePointerEnter = (e) => {
    isHovered.current = true;
    mouseX.current = e.clientX;
  };

  const handlePointerLeave = () => {
    isHovered.current = false;
    isPointerDown.current = false;
    mouseX.current = null;
    document.body.style.userSelect = "";
    const timeSinceLastMove = (performance.now() - lastPointerTime.current) / 1000;
    if (timeSinceLastMove > 0.08) {
      flickVelocity.current = 0;
    }
  };

  const scrollSlider = (direction) => {
    const boost = direction === "left" ? -850 : 850;
    flickVelocity.current = boost;
  };

  return (
    <div className="tech-skills-wrapper">
      {/* Seamless Ambient Developer Background Graphic Layer */}
      <div className="tech-ambient-dev-backdrop" aria-hidden="true">
        <img
          src={`${import.meta.env.BASE_URL}images/skills-developer-cyber.jpg`}
          alt=""
          className="tech-ambient-dev-img"
        />
        <div className="tech-ambient-glow-overlay" />
      </div>

      {/* Top Header Row with Title */}
      <div className="tech-skills-header-banner">
        {/* Left Side: Title */}
        <div className="tech-header-left-col">
          <div className="tech-skills-title-group">
            <h2 className="tech-title-main section-title-main">
              <span className="section-title-white">TECHNICAL</span>
              <span className="section-title-cyan">SKILLS</span>
            </h2>
            <div className="tech-title-bar section-title-bar" />
          </div>
        </div>
      </div>

      {/* 3 Main Glowing Sci-Fi Category Cards with Chamfer Geometry */}
      <div className="tech-cards-grid">
        {/* Card 1: Programming Languages */}
        <div className="tech-glass-card tech-sci-fi-shape">
          {/* SVG Chamfered Cyber Frame Overlay */}
          <div className="tech-card-frame-svg-wrap" aria-hidden="true">
            <svg className="tech-card-frame-svg" viewBox="0 0 400 520" fill="none" preserveAspectRatio="none">
              <path
                d="M 18 1 H 360 L 399 40 V 502 H 40 L 1 463 V 18 Z"
                stroke="#00E5FF"
                strokeWidth="1.8"
                fill="none"
              />
              <path
                d="M 345 1 L 399 55"
                stroke="#00E5FF"
                strokeWidth="1"
                opacity="0.4"
              />
              <path
                d="M 1 448 L 55 502"
                stroke="#00E5FF"
                strokeWidth="1"
                opacity="0.4"
              />
            </svg>
          </div>

          <div className="tech-card-glow-spot" />

          <div className="tech-card-top-header">
            <div className="tech-card-badge-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>

            <div className="tech-card-title-group">
              <h3 className="tech-card-heading">PROGRAMMING</h3>
              <h3 className="tech-card-heading">LANGUAGES</h3>
            </div>
          </div>

          <div className="tech-card-pills-grid">
            {programmingLanguages.map((skill) => (
              <div className="tech-pill-item" key={skill.name}>
                <div className="tech-pill-icon">{skill.icon}</div>
                <span className="tech-pill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 2: AI & Machine Learning */}
        <div className="tech-glass-card tech-sci-fi-shape">
          <div className="tech-card-frame-svg-wrap" aria-hidden="true">
            <svg className="tech-card-frame-svg" viewBox="0 0 400 520" fill="none" preserveAspectRatio="none">
              <path
                d="M 18 1 H 360 L 399 40 V 502 H 40 L 1 463 V 18 Z"
                stroke="#00E5FF"
                strokeWidth="1.8"
                fill="none"
              />
              <path
                d="M 345 1 L 399 55"
                stroke="#00E5FF"
                strokeWidth="1"
                opacity="0.4"
              />
              <path
                d="M 1 448 L 55 502"
                stroke="#00E5FF"
                strokeWidth="1"
                opacity="0.4"
              />
            </svg>
          </div>

          <div className="tech-card-glow-spot" />

          <div className="tech-card-top-header">
            <div className="tech-card-badge-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8 2 5 5 5 9c0 2.5 1.5 4.5 3 6l1 5h6l1-5c1.5-1.5 3-3.5 3-6 0-4-3-7-7-7z" />
                <path d="M9 9h.01M15 9h.01M10 13h4M12 6v3" />
                <circle cx="9" cy="9" r="1" fill="#00E5FF" />
                <circle cx="15" cy="9" r="1" fill="#00E5FF" />
              </svg>
            </div>

            <div className="tech-card-title-group">
              <h3 className="tech-card-heading">AI & MACHINE</h3>
              <h3 className="tech-card-heading">LEARNING</h3>
            </div>
          </div>

          <div className="tech-card-pills-grid">
            {aiMachineLearning.map((skill) => (
              <div className="tech-pill-item" key={skill.name}>
                <div className="tech-pill-icon">{skill.icon}</div>
                <span className="tech-pill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: Development & Tools */}
        <div className="tech-glass-card tech-sci-fi-shape">
          <div className="tech-card-frame-svg-wrap" aria-hidden="true">
            <svg className="tech-card-frame-svg" viewBox="0 0 400 520" fill="none" preserveAspectRatio="none">
              <path
                d="M 18 1 H 360 L 399 40 V 502 H 40 L 1 463 V 18 Z"
                stroke="#00E5FF"
                strokeWidth="1.8"
                fill="none"
              />
              <path
                d="M 345 1 L 399 55"
                stroke="#00E5FF"
                strokeWidth="1"
                opacity="0.4"
              />
              <path
                d="M 1 448 L 55 502"
                stroke="#00E5FF"
                strokeWidth="1"
                opacity="0.4"
              />
            </svg>
          </div>

          <div className="tech-card-glow-spot" />

          <div className="tech-card-top-header">
            <div className="tech-card-badge-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06-.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>

            <div className="tech-card-title-group">
              <h3 className="tech-card-heading">DEVELOPMENT</h3>
              <h3 className="tech-card-heading">& TOOLS</h3>
            </div>
          </div>

          <div className="tech-card-pills-grid">
            {devTools.map((skill) => (
              <div className="tech-pill-item" key={skill.name}>
                <div className="tech-pill-icon">{skill.icon}</div>
                <span className="tech-pill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Slider Bar with Exact Sci-Fi Chamfer Cut Shape + 60FPS GPU macOS Taskbar Dock Effect */}
      <div className="tech-slider-capsule-wrapper">
        <div className="tech-slider-capsule tech-slider-sci-fi-shape">
          {/* SVG Chamfer Frame for Slider */}
          <div className="tech-slider-frame-svg-wrap" aria-hidden="true">
            <svg className="tech-slider-frame-svg" viewBox="0 0 1200 68" fill="none" preserveAspectRatio="none">
              <path
                d="M 22 1 H 1178 L 1199 22 V 46 L 1178 67 H 22 L 1 46 V 22 Z"
                stroke="#00E5FF"
                strokeWidth="1.8"
                fill="none"
              />
              <path d="M 1 32 L 32 67" stroke="#00E5FF" strokeWidth="1" opacity="0.4" />
              <path d="M 1199 36 L 1168 1" stroke="#00E5FF" strokeWidth="1" opacity="0.4" />
            </svg>
          </div>

          {/* Left Arrow Button */}
          <button className="tech-slider-arrow-btn" onClick={() => scrollSlider("left")} aria-label="Previous technologies">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Left Section: Star Icon + "TECH I WORK WITH" */}
          <div className="tech-slider-lead">
            <div className="tech-slider-star">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M12 1L14.6 9.4L23 12L14.6 14.6L12 23L9.4 14.6L1 12L9.4 9.4L12 1Z" fill="#00E5FF" />
              </svg>
            </div>
            <div className="tech-slider-lead-titles">
              <span className="tech-slider-title-row">
                <span className="tech-slider-title-cyan">TECH I</span>
                <span className="tech-slider-title-white">WORK WITH</span>
              </span>
              <span className="tech-slider-subtext">Tools and technologies I use regularly</span>
            </div>
            <div className="tech-slider-divider" />
          </div>

          {/* Track Viewport with Liquid Apple macOS Spring Physics & Infinite Glide */}
          <div
            className="tech-slider-viewport"
            onPointerEnter={handlePointerEnter}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
          >
            <div className="tech-marquee-track" ref={trackRef}>
              {repeatedTechnologies.map((item, idx) => (
                <div
                  key={`${item.name}-${idx}`}
                  ref={(el) => (itemRefs.current[idx] = el)}
                  className="tech-slider-item"
                >
                  <div className="tech-slider-item-icon">{item.icon}</div>
                  <span className="tech-slider-item-name">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button className="tech-slider-arrow-btn" onClick={() => scrollSlider("right")} aria-label="Next technologies">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
}
