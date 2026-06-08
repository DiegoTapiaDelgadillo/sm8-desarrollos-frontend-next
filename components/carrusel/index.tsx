"use client";

import { useState } from "react";

type CarruselProps = {
  images: string[];
  variant?: "projects" | "home";
};

export default function Carrusel({
  images,
  variant = "projects",
}: CarruselProps) {
  const [currentImage, setCurrentImage] = useState(0);

  if (!images || images.length === 0) return null;

  const nextImage = () =>
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prevImage = () =>
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const isHome = variant === "home";

  return (
    <div className={isHome ? "h-full w-full" : ""}>
      <div
        className={`overflow-hidden relative ${isHome ? "h-full w-full" : ""}`}
      >
        <img
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          className={
            isHome
              ? // ocupa todo el espacio disponible y recorta proporcional
                "w-full h-full object-cover"
              : // proyectos: comportamiento original
                "w-full h-full rounded-l-md"
          }
        />

        {/* Botón anterior */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 stroke-white/50 hover:stroke-white cursor-pointer ease-in-out duration-300 absolute top-1/2 left-3 -translate-y-1/2 p-2 rounded-full focus:outline-none bg-white/30 hover:bg-white/50"
          onClick={prevImage}
          role="button"
          aria-label="Imagen anterior"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>

        {/* Botón siguiente */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 stroke-white/50 hover:stroke-white cursor-pointer ease-in-out duration-300 absolute top-1/2 right-3 -translate-y-1/2 p-2 rounded-full focus:outline-none bg-white/30 hover:bg-white/50"
          onClick={nextImage}
          role="button"
          aria-label="Siguiente imagen"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
}
