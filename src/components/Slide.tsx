import type { ReactNode } from 'react'
import { deck } from '../deck.config'
import { Logo } from './Logo'
import { useSlideNumber, useSlideSize } from './SlideContext'

export type SlideTheme = 'blue' | 'white' | 'slate' | 'navy' | 'charcoal'

const themes: Record<SlideTheme, { bg: string; text: string; logo: 'color' | 'white'; rule: string }> = {
  blue: {
    bg: 'bg-[radial-gradient(120%_120%_at_15%_0%,#3d8bff_0%,#0665fe_45%,#0a3fdf_100%)]',
    text: 'text-white',
    logo: 'white',
    rule: 'border-white/25',
  },
  white: { bg: 'bg-paper', text: 'text-ink', logo: 'color', rule: 'border-black/10' },
  slate: {
    bg: 'bg-[linear-gradient(180deg,#6a85bd_0%,#46609a_100%)]',
    text: 'text-white',
    logo: 'white',
    rule: 'border-white/25',
  },
  navy: { bg: 'bg-navy', text: 'text-white', logo: 'white', rule: 'border-white/20' },
  charcoal: { bg: 'bg-charcoal', text: 'text-white', logo: 'white', rule: 'border-white/15' },
}

type SlideProps = {
  theme?: SlideTheme
  children: ReactNode
  className?: string
}

/** A 1920×1080 canvas (stretched to the viewport's aspect ratio when fitted) with the shared footer (logo · slide number · date). */
export function Slide({ theme = 'white', children, className = '' }: SlideProps) {
  const t = themes[theme]
  const number = useSlideNumber()
  const { width, height } = useSlideSize()

  return (
    <section style={{ width, height }} className={`relative overflow-hidden ${t.bg} ${t.text}`}>
      <div className={`absolute inset-x-[96px] top-[96px] bottom-[150px] ${className}`}>{children}</div>
      <footer
        className={`absolute inset-x-[64px] bottom-[40px] flex items-center justify-between border-t pt-[24px] text-[20px] ${t.rule}`}
      >
        <Logo variant={t.logo} />
        <span className="flex gap-[64px] opacity-80">
          <span>{String(number).padStart(2, '0')}</span>
          <span>{deck.date}</span>
        </span>
      </footer>
    </section>
  )
}
