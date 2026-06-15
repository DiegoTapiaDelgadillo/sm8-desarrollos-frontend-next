import type { Project } from "@/types";

export const homeContent = {
  mural: {
    image: "/assets/Bitte7.webp",
    title: "Espacios Vanguardistas, Funcionales e Inteligentes",
  },
  intro: {
    title: "Desarrollando tus ideas con amor y pasión",
    body: "Sómos un equipo de expertos con más de 30 años de experiencia en el medio Profesional y Técnico para cubrir áreas, pre- fases y etapas de la construcción.",
    route: "/Nosotros",
    buttonText: "Conoce nuestra historia",
  },
  services: {
    title: "Nuestros servicios",
    body: "Gestiones Jurídicas y Técnicas, Estudios y Servicios de Campo, Ingeniería Financiera, Arquitectura del Negocio, Arquitectura e Ingenierías",
    image: "/assets/Bitte2.webp",
    route: "/Nosotros",
    buttonText: "Conócenos",
  },
  contact: {
    image: "/assets/contacto.png",
  },
};

export const homeSections = [
  {
    title: "Desarrollando tus ideas con amor y pasión",
    body: "Sómos un equipo de expertos con más de 30 años de experiencia en el medio Profesional y Técnico para cubrir áreas, pre- fases y etapas de la construcción.",
    buttonText: "Conoce nuestra historia",
    route: "/Nosotros",
    image: "/assets/Bitte7.webp",
  },
  {
    title: "Nuestros servicios",
    body: "Gestiones Jurídicas y Técnicas, Estudios y Servicios de Campo, Ingeniería Financiera, Arquitectura del Negocio, Arquitectura e Ingenierías",
    buttonText: "Conócenos",
    route: "/Nosotros",
    image: "/assets/Bitte2.webp",
  },
];

export const allProjects: Project[] = [
  {
    slug: "bitte",
    title: "Bitte",
    description:
      "Impresionante y exclusivo desarrollo de 116 departamentos en el corazón de Tijuana, que mezcla un estilo minimalista y espacios abiertos con vegetación. Distinguiéndose por ser piezas vanguardistas de diseño, funcionales e inteligentes.",
    coverImage: "/assets/Bitte1.webp",
    heroImage: "/assets/Bitte5.webp",
    images: [
      "/assets/Bitte1.webp",
      "/assets/Bitte2.webp",
      "/assets/Bitte3.webp",
      "/assets/Bitte4.webp",
      "/assets/Bitte5.webp",
      "/assets/Bitte6.webp",
      "/assets/Bitte7.webp",
      "/assets/Bitte8.webp",
      "/assets/Bitte9.webp",
      "/assets/Bitte10.webp",
      "/assets/Bitte11.webp",
      "/assets/Bitte12.webp",
      "/assets/Bitte13.webp",
      "/assets/Bitte14.webp",
    ],
    reduceBrightness: false,
    showOnHome: true,
  },
  {
    slug: "colina-park",
    title: "Colina Park Tijuana",
    description:
      "Concepto residencial que busca conectarte con los tuyos y con la naturaleza, haciendo posible una comunidad de innovación y modernidad.",
    coverImage: "/assets/cp.webp",
    heroImage: "/assets/Colina1.webp",
    images: [
      "/assets/Colina1.webp",
      "/assets/Colina2.webp",
      "/assets/Colina3.webp",
      "/assets/Colina4.webp",
    ],
    reduceBrightness: false,
    showOnHome: true,
  },
  {
    slug: "cardon-living",
    title: "Cardon Living",
    description:
      "Es un proyecto habitacional de 16 casas y una casa club, es decir donde podrás habitar y vivir al máximo una hermosa experiencia ya que cuenta con un circuito vehicular, un área común al centro del predio y no podría faltar la alberca, el área de estar, un área de camastros y espejos de agua, además de un huerto destinado al cultivo de vegetales.",
    coverImage: "/assets/cardonLiving6.webp",
    heroImage: "/assets/cardonLiving6.webp",
    images: [
      "/assets/Cardon1.webp",
      "/assets/Cardon2.webp",
      "/assets/Cardon3.webp",
      "/assets/Cardon4.webp",
      "/assets/Cardon5.webp",
      "/assets/Cardon6.webp",
      "/assets/Cardon7.webp",
      "/assets/Cardon8.webp",
    ],
    reduceBrightness: true,
    showOnHome: false,
  },
  {
    slug: "sideways-living",
    title: "Sideways Living",
    description:
      "Nueva propuesta vertical en La Cacho (Laredo, Tijuana) para las personas que buscan un estilo de vida urbano, activo, conectado y funcional. 82 unidades en 9 niveles.",
    coverImage: "/assets/laredo3.webp",
    heroImage: "/assets/laredo3.webp",
    images: [
      "/assets/laredo2.webp",
      "/assets/laredo3.webp",
      "/assets/laredo4.webp",
      "/assets/laredo5.webp",
      "/assets/laredo6.webp",
      "/assets/laredo8.webp",
      "/assets/laredo9.webp",
      "/assets/laredo10.webp",
      "/assets/laredo11.webp",
      "/assets/laredo12.webp",
    ],
    reduceBrightness: true,
    showOnHome: true,
  },
];

/** Projects shown on the Home page */
export const homeProjects = allProjects.filter((p) => p.showOnHome);
