"use client"

interface InputProps {
  id: string
  name: string
  label: string
  type?: "text" | "email" | "tel" | "textarea"
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
  disabled?: boolean
  required?: boolean
  rows?: number
}

const fieldClasses = (error?: string, disabled?: boolean) => `
  w-full
  bg-transparent
  border-b
  py-3
  text-[length:var(--text-body)]
  font-light tracking-normal
  text-[var(--color-ink)]
  placeholder:text-[var(--color-muted)] placeholder:opacity-50
  outline-none focus:outline-none
  transition-colors duration-200 ease-in-out
  ${error
    ? "border-[var(--color-ink)]"
    : "border-[var(--color-rule)] focus:border-[var(--color-ink)]"
  }
  ${disabled ? "opacity-40 cursor-not-allowed" : ""}
`

export default function Input({
  id,
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  disabled,
  required,
  rows = 4,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className={`
          text-[length:var(--text-label)]
          font-normal tracking-widest uppercase
          transition-colors duration-200
          ${error ? "text-[var(--color-ink)]" : "text-[var(--color-muted)]"}
          ${disabled ? "opacity-40" : ""}
        `}
      >
        {label}{required && " *"}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          rows={rows}
          placeholder={placeholder}
          className={fieldClasses(error, disabled) + " resize-none"}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          className={fieldClasses(error, disabled)}
        />
      )}

      {error && (
        <p className="text-[length:var(--text-label)] font-normal tracking-widest uppercase text-[var(--color-ink)] mt-1">
          {error}
        </p>
      )}
    </div>
  )
}
