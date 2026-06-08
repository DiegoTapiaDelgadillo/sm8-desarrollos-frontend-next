import type { Metadata } from "next"
import MuralImmersive from "@/components/MuralImmersive"
import Form from "@/components/Form"
import FadeIn from "@/components/ui/FadeIn"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para hablar sobre tu proyecto. SM8 Desarrollos, Tijuana, México. +52 (55) 1423 1881.",
  openGraph: {
    title: "Contacto — SM8 Desarrollos",
    description:
      "Contáctanos para hablar sobre tu proyecto. Estamos listos para construir algo extraordinario.",
    images: [{ url: "/images/V4.jpg" }],
  },
}

export default function ContactoPage() {
  return (
    <>
      <MuralImmersive
        imageSrc="/images/V4.jpg"
        imageAlt="Desarrollo arquitectónico SM8 en Tijuana"
        title="Contacto"
      />

      <FadeIn direction="up">
        <Form />
      </FadeIn>
    </>
  )
}
