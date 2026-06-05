"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

type BurgerButtonProps = {
  onClick: () => void;
  className?: string;
};

export default function BurgerButton({ onClick, className }: BurgerButtonProps) {
  const [scrolling, setScrolling] = useState(false);

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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={clsx(
        "w-6 h-6 stroke-white cursor-pointer hover:stroke-white/50 ease-in-out duration-300",
        className
      )}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}
