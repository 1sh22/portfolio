import siteContent from "../../content/siteContent"
import FadeIn from "../ui/FadeIn"
import SectionLabel from "../ui/SectionLabel"

const { awards } = siteContent

export default function Awards() {
  return (
    <section id="awards">
      <SectionLabel num="03">Things I&apos;m proud of</SectionLabel>
      <div style={{ paddingBottom: 80 }}>
        {awards.map((award, index) => (
          <FadeIn key={award.num} delay={index * 50} x={-6} y={0}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "36px 1fr auto",
                gap: 20,
                alignItems: "start",
                padding: "20px 0",
                borderTop: index === 0 ? "1px solid #1f1f1f" : "none",
                borderBottom: "1px solid #1f1f1f",
              }}
            >
              <span
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: 10,
                  color: "#666",
                  letterSpacing: "0.04em",
                  paddingTop: 2,
                }}
              >
                {award.num}
              </span>
              <div>
                <div style={{ fontSize: 13, color: "#d0d0d0", marginBottom: 3 }}>
                  {award.title}
                </div>
                <div style={{ fontSize: 12, color: "#888", lineHeight: 1.6 }}>
                  {award.desc}
                </div>
              </div>
              <div style={{ fontSize: 11, color: "#666", whiteSpace: "nowrap", paddingTop: 1 }}>
                {award.year}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
