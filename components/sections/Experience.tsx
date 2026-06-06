"use client"

import { useState } from "react"
import siteContent from "../../content/siteContent"
import FadeIn from "../ui/FadeIn"
import Pill from "../ui/Pill"
import SectionLabel from "../ui/SectionLabel"

const { experience } = siteContent

function renderBulletText(bullet: string) {
  const linkMatch = bullet.match(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/)
  if (!linkMatch || !linkMatch.index) return bullet

  const [fullMatch, linkText, url] = linkMatch
  const before = bullet.slice(0, linkMatch.index)
  const after = bullet.slice(linkMatch.index + fullMatch.length)

  return (
    <>
      {before}
      <a href={url} target="_blank" rel="noreferrer" style={{ color: "#c8c8c8" }}>
        {linkText}
      </a>
      {after}
    </>
  )
}

function BulletList({ bullets }: { bullets: string[] }) {
  if (bullets.length === 0) return null

  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
      }}
    >
      {bullets.map((bullet) => (
        <li
          key={bullet}
          style={{
            fontSize: 12,
            color: "#c8c8c8",
            paddingLeft: 16,
            position: "relative",
            marginBottom: 5,
            lineHeight: 1.65,
          }}
        >
          <span style={{ position: "absolute", left: 0, color: "#555", fontSize: 11, top: 2 }}>›</span>
          {renderBulletText(bullet)}
        </li>
      ))}
    </ul>
  )
}

function ExperienceDetails({
  bullets,
  open,
}: {
  bullets: string[]
  open: boolean
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: open ? "1fr" : "0fr",
        transition: "grid-template-rows 0.32s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(-6px)",
            transition: "opacity 0.25s ease, transform 0.3s cubic-bezier(0.4,0,0.2,1)",
            paddingBottom: open ? 2 : 0,
          }}
        >
          <BulletList bullets={bullets} />
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="experience">
      <SectionLabel num="01" paddingTop={56} marginBottom={20}>Experience</SectionLabel>
      <div style={{ paddingBottom: 80 }}>
        {experience.map((item, index) => {
          const isOpen = expandedIndex === index
          return (
            <FadeIn key={item.company} delay={index * 55}>
              <div
                className="exp-row"
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onClick={() => setExpandedIndex((prev) => (prev === index ? null : index))}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    setExpandedIndex((prev) => (prev === index ? null : index))
                  }
                }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr 140px",
                  gap: 28,
                  padding: "26px 12px",
                  cursor: "pointer",
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {/* Company */}
                <div>
                  <div style={{ fontSize: 12, fontWeight: 500, color: "#e2e2e2", marginBottom: 3 }}>
                    {item.company}
                  </div>
                  <div style={{ fontSize: 11, color: "#a6a6a6" }}>{item.location}</div>
                </div>

                {/* Role + bullets */}
                <div>
                  <div style={{ fontSize: 12, color: "#e2e2e2", marginBottom: 12, letterSpacing: "0.01em" }}>
                    {item.role}
                  </div>
                  <ExperienceDetails bullets={item.bullets} open={isOpen} />
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {item.stack.map((s) => (
                      <Pill key={s}>{s}</Pill>
                    ))}
                  </div>
                </div>

                {/* Date + expand indicator */}
                <div
                  style={{
                    fontSize: 11,
                    color: "#a6a6a6",
                    textAlign: "right",
                    paddingTop: 2,
                    whiteSpace: "nowrap",
                  }}
                >
                  <div>{item.date}</div>
                  {item.type && (
                    <div style={{ marginTop: 4, fontSize: 10, color: "#a6a6a6", letterSpacing: "0.04em" }}>
                      {item.type}
                    </div>
                  )}
                  <div
                    style={{
                      marginTop: 8,
                      fontSize: 10,
                      color: "#555",
                      transition: "transform 0.3s ease",
                      display: "inline-block",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    ↓
                  </div>
                </div>
              </div>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
