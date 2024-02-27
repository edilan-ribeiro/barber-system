import { db } from "@/app/_lib/prisma";
import { Barbershop } from "@prisma/client";
import { getServerSession } from "next-auth";
import { Metadata } from "next";
import { authOptions } from "@/app/_lib/auth";
import { redirect } from "next/navigation";
import ResponsiveBarbershop from "./_components/ResponsiveBarbershop";

export const metadata: Metadata = {
  title: "Serviços disponíveis",
};

interface BarbershopDetailsProps {
  params: Barbershop;
}

const barbershopDetails = async ({ params }: BarbershopDetailsProps) => {
  const session = await getServerSession(authOptions);

  if (!params.id) {
    return redirect("/");
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
      phones: true
    },
  });

  if (!barbershop) {
    return redirect("/");
  }

  return <ResponsiveBarbershop barbershop={barbershop} session={session} />;
};

export default barbershopDetails;
