import Mural from "@/components/mural";
import CardProyectos from "@/components/cardProyectos";
import HomeSection from "@/components/homeSection";
import ProyectosButton from "@/components/proyectosButton";
import CardContact from "@/components/cardContact";
import ScrollToTop from "@/components/scrollToTop";
import { homeProjects } from "@/data/projects";
import { homeSections } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <ScrollToTop />

      <Mural
        Fondo="/assets/Bitte7.webp"
        title="Espacios Vanguardistas, Funcionales e Inteligentes"
      />

      {homeSections.slice(0, 1).map((section) => (
        <HomeSection key={section.title} {...section} />
      ))}

      <div className="px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 bg-neutral-50 py-12 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-12 pt-6 lg:pt-12">
          {homeProjects.map((project) => (
            <CardProyectos
              key={project.title}
              img={project.coverImage}
              title={project.title}
              textBody={project.description}
              imagenes={project.images}
            />
          ))}
        </div>
        <div className="pt-12 w-full flex justify-end">
          <ProyectosButton />
        </div>
      </div>

      {homeSections.slice(1).map((section) => (
        <HomeSection key={section.title} {...section} />
      ))}

      <CardContact img="/assets/contacto.png" />
    </>
  );
}
