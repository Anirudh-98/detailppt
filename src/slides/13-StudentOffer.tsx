import { Slide } from '../components/Slide'
import { Eyebrow } from '../components/Eyebrow'
import { deck } from '../deck.config'

const plans = [
  {
    name: 'Starter',
    was: '₹49',
    now: '₹44.10',
    features: ['Full AI Resume Rewrite', '3 Resume Generations', 'PDF & DOCX Download'],
    featured: false,
  },
  {
    name: 'Pro',
    was: '₹99',
    now: '₹89.10',
    features: ['Everything in Starter', 'Career Gap Reframing', 'High-Seniority Phrasing'],
    featured: true,
  },
]

export default function StudentOffer() {
  return (
    <Slide theme="white" className="grid grid-cols-[1fr_1.2fr] gap-[96px]">
      <div className="flex flex-col">
        <Eyebrow className="text-brand opacity-100">Marwadi University exclusive</Eyebrow>
        <h2 className="mt-[28px] text-[96px] leading-[1] tracking-[-0.045em]">
          10% off for Marwadi University students<span className="text-brand">.</span>
        </h2>
        <p className="mt-[28px] text-[30px] text-muted">A special offer for every student in this room.</p>

        <p className="mt-auto text-[44px] leading-[1.1] tracking-[-0.025em]">
          Your resume. Your career. <span className="text-brand">Start today.</span>
        </p>
        <div className="mt-[32px] flex items-center justify-between rounded-[20px] border-2 border-dashed border-brand bg-brand/[0.06] px-[36px] py-[28px]">
          <div>
            <p className="text-[18px] font-medium uppercase tracking-[0.16em] text-muted">Use coupon code</p>
            <p className="mt-[8px] font-mono text-[64px] font-semibold leading-none tracking-[0.06em] text-brand">
              {deck.couponCode}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[18px] font-medium uppercase leading-snug tracking-[0.14em]">
              At checkout for
              <br />
              your 10% discount
            </p>
            <p className="mt-[10px] text-[30px] tracking-[-0.02em] text-brand">detailresume.com</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[28px]">
        {plans.map((p) => (
          <article
            key={p.name}
            className={`relative flex flex-col rounded-[28px] p-[44px] ${
              p.featured ? 'bg-brand text-white' : 'border border-black/10 bg-white'
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[40px] font-medium tracking-[-0.02em]">{p.name}</h3>
              <span
                className={`rounded-full px-[16px] py-[6px] text-[18px] font-medium ${
                  p.featured ? 'bg-white text-brand' : 'bg-brand text-white'
                }`}
              >
                10% OFF
              </span>
            </div>

            <p className={`mt-[48px] text-[34px] line-through ${p.featured ? 'text-white/60' : 'text-muted'}`}>
              {p.was}
            </p>
            <p className={`mt-[4px] text-[20px] uppercase tracking-[0.14em] ${p.featured ? 'text-white/70' : 'text-muted'}`}>
              Now
            </p>
            <p className="mt-[6px] text-[104px] leading-none tracking-[-0.05em]">{p.now}</p>

            <ul className={`mt-auto border-t pt-[28px] ${p.featured ? 'border-white/30' : 'border-black/10'}`}>
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-[16px] py-[12px] text-[26px] leading-tight">
                  <svg
                    viewBox="0 0 24 24"
                    className={`size-[28px] shrink-0 ${p.featured ? 'text-white' : 'text-brand'}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.4}
                  >
                    <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Slide>
  )
}
