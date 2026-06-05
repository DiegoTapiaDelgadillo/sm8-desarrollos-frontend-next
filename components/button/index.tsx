import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  text: string;
  rute: string;
  className?: string;
}

export default function Button({ text, rute, className }: ButtonProps) {
  return (
    <Link
      href={rute}
      className={clsx(
        "p-4 w-full sm:w-auto rounded-xl border border-black text-sm sm:text-base shadow-md hover:bg-black hover:text-white ease-in-out duration-300 bg-white inline-flex items-center justify-center",
        className
      )}
    >
      {text}
    </Link>
  );
}