"use client"
import { useRef, CSSProperties, ReactNode } from "react"
import useInView from "../../hooks/useInView"

interface FadeInProps {
  children: ReactNode
  delay?: number
  x?: number
  y?: number
  style?: CSSProperties
}

export default function FadeIn({ children, delay = 0, x = 0, y = 12, style = {} }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref)
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : `translate(${x}px, ${y}px)`,
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
