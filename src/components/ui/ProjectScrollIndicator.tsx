"use client"

import { useEffect, useState } from "react"

interface ProjectScrollIndicatorProps {
  count: number
}

export default function ProjectScrollIndicator({ count }: ProjectScrollIndicatorProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const progress = el.scrollTop / (el.scrollHeight - el.clientHeight)
      setScrollProgress(Math.min(progress, 1))
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll("[data-project-index]")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.projectIndex)
            setActiveIndex(idx)
          }
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Número del proyecto activo — fixed top-right */}
      <div
        aria-hidden="true"
        className="fixed top-24 right-6 z-40 hidden lg:block"
      >
        <span className="text-[length:var(--text-display)] font-thin text-[var(--color-rule)] leading-none tabular-nums select-none">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Línea de progreso vertical — fixed right edge */}
      <div
        aria-hidden="true"
        className="fixed top-0 right-0 w-[1px] z-40 hidden lg:block"
        style={{ height: "100vh", background: "var(--color-rule)" }}
      >
        <div
          style={{
            width: "1px",
            height: `${scrollProgress * 100}%`,
            background: "var(--color-ink)",
            transition: "height 0.1s linear",
          }}
        />
      </div>
    </>
  )
}
