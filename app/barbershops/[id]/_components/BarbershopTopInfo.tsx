"use client";

import useIsMobile from "@/app/_components/_helpers/useIsMobile";
import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopTopInfoProps {
  barbershop: Barbershop;
}

const BarbershopTopInfo = ({ barbershop }: BarbershopTopInfoProps) => {
  const router = useRouter();
  const isMobile = useIsMobile();

  const handleBackClick = () => {
    router.replace("/");
  };
  return (
    <div className="lg:mt-10 lg:pl-36">
      <div className="relative h-[250px] w-full lg:h-auto">
        <Button
          onClick={handleBackClick}
          size="icon"
          variant="outline"
          className="absolute left-4 top-4 z-50"
        >
          <ChevronLeftIcon />
        </Button>

        <Image
          src={barbershop.imageUrl}
          width={200}
          height={200}
          alt={barbershop.name}
          style={{
            objectFit: "cover",
          }}
          className="absolute inset-0 h-full w-full object-cover opacity-75 lg:static lg:h-[485px]  lg:rounded"
        />
      </div>
      <div className="border-b border-solid border-secondary px-5 py-3 pb-6 lg:flex lg:items-center lg:justify-between lg:px-0 lg:py-5">
        <div className="lg: flex-col lg:flex lg:gap-3">
          <h1 className="text-xl font-bold lg:text-3xl">{barbershop.name}</h1>

          <div className="mt-2 flex items-center gap-1 lg:mt-0">
            <MapPinIcon className="text-primary " size={18} />
            <p className="text-sm">{barbershop.address}</p>
          </div>
        </div>

        <div className="mt-2 flex items-center gap-1 lg:mt-0 lg:flex lg:h-[68px] lg:flex-col lg:items-center lg:justify-center lg:gap-2 lg:rounded lg:bg-secondary lg:p-5">
          <div className="flex gap-1">
            <StarIcon
              className="text-primary "
              size={18}
              fill="hsl(var(--primary))"
            />
            <p className="text-sm">5,0</p>
          </div>

          {isMobile ? (
            <p className="text-sm">(899 avaliações)</p>
          ) : (
            <p className="text-sm">899 avaliações</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BarbershopTopInfo;
