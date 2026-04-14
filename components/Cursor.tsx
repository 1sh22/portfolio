"use client"
import { useEffect, useRef, useState } from "react"

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState(false)
  const frameRef = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      frameRef.current = requestAnimationFrame(() => {
        const cursor = cursorRef.current
        if (!cursor) return
        cursor.style.left = `${e.clientX}px`
        cursor.style.top = `${e.clientY}px`
      })
    }
    const onOver = (e: MouseEvent) => {
      setExpanded(Boolean(e.target instanceof Element && e.target.closest("a, button, .hoverable")))
    }
    const onOut = () => setExpanded(false)

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseover", onOver)
    window.addEventListener("mouseout", onOut)
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onOver)
      window.removeEventListener("mouseout", onOut)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
        width: expanded ? 30 : 6,
        height: expanded ? 30 : 6,
        background: "#efefef",
        borderRadius: "50%",
        transform: "translate(-50%,-50%)",
        transition: "width 0.2s ease, height 0.2s ease, opacity 0.2s ease",
        opacity: expanded ? 0.15 : 0.5,
        mixBlendMode: "difference",
      }}
    />
  )
}
