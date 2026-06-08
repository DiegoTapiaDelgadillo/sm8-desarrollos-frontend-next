"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const LOGO_DELAY    = 300   // ms antes de que aparezca el logo
const HOLD_DURATION = 2400  // ms antes de iniciar el fade-out
const FADE_OUT      = 700   // ms que dura la transición de salida

export default function IntroLoader() {
  const [mounted, setMounted]       = useState(false)
  const [logoVisible, setLogoVisible] = useState(false)
  const [leaving, setLeaving]       = useState(false)
  const [done, setDone]             = useState(false)

  useEffect(() => {
    // Mostrar solo en la primera visita de la sesión
    if (sessionStorage.getItem("sm8_intro_seen")) {
      setDone(true)
      return
    }
    setMounted(true)

    const t0 = setTimeout(() => setLogoVisible(true), LOGO_DELAY)
    const t1 = setTimeout(() => setLeaving(true), HOLD_DURATION)
    const t2 = setTimeout(() => {
      setDone(true)
      sessionStorage.setItem("sm8_intro_seen", "true")
    }, HOLD_DURATION + FADE_OUT)

    return () => {
      clearTimeout(t0)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (!mounted || done) return null

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9998,
        backgroundColor: "#0A0A0A",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: leaving ? 0 : 1,
        transition: leaving
          ? `opacity ${FADE_OUT}ms cubic-bezier(0.16, 1, 0.3, 1)`
          : "none",
        pointerEvents: leaving ? "none" : "all",
      }}
    >
      <div
        style={{
          opacity: logoVisible ? 1 : 0,
          transform: logoVisible ? "translateY(0)" : "translateY(14px)",
          transition:
            "opacity 800ms cubic-bezier(0.16, 1, 0.3, 1), transform 800ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <Image
          src="/SM8Desarrollos.svg"
          alt="SM8 Desarrollos"
          width={200}
          height={64}
          priority
          style={{ opacity: 0.92 }}
        />
      </div>
    </div>
  )
}
