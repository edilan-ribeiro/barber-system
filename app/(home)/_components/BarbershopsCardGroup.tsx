"use client";

import { Key, useEffect, useState } from "react";
import { BarbershopsCard } from "./BarbershopsCard";
import { Barbershop } from "@prisma/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/app/_components/ui/carousel";
import useIsMobile from "@/app/_components/_helpers/useIsMobile";

interface BarbershopsCardGroupProps {
  barbershops: Barbershop;
  title: string;
}

const BarbershopsCardGroup = ({
  barbershops,
  title,
}: BarbershopsCardGroupProps) => {
  const isMobile = useIsMobile()

  return (
    <>
      {isMobile ? (
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
      ) : (
        <div className="mt-6">
          <h2 className="mb-3 px-5 text-xs font-bold uppercase text-gray-400">
            {title}
          </h2>

          <Carousel>
            <CarouselContent className="-ml-4">
              {barbershops.map((barbershop: { id: Key | null | undefined }) => (
                <CarouselItem
                  key={barbershop.id}
                  className="lg:basis-[55%] xl:basis-[40%] 2xl:basis-[31%]"
                >
                  <div className="max-w[221px] w-[221px]">
                    <BarbershopsCard barbershop={barbershop} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}
    </>
  );
};

export default BarbershopsCardGroup;
