"use client"

import { useState } from "react"

interface CollapseItemProps {
  title: string
  content: string
}

interface CollapseProps {
  items: CollapseItemProps[]
}

export default function Collapse({ items }: CollapseProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="w-full">
      {items.map((item, i) => (
        <div key={i} className={i === 0 ? "border-t border-[var(--color-rule)]" : ""}>

          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            className="
              w-full flex items-center justify-between
              py-5 lg:py-6
              text-left
              transition-opacity duration-200 hover:opacity-70
            "
          >
            <span className="
              text-[length:var(--text-card-title)]
              font-normal tracking-wide uppercase
              text-[var(--color-ink)]
            ">
              {item.title}
            </span>

            <span className={`
              text-[length:var(--text-body)]
              font-light
              text-[var(--color-muted)]
              flex-shrink-0 ml-4
              transition-transform duration-200
              ${openIndex === i ? "rotate-45" : "rotate-0"}
            `}>
              +
            </span>
          </button>

          <div className={`
            overflow-hidden
            transition-all duration-[400ms] ease-in-out
            ${openIndex === i ? "max-h-[800px] pb-6" : "max-h-0"}
          `}>
            <p className="
              text-[length:var(--text-body)]
              font-light
              tracking-normal
              leading-relaxed
              text-[var(--color-ink)]
              max-w-[65ch]
            ">
              {item.content}
            </p>
          </div>

          <div className="border-b border-[var(--color-rule)]" />

        </div>
      ))}
    </div>
  )
}
