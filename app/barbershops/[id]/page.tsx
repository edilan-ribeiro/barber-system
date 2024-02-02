import { db } from '@/app/_lib/prisma'
import { Barbershop } from '@prisma/client'
import BarbershopInfo from './_components/BarbershopInfo'
import { ServiceItem } from './_components/ServiceItem'
import { Key } from 'react'

interface BarbershopDetailsProps {
	params: Barbershop
}

const barbershopDetails = async ({ params }: BarbershopDetailsProps) => {
	if (!params.id) {
		//TODO: redirecionar para home page
		return null
	}

	const barbershop = await db.barbershop.findUnique({
		where: {
			id: params.id,
		},
		include: {
			services: true,
		},
	})

	if (!barbershop) {
		return null
	}

	return (
		<div>
			<BarbershopInfo barbershop={barbershop} />

			<div className="px-5 flex flex-col gap-3 py-6">
				{barbershop.services.map((service: { id: Key | null | undefined }) => (
					<ServiceItem key={service.id} service={service} />
				))}
			</div>
		</div>
	)
}

export default barbershopDetails
