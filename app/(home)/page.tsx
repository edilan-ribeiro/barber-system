import { format } from 'date-fns'
import { Header } from '../_components/Header'
import { ptBR } from 'date-fns/locale/pt-BR'
import { Search } from './_components/Search'
import { Booking } from '../_components/Booking'

export default function Home() {
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

			<div className="px-5 mt-6">
				<h2 className='text-xs uppercase text-gray-400 font-bold mb-3'>Agendamentos</h2>
				<Booking/>
			</div>
		</div>
	)
}
