import { Slide } from '../components/Slide'
import { Eyebrow } from '../components/Eyebrow'

const steps = [
  { title: 'Read', body: 'Extracts information from your resume' },
  { title: 'Parse', body: 'Identifies skills, experience, education and other sections' },
  { title: 'Match', body: 'Compares your resume with the requirements of a job' },
  { title: 'Filter / Rank', body: 'Helps recruiters organize candidates based on configured criteria' },
]

export default function HowAtsWorks() {
  return (
    <Slide theme="white" className="grid grid-cols-[1fr_1.05fr] gap-[120px]">
      <div className="flex flex-col">
        <Eyebrow>How does ATS work?</Eyebrow>
        <h2 className="mt-[28px] text-[92px] leading-[1] tracking-[-0.04em]">How does your resume get screened?</h2>
        <p className="mt-[36px] max-w-[720px] text-[30px] leading-snug text-muted">
          Before your resume reaches a recruiter, it may first pass through an{' '}
          <strong className="font-medium text-ink">Applicant Tracking System (ATS).</strong>
        </p>

        <div className="mt-auto rounded-[20px] bg-brand p-[40px] text-white">
          <Eyebrow className="text-[18px]">The key idea</Eyebrow>
          <p className="mt-[14px] text-[34px] leading-[1.2] tracking-[-0.015em]">
            Your first challenge isn't getting the interview. It's making sure your resume clearly communicates your
            relevance.
          </p>
        </div>
      </div>

      <ol className="flex flex-col justify-center">
        {steps.map((step, i) => (
          <li key={step.title} className="grid grid-cols-[96px_1fr] border-b border-black/10 py-[30px] first:pt-0">
            <span className="text-[44px] font-light text-muted">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3 className="text-[48px] leading-none tracking-[-0.02em]">{step.title}</h3>
              <p className="mt-[12px] text-[26px] text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Slide>
  )
}
