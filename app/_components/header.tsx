import { Button } from '@/app/_components/ui/button'
import { Card, CardContent } from '@/app/_components/ui/card'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'

export const Header = () => {
	return (
		<Card>
			<CardContent className='p-5 justify-between flex items-center flex-row '>
				<Image src="/logo.png" alt="FSW Barber" height={22} width={120} />
				<Button variant="outline" size="icon" className='h-8 w-8'>
					<MenuIcon size={16}/>
				</Button>
			</CardContent>
		</Card>
	)
}
