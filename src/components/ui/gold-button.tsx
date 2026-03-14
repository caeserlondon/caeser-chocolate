import type { ReactNode } from 'react'

type GoldButtonProps = {
	href: string
	children: ReactNode
	className?: string
}

export function GoldButton({
	href,
	children,
	className = '',
}: GoldButtonProps) {
	return (
		<a
			href={href}
			className={`inline-flex items-center justify-center rounded-md border border-[#bb8d45] bg-[linear-gradient(180deg,#e1b866_0%,#c08b39_100%)] px-8 py-4 text-base font-semibold text-[#2f180d] shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:brightness-105 ${className}`}
		>
			{children}
		</a>
	)
}
