import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/types"

interface CardProyectosProps {
  projects: Pick<Project, "id" | "title" | "thumbnailImage" | "href">[]
}

export default function CardProyectos({ projects }: CardProyectosProps) {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x-0 lg:divide-x divide-[var(--color-rule)]">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={project.href}
          className="group block border-b border-[var(--color-rule)] last:border-b-0 lg:border-b-0"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={project.thumbnailImage}
              alt={`Proyecto ${project.title} — SM8 Desarrollos`}
              fill
              className="object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>

          <div className="flex items-center justify-between px-6 py-5 lg:px-8 lg:py-6">
            <span className="
              text-[length:var(--text-card-title)]
              font-normal tracking-wide uppercase
              text-[var(--color-ink)]
            ">
              {project.title}
            </span>
            <span className="
              text-[length:var(--text-label)]
              font-normal tracking-widest
              text-[var(--color-ink)]
              transition-transform duration-200 ease-in-out
              group-hover:translate-x-1
            ">
              →
            </span>
          </div>
        </Link>
      ))}
    </section>
  )
}
