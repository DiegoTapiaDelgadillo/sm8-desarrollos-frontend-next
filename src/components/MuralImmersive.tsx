import Image from "next/image";

interface MuralImmersiveProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
}

function ScrollIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 stroke-white/60 animate-float"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function MuralImmersive({
  imageSrc,
  imageAlt,
  title,
}: MuralImmersiveProps) {
  return (
    <section className="relative w-full h-screen min-h-screen overflow-hidden">
      {/* Fotografía de fondo */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Título en esquina inferior izquierda */}
      <div
        className="
        absolute bottom-0 left-0 right-0
        px-6 pb-12
        md:px-12 md:pb-16
        lg:px-20 lg:pb-20
      "
      >
        <h1
          className="
          text-[length:var(--text-display)]
          font-thin
          tracking-tighter
          leading-none
          text-white
          uppercase
          max-w-[14ch]
        "
        >
          {title}
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ScrollIcon />
      </div>
    </section>
  );
}
