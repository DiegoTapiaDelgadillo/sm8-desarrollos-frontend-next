import "./globals.css";
import "aos/dist/aos.css";
import ClientShell from "../components/ClientShell";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
