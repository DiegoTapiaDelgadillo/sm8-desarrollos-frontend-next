"use client";

import Mural from "../../components/mural";
import CardProyect from "../../components/cardProyect";
import useScrollTop from "../../hooks/scrollTop";
import { proyectosData } from "../../data/proyectos";

export default function ProyectosPage() {
  useScrollTop();

  return (
    <>
      <Mural Fondo="/assets/cp.webp" title="Conoce Todos Nuestros Proyectos" />

      {proyectosData.map((project) => (
        <CardProyect
          key={project.title}
          Fondo={project.Fondo}
          text={project.text}
          title={project.title}
          imagenes={project.imagenes as string[]}
          reduceBrightness={project.reduceBrightness}
        />
      ))}
    </>
  );
}
