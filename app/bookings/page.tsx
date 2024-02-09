import { getServerSession } from 'next-auth'
import { Header } from '../_components/Header'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { db } from '../_lib/prisma'
import { BookingItem } from '../_components/BookingItem'
import { Key } from 'react'

const BookingsPage = async () => {
	const session = await getServerSession(authOptions)

	if (!session?.user) {
		return redirect('/')
	}

	const [confirmedBookings, finishedBookings] = await Promise.all([
		db.booking.findMany({
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
		}),

		db.booking.findMany({
			where: {
				userId: (session.user as any).id,
				date: {
					lt: new Date(),
				},
			},
			include: {
				service: true,
				barbershop: true,
			},
		}),
	])

	return (
		<>
			<Header />

			<div className="px-5 py-6">
				<h1 className="text-xl font-bold mb-6">Agendamentos</h1>

				{confirmedBookings.length > 0 && (
					<>
						<h2 className="text-gray-400 uppercase font-bold text-sm mb-3">Confirmados</h2>
						<div className="flex flex-col gap-3">
							{confirmedBookings.map((booking: { id: Key | null | undefined }) => (
								<BookingItem booking={booking} key={booking.id} />
							))}
						</div>
					</>
				)}

				{finishedBookings.length > 0 && (
					<>
						<h2 className="text-gray-400 uppercase font-bold text-sm mt-6 mb-3">Finalizados</h2>
						<div className="flex flex-col gap-3">
							{finishedBookings.map((booking: { id: Key | null | undefined }) => (
								<BookingItem booking={booking} key={booking.id} />
							))}
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default BookingsPage
