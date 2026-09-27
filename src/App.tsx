import { useCallback, useEffect, useState } from 'react'
import { Fit } from './components/Fit'
import { SlideNumberContext } from './components/SlideContext'
import { slides } from './slides'

const clamp = (n: number) => Math.min(Math.max(n, 0), slides.length - 1)

const indexFromHash = () => clamp((parseInt(window.location.hash.slice(1), 10) || 1) - 1)

function RenderSlide({ index }: { index: number }) {
  const Current = slides[index]
  return (
    <SlideNumberContext.Provider value={index + 1}>
      <Current />
    </SlideNumberContext.Provider>
  )
}

export default function App() {
  const [index, setIndex] = useState(indexFromHash)
  const [overview, setOverview] = useState(false)
  // 'normal' keeps the 16:9 slide with bars; 'fill' stretches the slide to cover the whole window.
  const [fill, setFill] = useState(() => {
    try {
      return localStorage.getItem('deck-view-mode') === 'fill'
    } catch {
      return false
    }
  })
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem('deck-view-mode', fill ? 'fill' : 'normal')
    } catch {
      // storage unavailable — mode just won't persist
    }
  }, [fill])

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])

  const go = useCallback((n: number) => setIndex(clamp(n)), [])

  useEffect(() => {
    window.history.replaceState(null, '', `#${index + 1}`)
  }, [index])

  useEffect(() => {
    const onHash = () => setIndex(indexFromHash())
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          e.preventDefault()
          setIndex((i) => clamp(i + 1))
          break
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          setIndex((i) => clamp(i - 1))
          break
        case 'Home':
          setIndex(0)
          break
        case 'End':
          setIndex(slides.length - 1)
          break
        case 'g':
        case 'G':
          setOverview((o) => !o)
          break
        case 'Escape':
          setOverview(false)
          break
        case 'f':
        case 'F':
          toggleFullscreen()
          break
        case 'm':
        case 'M':
          setFill((f) => !f)
          break
      }
    }
    window.addEventListener('hashchange', onHash)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('hashchange', onHash)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  // Touch: swipe left → next slide, swipe right → previous (disabled in overview so the grid can scroll).
  useEffect(() => {
    if (overview) return
    let startX = 0
    let startY = 0
    const onStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    }
    const onEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX
      const dy = e.changedTouches[0].clientY - startY
      if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return
      setIndex((i) => clamp(dx < 0 ? i + 1 : i - 1))
    }
    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchend', onEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend', onEnd)
    }
  }, [overview])

  return (
    <>
      {/* Presenter view */}
      <div className="h-full print:hidden">
        {overview ? (
          <div className="h-full overflow-y-auto p-[32px]">
            <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    go(i)
                    setOverview(false)
                  }}
                  className={`overflow-hidden rounded-[6px] text-left ring-2 transition hover:ring-white/60 ${
                    i === index ? 'ring-brand-light' : 'ring-transparent'
                  }`}
                >
                  <Fit className="pointer-events-none aspect-video w-full">
                    <RenderSlide index={i} />
                  </Fit>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="group relative h-full touch-pan-y">
            <Fit className="h-full w-full" fill={fill}>
              <RenderSlide index={index} />
            </Fit>

            <nav className="absolute bottom-[16px] left-1/2 flex -translate-x-1/2 items-center gap-[4px] rounded-full bg-black/70 px-[8px] py-[6px] text-[14px] text-white opacity-0 backdrop-blur transition group-hover:opacity-100 [@media(hover:none)]:opacity-100">
              <NavButton label="Previous (←)" onClick={() => go(index - 1)}>
                ←
              </NavButton>
              <span className="min-w-[64px] text-center tabular-nums">
                {index + 1} / {slides.length}
              </span>
              <NavButton label="Next (→)" onClick={() => go(index + 1)}>
                →
              </NavButton>
              <NavButton label="Overview (G)" onClick={() => setOverview(true)}>
                ▦
              </NavButton>
              <span className="mx-[4px] h-[20px] w-px bg-white/25" />
              <ModeButton active={!fill} label="Normal 16:9 view (M)" onClick={() => setFill(false)}>
                Normal
              </ModeButton>
              <ModeButton active={fill} label="Fill the screen (M)" onClick={() => setFill(true)}>
                Fill
              </ModeButton>
              <NavButton
                label={isFullscreen ? 'Exit full screen (F)' : 'Full screen (F)'}
                onClick={toggleFullscreen}
              >
                {isFullscreen ? '⤡' : '⤢'}
              </NavButton>
            </nav>
          </div>
        )}
      </div>

      {/* Print view: File → Print → Save as PDF exports every slide as a page */}
      <div className="hidden print:block">
        {slides.map((_, i) => (
          <div key={i} className="break-after-page">
            <RenderSlide index={i} />
          </div>
        ))}
      </div>
    </>
  )
}

function toggleFullscreen() {
  if (document.fullscreenElement) document.exitFullscreen()
  else document.documentElement.requestFullscreen()
}

function ModeButton({
  active,
  label,
  onClick,
  children,
}: {
  active: boolean
  label: string
  onClick: () => void
  children: string
}) {
  return (
    <button
      title={label}
      aria-label={label}
      aria-pressed={active}
      onClick={onClick}
      className={`h-[32px] rounded-full px-[12px] ${active ? 'bg-white text-black' : 'hover:bg-white/15'}`}
    >
      {children}
    </button>
  )
}

function NavButton({ label, onClick, children }: { label: string; onClick: () => void; children: string }) {
  return (
    <button
      title={label}
      aria-label={label}
      onClick={onClick}
      className="grid size-[32px] place-items-center rounded-full hover:bg-white/15"
    >
      {children}
    </button>
  )
}
