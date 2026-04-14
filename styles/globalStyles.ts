export const PAD = "clamp(40px, 10vw, 180px)"

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500&family=Instrument+Serif:ital@0;1&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
  a, button { outline: none; }
  html { scroll-behavior: smooth; }

  body {
    background: #141414;
    color: #efefef;
    font-family: 'Geist Mono', 'Courier New', monospace;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  ::selection { background: #fff; color: #141414; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }

  @keyframes pulseGreen {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%      { opacity: 0.4; transform: scale(0.75); }
  }

  .hero-link {
    position: relative;
    transition: color 0.2s;
  }
  .hero-link::after {
    content: '';
    position: absolute;
    bottom: 6px; left: 0; right: 0;
    height: 1px;
    background: #efefef;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s ease;
  }
  .hero-link:hover { color: #fff !important; }
  .hero-link:hover::after { transform: scaleX(1); }

  .proj-card {
    background: #1a1a1a;
    border: 1px solid #252525;
    transition: border-color 0.25s, background 0.2s;
  }
  .proj-card:hover {
    background: #1e1e1e;
    border-color: #444;
  }
  .proj-card .proj-accent-bar {
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 1px;
    background: #efefef;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.3s ease;
  }
  .proj-card:hover .proj-accent-bar { transform: scaleY(1); }

  .exp-row {
    border-bottom: 1px solid #1f1f1f;
    transition: background 0.15s;
  }
  .exp-row:hover { background: #191919; }

  .footer-link {
    color: #808080 !important;
    text-decoration: none;
    transition: color 0.2s;
  }
  .footer-link:hover { color: #efefef !important; }

  .section-line {
    flex: 1;
    height: 1px;
    background: #2a2a2a;
  }

  @media (max-width: 900px) {
    .exp-row { grid-template-columns: 1fr 1fr !important; }
    .exp-row > *:last-child { text-align: left !important; }
    .edu-row { grid-template-columns: 1fr 100px !important; }
  }
  @media (max-width: 640px) {
    .edu-row { grid-template-columns: 1fr !important; gap: 6px !important; padding-bottom: 48px !important; }
    .edu-row .edu-date { text-align: left !important; }
    .exp-row { grid-template-columns: 1fr !important; gap: 10px !important; }
    .exp-row > *:last-child { text-align: left !important; }
    .projects-grid { grid-template-columns: 1fr !important; }
    .footer-shell {
      align-items: flex-start !important;
      gap: 24px !important;
      padding-top: 32px !important;
      padding-bottom: 32px !important;
    }
    .footer-meta {
      width: 100%;
      align-items: flex-start !important;
      text-align: left !important;
    }
    .footer-links {
      display: flex !important;
      flex-direction: row !important;
      flex-wrap: wrap !important;
      align-items: flex-start !important;
      justify-content: flex-start !important;
      gap: 8px 20px !important;
    }
    .footer-link { display: inline-block !important; }
  }
`
