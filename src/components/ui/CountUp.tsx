"use client"

import { useEffect, useRef, useState } from "react"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"

interface CountUpProps {
  target: number
  duration?: number
  className?: string
}

export default function CountUp({ target, duration = 1500, className }: CountUpProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLSpanElement>({ threshold: 0.5 })
  const [count, setCount] = useState(0)
  const [prefersReduced, setPrefersReduced] = useState(false)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReduced(mq.matches)
  }, [])

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    if (prefersReduced) {
      setCount(target)
      return
    }
    hasAnimated.current = true
    const startTime = performance.now()

    function tick(now: number) {
      const elapsed = now - startTime
      const t = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - t, 4)
      setCount(Math.round(eased * target))
      if (t < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isVisible, target, duration, prefersReduced])

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  )
}
