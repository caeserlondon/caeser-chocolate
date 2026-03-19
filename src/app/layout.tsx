import { sans } from '@/lib/fonts'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	metadataBase: new URL('https://caeser-chocolate.vercel.app'),
	title: 'Caeser Chocolate',
	description: 'Luxury chocolate brand landing page by Caeser Ibrahim.',
	alternates: {
		canonical: '/',
	},
	robots: {
		index: true,
		follow: true,
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={sans.className}>{children}</body>
		</html>
	)
}
