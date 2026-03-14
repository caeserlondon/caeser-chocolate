import { serif } from '@/lib/fonts'
import type { Testimonial } from '@/types/content'

type TestimonialCardProps = {
	testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
	return (
		<article className='rounded-[16px] border border-[#8f6634] bg-[linear-gradient(180deg,rgba(57,20,12,0.62),rgba(30,10,6,0.56))] px-5 py-4 shadow-[0_14px_30px_rgba(0,0,0,0.16)] transition duration-300 hover:border-[#b88c4d] lg:px-6 lg:py-4'>
			<p
				className={`${serif.className} text-[1.7rem] leading-none text-[#d8ad63]`}
			>
				“
			</p>

			<p className='mt-1.5 text-[0.92rem] leading-5 text-[#f0e2c4] lg:text-[0.95rem]'>
				{testimonial.quote}
			</p>

			<div className='mt-3 border-t border-[#8f6634]/60 pt-2.5'>
				<p className={`${serif.className} text-[1.2rem] text-[#e4bc74]`}>
					{testimonial.name}
				</p>
				<p className='mt-0.5 text-[11px] tracking-[0.03em] text-[#cdb387]'>
					{testimonial.title}
				</p>
			</div>
		</article>
	)
}
