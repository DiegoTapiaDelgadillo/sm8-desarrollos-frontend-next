import { ChevronDownIcon } from "../icons";

export default function ScrollIcon() {
  return (
    <div className="rounded-full bg-white/20 flex items-center justify-center w-10 h-10 border-white border">
      <ChevronDownIcon className="w-6 h-6 stroke-white animate-bounce animate-infinite" />
    </div>
  );
}
