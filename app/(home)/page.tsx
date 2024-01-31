import { format } from 'date-fns'
import { Header } from '../_components/Header'
import { ptBR } from 'date-fns/locale/pt-BR'
import Search from './_components/Search'

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
		</div>
	)
}
