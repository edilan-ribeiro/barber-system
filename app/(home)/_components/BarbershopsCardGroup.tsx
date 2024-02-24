import { Key } from "react";
import { BarbershopsCard } from "./BarbershopsCard";
import { Barbershop } from "@prisma/client";

interface BarbershopsCardGroupProps {
    barbershops: Barbershop
    title: string
}

const BarbershopsCardGroup = ({barbershops, title}: BarbershopsCardGroupProps) => {
  return (
    <div className="mt-6">
      <h2 className="mb-3 px-5 text-xs font-bold uppercase text-gray-400">
        {title}
      </h2>

      <div className="flex gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {barbershops.map((barbershop: { id: Key | null | undefined }) => (
          <div key={barbershop.id} className="max-w[167px] w-[167px]">
            <BarbershopsCard barbershop={barbershop} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarbershopsCardGroup;
