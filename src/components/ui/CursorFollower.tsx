"use client"

import { useEffect, useState } from "react"

function getEffectiveBackground(el: Element): string {
  let current: Element | null = el
  while (current) {
    const bg = window.getComputedStyle(current).backgroundColor
    if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
      return bg
    }
    current = current.parentElement
  }
  return "rgb(255, 255, 255)"
}

export default function CursorFollower() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isDark, setIsDark] = useState(false)
  const [isTouch, setIsTouch] = useState(true)

  useEffect(() => {
    setIsTouch(!window.matchMedia("(hover: hover)").matches)

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })

      const el = document.elementFromPoint(e.clientX, e.clientY)
      if (el) {
        const bg = getEffectiveBackground(el)
        const match = bg.match(/\d+/g)
        if (match && match.length >= 3) {
          const [r, g, b] = match.map(Number)
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
          setIsDark(luminance < 0.4)
        }
      }
    }

    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  if (isTouch) return null

  return (
    <>
      <style>{`@media (hover: hover) { * { cursor: none !important; } }`}</style>
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999,
          transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)`,
          transition: "transform 0.08s linear",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <line
            x1="12"
            y1="2"
            x2="12"
            y2="22"
            stroke={isDark ? "white" : "#1A1A1A"}
            strokeWidth="1"
          />
          <line
            x1="2"
            y1="12"
            x2="22"
            y2="12"
            stroke={isDark ? "white" : "#1A1A1A"}
            strokeWidth="1"
          />
        </svg>
      </div>
    </>
  )
}
