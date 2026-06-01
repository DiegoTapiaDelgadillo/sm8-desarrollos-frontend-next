import clsx from "clsx";
import { useState, useEffect } from "react";
export default function CloseButton({ onClick, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={clsx(
        "w-6 h-6 stroke-white hover:stroke-white/50 cursor-pointer ease-in-out duration-300",
        className
      )}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}
