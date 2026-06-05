"use client";

import { useEffect } from "react";
import Mural from "../../components/mural";
import TextTitles from "../../components/textTitles";
import TextBody from "../../components/textBody";
import Form from "../../components/form";
import ScrollTop from "../../hooks/scrollTop";

export default function ContactoPage() {
  useEffect(() => {
    ScrollTop();
  }, []);

  return (
    <>
      <Mural Fondo="/assets/V4.jpg" title="Contactanos" />
      <div className="px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-64 bg-white min-h-svh flex items-center">
        <div className="w-full">
          <TextTitles text="Contacta con Nosotros Ahora" />
          <TextBody text="Conversa Con Nosotros" />
          <Form />
        </div>
      </div>
    </>
  );
}
