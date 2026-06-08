import type { Metadata } from "next"
import Image from "next/image"
import MuralEditorial from "@/components/MuralEditorial"
import MuralHero from "@/components/MuralHero"
import CardProyectos from "@/components/CardProyectos"
import CardContact from "@/components/CardContact"
import Button from "@/components/ui/Button"
import CountUp from "@/components/ui/CountUp"
import FadeIn from "@/components/ui/FadeIn"
import { featuredProjects } from "@/data/projects"

export const metadata: Metadata = {
  title: "SM8 Desarrollos — Espacios Vanguardistas en Tijuana",
  description:
    "Empresa de desarrollo arquitectónico y construcción con más de 30 años de experiencia en Tijuana, México. Proyectos residenciales de vanguardia.",
  openGraph: {
    title: "SM8 Desarrollos — Espacios Vanguardistas en Tijuana",
    description:
      "Empresa de desarrollo arquitectónico y construcción con más de 30 años de experiencia en Tijuana, México.",
    images: [{ url: "/images/bitte/Bitte7.webp" }],
  },
}

const services = [
  "Gestiones Jurídicas y Técnicas",
  "Estudios y Servicios de Campo",
  "Ingeniería Financiera",
  "Arquitectura del Negocio",
  "Arquitectura e Ingenierías",
]

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <MuralHero
        imageSrc="/images/bitte/Bitte7.webp"
        imageAlt="Vista arquitectónica del proyecto Bitte — SM8 Desarrollos"
        ctaLabel="Conócenos"
        ctaHref="/nosotros"
      />

      {/* 2. Sección empresa */}
      <FadeIn direction="up">
      <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-[var(--color-canvas)]">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:gap-20 xl:gap-32">

            <div className="lg:w-1/2">
              <h2 className="
                text-[length:var(--text-section)]
                font-light tracking-normal leading-snug
                text-[var(--color-ink)]
                max-w-[20ch]
                mb-8 lg:mb-0
              ">
                <CountUp target={30} className="tabular-nums" /> años construyendo el futuro de México
              </h2>
            </div>

            <div className="lg:w-1/2 flex flex-col justify-center">
              <p className="
                text-[length:var(--text-body)]
                font-light tracking-normal leading-relaxed
                text-[var(--color-ink)]
                max-w-[55ch]
                mb-8
              ">
                Somos un equipo de expertos con más de 30 años de experiencia en
                el medio profesional y técnico para cubrir áreas, prefases y
                etapas de la construcción.
              </p>
              <Button href="/nosotros" variant="light" label="Conócenos" />
            </div>

          </div>
        </div>
      </section>
      </FadeIn>

      {/* 3. Grid proyectos — full-bleed */}
      <FadeIn direction="up" delay={100}>
        <CardProyectos projects={featuredProjects} />
      </FadeIn>

      {/* 4. Sección servicios — canvas-dark */}
      <FadeIn direction="up">
      <section className="py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-[var(--color-canvas-dark)]">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

            <div className="relative lg:w-1/2 aspect-[4/3] overflow-hidden">
              <Image
                src="/images/bitte/Bitte6.webp"
                alt="Construcción de calidad — SM8 Desarrollos"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="
                text-[length:var(--text-section)]
                font-light tracking-normal leading-snug
                text-white
                mb-8 lg:mb-12
              ">
                Nuestros servicios
              </h2>

              <ol className="flex flex-col gap-4">
                {services.map((service, i) => (
                  <li key={i} className="flex items-baseline gap-4 border-b border-white/10 pb-4">
                    <span className="
                      text-[length:var(--text-label)]
                      font-normal tracking-widest
                      text-white/40
                      flex-shrink-0 w-6
                    ">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="
                      text-[length:var(--text-body)]
                      font-light tracking-normal
                      text-white
                    ">
                      {service}
                    </span>
                  </li>
                ))}
              </ol>

              <div className="mt-10">
                <Button href="/nosotros" variant="dark" label="Más información" />
              </div>
            </div>

          </div>
        </div>
      </section>
      </FadeIn>

      {/* 5. CTA contacto */}
      <FadeIn direction="up">
        <CardContact
          imageSrc="/images/contacto.png"
          imageAlt="Espacio residencial SM8 Desarrollos"
          title="Hagamos algo grande juntos"
          ctaLabel="Contáctanos"
          ctaHref="/contacto"
        />
      </FadeIn>
    </>
  )
}
