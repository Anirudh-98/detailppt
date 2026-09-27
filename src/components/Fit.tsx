import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'

export const SLIDE_W = 1920
export const SLIDE_H = 1080

/** Scales a 1920×1080 slide to fit inside its parent box, centred. */
export function Fit({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => setScale(Math.min(el.clientWidth / SLIDE_W, el.clientHeight / SLIDE_H))
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`flex items-center justify-center overflow-hidden ${className}`}>
      <div style={{ width: SLIDE_W * scale, height: SLIDE_H * scale }} className="relative shrink-0">
        <div style={{ transform: `scale(${scale})` }} className="absolute left-0 top-0 origin-top-left">
          {children}
        </div>
      </div>
    </div>
  )
}
