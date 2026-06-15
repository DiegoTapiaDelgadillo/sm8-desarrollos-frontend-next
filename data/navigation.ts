import type { PageLink, SocialLink } from "@/types";

export const navLinks: PageLink[] = [
  { text: "Inicio", route: "/" },
  { text: "Proyectos", route: "/Proyectos" },
  { text: "Nosotros", route: "/Nosotros" },
  { text: "Contacto", route: "/Contacto" },
];

export const socialLinks: SocialLink[] = [
  {
    route:
      "https://www.facebook.com/profile.php?id=61552973715738&mibextid=LQQJ4d",
    name: "Facebook",
    icon: "/assets/facebook.svg",
  },
  {
    route:
      "https://www.instagram.com/sm8desarrollos/?igsh=MXQ2cXZiMzluaHN4bA%3D%3D",
    name: "Instagram",
    icon: "/assets/Instagram.svg",
  },
  {
    route:
      "https://api.whatsapp.com/send/?phone=5215514231881&text&type=phone_number&app_absent=0",
    name: "Whatsapp",
    icon: "/assets/whatsapp.svg",
  },
  {
    route: "https://www.linkedin.com/company/sm8-desarrollos/",
    name: "Linkedin",
    icon: "/assets/linkedin-logo-svgrepo-com.svg",
  },
];

export const externalLinks = {
  sm8Mexico: "https://www.sm8.com.mx/",
  sm8Spain: "https://www.sm8.es/",
} as const;
