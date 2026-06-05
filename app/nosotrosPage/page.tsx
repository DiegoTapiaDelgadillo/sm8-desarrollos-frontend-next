"use client";

import { useEffect } from "react";
import Mural from "../../components/mural";
import Collapse from "../../components/collapse";
import CardContact from "../../components/cardContact";
import ScrollTop from "../../hooks/scrollTop";

export default function NosotrosPage() {
  useEffect(() => {
    ScrollTop();
  }, []);

  const data: { title: string; text: string }[] = [
    {
      title: "¿Quiénes somos?",
      text: "Somos una firma de diseño arquitectónico que fusiona creatividad y funcionalidad para crear espacios excepcionales. Con nuestro equipo dedicado y experto nos enfocamos en proyectos residenciales, comerciales y urbanos, utilizando tecnologías innovadoras y sostenibles.",
    },
    {
      title: "Misión",
      text: "Desarrollar espacios que generen comodidad, calidad, sentido de pertenencia y asociación con la naturaleza, con el compromiso de que en cada proyecto se confirme nuestra experiencia para asegurar el patrimonio de clientes e inversores.",
    },
    {
      title: "Visión",
      text: "Ser una empresa desarrolladora de clase mundial, destacándonos por la satisfacción de nuestros clientes e inversionistas, la innovación y adaptabilidad de nuestros proyectos y la experiencia de nuestros colaboradores",
    },
    {
      title: "Valores",
      text: "Honestidad, Eficiencia, Responsabilidad Ambiental, Servicio al Cliente",
    },
    {
      title: "Servicios",
      text: "Gestiones Jurídicas y Técnicas, Estudios y Servicios de Campo, Ingeniería Financiera, Arquitectura del Negocio, Arquitectura e Ingenierías",
    },
  ];

  return (
    <>
      <Mural Fondo="/assets/IZT.jpg" title="Conoce a SM8 Desarrollos" />
      <div className="px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 bg-white py-12 lg:py-24 xl:py-32">
        <h1 className="text-center text-xl sm:text-3xl lg:text-6xl pb-0 2xl:py-24">
          Estaremos contigo desde los estudios, análisis y planeación; hasta la
          entrega final del proyecto u obra
        </h1>

        <div className="py-12">
          {data.map((item) => (
            <Collapse title={item.title} text={item.text} key={item.title} />
          ))}
        </div>

        <h1
          className="text-center text-xl sm:text-3xl lg:text-6xl pb-0 2xl:py-24"
          data-aos="zoom-in"
        >
          En SM8 Desarrollos cada línea, en cada estructura, damos forma a
          sueños y creamos legados atemporales.
        </h1>
      </div>
      <CardContact img="/assets/Bitte6.webp" />
    </>
  );
}