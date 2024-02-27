"use client";

import { Barbershop } from "@prisma/client";
import BarbershopsCardGroup from "./BarbershopsCardGroup";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/app/_components/ui/carousel";
import { title } from "process";
import { Key, useEffect, useState } from "react";
import { BarbershopsCard } from "./BarbershopsCard";

interface ExtraCardGroupProps {
  barbershops: Barbershop;
}

const ExtraCardGroup = ({ barbershops }: ExtraCardGroupProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <  1024);
  }, [])

  return (
    <div className="mb-[4.5rem]">
      {isMobile ? (
        <BarbershopsCardGroup barbershops={barbershops} title="Populares" />
      ) : (
        <>
          <div className="mt-6">
            <h2 className="mb-3 px-5 text-xs font-bold uppercase text-gray-400">
              Populares
            </h2>

            <Carousel>
              <CarouselContent className="-ml-4">
                {barbershops.map(
                  (barbershop: { id: Key | null | undefined }) => (
                    <CarouselItem
                      key={barbershop.id}
                      className="lg:basis-[26%] xl:basis-[20%] 2xl:basis-[15%]"
                    >
                      <div className="max-w[221px] w-[221px]">
                        <BarbershopsCard barbershop={barbershop} />
                      </div>
                    </CarouselItem>
                  ),
                )}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="mt-6">
            <h2 className="mb-3 px-5 text-xs font-bold uppercase text-gray-400">
              Mais visitados
            </h2>

            <Carousel>
              <CarouselContent className="-ml-4">
                {barbershops.map(
                  (barbershop: { id: Key | null | undefined }) => (
                    <CarouselItem
                      key={barbershop.id}
                      className="lg:basis-[26%] xl:basis-[20%] 2xl:basis-[15%]"
                    >
                      <div className="max-w[221px] w-[221px]">
                        <BarbershopsCard barbershop={barbershop} />
                      </div>
                    </CarouselItem>
                  ),
                )}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </>
      )}
    </div>
  );
};

export default ExtraCardGroup;
