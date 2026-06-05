import Modal from "../modal";

interface CardProyectProps {
  Fondo: string;
  title: string;
  text: string;
  imagenes: string[];
  reduceBrightness?: boolean;
}

export default function CardProyect({
  Fondo,
  title,
  text,
  imagenes,
  reduceBrightness,
}: CardProyectProps) {
  return (
    <div
      className="relative min-h-screen flex items-end bg-cover bg-center px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 py-12"
      style={{ backgroundImage: `url(${Fondo})` }}
    >
      {reduceBrightness && (
        <div className="absolute inset-0 bg-black opacity-35"></div>
      )}

      <div className="relative z-10">
        <h1
          className="text-white text-2xl md:text-4xl lg:text-6xl xl:text-7xl"
          data-aos="zoom-in-down"
          data-aos-delay="500"
        >
          {title}
        </h1>
        <h2
          className="text-white py-2 text-xs md:text-lg text-justify sm:text-start"
          data-aos="zoom-in-down"
        >
          {text}
        </h2>
        <Modal imagenes={imagenes} />
      </div>
    </div>
  );
}
