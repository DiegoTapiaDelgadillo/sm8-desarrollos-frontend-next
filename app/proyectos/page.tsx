import type { Metadata } from "next"
import MuralImmersive from "@/components/MuralImmersive"
import CardProyect from "@/components/CardProyect"
import FadeIn from "@/components/ui/FadeIn"
import ProjectScrollIndicator from "@/components/ui/ProjectScrollIndicator"
import { projects } from "@/data/projects"

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Conoce los proyectos residenciales de SM8 Desarrollos: Bitte, Colina Park Tijuana, Cardon Living y Sideways Living.",
  openGraph: {
    title: "Proyectos — SM8 Desarrollos",
    description:
      "Desarrollos residenciales vanguardistas en Tijuana. 116 departamentos, casas y unidades de lujo.",
    images: [{ url: "/images/colina/Colina3.webp" }],
  },
}

export default function ProyectosPage() {
  return (
    <>
      <MuralImmersive
        imageSrc="/images/colina/Colina3.webp"
        imageAlt="Vista aérea del proyecto Colina Park Tijuana"
        title="Proyectos"
      />

      {projects.map((project, i) => (
        <div key={project.id} data-project-index={i}>
          <FadeIn direction="up" delay={i * 150}>
            <CardProyect
              index={i + 1}
              title={project.title}
              description={project.description}
              units={project.units}
              location={project.location}
              heroImage={project.heroImage}
              heroImageAlt={project.heroImageAlt}
              images={project.images}
              stats={project.stats}
            />
          </FadeIn>
        </div>
      ))}

      <ProjectScrollIndicator count={projects.length} />
    </>
  )
}
