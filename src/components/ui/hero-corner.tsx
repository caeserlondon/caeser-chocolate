import { MiniDivider } from './mini-divider'

export function SectionDivider({ className = '' }: { className?: string }) {
	return (
		<div className={`flex items-center gap-6 ${className}`}>
			<span className='h-px flex-1 bg-[#8f6634]' />
			<MiniDivider />
			<span className='h-px flex-1 bg-[#8f6634]' />
		</div>
	)
}
