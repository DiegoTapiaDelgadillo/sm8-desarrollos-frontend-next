import { useState, useEffect } from "react";

export default function Carrusel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div>
      <div className="overflow-hidden relative ">
        <img
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`} 
          className="w-full h-full rounded-l-md"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-12 h-12 stroke-white/50 hover:stroke-white cursor-pointer ease-in-out duration-300  absolute top-1/2 left-3 transform p-2 rounded-full focus:outline-none bg-white/30 hover:bg-white/50"
          onClick={prevImage}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-12 h-12 stroke-white/50 hover:stroke-white cursor-pointer ease-in-out duration-300 absolute top-1/2 right-3 transform  p-2 rounded-full focus:outline-none bg-white/30 hover:bg-white/50"
          onClick={nextImage}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
}
