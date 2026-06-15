import clsx from "clsx";
import { PlusIcon } from "../icons";

interface PlusSvgProps {
  onClick?: () => void;
  className?: string;
}

export default function PlusSvg({ onClick, className }: PlusSvgProps) {
  return (
    <PlusIcon
      className={clsx(
        "w-6 h-6 cursor-pointer hover:stroke-black/50 ease-in-out duration-300",
        className,
      )}
      onClick={onClick}
    />
  );
}
