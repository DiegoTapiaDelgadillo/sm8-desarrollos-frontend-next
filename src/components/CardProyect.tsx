import Image from "next/image"
import GaleriaButton from "@/components/GaleriaButton"
import type { ProjectStat } from "@/types"

interface CardProyectProps {
  index: number
  title: string
  description: string
  units?: string
  location?: string
  heroImage: string
  heroImageAlt: string
  images: string[]
  ctaLabel?: string
  stats?: ProjectStat[]
}

export default function CardProyect({
  index,
  title,
  description,
  units,
  location,
  heroImage,
  heroImageAlt,
  images,
  ctaLabel,
  stats,
}: CardProyectProps) {
  const meta = [units, location].filter(Boolean).join(" · ")

  return (
    <section className="w-full py-16 md:py-24 lg:py-32">

      {/* Número */}
      <div className="px-6 md:px-12 lg:px-20 pb-4">
        <p className="
          text-[length:var(--text-display)]
          md:text-[length:var(--text-hero)]
          lg:text-[length:var(--text-display)]
          font-thin
          tracking-tighter
          leading-none
          text-[var(--color-rule)]
          select-none
        ">
          {String(index).padStart(2, "0")}
        </p>
      </div>

      {/* Separador */}
      <div className="border-t border-[var(--color-rule)]" />

      {/* Grid foto / contenido */}
      <div className="flex flex-col lg:flex-row lg:min-h-[600px]">

        {/* Foto — 60% */}
        <div className="
          relative
          w-full lg:w-[60%]
          h-[55vw] min-h-[300px]
          lg:h-auto
          overflow-hidden
        ">
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>

        {/* Contenido — 40% */}
        <div className="
          flex flex-col justify-center
          w-full lg:w-[40%]
          px-6 py-8
          lg:px-12 lg:py-16
          bg-[var(--color-canvas)]
        ">
          <h2 className="
            text-[length:var(--text-section)]
            font-light
            tracking-normal
            leading-snug
            text-[var(--color-ink)]
            mb-3 lg:mb-4
          ">
            {title}
          </h2>

          {stats && stats.length > 0 ? (
            <div className="flex gap-0 mt-2 mb-6 lg:mb-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`pr-6 ${i < stats.length - 1 ? "mr-6 border-r border-[var(--color-rule)]" : ""}`}
                >
                  <p className="
                    text-[length:var(--text-section)]
                    font-light
                    leading-none
                    text-[var(--color-ink)]
                  ">
                    {stat.value}
                  </p>
                  <p className="
                    text-[length:var(--text-label)]
                    font-normal tracking-widest uppercase
                    text-[var(--color-muted)]
                    mt-1
                  ">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          ) : meta ? (
            <p className="
              text-[length:var(--text-label)]
              font-normal tracking-widest uppercase
              text-[var(--color-muted)]
              mb-6 lg:mb-8
            ">
              {meta}
            </p>
          ) : null}

          <p className="
            text-[length:var(--text-body)]
            font-light
            tracking-normal
            leading-relaxed
            text-[var(--color-ink)]
            max-w-[45ch]
            mb-8 lg:mb-10
          ">
            {description}
          </p>

          <GaleriaButton
            images={images}
            projectTitle={title}
            label={ctaLabel ?? "Ver galería"}
          />
        </div>

      </div>
    </section>
  )
}
