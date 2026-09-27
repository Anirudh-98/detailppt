import { Slide } from '../components/Slide'
import { Eyebrow } from '../components/Eyebrow'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { images } from '../deck.config'

const pillars = [
  { title: 'Analyze', body: 'Understand how your resume matches a specific job.' },
  { title: 'Identify', body: 'Find missing keywords and weak sections.' },
  { title: 'Improve', body: 'Generate clearer, more relevant resume language.' },
  { title: 'Build', body: 'Create an ATS-friendly resume you can actually use.' },
]

export default function DetailResume() {
  return (
    <Slide theme="navy" className="flex flex-col">
      <div className="grid grid-cols-[minmax(0,1fr)_800px] items-center gap-[96px]">
        <div className="flex flex-col">
          <Eyebrow>So we built DetailResume</Eyebrow>
          <p className="mt-[28px] max-w-[760px] text-[44px] leading-[1.1] tracking-[-0.025em] text-white/70">
            What if you could check your resume before applying?
          </p>
          <h2 className="mt-[48px] text-[128px] font-medium leading-[0.9] tracking-[-0.055em]">DetailResume</h2>
          <p className="mt-[20px] text-[22px] uppercase tracking-[0.14em] text-white/70">
            Built for students and early-career job seekers ·{' '}
            <span className="normal-case tracking-normal text-white">detailresume.com</span>
          </p>
        </div>
        <ImagePlaceholder
          src={images.productScreenshot}
          label="Product screenshot"
          tone="dark"
          className="block aspect-[1907/911] w-full rounded-[20px] ring-1 ring-white/20"
        />
      </div>

      <div className="mt-auto grid grid-cols-4 gap-[36px]">
        {pillars.map((p, i) => (
          <div key={p.title} className="border-t border-white/30 pt-[24px]">
            <span className="text-[20px] text-white/55">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-[8px] text-[48px] leading-none tracking-[-0.03em]">{p.title}</h3>
            <p className="mt-[14px] text-[24px] leading-snug text-white/70">{p.body}</p>
          </div>
        ))}
      </div>
    </Slide>
  )
}
