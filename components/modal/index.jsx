import React from "react";
import CloseButton from "../closeButton";
import Carrusel from "../carrusel";

export default function Modal({ imagenes }) {
  const [showModal, setShowModal] = React.useState(false);
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
          <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none bg-my-blur animate-fade">
            <div className="relative w-full">
              <div className="w-auto rounded-md overscroll-y-contain">
                <div className="p-4 lg:p-40 xl:p-72 2xl:p-80 border-y border-r border-black rounded-r-md">
                  <div className="flex items-start justify-end w-full py-2">
                    <CloseButton onClick={() => setShowModal(false)} />
                  </div>
                  <Carrusel images={imagenes} />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
