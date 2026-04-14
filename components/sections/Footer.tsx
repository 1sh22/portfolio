"use client"
import siteContent from "../../content/siteContent"

const { footerLinks } = siteContent

export default function Footer() {
  return (
    <footer
      className="footer-shell"
      style={{
        borderTop: "1px solid #1f1f1f",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: 28,
        padding: "40px clamp(24px, 6vw, 96px)",
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: "clamp(22px, 2.8vw, 32px)",
            letterSpacing: "-0.03em",
            color: "#c0c0c0",
            fontWeight: 400,
            marginBottom: 5,
          }}
        >
          ishaan choubey
        </div>
        <div
          style={{
            fontSize: 10,
            color: "#666",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          bengaluru, in 
        </div>
      </div>

      <div
        className="footer-meta"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 0,
          minWidth: 0,
        }}
      >
        <div
          className="footer-links"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 5,
          }}
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="footer-link"
              style={{ fontSize: 11, letterSpacing: "0.04em" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
