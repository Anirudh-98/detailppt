import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { SlideSizeContext } from './SlideContext'

export const SLIDE_W = 1920
export const SLIDE_H = 1080

/**
 * Scales a slide to fit its parent box. By default it keeps 16:9 and letterboxes; with `fill`, the canvas
 * keeps at least 1920×1080 but stretches in one dimension to match the parent's aspect ratio.
 */
export function Fit({ children, className = '', fill = false }: { children: ReactNode; className?: string; fill?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const [box, setBox] = useState({ width: SLIDE_W, height: SLIDE_H, scale: 0 })

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => {
      const w = el.clientWidth
      const h = el.clientHeight
      if (!w || !h) return
      const scale = Math.min(w / SLIDE_W, h / SLIDE_H)
      setBox(fill ? { width: w / scale, height: h / scale, scale } : { width: SLIDE_W, height: SLIDE_H, scale })
    }
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [fill])

  const { width, height, scale } = box

  return (
    <div ref={ref} className={`flex items-center justify-center overflow-hidden ${className}`}>
      <div style={{ width: width * scale, height: height * scale }} className="relative shrink-0">
        <div style={{ transform: `scale(${scale})` }} className="absolute left-0 top-0 origin-top-left">
          <SlideSizeContext.Provider value={{ width, height }}>{children}</SlideSizeContext.Provider>
        </div>
      </div>
    </div>
  )
}
