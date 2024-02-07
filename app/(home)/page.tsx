import { format } from 'date-fns'
import { Header } from '../_components/Header'
import { ptBR } from 'date-fns/locale/pt-BR'
import { Search } from './_components/Search'
import { BookingItem } from '../_components/BookingItem'
import { db } from '../_lib/prisma'
import { BarbershopsCard } from './_components/BarbershopsCard'
import { Key } from 'react'

export default async function Home() {
	const barbershops = await db.barbershop.findMany({})

	return (
		<div>
			<Header />
			<div className="px-5 pt-5">
				<h2 className="text-xl font-bold">Olá, fulano!</h2>
				<p className="capitalize text-sm">
					{format(new Date(), "EEEE ',' dd 'de' MMMM", {
						locale: ptBR,
					})}
				</p>
			</div>
			<div className="px-5 mt-6">
				<Search />
			</div>

			{/* <div className="px-5 mt-6">
				<h2 className="text-xs uppercase text-gray-400 font-bold mb-3">Agendamentos</h2>
				<BookingItem />
			</div> */}

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
