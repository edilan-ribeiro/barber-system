"use client";

import useIsMobile from "@/app/_components/_helpers/useIsMobile";
import { Barbershop } from "@prisma/client";
import BarbershopTopInfo from "./BarbershopTopInfo";
import InfoToggler from "./InfoToggler";
import { Session } from "next-auth";
import BarbershopDetails from "./BarbershopDetails";

interface ResponsiveBarbershopProps {
  barbershop: Barbershop;
  session: Session | null;
}

const ResponsiveBarbershop = ({
  barbershop,
  session,
}: ResponsiveBarbershopProps) => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <>
          <BarbershopTopInfo barbershop={barbershop} />

          <InfoToggler barbershop={barbershop} session={session} />
        </>
      ) : (
        <div className="flex items-start justify-start gap-10 pr-32">
          <div className="flex w-[68%] flex-col">
            <BarbershopTopInfo barbershop={barbershop} />

            <InfoToggler barbershop={barbershop} session={session} />
          </div>
          <div className="w-[27%]">
            <BarbershopDetails barbershop={barbershop} />
          </div>
        </div>
      )}
    </>
  );
};

export default ResponsiveBarbershop;
