"use client"

import { useEffect, useState, type CSSProperties } from "react"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  threshold?: number
}

const OFFSET = "24px"

function getInitialTransform(direction: FadeInProps["direction"]): string {
  switch (direction) {
    case "up":    return `translateY(${OFFSET})`
    case "down":  return `translateY(-${OFFSET})`
    case "left":  return `translateX(${OFFSET})`
    case "right": return `translateX(-${OFFSET})`
    case "none":  return "none"
    default:      return `translateY(${OFFSET})`
  }
}

export default function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 600,
  threshold = 0.15,
}: FadeInProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold })
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReduced(mq.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  const initialTransform = prefersReduced ? "none" : getInitialTransform(direction)

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "none" : initialTransform,
    transition: isVisible
      ? `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
      : "none",
    willChange: isVisible ? "auto" : "opacity, transform",
  }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}
