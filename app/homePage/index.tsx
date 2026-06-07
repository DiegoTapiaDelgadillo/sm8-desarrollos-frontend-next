"use client";

import Button from "../../components/button";
import CardProyectos from "../../components/cardProyectos";
import Mural from "../../components/mural";
import TextBody from "../../components/textBody";
import TextTitles from "../../components/textTitles";
import ProyectosButton from "../../components/proyectosButton";
import CardContact from "../../components/cardContact";
import useScrollTop from "../../hooks/scrollTop";

export default function HomePage() {
  useScrollTop();

  const arrayBitte: string[] = [
    "/assets/Bitte1.webp",
    "/assets/Bitte2.webp",
    "/assets/Bitte3.webp",
    "/assets/Bitte4.webp",
    "/assets/Bitte5.webp",
    "/assets/Bitte6.webp",
    "/assets/Bitte7.webp",
    "/assets/Bitte8.webp",
    "/assets/Bitte9.webp",
    "/assets/Bitte10.webp",
    "/assets/Bitte11.webp",
    "/assets/Bitte12.webp",
    "/assets/Bitte13.webp",
    "/assets/Bitte14.webp",
  ];

  const arrayColina: string[] = [
    "/assets/Colina1.webp",
    "/assets/Colina2.webp",
    "/assets/Colina3.webp",
    "/assets/Colina4.webp",
  ];

  const arrayLaredo: string[] = [
    "/assets/laredo2.webp",
    "/assets/laredo3.webp",
    "/assets/laredo4.webp",
    "/assets/laredo5.webp",
    "/assets/laredo6.webp",
    "/assets/laredo8.webp",
    "/assets/laredo9.webp",
    "/assets/laredo10.webp",
    "/assets/laredo11.webp",
    "/assets/laredo12.webp",
  ];

  return (
    <>
      <Mural
        Fondo="/assets/Bitte7.webp"
        title="Espacios Vanguardistas, Funcionales e Inteligentes"
      />

      <div className="px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 bg-white py-12 lg:py-24">
        <div data-aos="zoom-in">
          <TextTitles text="Desarrollando tus ideas con amor y pasión" />
          <TextBody text="Sómos un equipo de expertos con más de 30 años de experiencia en el medio Profesional y Técnico para cubrir áreas, pre- fases y etapas de la construcción." />
          <Button text="Conoce nuestra historia" rute="/Nosotros" />
        </div>
      </div>

      <div className="px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 bg-neutral-50 py-12 lg:py-24">
        <TextTitles text="Nuestros Principales Proyectos" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-12 pt-6 lg:pt-12">
          <CardProyectos
            img="/assets/Bitte1.webp"
            title="Bitte"
            textBody="Impresionante y exclusivo desarrollo de 116 departamentos en el corazón de Tijuana, que mezcla un estilo minimalista y espacios abiertos con vegetación. Distinguiéndose por ser piezas vanguardistas de diseño, funcionales e inteligentes."
            imagenes={arrayBitte}
          />
          <CardProyectos
            img="/assets/cp.webp"
            title="Colina Park Tijuana"
            textBody="Concepto residencial que busca conectarte con los tuyos y con la naturaleza, haciendo posible una comunidad de innovación y modernidad."
            imagenes={arrayColina}
          />
          <CardProyectos
            img="/assets/laredo3.webp"
            title="Sideways Living"
            textBody="Nueva propuesta vertical en La Cacho (Laredo, Tijuana) para las personas que buscan un estilo de vida urbano, activo, conectado y funcional. 82 unidades en 9 niveles."
            imagenes={arrayLaredo}
          />
        </div>

        <div
          className="pt-12 w-full flex justify-end"
          data-aos="fade-right"
          data-aos-delay="800"
        >
          <ProyectosButton />
        </div>
      </div>

      <div className="px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 bg-white py-12 lg:py-24 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div className="block sm:hidden">
          <img src="/assets/Bitte2.webp" alt="" className="w-full rounded-xl" />
        </div>

        <div data-aos="zoom-in" data-aos-delay="1000">
          <TextTitles text="Nuestros servicios" />
          <TextBody text="Gestiones Jurídicas y Técnicas, Estudios y Servicios de Campo, Ingeniería Financiera, Arquitectura del Negocio, Arquitectura e Ingenierías" />
          <Button text="Conocenos" rute="/Nosotros" />
        </div>

        <div className="hidden sm:block">
          <img
            src="/assets/Bitte2.webp"
            alt=""
            className="w-full shadow-xl rounded-xl"
          />
        </div>
      </div>

      <CardContact img="/assets/contacto.png" />
    </>
  );
}
