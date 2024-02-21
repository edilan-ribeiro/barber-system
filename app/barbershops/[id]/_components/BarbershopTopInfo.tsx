"use client";

import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MenuIcon, MapPinIcon, StarIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/app/_components/ui/sheet";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SideMenu from "@/app/_components/SideMenu";

interface BarbershopTopInfoProps {
  barbershop: Barbershop;
}

const BarbershopTopInfo = ({ barbershop }: BarbershopTopInfoProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.replace("/");
  };
  return (
    <>
      <div className="relative h-[250px] w-full">
        <Button
          onClick={handleBackClick}
          size="icon"
          variant="outline"
          className="absolute left-4 top-4 z-50"
        >
          <ChevronLeftIcon />
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="absolute right-4 top-4 z-50"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0 w-[80%]">
            <SideMenu />
          </SheetContent>
        </Sheet>

        <Image
          src={barbershop.imageUrl}
          fill
          alt={barbershop.name}
          style={{
            objectFit: "cover",
          }}
          className="opacity-75"
        />
      </div>
      <div className="border-b border-solid border-secondary px-5 py-3 pb-6">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>

        <div className="mt-2 flex items-center gap-1">
          <MapPinIcon className="text-primary " size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>

        <div className="mt-2 flex items-center gap-1">
          <StarIcon className="text-primary " size={18} />
          <p className="text-sm">5,0 (899 avaliações)</p>
        </div>
      </div>
    </>
  );
};

export default BarbershopTopInfo;
