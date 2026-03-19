import { SocialIcon } from '@/components/ui/social-icon'
import { navigation } from '@/data/navigation'
import { Github, Globe, Linkedin } from 'lucide-react'
import Image from 'next/image'

export function SiteFooter() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='relative overflow-hidden text-[#ecd6a8]'>
			<div className='pointer-events-none absolute inset-0'>
				<Image
					src='/images/footer.avif'
					alt=''
					fill
					priority={false}
					className='object-cover object-center'
				/>
			</div>

			<div className='relative mx-auto max-w-[1400px] px-6 pb-14 pt-16 lg:px-14'>
				<div className='grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_1.2fr]'>
					<div className='flex items-start'>
						<Image
							src='/logo.avif'
							alt='Caeser Chocolate logo'
							width={220}
							height={120}
							className='h-auto w-[180px] sm:w-[220px]'
							priority={false}
						/>
					</div>

					<div>
						<h3 className='text-lg font-medium text-[#e1bd79]'>Explore</h3>
						<ul className='mt-4 space-y-3 text-[1rem] text-[#efdfbe]'>
							{navigation.map((item) => (
								<li key={item.href}>
									<a
										href={item.href}
										className='relative transition-all duration-300 hover:text-[#fff0c2] hover:drop-shadow-[0_0_8px_rgba(240,202,121,0.55)] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#f0ca79] after:transition-all after:duration-300 hover:after:w-full'
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className='text-lg font-medium text-[#e1bd79]'>Social Media</h3>
						<div className='mt-4 flex items-center gap-3'>
							<SocialIcon label='GitHub' href='https://github.com/caeserlondon'>
								<Github className='h-[18px] w-[18px]' strokeWidth={2.1} />
							</SocialIcon>

							<SocialIcon
								label='LinkedIn'
								href='https://www.linkedin.com/in/caeser-ibrahim'
							>
								<Linkedin className='h-[18px] w-[18px]' strokeWidth={2.1} />
							</SocialIcon>

							<SocialIcon
								label='Portfolio'
								href='https://caeser-ibrahim.vercel.app'
							>
								<Globe className='h-[18px] w-[18px]' strokeWidth={2.1} />
							</SocialIcon>
						</div>
					</div>

					<div>
						<h3 className='text-lg font-medium text-[#e1bd79]'>
							Subscribe to our newsletter
						</h3>

						<form className='mt-4 flex max-w-[360px] items-stretch overflow-hidden rounded-md border border-[#9e7440] bg-[rgba(30,14,9,0.78)]'>
							<label htmlFor='email' className='sr-only'>
								Email address
							</label>

							<input
								id='email'
								name='email'
								type='email'
								placeholder='Enter your email'
								autoComplete='email'
								className='w-full bg-transparent px-4 py-3 text-[#f5e7c4] outline-none placeholder:text-[#c4aa7c]'
							/>

							<button
								type='submit'
								className='border-l border-[#9b6f35] bg-[linear-gradient(180deg,#e1b866_0%,#c88f3f_100%)] px-5 text-[#2b160d] transition hover:brightness-105'
							>
								→
							</button>
						</form>

						<p className='mt-3 text-sm text-[#cdb387]'>
							Subscribe for collection releases and chocolate notes.
						</p>
					</div>
				</div>

				<div className='mt-10 border-t border-[#7e5a31]/40 pt-5 text-center text-sm text-[#d7bb8a]'>
					Copyright © {currentYear} Caeser Chocolate
				</div>
			</div>
		</footer>
	)
}
