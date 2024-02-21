import { db } from "@/app/_lib/prisma";
import { Barbershop } from "@prisma/client";
import BarbershopTopInfo from "./_components/BarbershopTopInfo";
import { getServerSession } from "next-auth";
import { Metadata } from "next";
import { authOptions } from "@/app/_lib/auth";
import InfoToggler from "./_components/InfoToggler";

export const metadata: Metadata = {
  title: "Serviços disponíveis",
};

interface BarbershopDetailsProps {
  params: Barbershop;
}

const barbershopDetails = async ({ params }: BarbershopDetailsProps) => {
  const session = await getServerSession(authOptions);

  if (!params.id) {
    //TODO: redirecionar para home page
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    return null;
  }

  return (
    <div>
      <BarbershopTopInfo barbershop={barbershop} />

      <InfoToggler barbershop={barbershop} session={session} />
    </div>
  );
};

export default barbershopDetails;
