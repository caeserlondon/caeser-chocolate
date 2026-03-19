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
