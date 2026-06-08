import Link from "next/link"

interface ButtonProps {
  label: string
  href: string
  variant: "light" | "dark"
}

export default function Button({ label, href, variant }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`
        inline-flex items-center gap-2
        text-[length:var(--text-label)]
        font-normal tracking-widest uppercase
        transition-opacity duration-200 ease-in-out
        group
        hover:opacity-70
        ${variant === "light" ? "text-[var(--color-ink)]" : "text-white"}
      `}
    >
      <span>{label}</span>
      <span className="transition-transform duration-200 ease-in-out group-hover:translate-x-1">
        →
      </span>
    </Link>
  )
}
