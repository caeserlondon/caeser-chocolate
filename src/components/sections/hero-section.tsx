import { serif } from '@/lib/fonts'
import Image from 'next/image'

export function HeroSection() {
	return (
		<section
			id='top'
			className='relative min-h-[620px] overflow-hidden md:min-h-[720px] lg:min-h-[820px]'
		>
			<Image
				src='/images/hero-chocolate-bar.avif'
				alt='Luxury chocolate hero'
				fill
				priority
				className='object-cover object-center'
			/>

			<div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(20,7,4,0.20)_0%,rgba(20,7,4,0.28)_35%,rgba(20,7,4,0.36)_100%)]' />

			<div className='relative z-10 mx-auto flex min-h-[620px] max-w-[1400px] items-center justify-center px-6 text-center md:min-h-[720px] lg:min-h-[820px]'>
				<div className='max-w-[900px]'>
					<h1
						className={`${serif.className} text-[3.4rem] font-medium leading-[0.92] text-[#e4bc74] drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:text-[4.6rem] lg:text-[5.8rem]`}
					>
						Indulgence in its most refined form.
					</h1>

					<p className='mx-auto mt-6 max-w-[720px] text-[1rem] leading-7 text-[#f7e8c8] sm:text-[1.08rem] lg:text-[1.15rem]'>
						Handcrafted with the world&apos;s finest cocoa and a commitment to
						artisanal excellence. Experience the luxury of pure, unadulterated
						chocolate.
					</p>

					<a
						href='#collection'
						className='mt-8 inline-flex items-center justify-center rounded-md border border-[#bb8d45] bg-[linear-gradient(180deg,#e1b866_0%,#c08b39_100%)] px-8 py-4 text-base font-semibold text-[#2f180d] shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:brightness-105'
					>
						Explore the Collection
					</a>
				</div>
			</div>
		</section>
	)
}
