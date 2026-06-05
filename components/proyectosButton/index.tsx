import Link from "next/link";

export default function ProyectosButton() {
  return (
    <div className="hover:text-black/50 flex ease-in-out duration-300 text-sm lg:text-base items-center">
      <Link href="/Proyectos" className="underline">
        Conoce todos nuestros proyectos
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
}
