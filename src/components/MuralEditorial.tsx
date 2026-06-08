import Image from "next/image"
import Button from "@/components/ui/Button"

interface MuralEditorialProps {
  imageSrc: string
  imageAlt: string
  title: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function MuralEditorial({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
}: MuralEditorialProps) {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen">

      {/* Columna izquierda — texto */}
      <div className="
        flex flex-col justify-center
        bg-[var(--color-canvas)]
        px-6 py-12
        md:w-1/2 md:px-12 md:py-0
        lg:px-20
        order-2 md:order-1
      ">
        <h1 className="
          text-[length:var(--text-hero)]
          font-light
          tracking-tight
          leading-tight
          text-[var(--color-ink)]
          max-w-[16ch]
        ">
          {title}
        </h1>

        {subtitle && (
          <p className="
            mt-4 lg:mt-6
            text-[length:var(--text-body)]
            font-light
            tracking-normal
            leading-relaxed
            text-[var(--color-muted)]
            max-w-[40ch]
          ">
            {subtitle}
          </p>
        )}

        {ctaHref && (
          <>
            <div className="border-t border-[var(--color-rule)] my-6 lg:my-8" />
            <Button href={ctaHref} variant="light" label={ctaLabel ?? "Ver más"} />
          </>
        )}
      </div>

      {/* Columna derecha — fotografía */}
      <div className="
        relative
        h-[60vh] md:h-auto
        md:w-1/2
        order-1 md:order-2
        overflow-hidden
      ">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

    </section>
  )
}
