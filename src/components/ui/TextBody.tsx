interface TextBodyProps {
  children: React.ReactNode
  muted?: boolean
  className?: string
}

export default function TextBody({ children, muted, className }: TextBodyProps) {
  return (
    <p
      className={`
        text-[length:var(--text-body)]
        font-light
        tracking-normal
        leading-relaxed
        ${muted ? "text-[var(--color-muted)]" : "text-[var(--color-ink)]"}
        ${className ?? ""}
      `}
    >
      {children}
    </p>
  )
}
