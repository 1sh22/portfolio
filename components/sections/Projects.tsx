"use client"
import { useRef, useState } from "react"
import siteContent from "../../content/siteContent"
import useInView from "../../hooks/useInView"
import { PAD } from "../../styles/globalStyles"
import Pill from "../ui/Pill"
import SectionLabel from "../ui/SectionLabel"
import { Project } from "../../content/siteContent"

const { projects } = siteContent

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      className="proj-card hoverable"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "26px 26px 22px",
        borderRadius: 4,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(12px)",
        transition: `opacity 0.5s ease ${index * 60}ms, transform 0.5s ease ${index * 60}ms`,
        cursor: "default",
      }}
    >
      <div className="proj-accent-bar" />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <span style={{ fontSize: 10, color: "#666", letterSpacing: "0.08em" }}>
          {project.num}
        </span>
        <div style={{ display: "flex", gap: 14 }}>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              style={{
              fontSize: 11,
              color: "#666",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 3,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#d0d0d0" }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#666" }}
          >
            {project.liveLabel ?? "live"}
              <span style={{ display: "inline-block", transition: "transform 0.2s", transform: hovered ? "translate(2px,-2px)" : "none" }}>↗</span>
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: 11,
              color: "#666",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 3,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "#d0d0d0" }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "#666" }}
          >
            github
            <span style={{ display: "inline-block", transition: "transform 0.2s", transform: hovered ? "translate(2px,-2px)" : "none" }}>↗</span>
          </a>
        </div>
      </div>

      {/* Name */}
      <div
        style={{
          fontSize: 16,
          fontFamily: "'Geist Mono', monospace",
          letterSpacing: "-0.02em",
          color: "#d8d8d8",
          marginBottom: 10,
          lineHeight: 1.2,
          fontWeight: 400,
        }}
      >
        {project.name}
      </div>

      <div style={{ fontSize: 12, color: "#888", lineHeight: 1.75, marginBottom: 16 }}>
        {project.desc}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 14 }}>
        {project.stack.map((item) => (
          <Pill key={item}>{item}</Pill>
        ))}
      </div>

      <div style={{ fontSize: 10, color: "#666", letterSpacing: "0.04em" }}>
        {project.meta}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: `0 ${PAD}` }}>
      <SectionLabel num="02" paddingTop={56}>Proof of Work</SectionLabel>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 8,
          marginBottom: 80,
        }}
        className="projects-grid"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.num} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
