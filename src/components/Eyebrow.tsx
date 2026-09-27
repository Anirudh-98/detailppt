import type { ReactNode } from 'react'

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-[22px] font-medium uppercase tracking-[0.18em] opacity-70 ${className}`}>{children}</p>
}
