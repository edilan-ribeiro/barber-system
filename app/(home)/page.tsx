import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { Search } from "./_components/Search";
import { BookingItem } from "../_components/BookingItem";
import { db } from "../_lib/prisma";
import { Key } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/_lib/auth";
import BarbershopsCardGroup from "./_components/BarbershopsCardGroup";
import ExtraCardGroup from "./_components/ExtraCardGroup";

export default async function Home() {
  const session = await getServerSession(authOptions);

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
            barbershop: {
              include: {
                phones: true,
              },
            },
          },
        })
      : Promise.resolve([]),
  ]);

  return (
    <div className="lg:px-32">
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">
          {session?.user
            ? `Olá, ${session.user.name?.split(" ")[0]}`
            : "Olá! Vamos fazer o seu agendamento?"}
        </h2>
        <p className="text-sm capitalize">
          {format(new Date(), "EEEE ',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>
      <div className="mt-6 px-5">
        <Search />
      </div>

      <div className="mt-6">
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 pl-5 text-xs font-bold uppercase text-gray-400">
              Agendamentos
            </h2>
            <div className="mt-6 flex gap-3 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
              {confirmedBookings.map(
                (booking: { id: Key | null | undefined }) => (
                  <BookingItem key={booking.id} booking={booking} />
                ),
              )}
            </div>
          </>
        )}
      </div>

      <BarbershopsCardGroup barbershops={barbershops} title="Recomendados" />

      <div className="mb-[4.5rem]">
        <ExtraCardGroup barbershops={barbershops}/>
      </div>
    </div>
  );
}
