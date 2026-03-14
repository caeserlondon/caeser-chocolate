import { TestimonialCard } from '@/components/cards/testimonial-card'
import { testimonials } from '@/data/testimonials'
import { serif } from '@/lib/fonts'
import Image from 'next/image'

export function TestimonialsSection() {
	return (
		<section id='testimonials' className='relative px-6 pb-14 pt-8 lg:px-14'>
			<div className='mx-auto max-w-[1400px]'>
				<div className='mx-auto max-w-[760px] text-center'>
					<h2
						className={`${serif.className} text-[2.2rem] font-medium text-[#e4bc74] sm:text-[2.8rem]`}
					>
						Words from Our Clients
					</h2>

					<p className='mx-auto mt-2 max-w-[600px] text-[0.94rem] leading-6 text-[#efe3c6]'>
						A refined selection of reflections from those who have shared,
						gifted, and savoured our creations.
					</p>
				</div>

				<div className='mt-8 grid grid-cols-1 items-center gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8'>
					<div className='mx-auto w-full max-w-[500px] self-center'>
						<div className='overflow-hidden rounded-[22px] border border-[#8f6634] bg-[linear-gradient(180deg,rgba(57,20,12,0.30),rgba(30,10,6,0.18))] p-3 shadow-[0_18px_34px_rgba(0,0,0,0.22)]'>
							<Image
								src='/images/gifting-box-large.avif'
								alt='Caeser Chocolate luxury gift box'
								width={1400}
								height={900}
								className='h-auto w-full rounded-[16px] object-cover'
							/>
						</div>
					</div>

					<div className='mx-auto flex w-full max-w-[860px] flex-col gap-3'>
						{testimonials.map((testimonial) => (
							<TestimonialCard
								key={testimonial.name}
								testimonial={testimonial}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
