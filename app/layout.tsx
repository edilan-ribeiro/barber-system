import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer } from './_components/Footer'
import AuthProvider from './_providers/auth'
import { Toaster } from './_components/ui/sonner'
import { Header } from './_components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'FSW Barber',
	description: 'Serviço de agendamento para barbearias',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.png" />
			</head>
			<body className={`${inter.className} dark`}>
				<AuthProvider>
					<div className='flex-1'>
					<Header />
					{children}

					</div>
					<Footer />
					<Toaster />
				</AuthProvider>
			</body>
		</html>
	)
}
