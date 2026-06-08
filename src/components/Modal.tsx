"use client"

import { useCallback, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Carrusel from "@/components/Carrusel"

interface ModalProps {
  images: string[]
  projectTitle: string
  onClose: () => void
}

const ANIM_DURATION = 320

export default function Modal({ images, projectTitle, onClose }: ModalProps) {
  const [visible, setVisible] = useState(false)

  // Animación de apertura: esperar un frame para que el navegador pinte opacity:0 antes de transicionar
  useEffect(() => {
    const t = requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)))
    return () => cancelAnimationFrame(t)
  }, [])

  // Animación de cierre: revertir visible, esperar la transición, luego desmontar
  const handleClose = useCallback(() => {
    setVisible(false)
    setTimeout(onClose, ANIM_DURATION)
  }, [onClose])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKey)
    }
  }, [handleClose])

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/85"
        onClick={handleClose}
        aria-hidden="true"
        style={{
          opacity: visible ? 1 : 0,
          transition: `opacity ${ANIM_DURATION}ms ease`,
        }}
      />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-4xl mx-4 md:mx-8 bg-[var(--color-canvas-dark)]"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: `opacity ${ANIM_DURATION}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${ANIM_DURATION}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        }}
      >
        {/* Header del modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <span className="
            text-[length:var(--text-label)]
            font-normal tracking-widest uppercase
            text-white/60
          ">
            {projectTitle}
          </span>
          <button
            onClick={handleClose}
            aria-label="Cerrar galería"
            className="flex items-center justify-center w-8 h-8 text-white/60 hover:text-white transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Carrusel */}
        <Carrusel images={images} projectTitle={projectTitle} />

      </div>
    </div>,
    document.body
  )
}
