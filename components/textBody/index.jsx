import clsx from "clsx";

export default function TextBody({ text, className }) {
  return (
    <h2 className=" text-center sm:text-start text-sm sm:text-xl text-neutral-500 py-4 lg:py-8">
      {text}
    </h2>
  );
}
