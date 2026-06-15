import Mural from "../../components/mural";
import CardProyect from "../../components/cardProyect";
import ScrollToTop from "@/components/scrollToTop";
import { allProjects } from "../../data/projects";

export default function ProyectosPage() {
  return (
    <>
      <ScrollToTop />
      <Mural Fondo="/assets/cp.webp" title="Conoce Todos Nuestros Proyectos" />

      {allProjects.map((project) => (
        <CardProyect
          key={project.title}
          Fondo={project.heroImage}
          text={project.description}
          title={project.title}
          imagenes={project.images}
          reduceBrightness={project.reduceBrightness}
        />
      ))}
    </>
  );
}
