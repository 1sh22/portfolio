import { ReactNode } from "react"

export default function SectionLabel({
  children,
  num,
  paddingTop = 88,
  marginBottom = 40,
}: {
  children: ReactNode
  num?: string
  paddingTop?: number
  marginBottom?: number
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        marginBottom,
        paddingTop,
      }}
    >
      {num && (
        <span
          style={{
            fontSize: 10,
            fontFamily: "'Geist Mono', monospace",
            color: "#888",
            letterSpacing: "0.06em",
            flexShrink: 0,
          }}
        >
          [{num}]
        </span>
      )}
      <span
          style={{
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#999",
            flexShrink: 0,
          }}
      >
        {children}
      </span>
      <div className="section-line" />
    </div>
  )
}
