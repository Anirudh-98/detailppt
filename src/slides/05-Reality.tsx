import { Slide } from '../components/Slide'
import { Eyebrow } from '../components/Eyebrow'

const built = ['Education', 'Projects', 'Certifications', 'Internships', 'Technical skills']

export default function Reality() {
  return (
    <Slide theme="navy" className="grid grid-cols-[1fr_0.9fr] gap-[140px]">
      <div className="flex flex-col">
        <Eyebrow>The reality for students</Eyebrow>
        <h2 className="mt-[28px] text-[112px] leading-[0.98] tracking-[-0.045em]">
          Years of work.
          <br />
          <span className="text-white/55">Seconds of attention.</span>
        </h2>

        <div className="mt-auto">
          <p className="text-[22px] uppercase tracking-[0.14em] text-white/60">So the question isn't</p>
          <p className="mt-[10px] text-[40px] text-white/50 line-through decoration-white/40">“Am I qualified?”</p>
          <p className="mt-[32px] text-[22px] uppercase tracking-[0.14em] text-white/60">It's</p>
          <p className="mt-[10px] text-[46px] leading-[1.12] tracking-[-0.02em]">
            “Can my resume clearly demonstrate why I'm relevant to this specific role?”
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-[26px] text-white/70">You spend years building:</p>
        <ul className="mt-[20px]">
          {built.map((item, i) => (
            <li key={item} className="flex items-baseline justify-between border-b border-white/20 py-[22px]">
              <span className="text-[22px] text-white/60">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[60px] leading-none tracking-[-0.03em]">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-[32px] text-[26px] leading-snug text-white/70">
          But your resume gets only a limited amount of initial attention.
        </p>
      </div>
    </Slide>
  )
}
