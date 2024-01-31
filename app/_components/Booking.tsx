
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export const Booking = () => {
	return (
		<Card>
			<CardContent className='p-5 flex justify-between py-0'>
				<div className='flex flex-col gap-3 py-5'>
					<Badge className='bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit'>Confirmado</Badge>
					<h2 className='font-bold'>Corte de cabelo</h2>

					<div className='flex items-center gap-2'>
					<Avatar className='h-6 w-6'>
						<AvatarImage src='https://utfs.io/f/c4919193-a675-4c47-9f21-ebd86d1c8e6a-4oen2a.png'/>
						<AvatarFallback>A</AvatarFallback>
					</Avatar>
					</div>
					<h3 className='text-sm'>Vintade Barber</h3>
				</div>
				<div className='flex flex-col items-center justify-center border-l border-solid border-secondary px-3'>
					<p className='text-sm'>Fevereiro</p>
					<p className='text-2xl'>06</p>
					<p className='text-sm'>9:45</p>
				</div>
			</CardContent>
		</Card>
	)
}
