"use client";

import { useEffect } from "react";
import Mural from "../../components/mural";
import CardProyect from "../../components/cardProyect";
import ScrollTop from "../../hooks/scrollTop";

export default function ProyectosPage() {
  useEffect(() => {
    ScrollTop();
  }, []);

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

  const arrayCardon: string[] = [
    "/assets/Cardon1.webp",
    "/assets/Cardon2.webp",
    "/assets/Cardon3.webp",
    "/assets/Cardon4.webp",
    "/assets/Cardon5.webp",
    "/assets/Cardon6.webp",
    "/assets/Cardon7.webp",
    "/assets/Cardon8.webp",
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
      <Mural Fondo="/assets/cp.webp" title="Conoce Todos Nuestros Proyectos" />

      <CardProyect
        Fondo="/assets/Bitte5.webp"
        text="Impresionante y exclusivo desarrollo de 116 departamentos en el corazón de Tijuana, que mezcla un estilo minimalista y espacios abiertos con vegetación. Distinguiéndose por ser piezas vanguardistas de diseño, funcionales e inteligentes."
        title="Bitte"
        imagenes={arrayBitte}
      />

      <CardProyect
        Fondo="/assets/Colina1.webp"
        text="Concepto residencial que busca conectarte con los tuyos y con la naturaleza, haciendo posible una comunidad de innovación y modernidad."
        title="Colina Park Tijuana"
        imagenes={arrayColina}
      />

      <CardProyect
        Fondo="/assets/cardonLiving6.webp"
        text="Es un proyecto habitacional de 16 casas y una casa club, es decir donde podrás habitar y vivir al máximo una hermosa experiencia ya que cuenta con un circuito vehicular, un área común al centro del predio y no podría faltar la alberca, el área de estar, un área de camastros y espejos de agua, además de un huerto destinado al cultivo de vegetales."
        title="Cardon Living"
        imagenes={arrayCardon}
        reduceBrightness={true}
      />

      <CardProyect
        Fondo="/assets/laredo3.webp"
        text="Nueva propuesta vertical en La Cacho (Laredo, Tijuana) para las personas que buscan un estilo de vida urbano, activo, conectado y funcional. 82 unidades en 9 niveles."
        title="Sideways Living"
        imagenes={arrayLaredo}
        reduceBrightness={true}
      />
    </>
  );
}