"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import CloseButton from "../closeButton";
import Carrusel from "../carrusel";

type ModalProps = {
  imagenes: string[];
  variant?: "projects" | "home";
};

export default function Modal({ imagenes, variant = "projects" }: ModalProps) {
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isHome = variant === "home";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  const close = () => setShowModal(false);

  const modalContent = isHome ? (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
      onClick={close}
    >
      <div
        className="relative w-[95vw] h-[90vh] max-w-7xl overflow-hidden rounded-2xl bg-black/90 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-end w-full p-4 shrink-0">
          <CloseButton onClick={close} />
        </div>
        <div className="flex-1 px-4 pb-4 min-h-0">
          <Carrusel images={imagenes} variant="home" />
        </div>
      </div>
    </div>
  ) : (
    <>
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-8"
        onClick={close}
      >
        <div
          className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-black"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-3 right-3 z-10">
            <CloseButton onClick={close} />
          </div>
          <div className="w-full h-[70vh]">
            <Carrusel images={imagenes} variant="home" />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <button
        className="p-4 w-full sm:w-auto rounded-xl border border-black text-sm sm:text-base shadow-md hover:bg-black hover:text-white ease-in-out duration-300 bg-white"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Ver imágenes
      </button>
      {mounted && showModal && createPortal(modalContent, document.body)}
    </>
  );
}
