'use client'

import { Button } from '@/app/_components/ui/button'
import { Calendar } from '@/app/_components/ui/calendar'
import { Card, CardContent } from '@/app/_components/ui/card'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/app/_components/ui/sheet'
import { Barbershop, Booking, Service } from '@prisma/client'
import { ptBR } from 'date-fns/locale/pt-BR'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { format } from 'date-fns'
import { setHours } from 'date-fns/setHours'
import { setMinutes } from 'date-fns/setMinutes'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { getDayBookings } from '../_actions/getDayBookings'
import { generateDayTimeList } from '../_helpers/hour'
import { saveBookings } from '../_actions/saveBookings'
import BookingInfo from '@/app/_components/BookingInfo'

interface ServiceItemProps {
	barbershop: Barbershop
	service: Service
	isAuthenticated: boolean
}

export const ServiceItem = ({ service, isAuthenticated, barbershop }: ServiceItemProps) => {
	const router = useRouter()

	const { data } = useSession()

	const [date, setDate] = useState<Date | undefined>(undefined)
	const [hour, setHour] = useState<string | undefined>()
	const [submitIsLoading, setSubmitIsLoading] = useState(false)
	const [sheetIsOpen, setSheetIsOpen] = useState(false)
	const [dayBookings, setDayBookings] = useState<Booking[]>([])

	useEffect(() => {
		if (!date) {
			return
		}
		const refreshAvaiableHours = async () => {
			const _dayBookings = await getDayBookings(barbershop.id, date)

			setDayBookings(_dayBookings)
		}

		refreshAvaiableHours()
	}, [date, barbershop.id])

	const handleDateClick = (date: Date | undefined) => {
		setDate(date)
		setHour(undefined)
	}

	const handleHourClick = (time: string) => {
		setHour(time)
	}

	const handleBookingClick = () => {
		if (!isAuthenticated) {
			return signIn('google')
		}
	}

	const handleBookingSubmit = async () => {
		setSubmitIsLoading(true)
		try {
			if (!hour || !date || !data?.user) {
				return
			}

			const dateHour = Number(hour.split(':')[0])
			const dateMinutes = Number(hour.split(':')[1])

			const newDate = setMinutes(setHours(date, dateHour), dateMinutes)

			await saveBookings({
				serviceId: service.id,
				barbershopId: barbershop.id,
				date: newDate,
				userId: (data.user as any).id,
			})

			setSheetIsOpen(false)
			setHour(undefined)
			setDate(undefined)

			toast('Reserva realizada com sucesso', {
				description: format(newDate, "'Para' dd 'de' MMMM 'às' HH:mm'.'", {
					locale: ptBR,
				}),
				action: {
					label: 'Visualizar',
					onClick: () => router.push('/bookings'),
				},
			})
		} catch (error) {
			console.error(error)
		} finally {
			setSubmitIsLoading(false)
		}
	}

	const timeList = useMemo(() => {
		if (!date) {
			return []
		}

		return generateDayTimeList(date).filter((time) => {
			const timeHour = Number(time.split(':')[0])
			const timeMinutes = Number(time.split(':')[1])

			const booking = dayBookings.find((booking) => {
				const bookingHour = Number(booking.date.getHours())
				const bookingMinutes = Number(booking.date.getMinutes())

				return bookingHour === timeHour && bookingMinutes === timeMinutes
			})

			if (!booking) {
				return true
			}

			return false
		})
	}, [date, dayBookings])


	const disabledDays = { dayOfWeek: [1,  2] }

	return (
		<Card>
			<CardContent className="p-3 w-full">
				<div className="flex gap-4 items-center w-full">
					<div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
						<Image
							className="rounded-lg"
							src={service.imageUrl}
							fill
							style={{ objectFit: 'contain' }}
							alt={service.name}
						/>
					</div>

					<div className="flex flex-col w-full">
						<h2 className="font-bold">{service.name}</h2>
						<p className="text-sm text-gray-400">{service.description}</p>

						<div className="flex items-center justify-between mt-3">
							<p className="text-primary text-sm font-bold">
								{Intl.NumberFormat('pt-BR', {
									style: 'currency',
									currency: 'BRL',
								}).format(Number(service.price))}
							</p>
							<Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
								<SheetTrigger asChild>
									<Button variant="secondary" onClick={handleBookingClick}>
										Reservar
									</Button>
								</SheetTrigger>

								<SheetContent className="p-0 w-[80%]">
									<SheetHeader className="text-left px-5 py-6 border-b border-solid border-secondary">
										<SheetTitle>Fazer Reserva</SheetTitle>
									</SheetHeader>

									<div className="py-6">
										<Calendar
											mode="single"
											selected={date}
											onSelect={handleDateClick}
											locale={ptBR}
											fromDate={new Date()}
											disabled={disabledDays}
											styles={{
												head_cell: {
													width: '100',
													textTransform: 'capitalize',
												},
												cell: {
													width: '100',
												},
												button: {
													width: '100',
												},
												nav_button_previous: {
													width: '32px',
													height: '32px',
												},
												nav_button_next: {
													width: '32px',
													height: '32px',
												},
												caption: {
													textTransform: 'capitalize',
												},
											}}
										/>
									</div>

									{date && (
										<div className="flex gap-3 overflow-x-auto py-6 px-5 border-t border-solid border-secondary [&::-webkit-scrollbar]:hidden">
											{timeList.map((time) => (
												<Button
													onClick={() => handleHourClick(time)}
													variant={hour === time ? 'default' : 'outline'}
													className="rounded-full"
													key={time}
												>
													{time}
												</Button>
											))}
										</div>
									)}

									<div className="py-6 px-5 border-t border-solid border-secondary">
										<BookingInfo
											booking={{
												barbershop: barbershop,
												date:
													date && hour
														? setMinutes(setHours(date, Number(hour.split(':')[0])), Number(hour.split(':')[1]))
														: undefined,
												service: service,
											}}
										/>
									</div>

									<SheetFooter className="px-5">
										<Button onClick={handleBookingSubmit} disabled={!hour || !date || submitIsLoading}>
											{submitIsLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
											Confirmar reserva
										</Button>
									</SheetFooter>
								</SheetContent>
							</Sheet>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
