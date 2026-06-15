"use client";

import { type ReactNode, useEffect, useState } from "react";
import AOS from "aos";
import Navbar from "./navbar";
import Footer from "./footer";
import { navLinks, socialLinks } from "@/data/navigation";

type ClientShellProps = {
  children: ReactNode;
};

export default function ClientShell({ children }: ClientShellProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    AOS.init({
      duration: 1100,
      once: true, // evita re-animaciones al hacer scroll de regreso
      mirror: false,
      startEvent: "DOMContentLoaded",
    });

    return () => {
      AOS.refreshHard();
    };
  }, [mounted]);

  return (
    <div suppressHydrationWarning>
      <Navbar pages={navLinks} socialMedia={socialLinks} />
      {children}
      <Footer socialMedia={socialLinks} pages={navLinks} />
    </div>
  );
}
