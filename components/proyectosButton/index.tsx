import Link from "next/link";
import { ChevronRightIcon } from "../icons";

export default function ProyectosButton() {
  return (
    <div className="hover:text-black/50 flex ease-in-out duration-300 text-sm lg:text-base items-center">
      <Link href="/Proyectos" className="underline">
        Conoce todos nuestros proyectos
      </Link>
      <ChevronRightIcon className="w-6 h-6" />
    </div>
  );
}
