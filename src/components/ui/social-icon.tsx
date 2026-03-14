import type { ReactNode } from 'react'

type SocialIconProps = {
	label: string
	children: ReactNode
	href: string
}

export function SocialIcon({ label, children, href }: SocialIconProps) {
	return (
		<a
			href={href}
			aria-label={label}
			target='_blank'
			rel='noreferrer noopener'
			className='group relative flex h-11 w-11 items-center justify-center rounded-full border border-[#aa7b3e] bg-[rgba(28,12,8,0.38)] text-[#f0cf8c] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#f0ca79] hover:text-[#fff3cb] hover:shadow-[0_0_26px_rgba(240,202,121,0.55),0_0_54px_rgba(240,202,121,0.26)]'
		>
			<span className='pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,226,150,0.42)_0%,rgba(240,202,121,0.22)_38%,transparent_72%)] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100' />
			<span className='relative z-10 flex items-center justify-center'>
				{children}
			</span>
		</a>
	)
}
