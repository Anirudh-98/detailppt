import type { ReactNode } from 'react'

const variants = {
  light: 'border-black/15 text-ink',
  dark: 'border-white/35 text-white',
  brand: 'border-brand bg-brand text-white',
  outline: 'border-brand text-brand',
}

export function Chip({ children, variant = 'light' }: { children: ReactNode; variant?: keyof typeof variants }) {
  return (
    <span className={`inline-flex rounded-full border px-[22px] py-[8px] text-[24px] leading-none ${variants[variant]}`}>
      {children}
    </span>
  )
}

export function ChipRow({ items, variant }: { items: string[]; variant?: keyof typeof variants }) {
  return (
    <div className="flex flex-wrap gap-[12px]">
      {items.map((item) => (
        <Chip key={item} variant={variant}>
          {item}
        </Chip>
      ))}
    </div>
  )
}
