import { Slide } from '../components/Slide'
import { Eyebrow } from '../components/Eyebrow'

export default function Intro() {
  return (
    <Slide theme="blue" className="flex flex-col">
      <Eyebrow>Welcome To DetailResume</Eyebrow>
      <h1 className="mt-[36px] text-[190px] leading-[0.92] tracking-[-0.05em]">Hi, Everyone!!</h1>

      <div className="mt-auto grid grid-cols-[1fr_1.2fr] gap-[96px] border-t border-white/25 pt-[40px]">
        <div>
          <Eyebrow className="text-[18px]">Why am I talking about resumes?</Eyebrow>
          <p className="mt-[14px] text-[24px] leading-[1.45] text-white/80">
            I built DetailResume after seeing how difficult it is for students and early-career professionals to
            understand whether their resume actually matches the jobs they're applying for.
          </p>
        </div>
        <p className="text-[48px] leading-[1.12] tracking-[-0.02em]">
          Today, I'll show you what happens{' '}
          <span className="underline decoration-white/40 underline-offset-8">before</span> a recruiter reads your
          resume.
        </p>
      </div>
    </Slide>
  )
}
