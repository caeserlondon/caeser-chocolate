import { MiniFlourish } from '@/components/ui/mini-flourish'
import { serif } from '@/lib/fonts'
import type { Product } from '@/types/content'
import Image from 'next/image'

type ProductCardProps = {
	product: Product
}

export function ProductCard({ product }: ProductCardProps) {
	return (
		<article className='group relative overflow-hidden border border-[#92662f] bg-[linear-gradient(180deg,rgba(57,20,12,0.65),rgba(30,10,6,0.58))] px-5 pb-6 pt-8 shadow-[0_24px_60px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-[#b88c4d]'>
			<div className='absolute inset-x-0 top-4 flex justify-center'>
				<MiniFlourish />
			</div>

			<div className='relative mx-auto mt-5 flex h-[360px] w-full max-w-[250px] items-end justify-center'>
				<Image
					src={product.image}
					alt={product.name}
					width={500}
					height={700}
					className='h-full w-auto object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)]'
				/>
			</div>

			<div className='mx-auto mt-5 max-w-[260px] text-center'>
				<h3
					className={`${serif.className} text-[1.9rem] leading-none text-[#e5bf79]`}
				>
					{product.name}
				</h3>
				<p className='mt-3 text-sm leading-6 text-[#eadbb8]/90'>
					{product.description}
				</p>
				<p className='mt-3 text-lg font-semibold text-[#efc87d]'>
					{product.price}
				</p>
			</div>
		</article>
	)
}
