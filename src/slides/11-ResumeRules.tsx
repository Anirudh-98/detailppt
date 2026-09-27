import type { ReactNode } from 'react'
import { Slide } from '../components/Slide'
import { Eyebrow } from '../components/Eyebrow'

const rules: { title: string; body: ReactNode }[] = [
  { title: 'Tailor your resume to the role', body: <p>One job ≠ one generic resume.</p> },
  {
    title: 'Use relevant terms from the job description',
    body: <p>If you genuinely have the skill, make it visible.</p>,
  },
  {
    title: 'Show evidence, not empty claims',
    body: (
      <>
        <p className="line-through decoration-black/30">“Good programmer”</p>
        <p className="mt-[10px] text-ink">“Built X using Java and Spring Boot.”</p>
      </>
    ),
  },
  {
    title: 'Keep the structure simple',
    body: <p>Make your resume easy for both software and humans to process.</p>,
  },
  {
    title: 'Check before you apply',
    body: <p className="text-ink">“Does this resume clearly demonstrate why I'm relevant to this job?”</p>,
  },
]

export default function ResumeRules() {
  return (
    <Slide theme="white" className="flex flex-col">
      <Eyebrow>Takeaways</Eyebrow>
      <h2 className="mt-[28px] text-[112px] leading-[1] tracking-[-0.045em]">
        Your 5 resume rules<span className="text-brand">.</span>
      </h2>

      <ol className="mt-auto grid grid-cols-5 gap-[36px]">
        {rules.map((r, i) => (
          <li key={r.title} className="flex h-[500px] flex-col border-t-2 border-ink pt-[28px]">
            <span className={`text-[88px] leading-none tracking-[-0.05em] ${i === 4 ? 'text-brand' : ''}`}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-[36px] text-[32px] leading-[1.1] tracking-[-0.015em]">{r.title}</h3>
            <div className="mt-auto text-[24px] leading-snug text-muted">{r.body}</div>
          </li>
        ))}
      </ol>
    </Slide>
  )
}
