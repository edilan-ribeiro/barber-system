import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import SideMenu from './SideMenu'

export const Header = () => {

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
						<SideMenu/>
					</SheetContent>
				</Sheet>
			</CardContent>
		</Card>
	)
}
