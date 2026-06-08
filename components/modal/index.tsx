"use client";

import { useState } from "react";
import CloseButton from "../closeButton";
import Carrusel from "../carrusel";

type ModalProps = {
  imagenes: string[];
  variant?: "projects" | "home";
};

export default function Modal({ imagenes, variant = "projects" }: ModalProps) {
  const [showModal, setShowModal] = useState(false);
  const isHome = variant === "home";

  return (
    <>
      <button
        className="p-4 w-full sm:w-auto rounded-xl border border-black text-sm sm:text-base shadow-md hover:bg-black hover:text-white ease-in-out duration-300 bg-white"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Ver imágenes
      </button>

      {showModal ? (
        <>
          {isHome ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-my-blur animate-fade p-4">
              <div className="relative w-[95vw] h-[90vh] max-w-7xl overflow-hidden rounded-2xl bg-black/90 shadow-2xl">
                <div className="flex items-start justify-end w-full p-4 relative z-10">
                  <CloseButton onClick={() => setShowModal(false)} />
                </div>

                <div className="w-full h-[calc(90vh-4rem)] px-4 pb-4">
                  <Carrusel images={imagenes} variant="home" />
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none bg-my-blur animate-fade">
                <div className="relative w-full">
                  <div className="w-auto rounded-md overscroll-y-contain">
                    <div className="p-4 lg:p-40 xl:p-72 2xl:p-80 border-y border-r border-black rounded-r-md">
                      <div className="flex items-start justify-end w-full py-2">
                        <CloseButton onClick={() => setShowModal(false)} />
                      </div>
                      <Carrusel images={imagenes} variant="projects" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="opacity-80 fixed inset-0 z-40 bg-black"
                onClick={() => setShowModal(false)}
              />
            </>
          )}
        </>
      ) : null}
    </>
  );
}
