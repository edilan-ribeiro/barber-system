"use client";

import { Button } from "@/app/_components/ui/button";
import { Key, useState } from "react";
import BarbershopDetails from "./BarbershopDetails";
import { ServiceItem } from "./ServiceItem";
import { Barbershop } from "@prisma/client";
import { Session } from "next-auth";
import useIsMobile from "@/app/_components/_helpers/useIsMobile";

interface InfoTogglerProps {
  barbershop: Barbershop;
  session: Session | null;
}

const InfoToggler = ({ barbershop, session }: InfoTogglerProps) => {
  const [openDetails, setOpenDetails] = useState(false);
  const isMobile = useIsMobile();

  const handleClick = () => {
    setOpenDetails(!openDetails);
  };

  return (
    <>
      {isMobile ? (
        <>
          <div className="mt-6 flex gap-3 px-5">
            <Button
              onClick={handleClick}
              variant={!openDetails ? "default" : "outline"}
            >
              Serviços
            </Button>
            <Button
              onClick={handleClick}
              variant={openDetails ? "default" : "outline"}
            >
              Informações
            </Button>
          </div>
          {openDetails ? (
            <div className="mb-10 mt-6">
              <BarbershopDetails barbershop={barbershop} />
            </div>
          ) : (
            <div className="mb-10 flex flex-col gap-3 px-5 py-6">
              {barbershop.services.map(
                (service: { id: Key | null | undefined }) => (
                  <ServiceItem
                    key={service.id}
                    barbershop={barbershop}
                    service={service}
                    isAuthenticated={!!session?.user}
                  />
                ),
              )}
            </div>
          )}
        </>
      ) : (
        <>
          <div className="mb-10 flex flex-wrap gap-3 py-6 pl-36">
            {barbershop.services.map(
              (service: { id: Key | null | undefined }) => (
                <ServiceItem
                  key={service.id}
                  barbershop={barbershop}
                  service={service}
                  isAuthenticated={!!session?.user}
                />
              ),
            )}
          </div>
        </>
      )}
    </>
  );
};

export default InfoToggler;
