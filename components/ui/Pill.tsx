import TechIcon from "./TechIcon"
import { ReactNode } from "react"

export default function Pill({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        fontSize: 10,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: "#aaa",
        background: "#1a1a1a",
        border: "1px solid #2a2a2a",
        padding: "3px 8px",
        borderRadius: 3,
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        lineHeight: 1,
      }}
    >
      <TechIcon label={String(children)} />
      {children}
    </span>
  )
}
