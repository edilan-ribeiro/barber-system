import { Key } from "react";
import { BarbershopsCard } from "../(home)/_components/BarbershopsCard";
import { db } from "../_lib/prisma";
import { redirect } from "next/navigation";
import { Search } from "../(home)/_components/Search";

interface BarberShopsPageProps {
  searchParams: {
    search?: string;
  };
}

const BarberShopsPage = async ({ searchParams }: BarberShopsPageProps) => {
  if (!searchParams.search) {
    return redirect("/");
  }
  const barbershops = await db.barbershop.findMany({
    where: {
      name: {
        contains: searchParams.search,
        mode: "insensitive",
      },
    },
    include: {
      phones: true,
    },
  });

  return (
    <>
      <div className="flex flex-col gap-6 px-5 py-6">
        <Search defaultValues={{ search: searchParams.search }} />
        <h1 className="text-xs font-bold uppercase text-gray-400">
          Resultados para &quot;{searchParams.search}&quot;
        </h1>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
          {barbershops.map((barbershop: { id: Key | null | undefined }) => (
            <div className="w-full" key={barbershop.id}>
              <BarbershopsCard barbershop={barbershop} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BarberShopsPage;
