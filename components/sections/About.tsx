import siteContent from "../../content/siteContent"
import FadeIn from "../ui/FadeIn"
import Pill from "../ui/Pill"
import SectionLabel from "../ui/SectionLabel"

const { aboutParagraphs, aboutStack } = siteContent

export default function About() {
  return (
    <section id="about">
      <SectionLabel num="00" paddingTop={24}>About</SectionLabel>
      <div style={{ maxWidth: 640, paddingBottom: 80 }}>
        <FadeIn y={0} x={-6}>
          <div style={{ marginBottom: 28 }}>
            {aboutParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                style={{
                  fontSize: 13,
                  color: "#909090",
                  lineHeight: 1.9,
                  marginBottom: 14,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={80} y={6}>
          <div style={{ paddingTop: 20, borderTop: "1px solid #1f1f1f" }}>
            {aboutStack.map((group, i) => (
              <div
                key={group.label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "88px 1fr",
                  gap: 12,
                  alignItems: "flex-start",
                  paddingTop: i === 0 ? 0 : 10,
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#555",
                    paddingTop: 3,
                    flexShrink: 0,
                  }}
                >
                  {group.label}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {group.items.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
