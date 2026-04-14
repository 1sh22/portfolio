"use client"
import { useEffect } from "react"

export default function useWindowEvent<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void
) {
  useEffect(() => {
    window.addEventListener(eventName, handler as EventListener)
    return () => window.removeEventListener(eventName, handler as EventListener)
  }, [eventName, handler])
}
