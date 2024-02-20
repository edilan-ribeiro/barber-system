import { getServerSession } from "next-auth";
import { Header } from "../_components/Header";
import { redirect } from "next/navigation";
import { db } from "../_lib/prisma";
import { BookingItem } from "../_components/BookingItem";
import { Key } from "react";
import { Metadata } from "next";
import { authOptions } from "@/app/_lib/auth";

export const metadata: Metadata = {
  title: "Agendamentos",
};

const BookingsPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return redirect("/");
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
        barbershop: {
          include: {
            phones: true,
          },
        },
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
        barbershop: {
          include: {
            phones: true,
          },
        },
      },
    }),
  ]);

  return (
    <>
      <Header />

      <div className="px-5 py-6">
        <h1 className="mb-6 text-xl font-bold">Agendamentos</h1>

        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 text-sm font-bold uppercase text-gray-400">
              Confirmados
            </h2>
            <div className="flex flex-col gap-3">
              {confirmedBookings.map(
                (booking: { id: Key | null | undefined }) => (
                  <BookingItem booking={booking} key={booking.id} />
                ),
              )}
            </div>
          </>
        )}

        {finishedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-sm font-bold uppercase text-gray-400">
              Finalizados
            </h2>
            <div className="flex flex-col gap-3">
              {finishedBookings.map(
                (booking: { id: Key | null | undefined }) => (
                  <BookingItem booking={booking} key={booking.id} />
                ),
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BookingsPage;
