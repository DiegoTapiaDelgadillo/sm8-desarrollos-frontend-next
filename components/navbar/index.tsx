"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BurgerButton from "../burgerButton";
import CloseButton from "../closeButton";
import Mobile from "./mobile";
import type { PageLink, SocialLink } from "@/types";

type NavbarProps = {
  pages: PageLink[];
  socialMedia: SocialLink[];
};

export default function Navbar({ pages, socialMedia }: NavbarProps) {
  const [openMobile, setOpenMobile] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMobile = () => {
    setOpenMobile((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`py-4 px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 flex justify-between items-center ${
          scrolling
            ? "bg-black ease-in-out duration-300"
            : "bg-transparent ease-in-out duration-300"
        } fixed w-full z-50`}
      >
        <Link href="/">
          <img
            src="/assets/SM8Desarrollos.svg"
            alt="SM8 Desarrollos"
            className="w-24"
          />
        </Link>

        <div className="sm:flex items-center hidden">
          {pages.map((item) => (
            <div key={item.text} className="pl-8">
              <Link
                href={item.route}
                className="text-white hover:text-white/50 ease-in-out duration-300 text-lg"
              >
                {item.text}
              </Link>
            </div>
          ))}

          <p className="text-white text-xl pl-8">|</p>

          {socialMedia.map((item) => (
            <div className="pl-4" key={item.name}>
              <a
                href={item.route}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-6 h-6 hover:brightness-75 ease-in-out duration-300"
                />
              </a>
            </div>
          ))}
        </div>

        <div className="block sm:hidden">
          <BurgerButton
            onClick={toggleMobile}
            className={openMobile ? "hidden" : "block"}
          />
          <CloseButton
            onClick={toggleMobile}
            className={openMobile ? "block" : "hidden"}
          />
        </div>
      </nav>

      <Mobile
        className={openMobile ? "block" : "hidden"}
        pages={pages}
        socialMedia={socialMedia}
        onClick={toggleMobile}
      />
    </>
  );
}
