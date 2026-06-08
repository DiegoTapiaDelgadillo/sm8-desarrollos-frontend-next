"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"

interface CarruselProps {
  images: string[]
  projectTitle: string
}

export default function Carrusel({ images, projectTitle }: CarruselProps) {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)
  const touchStart = useRef<number | null>(null)

  const goTo = useCallback((newIndex: number) => {
    setVisible(false)
    setTimeout(() => {
      setCurrent(newIndex)
      setVisible(true)
    }, 150)
  }, [])

  const prev = useCallback(() => {
    goTo(current === 0 ? images.length - 1 : current - 1)
  }, [current, images.length, goTo])

  const next = useCallback(() => {
    goTo(current === images.length - 1 ? 0 : current + 1)
  }, [current, images.length, goTo])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [prev, next])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return
    const delta = touchStart.current - e.changedTouches[0].clientX
    if (delta > 50) next()
    if (delta < -50) prev()
    touchStart.current = null
  }

  return (
    <div className="relative w-full select-none">

      {/* Imagen */}
      <div
        className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-canvas-dark)]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <Image
          src={images[current]}
          alt={`${projectTitle} — imagen ${current + 1} de ${images.length}`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 80vw"
          priority={current === 0}
          style={{ opacity: visible ? 1 : 0, transition: "opacity 150ms ease" }}
        />
      </div>

      {/* Botón anterior */}
      <button
        onClick={prev}
        aria-label="Imagen anterior"
        className="
          absolute left-4 top-1/2 -translate-y-1/2
          flex items-center justify-center
          w-10 h-10
          bg-black/40 hover:bg-black/70
          text-white
          transition-colors duration-200
        "
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Botón siguiente */}
      <button
        onClick={next}
        aria-label="Imagen siguiente"
        className="
          absolute right-4 top-1/2 -translate-y-1/2
          flex items-center justify-center
          w-10 h-10
          bg-black/40 hover:bg-black/70
          text-white
          transition-colors duration-200
        "
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Contador */}
      <p
        className="
          absolute bottom-4 right-4
          text-[length:var(--text-label)]
          font-normal tracking-widest
          text-white/70
        "
        aria-live="polite"
      >
        {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </p>

    </div>
  )
}
