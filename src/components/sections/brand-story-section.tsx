import { serif } from '@/lib/fonts'
import Image from 'next/image'
import { CornerFrame } from '../ui/corner-frame'
import { SectionDivider } from '../ui/section-divider'

export function BrandStory() {
	return (
		<section id='our-story' className='relative px-6 pb-28 pt-10 lg:px-14'>
			<div className='mx-auto max-w-[1400px]'>
				<SectionDivider className='mb-14' />

				<div className='grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]'>
					<div className='relative mx-auto w-full max-w-[660px] border border-[#8f6634] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.28)]'>
						<CornerFrame className='left-2 top-2' />
						<CornerFrame className='right-2 top-2 rotate-90' />
						<CornerFrame className='bottom-2 left-2 -rotate-90' />
						<CornerFrame className='bottom-2 right-2 rotate-180' />

						<Image
							src='/images/brand-story-gift.avif'
							alt='Gift box with cocoa beans'
							width={1200}
							height={900}
							className='h-auto w-full object-cover'
						/>
					</div>

					<div className='mx-auto max-w-[530px] text-center lg:text-left'>
						<h2
							className={`${serif.className} text-[3.2rem] leading-none text-[#e4bc74] sm:text-[3.6rem]`}
						>
							Brand Story
						</h2>

						<p className='mt-6 text-[1.03rem] leading-8 text-[#efe3c6] sm:text-[1.07rem]'>
							Our heritage is steeped in the art of fine chocolate making,
							dating back generations. We source only the rarest cocoa beans and
							blend them with passion and precision to create confections that
							redefine luxury.
						</p>

						<h3
							className={`${serif.className} mt-12 text-[2.1rem] italic tracking-[0.01em] text-[#d7ac61] sm:text-[2.5rem]`}
						>
							Caeser Ibrahim
						</h3>
					</div>
				</div>
			</div>
		</section>
	)
}
