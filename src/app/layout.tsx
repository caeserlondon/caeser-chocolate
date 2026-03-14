import { sans } from '@/lib/fonts'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Caeser Chocolate',
	description:
		'Luxury handcrafted chocolate with refined gifting and artisanal excellence.',
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
