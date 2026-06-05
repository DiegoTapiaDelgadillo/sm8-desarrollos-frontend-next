"use client";

import clsx from "clsx";

interface PlusSvgProps {
  onClick?: () => void;
  className?: string;
}

export default function PlusSvg({ onClick, className }: PlusSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={clsx(
        "w-6 h-6 cursor-pointer hover:stroke-black/50 ease-in-out duration-300",
        className
      )}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}