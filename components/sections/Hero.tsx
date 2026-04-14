import React from "react"
import siteContent from "../../content/siteContent"

const { links } = siteContent

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        paddingTop: "max(64px, env(safe-area-inset-top))",
        paddingBottom: 16,
      }}
    >
      {/* Status */}
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 36,
          opacity: 0,
          animation: "fadeUp 0.6s ease 0.05s forwards",
        }}
      >
        <span
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#4ade80",
            display: "inline-block",
            flexShrink: 0,
            animation: "pulseGreen 2.5s infinite",
          }}
        />
        <span style={{ fontSize: 11, color: "#777", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          available · bengaluru, in
        </span>
      </div> */}

      {/* Name */}
      <div
        style={{
          marginBottom: 22,
          opacity: 0,
          animation: "fadeUp 0.7s ease 0.15s forwards",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 10 }}>
          <h1
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(32px, 3.6vw, 42px)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              color: "#efefef",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            Ishaan Choubey
          </h1>
        </div>
        <div
          style={{
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#707070",
            paddingLeft: 0,
          }}
        >
          tinkerer &amp; full stack engineer
        </div>
      </div>

      {/* Bio */}
      <p
        style={{
          maxWidth: "min(100%, 460px)",
          fontSize: 13,
          color: "#909090",
          lineHeight: 1.85,
          marginBottom: 36,
          paddingLeft: 0,
          opacity: 0,
          animation: "fadeUp 0.7s ease 0.28s forwards",
          textWrap: "pretty",
        }}
      >
        full-stack engineer, backend at heart. i take products from zero to one - designing systems, building ai workflows and shipping fast.         obsessed with turning ideas into things that actually{"\u00A0"}exist.
      </p>

      {/* Links */}
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          gap: 0,
          opacity: 0,
          animation: "fadeUp 0.7s ease 0.4s forwards",
        }}
      >
        {links.map((link, i) => (
          <span key={link.label} style={{ display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" }}>
            {i > 0 && (
              <span style={{ color: "#484848", padding: "10px 0", userSelect: "none" }}>
                /
              </span>
            )}
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              style={{
                fontSize: 11,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#808080",
                textDecoration: "none",
                padding: i === 0 ? "10px 14px 10px 0" : "10px 14px",
              }}
              className="hero-link"
            >
              {link.label}
            </a>
          </span>
        ))}
      </div>
    </section>
  )
}
