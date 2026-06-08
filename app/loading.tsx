export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--color-canvas)]">
      <div className="w-10 h-10 border border-[var(--color-rule)] border-t-[var(--color-ink)] animate-spin-slow" />
    </div>
  )
}
