import { Slide } from '../components/Slide'
import { Eyebrow } from '../components/Eyebrow'
import { ChipRow } from '../components/Chip'

const bars = [
  { label: 'Before', score: 38, color: 'bg-[#b5cdf8]' },
  { label: 'After', score: 91, color: 'bg-brand' },
]

const CHART_H = 520

export default function TheResult() {
  return (
    <Slide theme="white" className="grid grid-cols-[1.2fr_1fr] gap-[96px]">
      <div className="flex flex-col">
        <Eyebrow>The result</Eyebrow>
        <h2 className="mt-[28px] text-[92px] leading-[1] tracking-[-0.04em]">What changed?</h2>

        <div className="mt-[40px] grid grid-cols-[1fr_auto] items-center gap-x-[40px] border-t border-black/10 py-[22px]">
          <div>
            <Eyebrow className="text-[18px]">Before</Eyebrow>
            <p className="mt-[8px] text-[30px] text-muted">“Did a project on websites.”</p>
          </div>
          <span className="text-[72px] leading-none tracking-[-0.04em] text-muted">38</span>
        </div>
        <div className="grid grid-cols-[1fr_auto] items-center gap-x-[40px] border-y border-black/10 py-[22px]">
          <div>
            <Eyebrow className="text-[18px] text-brand opacity-100">After</Eyebrow>
            <p className="mt-[8px] text-[30px] leading-[1.2]">
              “Built a responsive e-commerce website using React and Node.js, deployed on Firebase.”
            </p>
          </div>
          <span className="text-[72px] leading-none tracking-[-0.04em] text-brand">91</span>
        </div>

        <div className="mt-[32px]">
          <Eyebrow className="text-[18px]">What actually improved?</Eyebrow>
          <div className="mt-[14px]">
            <ChipRow items={['Specificity', 'Relevant terminology', 'Technical evidence', 'Job alignment']} />
          </div>
        </div>

        <p className="mt-auto text-[36px] leading-[1.15] tracking-[-0.02em]">
          <span className="text-muted">Same student. Same experience.</span> Better communication.
        </p>
      </div>

      <div className="flex flex-col">
        <div className="grid flex-1 grid-cols-2">
          {bars.map((b) => (
            <div key={b.label} className="flex flex-col border-l border-black/10 pl-[24px]">
              <span className="text-[26px] text-muted">{b.label} · Match score</span>
              <span className="text-[96px] leading-none tracking-[-0.05em]">{b.score}</span>
              <div className={`mt-auto w-full ${b.color}`} style={{ height: (b.score / 100) * CHART_H }} />
            </div>
          ))}
        </div>
        <div className="mt-[24px] flex items-center justify-between gap-[32px] rounded-[16px] bg-ink px-[32px] py-[20px] text-white">
          <span className="shrink-0 text-[44px] font-medium tracking-[-0.03em]">+53 points</span>
          <span className="text-right text-[18px] leading-snug text-white/70">
            But the score is not a guarantee. It is an analysis signal that helps identify areas for improvement.
          </span>
        </div>
      </div>
    </Slide>
  )
}
