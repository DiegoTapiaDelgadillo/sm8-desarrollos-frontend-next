interface TextTitlesProps {
  children: React.ReactNode
  level: "section"
  as?: "h2" | "p" | "span"
  className?: string
}

export default function TextTitles({
  children,
  as: Tag = "h2",
  className,
}: TextTitlesProps) {
  return (
    <Tag
      className={`
        text-[length:var(--text-section)]
        font-light
        tracking-normal
        leading-snug
        text-[var(--color-ink)]
        ${className ?? ""}
      `}
    >
      {children}
    </Tag>
  )
}
