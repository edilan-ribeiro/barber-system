import { Key } from 'react'
import { BarbershopsCard } from '../(home)/_components/BarbershopsCard'
import { Header } from '../_components/Header'
import { db } from '../_lib/prisma'
import { redirect } from 'next/navigation'
import { Search } from '../(home)/_components/Search'

interface BarberShopsPageProps {
	searchParams: {
		search?: string
	}
}

const BarberShopsPage = async ({ searchParams }: BarberShopsPageProps) => {
	if (!searchParams.search) {
		return redirect('/')
	}
	const barbershops = await db.barbershop.findMany({
		where: {
			name: {
				contains: searchParams.search,
				mode: 'insensitive',
			},
		},
	})

	return (
		<>
			<Header />

			<div className="px-5 py-6 flex flex-col gap-6">
				<Search defaultValues={{search: searchParams.search}}/>
				<h1 className="text-gray-400 text-xs font-bold uppercase">Resultados para &quot;{searchParams.search}&quot;</h1>

				<div className="grid grid-cols-2 gap-4">
					{barbershops.map((barbershop: { id: Key | null | undefined }) => (
						<div className="w-full" key={barbershop.id}>
							<BarbershopsCard barbershop={barbershop} />
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default BarberShopsPage
