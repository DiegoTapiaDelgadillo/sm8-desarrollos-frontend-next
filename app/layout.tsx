import type { Metadata } from "next"
import Script from "next/script"
import { Manrope } from "next/font/google"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CursorFollower from "@/components/ui/CursorFollower"
import IntroLoader from "@/components/ui/IntroLoader"
import PageTransition from "@/components/ui/PageTransition"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "SM8 Desarrollos — Espacios Vanguardistas en Tijuana",
    template: "%s | SM8 Desarrollos",
  },
  description:
    "Empresa de desarrollo arquitectónico y construcción con más de 30 años de experiencia en Tijuana, México. Proyectos residenciales de vanguardia.",
  metadataBase: new URL("https://sm8desarrollos.com"),
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "SM8 Desarrollos",
  url: "https://sm8desarrollos.com",
  logo: "https://sm8desarrollos.com/SM8Desarrollos.svg",
  description:
    "Empresa de desarrollo arquitectónico y construcción con más de 30 años de experiencia en Tijuana, México.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tijuana",
    addressRegion: "Baja California",
    addressCountry: "MX",
  },
  telephone: "+525514231881",
  email: "contacto@sm8.com.mx",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61552973715738",
    "https://www.instagram.com/sm8desarrollos/",
    "https://www.linkedin.com/company/sm8-desarrollos/",
  ],
}

const GA_ID = "G-GN4SGGKH09"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${manrope.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-[var(--font-manrope)]">
        <IntroLoader />
        <CursorFollower />
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />

        {/* Google Analytics GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
