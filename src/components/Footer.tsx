import Image from "next/image";
import Link from "next/link";
import { navLinks, socialLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-canvas-dark)] px-6 md:px-12 lg:px-20 py-12 lg:py-16">
      <div className="max-w-screen-xl mx-auto">
        {/* Grid de 4 columnas */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-10 lg:pb-12">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src="/SM8Desarrollos.svg"
                alt="SM8 Desarrollos"
                width={140}
                height={38}
                className="h-14 w-auto"
              />
            </Link>
          </div>

          {/* Menú */}
          <div className="flex flex-col gap-3">
            <p
              className="
              text-[length:var(--text-label)]
              font-normal tracking-widest uppercase
              text-white/40
              mb-1
            "
            >
              Menú
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  text-[length:var(--text-body)]
                  font-light
                  text-white/70
                  hover:text-white
                  transition-colors duration-200
                "
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Más de SM8 */}
          <div className="flex flex-col gap-3">
            <p
              className="
              text-[length:var(--text-label)]
              font-normal tracking-widest uppercase
              text-white/40
              mb-1
            "
            >
              Más de SM8
            </p>
            <a
              href="https://www.sm8.com.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[length:var(--text-body)] font-light text-white/70 hover:text-white transition-colors duration-200"
            >
              SM8 México
            </a>
            <a
              href="https://www.sm8.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[length:var(--text-body)] font-light text-white/70 hover:text-white transition-colors duration-200"
            >
              SM8 España
            </a>
          </div>

          {/* Redes sociales */}
          <div className="flex flex-col gap-4">
            <p
              className="
              text-[length:var(--text-label)]
              font-normal tracking-widest uppercase
              text-white/40
              mb-1
            "
            >
              Redes Sociales
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="opacity-50 hover:opacity-100 transition-opacity duration-200"
                >
                  <Image
                    src={social.iconPath}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea de copyright */}
        <div className="border-t border-white/10 pt-6">
          <p
            className="
            text-[length:var(--text-label)]
            font-normal tracking-widest
            text-white/30
          "
          >
            © {new Date().getFullYear()} SM8 Desarrollos. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
