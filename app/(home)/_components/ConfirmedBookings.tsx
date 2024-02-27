import { BookingItem } from "@/app/_components/BookingItem";
import { Booking } from "@prisma/client";
import { Key } from "react";

interface ConfirmedBookingsProps {
  bookings: Booking;
}

const ConfirmedBookings = ({ bookings }: ConfirmedBookingsProps) => {
  return (
    <div className="mt-6">
      {bookings.length > 0 && (
        <>
          <h2 className="mb-3 pl-5 text-xs font-bold uppercase text-gray-400">
            Agendamentos
          </h2>
          <div className="mt-6 flex gap-3 overflow-x-auto px-5 lg:pr-0 [&::-webkit-scrollbar]:hidden">
            {bookings.map((booking: { id: Key | null | undefined }) => (
              <BookingItem key={booking.id} booking={booking} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ConfirmedBookings;
