import clsx from "clsx";

interface TextBodyProps {
  text: string;
  className?: string;
}

export default function TextBody({ text, className }: TextBodyProps) {
  return (
    <h2
      className={clsx(
        "text-center sm:text-start text-sm sm:text-xl text-neutral-500 py-4 lg:py-8",
        className,
      )}
    >
      {text}
    </h2>
  );
}
