import Image from "next/image"
import Button from "@/components/ui/Button"
import TypewriterTitle from "@/components/ui/TypewriterTitle"

const HERO_PHRASES = [
  "Espacios Vanguardistas, Funcionales e Inteligentes",
  "30 Años Transformando el Paisaje Urbano",
  "Arquitectura que Inspira, Calidad que Perdura",
  "Innovación Arquitectónica en el Noroeste de México",
  "Cada Proyecto, una Obra Maestra",
]

interface MuralHeroProps {
  imageSrc: string
  imageAlt: string
  ctaLabel?: string
  ctaHref?: string
}

export default function MuralHero({ imageSrc, imageAlt, ctaLabel, ctaHref }: MuralHeroProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
      <div className="
        absolute inset-0 z-20 flex flex-col justify-end
        px-8 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20 xl:px-24 xl:py-24
      ">
        <span className="block mb-4 lg:mb-6 text-[length:var(--text-label)] font-normal tracking-widest uppercase text-white/60">
          SM8 Desarrollos
        </span>
        <h1 className="text-[length:var(--text-hero)] font-light tracking-tight leading-[1.05] text-white max-w-[20ch] mb-8 lg:mb-10 min-h-[1.2em]">
          <TypewriterTitle phrases={HERO_PHRASES} />
        </h1>
        <div className="border-t border-white/20 mb-6 lg:mb-8 w-12" />
        {ctaHref && <Button href={ctaHref} variant="dark" label={ctaLabel ?? "Conócenos"} />}
      </div>
    </section>
  )
}
