"use client"

import { useEffect, useState } from "react"

interface TypewriterTitleProps {
  phrases: string[]
  className?: string
}

export default function TypewriterTitle({ phrases, className }: TypewriterTitleProps) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [phase, setPhase] = useState<"typing" | "deleting">("typing")
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReduced(mq.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    if (prefersReduced) return

    const current = phrases[phraseIndex]
    let timer: ReturnType<typeof setTimeout>

    switch (phase) {
      case "typing":
        if (displayed.length < current.length) {
          timer = setTimeout(() => {
            setDisplayed(current.slice(0, displayed.length + 1))
          }, 55)
        } else {
          timer = setTimeout(() => setPhase("deleting"), 2500)
        }
        break

      case "deleting":
        if (displayed.length > 0) {
          timer = setTimeout(() => {
            setDisplayed(displayed.slice(0, -1))
          }, 25)
        } else {
          timer = setTimeout(() => {
            setPhraseIndex((i) => (i + 1) % phrases.length)
            setPhase("typing")
          }, 400)
        }
        break
    }

    return () => clearTimeout(timer)
  }, [phase, displayed, phraseIndex, phrases, prefersReduced])

  if (prefersReduced) {
    return <span className={className}>{phrases[0]}</span>
  }

  return (
    <span className={className}>
      {displayed}
      <span
        className={`ml-[1px] text-white/70 ${phase === "deleting" ? "opacity-0" : "animate-pulse"}`}
        aria-hidden="true"
      >
        |
      </span>
    </span>
  )
}
