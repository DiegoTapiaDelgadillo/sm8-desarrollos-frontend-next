import Button from "../button";
export default function CardContact({ img }) {
  return (
    <div
      className=" min-h-svh flex items-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 "
           data-aos="fade-left"
           data-aos-delay="900">
        <h1 className=" text-white text-2xl md:text-4xl lg:text-6xl text-center sm:text-start">
          TU FUTURO COMIENZA CON UNA CONVERSACIÓN
        </h1>
        <h2 className=" text-white py-8 text-xs md:text-lg text-center sm:text-start">
          Contáctanos y Descubre Cómo Podemos Hacer Brillar tus Ideas
        </h2>
        <Button text={"Contactanos"} rute={"/Contacto"} />
      </div>
    </div>
  );
}
  