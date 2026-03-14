'use client'

import { ProductCard } from '@/components/cards/product-card'
import { products } from '@/data/products'
import { serif } from '@/lib/fonts'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

function getCardsPerView(width: number) {
	if (width >= 1024) return 3
	if (width >= 768) return 2
	return 1
}

export function FeaturedCollectionSection() {
	const [cardsPerView, setCardsPerView] = useState(3)
	const [activeIndex, setActiveIndex] = useState(0)

	useEffect(() => {
		const handleResize = () => {
			setCardsPerView(getCardsPerView(window.innerWidth))
		}

		handleResize()
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const maxIndex = Math.max(products.length - cardsPerView, 0)
	const currentIndex = Math.min(activeIndex, maxIndex)

	const pages = useMemo(
		() => Array.from({ length: maxIndex + 1 }, (_, index) => index),
		[maxIndex],
	)

	const goPrevious = () => {
		setActiveIndex(Math.max(currentIndex - 1, 0))
	}

	const goNext = () => {
		setActiveIndex(Math.min(currentIndex + 1, maxIndex))
	}

	const translatePercentage = currentIndex * (100 / cardsPerView)

	return (
		<section id='collection' className='relative px-6 pb-24 pt-10 lg:px-14'>
			<div className='mx-auto max-w-[1400px]'>
				<div className='flex flex-col items-center'>
					<h2
						className={`${serif.className} text-center text-[2.7rem] font-medium text-[#e4bc74] sm:text-[3.3rem]`}
					>
						Featured Collection
					</h2>
				</div>

				<div className='mt-12 overflow-hidden'>
					<div
						className='-mx-3 flex transition-transform duration-500 ease-out md:-mx-4'
						style={{ transform: `translateX(-${translatePercentage}%)` }}
					>
						{products.map((product) => (
							<div
								key={product.name}
								className='w-full shrink-0 basis-full px-3 md:basis-1/2 md:px-4 lg:basis-1/3'
							>
								<ProductCard product={product} />
							</div>
						))}
					</div>
				</div>

				<div className='mt-8 flex items-center justify-center gap-4'>
					<button
						type='button'
						onClick={goPrevious}
						disabled={currentIndex === 0}
						aria-label='Previous chocolates'
						className='group relative flex h-11 w-11 items-center justify-center rounded-full border border-[#8f6634] bg-[rgba(28,12,8,0.38)] text-[#f0cf8c] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#f0ca79] hover:text-[#fff3cb] hover:shadow-[0_0_26px_rgba(240,202,121,0.55),0_0_54px_rgba(240,202,121,0.26)] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 disabled:hover:shadow-none'
					>
						<span className='pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,226,150,0.42)_0%,rgba(240,202,121,0.22)_38%,transparent_72%)] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100' />
						<ChevronLeft className='relative z-10 h-5 w-5' />
					</button>

					<div className='flex items-center gap-1'>
						{pages.map((page) => {
							const isActive = currentIndex === page

							return (
								<button
									key={page}
									type='button'
									onClick={() => setActiveIndex(page)}
									aria-label={`Go to collection page ${page + 1}`}
									aria-current={isActive ? 'true' : undefined}
									className='group relative flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 ease-out'
								>
									<span
										className={`relative rounded-full transition-all duration-300 ${
											isActive
												? 'h-2.5 w-8 bg-[#d9af63] shadow-[0_0_16px_rgba(240,202,121,0.45),0_0_34px_rgba(240,202,121,0.18)]'
												: 'h-2.5 w-2.5 bg-[#7d5a31] group-hover:bg-[#d9af63] group-hover:shadow-[0_0_12px_rgba(240,202,121,0.36),0_0_26px_rgba(240,202,121,0.14)]'
										}`}
									>
										<span
											className={`pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,226,150,0.42)_0%,rgba(240,202,121,0.22)_45%,transparent_78%)] blur-sm transition-opacity duration-300 ${
												isActive
													? 'opacity-100'
													: 'opacity-0 group-hover:opacity-100'
											}`}
										/>
									</span>
								</button>
							)
						})}
					</div>

					<button
						type='button'
						onClick={goNext}
						disabled={currentIndex === maxIndex}
						aria-label='Next chocolates'
						className='group relative flex h-11 w-11 items-center justify-center rounded-full border border-[#8f6634] bg-[rgba(28,12,8,0.38)] text-[#f0cf8c] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#f0ca79] hover:text-[#fff3cb] hover:shadow-[0_0_26px_rgba(240,202,121,0.55),0_0_54px_rgba(240,202,121,0.26)] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 disabled:hover:shadow-none'
					>
						<span className='pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,226,150,0.42)_0%,rgba(240,202,121,0.22)_38%,transparent_72%)] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100' />
						<ChevronRight className='relative z-10 h-5 w-5' />
					</button>
				</div>
			</div>
		</section>
	)
}
