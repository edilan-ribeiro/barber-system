'use client'

import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import { CalendarIcon, HomeIcon, Link, LogInIcon, LogOutIcon, MenuIcon, UserIcon } from 'lucide-react'
import Image from 'next/image'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Avatar, AvatarImage } from './ui/avatar'

export const Header = () => {
	const { data } = useSession()

	const handleLogoutClick = () => signOut()

	const handleLoginClick = () => signIn('google')

	return (
		<Card>
			<CardContent className="p-5 justify-between flex items-center flex-row ">
				<Image src="/logo.png" alt="FSW Barber" height={22} width={120} />
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="outline" size="icon" className="h-8 w-8">
							<MenuIcon size={16} />
						</Button>
					</SheetTrigger>
					<SheetContent className="p-0">
						<SheetHeader className="text-left border-b border-solid border-secondary p-5">
							<SheetTitle>Menu</SheetTitle>
						</SheetHeader>

						{data?.user ? (
							<div className="flex justify-between px-5 py-6 items-center">
								<div className="flex items-center gap-3">
									<Avatar>
										<AvatarImage src={data.user?.image ?? ''} />
									</Avatar>
									<h2 className="font-bold">{data.user.name}</h2>
								</div>

								<Button variant="secondary" size="icon">
									<LogOutIcon onClick={handleLogoutClick} />
								</Button>
							</div>
						) : (
							<div className="px-5 py-6 flex flex-col gap-3">
								<div className="flex items-center gap-2">
									<UserIcon size={32} />
									<h2 className="font-bold">Olá, faça seu login</h2>
								</div>
								<Button variant="secondary" className="w-full justify-start" onClick={handleLoginClick}>
									<LogInIcon className="mr-2" size={18} />
									Fazer login
								</Button>
							</div>
						)}

						<div className="flex flex-col gap-3 px-5">
							<Button variant="outline" className="justify-start" asChild>
								<Link href="/">
									<HomeIcon size={18} className="mr-2" />
									Início
								</Link>
							</Button>

							{data?.user && (
								<Button variant="outline" className="justify-start" asChild>
									<Link href="/">
										<CalendarIcon size={18} className="mr-2" />
										Agendamentos
									</Link>
								</Button>
							)}
						</div>
					</SheetContent>
				</Sheet>
			</CardContent>
		</Card>
	)
}
