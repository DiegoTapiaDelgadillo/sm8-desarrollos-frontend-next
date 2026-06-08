import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id:             "bitte",
    title:          "Bitte",
    description:
      "Impresionante y exclusivo desarrollo de 116 departamentos en el corazón de Tijuana, que mezcla un estilo minimalista y espacios abiertos con vegetación. Distinguiéndose por ser piezas vanguardistas de diseño, funcionales e inteligentes.",
    units:          "116 departamentos",
    location:       "Tijuana, B.C.",
    heroImage:      "/images/bitte/Bitte5.webp",
    heroImageAlt:   "Vista exterior del proyecto Bitte en Tijuana",
    thumbnailImage: "/images/bitte/Bitte1.webp",
    images: [
      "/images/bitte/Bitte1.webp",
      "/images/bitte/Bitte2.webp",
      "/images/bitte/Bitte3.webp",
      "/images/bitte/Bitte4.webp",
      "/images/bitte/Bitte5.webp",
      "/images/bitte/Bitte6.webp",
      "/images/bitte/Bitte7.webp",
      "/images/bitte/Bitte8.webp",
      "/images/bitte/Bitte9.webp",
      "/images/bitte/Bitte10.webp",
      "/images/bitte/Bitte11.webp",
      "/images/bitte/Bitte12.webp",
      "/images/bitte/Bitte13.webp",
      "/images/bitte/Bitte14.webp",
    ],
    href: "/proyectos",
    stats: [
      { value: "116", label: "Departamentos" },
      { value: "14", label: "Niveles" },
      { value: "Tijuana", label: "B.C." },
    ],
  },
  {
    id:             "colina-park",
    title:          "Colina Park Tijuana",
    description:
      "Concepto residencial que busca conectarte con los tuyos y con la naturaleza, haciendo posible una comunidad de innovación y modernidad.",
    location:       "Tijuana, B.C.",
    heroImage:      "/images/colina/Colina1.webp",
    heroImageAlt:   "Vista del proyecto Colina Park Tijuana",
    thumbnailImage: "/images/colina/Colina3.webp",
    images: [
      "/images/colina/Colina1.webp",
      "/images/colina/Colina2.webp",
      "/images/colina/Colina3.webp",
      "/images/colina/Colina4.webp",
    ],
    href: "/proyectos",
    stats: [
      { value: "4", label: "Torres" },
      { value: "120+", label: "Unidades" },
      { value: "Tijuana", label: "B.C." },
    ],
  },
  {
    id:             "cardon-living",
    title:          "Cardon Living",
    description:
      "Es un proyecto habitacional de 16 casas y una casa club, donde podrás habitar y vivir al máximo una hermosa experiencia con circuito vehicular, área común, alberca, área de estar, camastros, espejos de agua y un huerto destinado al cultivo de vegetales.",
    units:          "16 casas",
    location:       "Tijuana, B.C.",
    heroImage:      "/images/cardon/cardonLiving6.webp",
    heroImageAlt:   "Vista del proyecto Cardon Living",
    thumbnailImage: "/images/cardon/Cardon1.webp",
    images: [
      "/images/cardon/Cardon1.webp",
      "/images/cardon/Cardon2.webp",
      "/images/cardon/Cardon3.webp",
      "/images/cardon/Cardon4.webp",
      "/images/cardon/Cardon5.webp",
      "/images/cardon/Cardon6.webp",
      "/images/cardon/Cardon7.webp",
      "/images/cardon/Cardon8.webp",
    ],
    href: "/proyectos",
    stats: [
      { value: "16", label: "Casas" },
      { value: "1", label: "Casa Club" },
      { value: "Tijuana", label: "B.C." },
    ],
  },
  {
    id:             "sideways-living",
    title:          "Sideways Living",
    description:
      "Nueva propuesta vertical en La Cacho (Laredo, Tijuana) para las personas que buscan un estilo de vida urbano, activo, conectado y funcional. 82 unidades en 9 niveles.",
    units:          "82 unidades",
    location:       "La Cacho, Tijuana",
    heroImage:      "/images/sideways/laredo3.webp",
    heroImageAlt:   "Vista del proyecto Sideways Living en Tijuana",
    thumbnailImage: "/images/sideways/laredo2.webp",
    images: [
      "/images/sideways/laredo2.webp",
      "/images/sideways/laredo3.webp",
      "/images/sideways/laredo4.webp",
      "/images/sideways/laredo5.webp",
      "/images/sideways/laredo6.webp",
      "/images/sideways/laredo8.webp",
      "/images/sideways/laredo9.webp",
      "/images/sideways/laredo10.webp",
      "/images/sideways/laredo11.webp",
      "/images/sideways/laredo12.webp",
    ],
    href: "/proyectos",
    stats: [
      { value: "82", label: "Unidades" },
      { value: "La Cacho", label: "Distrito" },
      { value: "Tijuana", label: "B.C." },
    ],
  },
]

export const featuredProjects = projects.filter((p) =>
  ["bitte", "colina-park", "sideways-living"].includes(p.id)
)
