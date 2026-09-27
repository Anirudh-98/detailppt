import { Slide } from '../components/Slide'
import { Eyebrow } from '../components/Eyebrow'

const changes = [
  'Vague statement',
  'Specific technology',
  'Specific implementation',
  'Relevant terminology',
  'Clearer evidence of experience',
]

const Term = ({ children }: { children: string }) => (
  <span className="underline decoration-white/50 underline-offset-[6px]">{children}</span>
)

export default function DescriptionToEvidence() {
  return (
    <Slide theme="white" className="grid grid-cols-[1.35fr_1fr] gap-[112px]">
      <div className="flex flex-col">
        <Eyebrow>From description to evidence</Eyebrow>
        <h2 className="mt-[28px] text-[92px] leading-[1] tracking-[-0.04em]">What should the resume say?</h2>

        <div className="mt-[56px] rounded-[20px] border border-black/10 bg-white p-[36px]">
          <Eyebrow className="text-[18px]">Before</Eyebrow>
          <p className="mt-[12px] text-[36px] text-muted">“Did a project on websites.”</p>
        </div>
        <div className="mt-[20px] rounded-[20px] bg-brand p-[36px] text-white">
          <Eyebrow className="text-[18px]">After</Eyebrow>
          <p className="mt-[12px] text-[38px] leading-[1.25] tracking-[-0.015em]">
            “Built a responsive e-commerce application using <Term>Java</Term>, <Term>Spring Boot</Term>,{' '}
            <Term>REST APIs</Term> and <Term>MySQL</Term>, with Git-based version control.”
          </p>
        </div>

        <p className="mt-auto text-[40px] leading-[1.15] tracking-[-0.02em]">
          <span className="text-muted">Same student. Same project.</span> Better communication.
        </p>
      </div>

      <div className="flex flex-col justify-center">
        <Eyebrow>What changed?</Eyebrow>
        <ol className="mt-[24px]">
          {changes.map((c, i) => {
            const last = i === changes.length - 1
            return (
              <li key={c} className="flex flex-col">
                <div
                  className={`rounded-[16px] px-[32px] py-[24px] text-[32px] tracking-[-0.015em] ${
                    last ? 'bg-ink text-white' : 'border border-black/10 bg-white'
                  }`}
                >
                  {c}
                </div>
                {!last && <span className="py-[6px] pl-[32px] text-[28px] leading-none text-brand">↓</span>}
              </li>
            )
          })}
        </ol>
      </div>
    </Slide>
  )
}
