import { navigation as navItems } from '@/data/navigation'
import { serif } from '@/lib/fonts'
import Image from 'next/image'

export function SiteHeader() {
	return (
		<header className='sticky top-0 z-40 overflow-visible border-b border-[#8f6935]/40 bg-[#1b0805]/85 backdrop-blur-sm'>
			<div className='relative mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-14'>
				<a
					href='#top'
					className='absolute left-6 top-1/2 z-10 flex min-h-11 -translate-y-1/2 items-center gap-2.5 lg:left-14'
				>
					<Image
						src='/logo.avif'
						alt='Caeser Chocolate logo'
						width={180}
						height={90}
						className='h-28 w-28 object-contain'
					/>

					<span
						className={`${serif.className} text-[1.9rem] leading-none text-[#e2bb72] drop-shadow-[0_1px_0_rgba(0,0,0,0.5)] md:text-[2rem]`}
					>
						Caeser Chocolate
					</span>
				</a>

				<div className='ml-auto flex items-center gap-4 md:gap-8'>
					<nav className='hidden items-center gap-2 md:flex'>
						{navItems.map((item) => (
							<a
								key={item.label}
								href={item.href}
								className='relative inline-flex min-h-11 items-center px-4 transition-all duration-300 hover:text-[#fff0c2] hover:drop-shadow-[0_0_8px_rgba(240,202,121,0.55)] after:absolute after:-bottom-1 after:left-4 after:h-px after:w-0 after:bg-[#f0ca79] after:transition-all after:duration-300 hover:after:w-[calc(100%-2rem)]'
							>
								{item.label}
							</a>
						))}
					</nav>

					<a
						href='#collection'
						className='inline-flex min-h-11 items-center rounded-md border border-[#c5984a] bg-[linear-gradient(180deg,rgba(233,191,108,0.08),rgba(185,130,49,0.02))] px-5 text-sm font-medium tracking-[0.02em] text-[#f0cd84] transition hover:border-[#efc46c] hover:bg-[#2c140c]'
					>
						Shop Now
					</a>
				</div>
			</div>
		</header>
	)
}
