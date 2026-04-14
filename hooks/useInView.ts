"use client"
import { useEffect, useState, RefObject } from "react"

export default function useInView(
  ref: RefObject<Element | null>,
  { root = null, rootMargin = "0px", threshold = 0.12 } = {}
): boolean {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        setVisible(true)
        observer.disconnect()
      },
      { root, rootMargin, threshold }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [ref, root, rootMargin, threshold])
  return visible
}
