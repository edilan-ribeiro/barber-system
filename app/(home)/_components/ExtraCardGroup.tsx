"use client";

import { Barbershop } from "@prisma/client";
import BarbershopsCardGroup from "./BarbershopsCardGroup";

interface ExtraCardGroupProps {
  barbershops: Barbershop;
}

const ExtraCardGroup = ({ barbershops }: ExtraCardGroupProps) => {
  const isMobile = window.innerWidth < 1024;

  return (
    <div className="mb-[4.5rem]">
      {isMobile ? (
        <BarbershopsCardGroup barbershops={barbershops} title="Populares" />
      ) : (
        <>
          <BarbershopsCardGroup barbershops={barbershops} title="Populares" />
          <BarbershopsCardGroup
            barbershops={barbershops}
            title="Mais Visitados"
          />
        </>
      )}
    </div>
  );
};

export default ExtraCardGroup;
