type ImagePlaceholderProps = {
  /** Image URL — leave empty to show the placeholder. */
  src?: string
  label: string
  tone?: 'light' | 'dark'
  /** Smaller icon and label for small boxes such as avatars. */
  compact?: boolean
  className?: string
}

export function ImagePlaceholder({ src, label, tone = 'light', compact = false, className = '' }: ImagePlaceholderProps) {
  if (src) return <img src={src} alt={label} className={`object-cover ${className}`} />

  const toneClass =
    tone === 'dark' ? 'border-white/35 bg-white/10 text-white/70' : 'border-black/20 bg-black/[0.04] text-black/45'

  return (
    <div
      className={`flex flex-col items-center justify-center gap-[12px] border-2 border-dashed text-center ${toneClass} ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className={compact ? 'size-[36px]' : 'size-[56px]'}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="M21 17l-5.5-5.5L6 20" strokeLinejoin="round" />
      </svg>
      <span className={`px-[16px] font-medium uppercase tracking-[0.14em] ${compact ? 'text-[14px]' : 'text-[20px]'}`}>
        {label}
      </span>
    </div>
  )
}
