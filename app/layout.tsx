import type { ReactNode } from "react";
import "./globals.css";
import "aos/dist/aos.css";
import ClientShell from "../components/ClientShell";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
