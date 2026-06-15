import clsx from "clsx";
import { BurgerIcon } from "../icons";

type BurgerButtonProps = {
  onClick: () => void;
  className?: string;
};

export default function BurgerButton({
  onClick,
  className,
}: BurgerButtonProps) {
  return (
    <BurgerIcon
      className={clsx(
        "w-6 h-6 stroke-white cursor-pointer hover:stroke-white/50 ease-in-out duration-300",
        className,
      )}
      onClick={onClick}
    />
  );
}
