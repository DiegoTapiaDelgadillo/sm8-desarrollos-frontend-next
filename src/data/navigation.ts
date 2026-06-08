import type { NavLink, SocialLink } from "@/types"

export const navLinks: NavLink[] = [
  { text: "Inicio",     href: "/" },
  { text: "Proyectos",  href: "/proyectos" },
  { text: "Nosotros",   href: "/nosotros" },
  { text: "Contacto",   href: "/contacto" },
]

export const socialLinks: SocialLink[] = [
  {
    name:     "Facebook",
    href:     "https://www.facebook.com/profile.php?id=61552973715738",
    iconPath: "/icons/facebook.svg",
  },
  {
    name:     "Instagram",
    href:     "https://www.instagram.com/sm8desarrollos/",
    iconPath: "/icons/Instagram.svg",
  },
  {
    name:     "WhatsApp",
    href:     "https://api.whatsapp.com/send/?phone=5215514231881",
    iconPath: "/icons/whatsapp.svg",
  },
  {
    name:     "LinkedIn",
    href:     "https://www.linkedin.com/company/sm8-desarrollos/",
    iconPath: "/icons/linkedin-logo-svgrepo-com.svg",
  },
]
