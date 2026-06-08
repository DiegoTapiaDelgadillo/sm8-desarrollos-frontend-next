"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";

function BurgerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 w-full z-50 h-16 md:h-20
          transition-colors duration-300 ease-in-out
          ${
            isScrolled
              ? "bg-[var(--color-canvas)] border-b border-[var(--color-rule)]"
              : "bg-transparent border-b border-transparent"
          }
        `}
      >
        <div className="flex items-center justify-between h-full px-6 md:px-12 lg:px-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/SM8Desarrollos.svg"
              alt="SM8 Desarrollos"
              width={160}
              height={44}
              className="h-14 w-auto"
            />
          </Link>

          {/* Links desktop */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    text-[length:var(--text-label)]
                    font-normal tracking-widest uppercase
                    transition-opacity duration-200 ease-in-out
                    hover:opacity-60
                    ${isScrolled ? "text-[var(--color-ink)]" : "text-white"}
                    ${isActive(link.href) ? "opacity-100" : "opacity-80"}
                  `}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Botón burger mobile */}
          <button
            className={`
              md:hidden flex items-center justify-center w-10 h-10
              transition-opacity duration-200 hover:opacity-60
              ${isScrolled ? "text-[var(--color-ink)]" : "text-white"}
            `}
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menú"
          >
            <BurgerIcon />
          </button>
        </div>
      </nav>

      {/* Panel mobile fullscreen */}
      <div
        className={`
          fixed inset-0 z-50 flex flex-col
          bg-[var(--color-canvas)]
          transition-opacity duration-300 ease-in-out
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Header del panel */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-[var(--color-rule)]">
          <Image
            src="/SM8Desarrollos.svg"
            alt="SM8 Desarrollos"
            width={140}
            height={38}
            className="h-9 w-auto"
          />
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar menú"
            className="flex items-center justify-center w-10 h-10 text-[var(--color-ink)] transition-opacity duration-200 hover:opacity-60"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Links del panel */}
        <nav className="flex flex-col px-6 pt-8">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  block py-5
                  text-[length:var(--text-card-title)]
                  font-normal tracking-wide uppercase
                  text-[var(--color-ink)]
                  transition-opacity duration-200 hover:opacity-60
                "
              >
                {link.text}
              </Link>
              <div className="border-b border-[var(--color-rule)]" />
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
