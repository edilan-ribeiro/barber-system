import { format } from 'date-fns'
import { Header } from '../_components/Header'
import { ptBR } from 'date-fns/locale/pt-BR'
import { Search } from './_components/Search'
import { BookingItem } from '../_components/BookingItem'
import { db } from '../_lib/prisma'
import { BarbershopsCard } from './_components/BarbershopsCard'
import { Key } from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

export default async function Home() {
	const session = await getServerSession(authOptions)

	const [barbershops, confirmedBookings] = await Promise.all([
		db.barbershop.findMany({}),
		session?.user
			? db.booking.findMany({
					where: {
						userId: (session.user as any).id,
						date: {
							gte: new Date(),
						},
					},
					include: {
						service: true,
						barbershop: true,
					},
				})
			: Promise.resolve([]),
	])

	return (
		<div>
			<Header />
			<div className="px-5 pt-5">
				<h2 className="text-xl font-bold">
					{session?.user ? `Olá, ${session.user.name?.split(' ')[0]}` : 'Olá! Vamos fazer o seu agendamento?'}
				</h2>
				<p className="capitalize text-sm">
					{format(new Date(), "EEEE ',' dd 'de' MMMM", {
						locale: ptBR,
					})}
				</p>
			</div>
			<div className="px-5 mt-6">
				<Search />
			</div>

			<div className="mt-6">
				{confirmedBookings.length > 0 && (
					<>
						<h2 className="pl-5 text-xs uppercase text-gray-400 font-bold mb-3">Agendamentos</h2>
						<div className="px-5 mt-6 flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
							{confirmedBookings.map((booking: { id: Key | null | undefined }) => (
								<BookingItem key={booking.id} booking={booking} />
							))}
						</div>
					</>
				)}
			</div>

			<div className="mt-6">
				<h2 className="px-5 text-xs uppercase text-gray-400 font-bold mb-3">Recomendados</h2>

				<div className="px-5 flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
					{barbershops.map((barbershop: { id: Key | null | undefined }) => (
						<BarbershopsCard key={barbershop.id} barbershop={barbershop} />
					))}
				</div>
			</div>

			<div className="mt-6 mb-[4.5rem]">
				<h2 className="px-5 text-xs uppercase text-gray-400 font-bold mb-3">Populares</h2>

				<div className="px-5 flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
					{barbershops.map((barbershop: { id: Key | null | undefined }) => (
						<BarbershopsCard key={barbershop.id} barbershop={barbershop} />
					))}
				</div>
			</div>
		</div>
	)
}
