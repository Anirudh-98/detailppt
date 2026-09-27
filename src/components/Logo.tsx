import { deck } from '../deck.config'

// Generated from public/images/logo.png: cropped, with the white background made transparent.
const sources = {
  color: '/images/logo-color.png',
  white: '/images/logo-white.png',
}

export function Logo({ variant = 'color', className = 'h-[46px]' }: { variant?: keyof typeof sources; className?: string }) {
  return <img src={sources[variant]} alt={deck.brand} className={`w-auto ${className}`} />
}
