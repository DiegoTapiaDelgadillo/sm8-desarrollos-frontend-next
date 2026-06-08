"use client";

import Button from "@/components/button";
import CardProyectos from "@/components/cardProyectos";
import Mural from "@/components/mural";
import TextBody from "@/components/textBody";
import TextTitles from "@/components/textTitles";
import ProyectosButton from "@/components/proyectosButton";
import CardContact from "@/components/cardContact";
import useScrollTop from "@/hooks/scrollTop";
import { homeProjects } from "@/data/projects";

export default function HomePage() {
  useScrollTop();

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
          {homeProjects.map((project) => (
            <CardProyectos
              key={project.title}
              img={project.img}
              title={project.title}
              textBody={project.textBody}
              imagenes={project.imagenes}
            />
          ))}
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
