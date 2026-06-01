"use client";

import { useEffect } from "react";
import AOS from "aos";
import Navbar from "./navbar";
import Footer from "./footer";

export default function ClientShell({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1100,
    });
  }, []);

  const pages = [
    {
      text: "Inicio",
      rute: "/",
    },
    {
      text: "Proyectos",
      rute: "/Proyectos",
    },
    {
      text: "Nosotros",
      rute: "/Nosotros",
    },
    {
      text: "Contacto",
      rute: "/Contacto",
    },
  ];

  const socialMedia = [
    {
      rute: "https://www.facebook.com/profile.php?id=61552973715738&mibextid=LQQJ4d",
      name: "Facebook",
      icon: "/assets/facebook.svg",
    },
    {
      rute: "https://www.instagram.com/sm8desarrollos/?igsh=MXQ2cXZiMzluaHN4bA%3D%3D",
      name: "Instagram",
      icon: "/assets/Instagram.svg",
    },
    {
      rute: "https://api.whatsapp.com/send/?phone=5215514231881&text&type=phone_number&app_absent=0",
      name: "Whasapp",
      icon: "/assets/whatsapp.svg",
    },
    {
      rute: "https://www.linkedin.com/company/sm8-desarrollos/",
      name: "Linkedin",
      icon: "/assets/linkedin-logo-svgrepo-com.svg",
    },
  ];

  return (
    <>
      <Navbar pages={pages} socialMedia={socialMedia} />
      {children}
      <Footer socialMedia={socialMedia} pages={pages} />
    </>
  );
}
