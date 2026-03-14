export function CornerFrame({ className = '' }: { className?: string }) {
	return (
		<div className={`absolute h-9 w-9 text-[#bb8e52] ${className}`}>
			<svg viewBox='0 0 36 36' className='h-full w-full'>
				<path
					d='M2 16V2H16'
					fill='none'
					stroke='currentColor'
					strokeWidth='1.6'
				/>
				<path
					d='M7 7C10 10 13 11 18 11'
					fill='none'
					stroke='currentColor'
					strokeWidth='1.2'
				/>
				<circle cx='11' cy='11' r='1.6' fill='currentColor' />
			</svg>
		</div>
	)
}
