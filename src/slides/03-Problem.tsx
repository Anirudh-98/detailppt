import { Slide } from '../components/Slide'
import { Eyebrow } from '../components/Eyebrow'
import { ChipRow } from '../components/Chip'

export default function Problem() {
  return (
    <Slide theme="slate" className="flex flex-col">
      <Eyebrow>The problem</Eyebrow>
      <h2 className="mt-[28px] text-[104px] leading-[0.98] tracking-[-0.04em]">
        You have the skills.
        <br />
        <span className="text-white/60">Does your resume show them?</span>
      </h2>

      <div className="mt-auto grid grid-cols-3 gap-[56px]">
        <div className="border-t border-white/30 pt-[28px]">
          <p className="text-[24px] text-white/70">Imagine a student has:</p>
          <div className="mt-[20px]">
            <ChipRow items={['Java', 'Spring Boot', 'SQL', 'REST APIs', 'Git']} variant="dark" />
          </div>
        </div>
        <div className="border-t border-white/30 pt-[28px]">
          <p className="text-[24px] text-white/70">But their resume says:</p>
          <blockquote className="mt-[16px] text-[40px] leading-[1.15] tracking-[-0.02em]">
            “Worked on a website using Java.”
          </blockquote>
        </div>
        <div className="border-t border-white/30 pt-[28px]">
          <p className="text-[24px] text-white/70">The experience may be relevant.</p>
          <p className="mt-[16px] text-[40px] leading-[1.15] tracking-[-0.02em]">The problem is communication.</p>
          <p className="mt-[12px] text-[22px] text-white/70">
            The job description asks for specific skills and evidence.
          </p>
        </div>
      </div>

      <div className="mt-[56px] flex items-center justify-between rounded-[20px] bg-white px-[48px] py-[32px] text-ink">
        <span className="text-[40px] tracking-[-0.02em]">Good candidate</span>
        <span className="text-[56px] leading-none font-light text-brand">≠</span>
        <span className="text-[40px] tracking-[-0.02em]">Clearly communicated candidate</span>
      </div>
    </Slide>
  )
}
