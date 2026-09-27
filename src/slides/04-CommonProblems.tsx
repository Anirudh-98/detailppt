import type { ReactNode } from 'react'
import { Slide } from '../components/Slide'
import { Eyebrow } from '../components/Eyebrow'
import { ChipRow } from '../components/Chip'

const problems: { title: string; body: ReactNode }[] = [
  {
    title: 'Generic language',
    body: (
      <>
        <p className="text-[28px] text-muted line-through decoration-black/30">“Good at coding”</p>
        <p className="mt-[18px] text-[18px] uppercase tracking-[0.14em] text-muted">Instead</p>
        <div className="mt-[12px]">
          <ChipRow items={['Java', 'Spring Boot', 'REST APIs']} variant="outline" />
        </div>
      </>
    ),
  },
  {
    title: 'Missing job-specific terms',
    body: (
      <>
        <p className="text-[24px] leading-snug text-muted">The job description asks for</p>
        <div className="my-[14px]">
          <ChipRow items={['AWS', 'Docker', 'Git']} variant="outline" />
        </div>
        <p className="text-[24px] leading-snug text-muted">but your resume doesn't clearly mention them.</p>
      </>
    ),
  },
  {
    title: 'Hard-to-parse formatting',
    body: (
      <p className="text-[24px] leading-snug text-muted">
        Complex layouts, graphics, tables or unusual structures can make information harder to process.
      </p>
    ),
  },
  {
    title: 'One resume for every job',
    body: <p className="text-[24px] leading-snug text-muted">Different jobs emphasize different skills.</p>,
  },
]

export default function CommonProblems() {
  return (
    <Slide theme="white" className="flex flex-col">
      <div className="flex items-end justify-between gap-[96px]">
        <div>
          <Eyebrow>Why resumes get missed</Eyebrow>
          <h2 className="mt-[28px] text-[92px] leading-[1] tracking-[-0.04em]">4 common resume problems</h2>
        </div>
        <div className="max-w-[560px] border-l-2 border-brand pl-[28px]">
          <Eyebrow className="text-[18px] text-brand opacity-100">The goal</Eyebrow>
          <p className="mt-[10px] text-[28px] leading-[1.25]">
            Your resume should communicate the match — not make the recruiter search for it.
          </p>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-4 gap-[28px]">
        {problems.map((p, i) => (
          <article key={p.title} className="flex h-[480px] flex-col rounded-[24px] bg-white p-[40px]">
            <span className="text-[40px] font-light text-brand">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-[20px] mb-[28px] text-[38px] leading-[1.05] tracking-[-0.02em]">{p.title}</h3>
            <div className="mt-auto">{p.body}</div>
          </article>
        ))}
      </div>
    </Slide>
  )
}
