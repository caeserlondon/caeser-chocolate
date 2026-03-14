import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { BrandStory } from '@/components/sections/brand-story-section'
import { FeaturedCollectionSection } from '@/components/sections/featured-collection-section'
import { HeroSection } from '@/components/sections/hero-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { SectionDivider } from '@/components/ui/section-divider'
import { LUXURY_BACKGROUND_CLASS } from '@/lib/constants'

export default function Home() {
	return (
		<main className='min-h-screen bg-[#140704] text-[#f5e7c4] antialiased'>
			<div className={LUXURY_BACKGROUND_CLASS}>
				<SiteHeader />
				<HeroSection />
				<FeaturedCollectionSection />
				<BrandStory />
				<SectionDivider className='mx-auto mt-2 max-w-[1400px] px-6 lg:px-14' />
				<TestimonialsSection />
			</div>
			<SiteFooter />
		</main>
	)
}

// import { Cormorant_Garamond, Inter } from 'next/font/google'
// import Image from 'next/image'

// const serif = Cormorant_Garamond({
// 	subsets: ['latin'],
// 	weight: ['400', '500', '600', '700'],
// })

// const sans = Inter({
// 	subsets: ['latin'],
// 	weight: ['400', '500', '600'],
// })

// const navItems = [
// 	{ label: 'Collection', href: '#collection' },
// 	{ label: 'Gifting', href: '#gifting' },
// 	{ label: 'Our Story', href: '#our-story' },
// ]

// const products = [
// 	{
// 		name: 'Midnight Truffle',
// 		description:
// 			'Truffle chocolate with deep cocoa notes and a smooth, luxurious finish.',
// 		price: '$16.90',
// 		image: '/featured-truffle.avif',
// 	},
// 	{
// 		name: 'Sicilian Sea Salt',
// 		description:
// 			'Precision-crafted chocolate balanced with sea salt and a delicate crunch.',
// 		price: '$15.90',
// 		image: '/featured-sea-salt.avif',
// 	},
// 	{
// 		name: 'Golden Honey & Almond',
// 		description:
// 			'Roasted almonds and golden honey layered into a refined chocolate bar.',
// 		price: '$15.00',
// 		image: '/featured-honey-almond.avif',
// 	},
// ]

// const testimonials = [
// 	{
// 		quote:
// 			'The texture, the aroma, the finish — everything feels beautifully considered. This is chocolate at its most elegant.',
// 		name: 'Amelia Laurent',
// 		title: 'Private Gifting Client',
// 	},
// 	{
// 		quote:
// 			'I ordered a gift box for a special dinner and it looked absolutely exquisite. Everyone asked where it was from.',
// 		name: 'Julian Moreau',
// 		title: 'Connoisseur Collection Member',
// 	},
// 	{
// 		quote:
// 			'Rich, refined, and unforgettable. Caeser Chocolate feels less like a treat and more like a luxury experience.',
// 		name: 'Sophia Bennett',
// 		title: 'Longstanding Customer',
// 	},
// ]

// export default function Home() {
// 	return (
// 		<main
// 			className={`${sans.className} min-h-screen bg-[#140704] text-[#f5e7c4] antialiased`}
// 		>
// 			<div className='relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(111,50,18,0.28),_transparent_34%),linear-gradient(180deg,#2a110a_0%,#1a0905_28%,#260d08_65%,#1b0906_100%)]'>
// 				<TopGlow />
// 				<SiteHeader />
// 				<HeroSection />
// 				<FeaturedCollection />
// 				<BrandStory />
// 				<SectionDivider className='mx-auto mt-2 max-w-[1400px] px-6 lg:px-14' />
// 			</div>
// 			<TestimonialsSection />
// 			<GiftingSection />
// 			<SiteFooter />
// 		</main>
// 	)
// }

// function HeroSection() {
// 	return (
// 		<section
// 			id='top'
// 			className='relative min-h-[620px] overflow-hidden md:min-h-[720px] lg:min-h-[820px]'
// 		>
// 			<Image
// 				src='/hero-chocolate-bar.avif'
// 				alt='Luxury chocolate hero'
// 				fill
// 				priority
// 				className='object-cover object-center'
// 			/>

// 			<div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(20,7,4,0.20)_0%,rgba(20,7,4,0.28)_35%,rgba(20,7,4,0.36)_100%)]' />

// 			<div className='relative z-10 mx-auto flex min-h-[620px] max-w-[1400px] items-center justify-center px-6 text-center md:min-h-[720px] lg:min-h-[820px]'>
// 				<div className='max-w-[900px]'>
// 					<h1
// 						className={`${serif.className} text-[3.4rem] font-medium leading-[0.92] text-[#e4bc74] drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:text-[4.6rem] lg:text-[5.8rem]`}
// 					>
// 						Indulgence in its most refined form.
// 					</h1>

// 					<p className='mx-auto mt-6 max-w-[720px] text-[1rem] leading-7 text-[#f7e8c8] sm:text-[1.08rem] lg:text-[1.15rem]'>
// 						Handcrafted with the world&apos;s finest cocoa and a commitment to
// 						artisanal excellence. Experience the luxury of pure, unadulterated
// 						chocolate.
// 					</p>

// 					<a
// 						href='#collection'
// 						className='mt-8 inline-flex items-center justify-center rounded-md border border-[#bb8d45] bg-[linear-gradient(180deg,#e1b866_0%,#c08b39_100%)] px-8 py-4 text-base font-semibold text-[#2f180d] shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:brightness-105'
// 					>
// 						Explore the Collection
// 					</a>
// 				</div>
// 			</div>
// 		</section>
// 	)
// }

// function FeaturedCollection() {
// 	return (
// 		<section id='collection' className='relative px-6 pb-24 pt-10 lg:px-14'>
// 			<div className='mx-auto max-w-[1400px]'>
// 				<h2
// 					className={`${serif.className} text-center text-[2.7rem] font-medium text-[#e4bc74] sm:text-[3.3rem]`}
// 				>
// 					Featured Collection
// 				</h2>

// 				<div className='mt-14 grid grid-cols-1 gap-8 md:grid-cols-3'>
// 					{products.map((product) => (
// 						<ProductCard key={product.name} product={product} />
// 					))}
// 				</div>

// 				<SectionDivider className='mt-16' />
// 			</div>
// 		</section>
// 	)
// }

// function ProductCard({
// 	product,
// }: {
// 	product: {
// 		name: string
// 		description: string
// 		price: string
// 		image: string
// 	}
// }) {
// 	return (
// 		<article className='group relative overflow-hidden border border-[#92662f] bg-[linear-gradient(180deg,rgba(57,20,12,0.65),rgba(30,10,6,0.58))] px-5 pb-6 pt-8 shadow-[0_24px_60px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-[#b88c4d]'>
// 			<div className='absolute inset-x-0 top-4 flex justify-center'>
// 				<MiniFlourish />
// 			</div>

// 			<div className='relative mx-auto mt-5 flex h-[360px] w-full max-w-[250px] items-end justify-center'>
// 				<Image
// 					src={product.image}
// 					alt={product.name}
// 					width={500}
// 					height={700}
// 					className='h-full w-auto object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)]'
// 				/>
// 			</div>

// 			<div className='mx-auto mt-5 max-w-[260px] text-center'>
// 				<h3
// 					className={`${serif.className} text-[1.9rem] leading-none text-[#e5bf79]`}
// 				>
// 					{product.name}
// 				</h3>
// 				<p className='mt-3 text-sm leading-6 text-[#eadbb8]/90'>
// 					{product.description}
// 				</p>
// 				<p className='mt-3 text-lg font-semibold text-[#efc87d]'>
// 					{product.price}
// 				</p>
// 			</div>
// 		</article>
// 	)
// }

// function BrandStory() {
// 	return (
// 		<section id='our-story' className='relative px-6 pb-28 pt-10 lg:px-14'>
// 			<div className='mx-auto max-w-[1400px]'>
// 				<SectionDivider className='mb-14' />

// 				<div className='grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]'>
// 					<div className='relative mx-auto w-full max-w-[660px] border border-[#8f6634] p-5 shadow-[0_24px_60px_rgba(0,0,0,0.28)]'>
// 						<CornerFrame className='left-2 top-2' />
// 						<CornerFrame className='right-2 top-2 rotate-90' />
// 						<CornerFrame className='bottom-2 left-2 -rotate-90' />
// 						<CornerFrame className='bottom-2 right-2 rotate-180' />

// 						<Image
// 							src='/brand-story-gift.avif'
// 							alt='Gift box with cocoa beans'
// 							width={1200}
// 							height={900}
// 							className='h-auto w-full object-cover'
// 						/>
// 					</div>

// 					<div className='mx-auto max-w-[530px] text-center lg:text-left'>
// 						<h2
// 							className={`${serif.className} text-[3.2rem] leading-none text-[#e4bc74] sm:text-[3.6rem]`}
// 						>
// 							Brand Story
// 						</h2>

// 						<p className='mt-6 text-[1.03rem] leading-8 text-[#efe3c6] sm:text-[1.07rem]'>
// 							Our heritage is steeped in the art of fine chocolate making,
// 							dating back generations. We source only the rarest cocoa beans and
// 							blend them with passion and precision to create confections that
// 							redefine luxury.
// 						</p>

// 						<p
// 							className={`${serif.className} mt-12 text-[2.1rem] italic tracking-[0.01em] text-[#d7ac61] sm:text-[2.5rem]`}
// 						>
// 							The Caeser Family
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	)
// }

// function GiftingSection() {
// 	return (
// 		<section
// 			id='gifting'
// 			className='relative overflow-hidden bg-[#f3efea] px-6 py-20 text-[#2a180f] lg:px-14'
// 		>
// 			<div className='mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_0.85fr]'>
// 				<div className='mx-auto w-full max-w-[760px]'>
// 					<Image
// 						src='/gifting-box-large.avif'
// 						alt='Caeser Chocolate gift box'
// 						width={1400}
// 						height={820}
// 						className='h-auto w-full object-contain drop-shadow-[0_20px_34px_rgba(0,0,0,0.22)]'
// 					/>
// 				</div>

// 				<div className='mx-auto max-w-[430px] text-center lg:text-left'>
// 					<h2
// 						className={`${serif.className} text-[3rem] leading-[0.95] text-[#2a170e] sm:text-[3.7rem]`}
// 					>
// 						Curated Gifting for Connoisseurs.
// 					</h2>

// 					<p className='mt-5 text-[1.05rem] leading-8 text-[#4a352a] sm:text-[1.1rem]'>
// 						Give the gift of extraordinary taste. Our luxury gift boxes are
// 						elegantly packaged and ready to impress.
// 					</p>

// 					<a
// 						href='#footer'
// 						className='mt-8 inline-flex items-center justify-center rounded-md border border-[#c5974b] bg-[linear-gradient(180deg,#e1b866_0%,#c88f3f_100%)] px-7 py-4 text-base font-semibold text-[#2e170d] shadow-[0_10px_24px_rgba(0,0,0,0.12)] transition hover:brightness-105'
// 					>
// 						Shop Gifts
// 					</a>
// 				</div>
// 			</div>
// 		</section>
// 	)
// }

// function SiteFooter() {
// 	return (
// 		<footer
// 			id='footer'
// 			className='bg-[linear-gradient(180deg,#2a110a_0%,#1a0905_100%)] px-6 py-16 text-[#ecd6a8] lg:px-14'
// 		>
// 			<div className='mx-auto max-w-[1400px]'>
// 				<div className='grid grid-cols-1 gap-14 md:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr]'>
// 					<div>
// 						<p
// 							className={`${serif.className} text-[3.1rem] leading-[0.9] text-[#e3bb74] sm:text-[3.5rem]`}
// 						>
// 							Caeser
// 							<br />
// 							Chocolate
// 						</p>
// 					</div>

// 					<div>
// 						<h3 className='text-lg font-medium text-[#e1bd79]'>
// 							Customer Service
// 						</h3>
// 						<ul className='mt-4 space-y-3 text-[1.05rem] text-[#efdfbe]'>
// 							<li>
// 								<a href='#' className='transition hover:text-[#f3d793]'>
// 									About Us
// 								</a>
// 							</li>
// 							<li>
// 								<a href='#' className='transition hover:text-[#f3d793]'>
// 									Contact
// 								</a>
// 							</li>
// 						</ul>
// 					</div>

// 					<div>
// 						<h3 className='text-lg font-medium text-[#e1bd79]'>Social Media</h3>
// 						<div className='mt-4 flex items-center gap-3'>
// 							<SocialIcon label='Instagram'>IG</SocialIcon>
// 							<SocialIcon label='Facebook'>f</SocialIcon>
// 							<SocialIcon label='Pinterest'>P</SocialIcon>
// 						</div>
// 					</div>

// 					<div>
// 						<h3 className='text-lg font-medium text-[#e1bd79]'>
// 							Subscribe a newsletter
// 						</h3>
// 						<form className='mt-4 flex max-w-[360px] items-stretch overflow-hidden rounded-md border border-[#9b6f35] bg-[#251009]'>
// 							<input
// 								type='email'
// 								placeholder='Enter your email'
// 								className='w-full bg-transparent px-4 py-3 text-[#f5e7c4] outline-none placeholder:text-[#c4aa7c]'
// 							/>
// 							<button
// 								type='submit'
// 								className='border-l border-[#9b6f35] bg-[linear-gradient(180deg,#e1b866_0%,#c88f3f_100%)] px-5 text-[#2b160d]'
// 							>
// 								→
// 							</button>
// 						</form>
// 						<p className='mt-3 text-sm text-[#cdb387]'>
// 							Subscribe to our latest collection and cocoa notes.
// 						</p>
// 					</div>
// 				</div>

// 				<div className='mt-12 border-t border-[#8d6634]/50 pt-6 text-center text-sm text-[#d7bb8a]'>
// 					Copyright © 2025 Caeser Chocolate
// 				</div>
// 			</div>
// 		</footer>
// 	)
// }

// function SectionDivider({ className = '' }: { className?: string }) {
// 	return (
// 		<div className={`flex items-center gap-6 ${className}`}>
// 			<span className='h-px flex-1 bg-[#8f6634]' />
// 			<MiniDivider />
// 			<span className='h-px flex-1 bg-[#8f6634]' />
// 		</div>
// 	)
// }

// function SocialIcon({
// 	children,
// 	label,
// }: {
// 	children: React.ReactNode
// 	label: string
// }) {
// 	return (
// 		<a
// 			href='#'
// 			aria-label={label}
// 			className='flex h-10 w-10 items-center justify-center rounded-full border border-[#aa7b3e] text-sm font-semibold text-[#f0cf8c] transition hover:border-[#e2ba70] hover:text-[#f8ddb0]'
// 		>
// 			{children}
// 		</a>
// 	)
// }

// function TopGlow() {
// 	return (
// 		<div className='pointer-events-none absolute inset-x-0 top-0 h-[260px] bg-[radial-gradient(circle_at_top,rgba(255,183,98,0.12),transparent_55%)]' />
// 	)
// }

// function HeroCorner({ className = '' }: { className?: string }) {
// 	return (
// 		<div
// 			className={`pointer-events-none absolute h-[320px] w-[320px] ${className}`}
// 		>
// 			<svg viewBox='0 0 320 320' className='h-full w-full text-[#c89c52]'>
// 				<path
// 					d='M0 318C80 318 116 277 122 214C128 151 92 112 33 103C96 86 138 45 152 0'
// 					fill='none'
// 					stroke='currentColor'
// 					strokeWidth='2'
// 				/>
// 				<path
// 					d='M22 318C98 308 131 268 137 212C144 144 108 104 50 96C110 82 154 40 170 4'
// 					fill='none'
// 					stroke='currentColor'
// 					strokeWidth='1.6'
// 				/>
// 				<path
// 					d='M50 305C116 289 146 254 151 205C157 151 129 116 83 106'
// 					fill='none'
// 					stroke='currentColor'
// 					strokeWidth='1.4'
// 				/>
// 				<circle cx='101' cy='173' r='4' fill='currentColor' />
// 				<circle cx='129' cy='144' r='4' fill='currentColor' />
// 				<circle cx='67' cy='221' r='3' fill='currentColor' />
// 				<path
// 					d='M116 178C144 188 154 207 150 235C127 229 114 214 116 178Z'
// 					fill='none'
// 					stroke='currentColor'
// 					strokeWidth='1.5'
// 				/>
// 				<path
// 					d='M142 145C164 155 173 171 169 195C149 188 140 174 142 145Z'
// 					fill='none'
// 					stroke='currentColor'
// 					strokeWidth='1.5'
// 				/>
// 				<path
// 					d='M80 220C104 229 112 243 109 264C88 258 78 245 80 220Z'
// 					fill='none'
// 					stroke='currentColor'
// 					strokeWidth='1.5'
// 				/>
// 			</svg>
// 		</div>
// 	)
// }

// function MiniFlourish() {
// 	return (
// 		<svg viewBox='0 0 160 38' className='h-8 w-40 text-[#b98d4f]'>
// 			<path
// 				d='M3 24H52M108 24H157'
// 				stroke='currentColor'
// 				strokeWidth='1.3'
// 				fill='none'
// 			/>
// 			<path
// 				d='M80 6C85 15 94 20 106 22C95 24 86 29 80 38C75 29 66 24 54 22C66 20 75 15 80 6Z'
// 				fill='none'
// 				stroke='currentColor'
// 				strokeWidth='1.3'
// 			/>
// 			<path
// 				d='M74 16C76 20 78 22 80 24C82 22 84 20 86 16'
// 				stroke='currentColor'
// 				strokeWidth='1.3'
// 				fill='none'
// 			/>
// 		</svg>
// 	)
// }

// function MiniDivider() {
// 	return (
// 		<svg viewBox='0 0 140 30' className='h-7 w-[140px] text-[#b98d4f]'>
// 			<path d='M0 15H52M88 15H140' stroke='currentColor' strokeWidth='1.5' />
// 			<path
// 				d='M70 4C74 10 80 14 88 15C80 16 74 20 70 26C66 20 60 16 52 15C60 14 66 10 70 4Z'
// 				fill='none'
// 				stroke='currentColor'
// 				strokeWidth='1.4'
// 			/>
// 		</svg>
// 	)
// }

// function CornerFrame({ className = '' }: { className?: string }) {
// 	return (
// 		<div className={`absolute h-9 w-9 text-[#bb8e52] ${className}`}>
// 			<svg viewBox='0 0 36 36' className='h-full w-full'>
// 				<path
// 					d='M2 16V2H16'
// 					fill='none'
// 					stroke='currentColor'
// 					strokeWidth='1.6'
// 				/>
// 				<path
// 					d='M7 7C10 10 13 11 18 11'
// 					fill='none'
// 					stroke='currentColor'
// 					strokeWidth='1.2'
// 				/>
// 				<circle cx='11' cy='11' r='1.6' fill='currentColor' />
// 			</svg>
// 		</div>
// 	)
// }

// function TestimonialsSection() {
// 	return (
// 		<section className='relative px-6 pb-24 pt-10 lg:px-14'>
// 			<div className='mx-auto max-w-[1400px]'>
// 				<SectionDivider className='mb-14' />

// 				<div className='mx-auto max-w-[900px] text-center'>
// 					<h2
// 						className={`${serif.className} text-[2.9rem] font-medium text-[#e4bc74] sm:text-[3.5rem]`}
// 					>
// 						Words from Our Clients
// 					</h2>
// 					<p className='mx-auto mt-4 max-w-[700px] text-[1.02rem] leading-7 text-[#efe3c6]'>
// 						A small selection of reflections from those who have shared, gifted,
// 						and savoured our most refined creations.
// 					</p>
// 				</div>

// 				<div className='mt-14 grid grid-cols-1 gap-8 md:grid-cols-3'>
// 					{testimonials.map((item) => (
// 						<article
// 							key={item.name}
// 							className='rounded-[22px] border border-[#8f6634] bg-[linear-gradient(180deg,rgba(57,20,12,0.58),rgba(30,10,6,0.52))] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.22)]'
// 						>
// 							<p
// 								className={`${serif.className} text-[3rem] leading-none text-[#d8ad63]`}
// 							>
// 								“
// 							</p>

// 							<p className='mt-4 text-[1rem] leading-8 text-[#f0e2c4]'>
// 								{item.quote}
// 							</p>

// 							<div className='mt-8 border-t border-[#8f6634]/60 pt-5'>
// 								<p
// 									className={`${serif.className} text-[1.6rem] text-[#e4bc74]`}
// 								>
// 									{item.name}
// 								</p>
// 								<p className='mt-1 text-sm tracking-[0.03em] text-[#cdb387]'>
// 									{item.title}
// 								</p>
// 							</div>
// 						</article>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	)
// }
