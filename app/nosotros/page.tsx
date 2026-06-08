import type { Metadata } from "next"
import MuralImmersive from "@/components/MuralImmersive"
import Collapse from "@/components/Collapse"
import CardContact from "@/components/CardContact"
import FadeIn from "@/components/ui/FadeIn"

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a SM8 Desarrollos: quiénes somos, misión, visión, valores y servicios. Más de 30 años de experiencia en desarrollo arquitectónico.",
  openGraph: {
    title: "Nosotros — SM8 Desarrollos",
    description:
      "Firma de diseño arquitectónico con más de 30 años de experiencia en México.",
    images: [{ url: "/images/IZT.jpg" }],
  },
}

const accordionItems = [
  {
    title: "¿Quiénes somos?",
    content:
      "Somos una firma de diseño arquitectónico que fusiona creatividad y funcionalidad para crear espacios excepcionales. Con nuestro equipo dedicado y experto nos enfocamos en proyectos residenciales, comerciales y urbanos, utilizando tecnologías innovadoras y sostenibles.",
  },
  {
    title: "Misión",
    content:
      "Desarrollar espacios que generen comodidad, calidad, sentido de pertenencia y asociación con la naturaleza, con el compromiso de que en cada proyecto se confirme nuestra experiencia para asegurar el patrimonio de clientes e inversores.",
  },
  {
    title: "Visión",
    content:
      "Ser una empresa desarrolladora de clase mundial, destacándonos por la satisfacción de nuestros clientes e inversionistas, la innovación y adaptabilidad de nuestros proyectos y la experiencia de nuestros colaboradores.",
  },
  {
    title: "Valores",
    content:
      "Honestidad, Eficiencia, Responsabilidad Ambiental, Servicio al Cliente.",
  },
  {
    title: "Servicios",
    content:
      "Gestiones Jurídicas y Técnicas, Estudios y Servicios de Campo, Ingeniería Financiera, Arquitectura del Negocio, Arquitectura e Ingenierías.",
  },
]

export default function NosotrosPage() {
  return (
    <>
      <MuralImmersive
        imageSrc="/images/IZT.jpg"
        imageAlt="Proyecto arquitectónico SM8 Desarrollos en Tijuana"
        title="Nosotros"
      />

      {/* Frase principal */}
      <FadeIn direction="up">
        <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-[var(--color-canvas)]">
          <div className="max-w-screen-xl mx-auto">
            <p className="
              text-[length:var(--text-section)]
              font-light tracking-normal leading-snug
              text-[var(--color-ink)]
              max-w-[30ch]
            ">
              Estaremos contigo desde los estudios, análisis y planeación; hasta la entrega final del proyecto u obra.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Acordeón */}
      <FadeIn direction="up" delay={100}>
        <section className="px-6 md:px-12 lg:px-20 pb-16 md:pb-24 lg:pb-32 bg-[var(--color-canvas)]">
          <div className="max-w-screen-xl mx-auto">
            <Collapse items={accordionItems} />
          </div>
        </section>
      </FadeIn>

      {/* Frase de cierre */}
      <FadeIn direction="up">
        <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-[var(--color-canvas)]">
          <div className="max-w-screen-xl mx-auto border-t border-[var(--color-rule)] pt-10 lg:pt-14">
            <p className="
              text-[length:var(--text-body)]
              font-light tracking-normal leading-relaxed
              text-[var(--color-muted)]
              max-w-[55ch]
            ">
              En SM8 Desarrollos cada línea, en cada estructura, damos forma a sueños y creamos legados atemporales.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* CTA */}
      <FadeIn direction="up">
        <CardContact
          imageSrc="/images/bitte/Bitte6.webp"
          imageAlt="Detalle arquitectónico del proyecto Bitte — SM8 Desarrollos"
          title="Hagamos algo grande juntos"
          ctaLabel="Contáctanos"
          ctaHref="/contacto"
        />
      </FadeIn>
    </>
  )
}
