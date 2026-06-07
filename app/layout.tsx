import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import ClientShell from "../components/ClientShell";

export const metadata: Metadata = {
  title: "SM8 Desarrollos — Espacios Vanguardistas, Funcionales e Inteligentes",
  description:
    "SM8 Desarrollos: firma de diseño arquitectónico con más de 30 años de experiencia en proyectos residenciales, comerciales y urbanos en Tijuana, México.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
