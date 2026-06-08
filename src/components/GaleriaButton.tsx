"use client"

import { useState } from "react"
import Modal from "@/components/Modal"

interface GaleriaButtonProps {
  images: string[]
  projectTitle: string
  label?: string
}

export default function GaleriaButton({
  images,
  projectTitle,
  label = "Ver galería",
}: GaleriaButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="
          inline-flex items-center gap-2
          text-[length:var(--text-label)]
          font-normal tracking-widest uppercase
          text-[var(--color-ink)]
          transition-opacity duration-200 ease-in-out
          hover:opacity-70
          group
        "
      >
        <span>{label}</span>
        <span className="transition-transform duration-200 ease-in-out group-hover:translate-x-1">
          →
        </span>
      </button>

      {isOpen && (
        <Modal
          images={images}
          projectTitle={projectTitle}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
