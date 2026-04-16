import React from "react"
import {
  SiRust, SiSolana, SiTypescript, SiPostgresql, SiDocker,
  SiReact, SiNextdotjs, SiDjango, SiPython, SiSupabase,
  SiTailwindcss, SiVercel, SiNodedotjs, SiMongodb,
  SiFastapi, SiFlask, SiLangchain, SiScikitlearn, SiPytorch,
  SiJavascript, SiCplusplus, SiGooglecloud, SiGithub, SiExpress,
  SiPandas, SiPlotly, SiAnthropic, SiOpenai, SiRedis,
  SiOpencv, SiNumpy, SiKeras, SiVonage,
  SiDrizzle,
} from "react-icons/si"
import { SiHuggingface } from "react-icons/si"
import { FaAws, FaDatabase } from "react-icons/fa"
import { IconType } from "react-icons"

type IconEntry =
  | { kind?: "icon"; Icon: IconType; color: string }
  | { kind: "img"; src: string; imgStyle?: React.CSSProperties }

const techIconMap: Record<string, IconEntry> = {
  rust:           { Icon: SiRust,         color: "#b0b0b0" },
  solana:         { Icon: SiSolana,       color: "#49cfa0" },
  "solana rpc":   { Icon: SiSolana,       color: "#49cfa0" },
  typescript:     { Icon: SiTypescript,   color: "#4f83b8" },
  sql:            { Icon: FaDatabase,     color: "#7a9ab8" },
  javascript:     { Icon: SiJavascript,   color: "#b8a84f" },
  "c++":          { Icon: SiCplusplus,    color: "#6a7fb8" },
  postgres:       { Icon: SiPostgresql,   color: "#4f7298" },
  postgresql:     { Icon: SiPostgresql,   color: "#4f7298" },
  pgvector:       { Icon: SiPostgresql,   color: "#4f7298" },
  mongodb:        { Icon: SiMongodb,      color: "#5a9a5a" },
  docker:         { Icon: SiDocker,       color: "#4c8fc8" },
  react:          { Icon: SiReact,        color: "#63b2c6" },
  "next.js":      { Icon: SiNextdotjs,    color: "#cfcfcf" },
  "node.js":      { Icon: SiNodedotjs,    color: "#5a9a5a" },
  nodejs:         { Icon: SiNodedotjs,    color: "#5a9a5a" },
  "express.js":   { Icon: SiExpress,      color: "#cfcfcf" },
  express:        { Icon: SiExpress,      color: "#cfcfcf" },
  fastapi:        { Icon: SiFastapi,      color: "#4ea09a" },
  flask:          { Icon: SiFlask,        color: "#cfcfcf" },
  langchain:      { Icon: SiLangchain,    color: "#8ab86e" },
  "scikit-learn": { Icon: SiScikitlearn,  color: "#c87e4f" },
  pytorch:        { Icon: SiPytorch,      color: "#c8604f" },
  huggingface:    { Icon: SiHuggingface,  color: "#c8a84f" },
  django:         { Icon: SiDjango,       color: "#3f6e5c" },
  drizzle:        { Icon: SiDrizzle,      color: "#2f6f9f" },
  "drizzle orm":  { Icon: SiDrizzle,      color: "#2f6f9f" },
  drizzleorm:     { Icon: SiDrizzle,      color: "#2f6f9f" },
  redis:          { Icon: SiRedis,        color: "#b84f4f" },
  opencv:         { Icon: SiOpencv,       color: "#4f8a5a" },
  numpy:          { Icon: SiNumpy,        color: "#4f6fb8" },
  yolov8:         { Icon: SiPython,       color: "#8a8a8a" },
  labelimg:       { Icon: SiPython,       color: "#8a8a8a" },
  aws:            { Icon: FaAws,          color: "#c89447" },
  gcp:            { Icon: SiGooglecloud,  color: "#4f7db8" },
  python:         { Icon: SiPython,       color: "#53799f" },
  supabase:       { Icon: SiSupabase,     color: "#5ab286" },
  rag:            { Icon: SiLangchain,    color: "#9b8ec4" },
  "claude api":   { Icon: SiAnthropic,   color: "#c8a87a" },
  "openai api":   { Icon: SiOpenai,      color: "#8ec4a0" },
  "deepseek api": { kind: "img", src: "https://www.deepseek.com/favicon.ico", imgStyle: { filter: "brightness(0.75) saturate(0.8)" } },
  pandas:         { Icon: SiPandas,      color: "#5a7ab8" },
  matplotlib:     { Icon: SiPlotly,      color: "#b87a5a" },
  neon:           { kind: "img", src: "/neon-dark.svg", imgStyle: { filter: "brightness(0.7) saturate(0.8)" } },
  "tailwind css": { Icon: SiTailwindcss,  color: "#4ea0b2" },
  tailwind:       { Icon: SiTailwindcss,  color: "#4ea0b2" },
  vercel:         { Icon: SiVercel,       color: "#cfcfcf" },
  github:         { Icon: SiGithub,       color: "#cfcfcf" },
  keras:          { Icon: SiKeras,        color: "#c84f4f" },
  vonage:         { Icon: SiVonage,       color: "#8a6fcf" },
  imagekit:       { kind: "img", src: "https://imagekit.io/favicon.ico", imgStyle: { filter: "brightness(0.85) saturate(0.9)" } },
}

function resolveIcon(label: string): IconEntry | null {
  const key = label.trim().toLowerCase().replace(/\s+/g, " ")
  return techIconMap[key] ?? null
}

export default function TechIcon({ label, size = 11 }: { label: string; size?: number }) {
  const match = resolveIcon(label)
  if (!match) return null

  if (match.kind === "img") {
    return (
      <img
        src={match.src}
        aria-hidden="true"
        width={size}
        height={size}
        style={{ flexShrink: 0, borderRadius: 2, objectFit: "contain", ...match.imgStyle }}
      />
    )
  }

  const { Icon, color } = match
  return <Icon aria-hidden="true" size={size} color={color} style={{ flexShrink: 0 }} />
}
