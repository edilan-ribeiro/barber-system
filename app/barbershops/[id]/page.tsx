import { db } from '@/app/_lib/prisma'
import { Barbershop } from '@prisma/client'
import BarbershopInfo from './_components/BarbershopInfo'
import { ServiceItem } from './_components/ServiceItem'
import { Key } from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

interface BarbershopDetailsProps {
	params: Barbershop
}

const barbershopDetails = async ({ params }: BarbershopDetailsProps) => {
	const session = await getServerSession(authOptions)

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
					<ServiceItem key={service.id} barbershop={barbershop} service={service} isAuthenticated={!!session?.user} />
				))}
			</div>
		</div>
	)
}

export default barbershopDetails
