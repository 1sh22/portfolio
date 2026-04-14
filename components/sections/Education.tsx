import FadeIn from "../ui/FadeIn"
import SectionLabel from "../ui/SectionLabel"

export default function Education() {
  return (
    <section id="education">
      <SectionLabel num="03" paddingTop={56} marginBottom={16}>Education</SectionLabel>
      <FadeIn>
        <div
          className="edu-row"
          style={{
            display: "grid",
            gridTemplateColumns: "160px 1fr 140px",
            gap: 28,
            paddingTop: 10,
            paddingRight: 12,
            paddingBottom: 80,
            paddingLeft: 12,
          }}
        >
          {/* Institution */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 500, color: "#d0d0d0", marginBottom: 3 }}>
              Vidyavardhaka College of Engineering
            </div>
            <div style={{ fontSize: 11, color: "#666" }}>Mysore, IN</div>
          </div>

          {/* Degree */}
          <div>
            <div style={{ fontSize: 12, color: "#c0c0c0", marginBottom: 6, letterSpacing: "0.01em" }}>
              B.E Computer Science (AI&ML)
            </div>
            <div style={{ fontSize: 11, color: "#666" }}>CGPA: 8.4</div>
          </div>

          {/* Date */}
          <div
            className="edu-date"
            style={{
              fontSize: 11,
              color: "#666",
              textAlign: "right",
              paddingTop: 2,
              whiteSpace: "nowrap",
            }}
          >
            2021 – 2025
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
