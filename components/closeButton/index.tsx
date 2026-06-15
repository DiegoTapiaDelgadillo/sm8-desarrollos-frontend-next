import clsx from "clsx";
import { CloseIcon } from "../icons";

interface CloseButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function CloseButton({ onClick, className }: CloseButtonProps) {
  return (
    <CloseIcon
      className={clsx(
        "w-6 h-6 stroke-white hover:stroke-white/50 cursor-pointer ease-in-out duration-300",
        className,
      )}
      onClick={onClick}
    />
  );
}
