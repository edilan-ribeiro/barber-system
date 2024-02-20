"use client";

import { Smartphone } from "lucide-react";
import { Button } from "./ui/button";
import { Phone } from "@prisma/client";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { toast } from "sonner";
import { formatPhoneNumber } from "./_helpers/formatPhoneNumber";

interface BarberShopPhoneInfoProps {
  phones: Phone;
}

const BarberShopPhoneInfo = ({ phones }: BarberShopPhoneInfoProps) => {
  const [copiedText, copyToClipboard] = useCopyToClipboard();

  const handleClick = (phones: string) => {
    copyToClipboard(phones);

    toast.success(`O número ${phones} foi copiado`);
  };

  return (
    <div className="mt-8 flex items-center justify-between">
      <div className="flex">
        <Smartphone className="mr-[10px]" />
        <p className="text-sm">{formatPhoneNumber(phones)}</p>
      </div>
      <Button variant="outline" onClick={() => handleClick(phones)}>
        Copiar
      </Button>
    </div>
  );
};

export default BarberShopPhoneInfo;
