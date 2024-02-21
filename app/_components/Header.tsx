import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import SideMenu from './SideMenu'
import Link from 'next/link'

export const Header = () => {
	return (
		<header>
			<Card>
				<CardContent className="p-5 justify-between flex items-center flex-row ">
					<Link href="/">
						<Image src="/logo.png" alt="FSW Barber" height={22} width={120} />
					</Link>
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="outline" size="icon" className="h-8 w-8">
								<MenuIcon size={16} />
							</Button>
						</SheetTrigger>
						<SheetContent className="p-0 w-[80%]">
							<SideMenu />
						</SheetContent>
					</Sheet>
				</CardContent>
			</Card>
		</header>
	)
}
