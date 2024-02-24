"use client";

import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideMenu from "./SideMenu";
import Link from "next/link";
import DesktopMenu from "./DesktopMenu";

export const Header = () => {
  const isMobile = window.innerWidth < 1024;

  return (
    <header>
      <Card className="lg:px-32">
        <CardContent className="flex flex-row items-center justify-between p-5 ">
          <Link href="/">
            <Image src="/logo.png" alt="FSW Barber" height={22} width={120} />
          </Link>
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <MenuIcon size={16} />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[80%] p-0">
                <SideMenu />
              </SheetContent>
            </Sheet>
          ) : (
            <DesktopMenu />
          )}
        </CardContent>
      </Card>
    </header>
  );
};
