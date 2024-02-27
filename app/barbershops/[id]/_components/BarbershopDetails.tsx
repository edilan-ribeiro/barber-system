"use client";

import BarberShopPhoneInfo from "@/app/_components/BarbershopPhoneInfo";
import useIsMobile from "@/app/_components/_helpers/useIsMobile";
import { Avatar, AvatarImage } from "@/app/_components/ui/avatar";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop, Phone } from "@prisma/client";
import Image from "next/image";

interface BarbershopDetailsProps {
  barbershop: Barbershop;
}

const BarbershopDetails = ({ barbershop }: BarbershopDetailsProps) => {
  const isMobile = useIsMobile();

  const weekDays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];

  const workTime = [
    "00:09 - 17:00",
    "Fechado",
    "Fechado",
    "00:09 - 17:00",
    "00:09 - 17:00",
    "00:09 - 17:00",
    "00:09 - 17:00",
  ];

  return (
    <>
      {isMobile ? (
        <>
          <div className="mb-6 border-b border-solid border-secondary px-5">
            <h2 className="mb-3 text-xs font-bold uppercase text-gray-400">
              sobre nós
            </h2>
            <p className="pb-6 text-sm">
              Bem-vindo à nossa barbearia, onde tradição encontra estilo. Nossa
              equipe de mestres barbeiros transforma cortes de cabelo e barbas
              em obras de arte. Em um ambiente acolhedor, promovemos confiança,
              estilo e uma comunidade unida.
            </p>
          </div>

          <div className="flex justify-between px-5">
            <ul className="flex flex-col gap-2">
              {weekDays.map((days) => (
                <li key={days} className="text-sm text-gray-400">
                  {days}
                </li>
              ))}
            </ul>

            <ul className="flex flex-col gap-2">
              {workTime.map((workTime) => (
                <li key={workTime}>
                  <time className="flex flex-col text-sm">{workTime}</time>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <Card className="mt-10">
            <CardContent className="p-0">
              <div className="px-5">
                <div className="relative mt-6 h-[180px] w-full">
                  <Image src="/barbershop-map.png" fill alt={barbershop.name} />

                  <div className="absolute bottom-4 left-0 w-full px-5">
                    <Card>
                      <CardContent className="flex gap-2 p-3">
                        <Avatar>
                          <AvatarImage src={barbershop.imageUrl} />
                        </Avatar>

                        <div>
                          <h2 className="font-bold">{barbershop.name}</h2>
                          <h3 className="overflow-hidden text-ellipsis text-nowrap text-xs">
                            {barbershop.address}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="mb-6 mt-6 border-b border-solid border-secondary">
                  <h2 className="mb-3 text-xs font-bold uppercase text-gray-400">
                    sobre nós
                  </h2>
                  <p className="pb-6 text-sm">
                    Bem-vindo à nossa barbearia, onde tradição encontra estilo.
                    Nossa equipe de mestres barbeiros transforma cortes de
                    cabelo e barbas em obras de arte. Em um ambiente acolhedor,
                    promovemos confiança, estilo e uma comunidade unida.
                  </p>
                </div>

                <div className="border-b border-solid border-secondary pb-5">
                  {barbershop.phones.map(
                    (phones: { id: Phone; phone: Phone }) => (
                      <div key={phones.id}>
                        <BarberShopPhoneInfo phones={phones.phone} />
                      </div>
                    ),
                  )}
                </div>

                <div className="flex justify-between px-5 my-5">
                  <ul className="flex flex-col gap-2">
                    {weekDays.map((days) => (
                      <li key={days} className="text-sm text-gray-400">
                        {days}
                      </li>
                    ))}
                  </ul>

                  <ul className="flex flex-col gap-2">
                    {workTime.map((workTime) => (
                      <li key={workTime}>
                        <time className="flex flex-col text-sm">
                          {workTime}
                        </time>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </>
  );
};

export default BarbershopDetails;
