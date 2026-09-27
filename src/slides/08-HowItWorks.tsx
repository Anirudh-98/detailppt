import { Slide } from '../components/Slide'
import { Eyebrow } from '../components/Eyebrow'

const steps = [
  'Resume',
  'Text extraction',
  'Resume analysis',
  'Job description analysis',
  'Skill & keyword comparison',
  'Section analysis',
  'AI-powered rewrite suggestions',
]

const dotColors = ['#dbe8ff', '#b5cdf8', '#8db6ff', '#5f9bff', '#2f80ff', '#0665fe', '#ffffff']

const results = ['Match score', 'Missing keywords', 'Weak sections', 'Improvement suggestions']

export default function HowItWorks() {
  return (
    <Slide theme="charcoal" className="flex flex-col">
      <div className="flex items-start justify-between gap-[96px]">
        <div>
          <Eyebrow>How DetailResume works</Eyebrow>
          <h2 className="mt-[28px] text-[88px] leading-[1] tracking-[-0.04em]">
            From resume to
            <br />
            actionable insights<span className="text-brand-light">.</span>
          </h2>
        </div>
        <div className="max-w-[620px] border-l border-white/25 pl-[28px] pt-[8px]">
          <p className="text-[22px] uppercase tracking-[0.14em] text-white/60">The goal is not to “game the ATS.”</p>
          <p className="mt-[12px] text-[30px] leading-[1.25]">
            The goal is to communicate genuine experience more clearly and accurately.
          </p>
        </div>
      </div>

      {/* Pipeline timeline — labels alternate above and below the line */}
      <div className="relative mt-[48px] grid h-[330px] grid-cols-7">
        <div className="absolute inset-x-0 top-1/2 h-px bg-white/30" />
        {steps.map((step, i) => {
          const up = i % 2 === 0
          const color = dotColors[i]
          return (
            <div key={step} className="relative h-full">
              <span
                className={`absolute left-[10px] w-px opacity-70 ${up ? 'top-[8px] bottom-1/2' : 'top-1/2 bottom-[8px]'}`}
                style={{ backgroundColor: color }}
              />
              <span
                className="absolute left-0 top-1/2 size-[22px] -translate-y-1/2 rounded-full"
                style={{ backgroundColor: color }}
              />
              <div className={`absolute left-[34px] right-[16px] ${up ? 'top-0' : 'bottom-0'}`}>
                <p className="text-[18px] text-white/55">Step {String(i + 1).padStart(2, '0')}</p>
                <p className="mt-[6px] text-[28px] leading-[1.1] tracking-[-0.01em]">{step}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-auto flex items-center gap-[32px] rounded-[20px] bg-white p-[28px] pl-[40px] text-ink">
        <span className="shrink-0 text-[34px] font-medium tracking-[-0.02em]">Actionable results →</span>
        <div className="grid flex-1 grid-cols-4 gap-[16px]">
          {results.map((r) => (
            <span key={r} className="rounded-[12px] bg-paper px-[20px] py-[18px] text-center text-[24px]">
              {r}
            </span>
          ))}
        </div>
      </div>
    </Slide>
  )
}
