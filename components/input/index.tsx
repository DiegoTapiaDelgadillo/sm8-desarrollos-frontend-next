import type { ChangeEvent } from "react";

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  id: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error?: string;
}

export default function Input({
  placeholder,
  type,
  name,
  id,
  onChange,
  value,
  error,
}: InputProps) {
  return (
    <div className="py-2">
      <input
        placeholder={placeholder}
        type={type}
        required
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="w-full border border-neutral-500 rounded-xl p-2 shadow"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}