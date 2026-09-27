import { Slide } from '../components/Slide'
import { Eyebrow } from '../components/Eyebrow'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { images } from '../deck.config'

const steps = ['Upload / paste the resume', 'Add the target job description', 'Analyze the match', 'Review']
const review = ['Match score', 'Missing keywords', 'Weak sections', 'Improvement suggestions']

export default function LiveDemo() {
  return (
    <Slide theme="blue" className="grid grid-cols-[1fr_1.1fr] gap-[96px]">
      <div className="flex flex-col">
        <Eyebrow>Live demo</Eyebrow>
        <h2 className="mt-[28px] text-[132px] leading-[0.95] tracking-[-0.045em]">Let's test it.</h2>
        <p className="mt-[24px] text-[30px] text-white/75">One resume · One job description · One analysis</p>

        <ol className="mt-auto">
          {steps.map((s, i) => (
            <li key={s} className="grid grid-cols-[150px_1fr] items-baseline border-t border-white/25 py-[20px]">
              <span className="text-[20px] uppercase tracking-[0.14em] text-white/60">
                Step {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <span className="text-[36px] leading-none tracking-[-0.02em]">{s}</span>
                {i === steps.length - 1 && (
                  <div className="mt-[14px] flex flex-wrap gap-[10px]">
                    {review.map((r) => (
                      <span key={r} className="rounded-full bg-white/15 px-[18px] py-[6px] text-[20px]">
                        {r}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex flex-col justify-center">
        <div className="overflow-hidden rounded-[24px] bg-white/10 shadow-[0_40px_80px_-30px_rgba(0,20,90,0.6)] ring-1 ring-white/25">
          <div className="flex items-center gap-[10px] border-b border-white/20 px-[24px] py-[18px]">
            <span className="size-[14px] rounded-full bg-white/40" />
            <span className="size-[14px] rounded-full bg-white/40" />
            <span className="size-[14px] rounded-full bg-white/40" />
            <span className="ml-[16px] text-[18px] text-white/60">detailresume.com</span>
          </div>
          <ImagePlaceholder
            src={images.demoScreenshot}
            label="Demo screenshot"
            tone="dark"
            className="block aspect-[1907/911] w-full"
          />
        </div>
        <p className="mt-[48px] text-[40px] leading-[1.15] tracking-[-0.02em]">
          Let's see what the resume is actually saying.
        </p>
      </div>
    </Slide>
  )
}
