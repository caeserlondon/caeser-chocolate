import { Cormorant_Garamond, Inter } from 'next/font/google'

export const serif = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

export const sans = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
})
