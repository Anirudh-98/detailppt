import { Slide } from '../components/Slide'
import { Eyebrow } from '../components/Eyebrow'
import { ChipRow } from '../components/Chip'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { images } from '../deck.config'

const stats = [
  { value: '8.1', label: 'CGPA' },
  { value: '2', label: 'Projects' },
  { value: '1', label: 'Internship' },
]

const jdSkills = ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Git', 'AWS']

export default function MeetArjun() {
  return (
    <Slide theme="white" className="grid grid-cols-[1.1fr_1fr] gap-[112px]">
      <div className="flex flex-col">
        <Eyebrow>A realistic student example</Eyebrow>
        <div className="mt-[28px] flex items-center gap-[36px]">
          <ImagePlaceholder src={images.arjunAvatar} label="Photo" compact className="size-[150px] rounded-full" />
          <div>
            <h2 className="text-[104px] leading-[1] tracking-[-0.045em]">Meet Arjun.</h2>
            <p className="mt-[8px] text-[28px] text-muted">Final-year Computer Science student</p>
          </div>
        </div>

        <div className="mt-auto grid grid-cols-3 gap-[40px]">
          {stats.map((s) => (
            <div key={s.label} className="border-b border-black/15 pb-[18px]">
              <span className="text-[150px] leading-[0.9] tracking-[-0.05em]">{s.value}</span>
              <p className="mt-[16px] text-[24px] text-muted">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-[32px]">
          <ChipRow items={['Java', 'Spring Boot', 'SQL', 'Git']} />
        </div>
      </div>

      <div className="flex flex-col gap-[28px]">
        <div className="rounded-[20px] bg-brand p-[36px] text-white">
          <Eyebrow className="text-[18px]">Target role</Eyebrow>
          <p className="mt-[10px] text-[48px] leading-none tracking-[-0.025em]">Junior Java Developer</p>
        </div>
        <div className="border-t border-black/15 pt-[24px]">
          <Eyebrow className="text-[18px]">His resume says</Eyebrow>
          <blockquote className="mt-[12px] text-[40px] leading-[1.15] tracking-[-0.02em]">
            “Developed a website using Java.”
          </blockquote>
        </div>
        <div className="border-t border-black/15 pt-[24px]">
          <Eyebrow className="text-[18px]">But the job description emphasizes</Eyebrow>
          <div className="mt-[16px]">
            <ChipRow items={jdSkills} variant="outline" />
          </div>
        </div>
        <div className="mt-auto rounded-[20px] bg-ink p-[36px] text-white">
          <Eyebrow className="text-[18px]">The problem</Eyebrow>
          <p className="mt-[10px] text-[30px] leading-[1.25]">
            Arjun has relevant experience. But his resume isn't communicating it effectively.
          </p>
        </div>
      </div>
    </Slide>
  )
}
