import Image from "next/image"
import Button from "@/components/ui/Button"

interface CardContactProps {
  imageSrc: string
  imageAlt: string
  title: string
  subtitle?: string
  ctaLabel: string
  ctaHref: string
}

export default function CardContact({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
}: CardContactProps) {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[60vh] md:min-h-[70vh]">

      {/* Columna texto */}
      <div className="
        flex flex-col justify-center
        bg-[var(--color-canvas)]
        px-6 py-12
        md:w-1/2 md:px-12
        lg:px-20
        order-2 md:order-1
      ">
        <h2 className="
          text-[length:var(--text-section)]
          font-light
          tracking-normal
          leading-snug
          text-[var(--color-ink)]
          max-w-[20ch]
        ">
          {title}
        </h2>

        {subtitle && (
          <p className="
            mt-4
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

        <div className="border-t border-[var(--color-rule)] my-6 lg:my-8" />

        <Button href={ctaHref} variant="light" label={ctaLabel} />
      </div>

      {/* Columna foto */}
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
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

    </section>
  )
}
