import { MiniDivider } from './mini-divider'

type SectionDividerProps = {
	className?: string
}

export function SectionDivider({ className = '' }: SectionDividerProps) {
	return (
		<div className={`flex items-center gap-6 ${className}`}>
			<span className='h-px flex-1 bg-[#8f6634]' />
			<MiniDivider />
			<span className='h-px flex-1 bg-[#8f6634]' />
		</div>
	)
}
