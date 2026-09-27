import { Slide } from '../components/Slide'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { Logo } from '../components/Logo'
import { images } from '../deck.config'

export default function Final() {
  return (
    <Slide theme="blue" className="flex items-end justify-between gap-[120px]">
      <div className="flex h-full flex-col">
        <Logo variant="white" className="h-[110px] self-start" />
        <p className="mt-auto text-[26px] font-medium uppercase tracking-[0.2em] text-white/70">Beat the ATS</p>
        <h2 className="mt-[24px] text-[140px] leading-[0.95] tracking-[-0.045em]">
          Beat the ATS with
          <br />
          DetailResume.
        </h2>
        <p className="mt-[36px] text-[36px] text-white/80">Your skills deserve to be understood.</p>
      </div>

      <div className="flex w-[440px] shrink-0 flex-col items-center rounded-[28px] text-center bg-white p-[36px] text-ink">
        <ImagePlaceholder src={images.qrCode} label="QR code" className="size-[368px]" />
        <p className="mt-[28px] text-[22px] font-medium uppercase tracking-[0.16em]">Scan to check your resume</p>
        <p className="mt-[8px] text-[32px] tracking-[-0.02em] text-brand">detailresume.com</p>
      </div>
    </Slide>
  )
}
