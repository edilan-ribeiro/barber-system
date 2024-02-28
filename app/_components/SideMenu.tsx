"use client";

import { Avatar, AvatarImage } from "./ui/avatar";
import {
  LogOutIcon,
  UserIcon,
  LogInIcon,
  HomeIcon,
  CalendarIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

const SideMenu = () => {
  const { data } = useSession();

  const handleLogoutClick = () => signOut();

  const handleLoginClick = () => signIn("google");

  return (
    <>
      <SheetHeader className="border-b border-solid border-secondary p-5 text-left">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>

      {data?.user ? (
        <div className="flex items-center justify-between px-5 py-6">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={data.user?.image ?? ""} />
            </Avatar>
            <h2 className="font-bold">{data.user.name}</h2>
          </div>

          {/* <Button variant="secondary" size="icon">
            <LogOutIcon onClick={handleLogoutClick} />
          </Button> */}

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="secondary" size="icon">
                <LogOutIcon />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="flex w-[400px] flex-col items-center">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-center">
                  Sair
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Deseja sair da plataforma?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="mr-2 w-[150px] uppercase">
                  Cancelar
                </AlertDialogCancel>
                <AlertDialogAction className="w-[150px]" asChild>
                  <Button variant="destructive" onClick={handleLogoutClick}>
                    Sair
                  </Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      ) : (
        <div className="flex flex-col gap-3 px-5 py-6">
          <div className="flex items-center gap-2">
            <UserIcon size={32} />
            <h2 className="font-bold">Olá, faça seu login!</h2>
          </div>
          <Button
            variant="secondary"
            className="w-full justify-start"
            onClick={handleLoginClick}
          >
            <LogInIcon className="mr-2" size={18} />
            Fazer login
          </Button>
        </div>
      )}

      <div className="flex flex-col gap-3 px-5">
        <Button variant="outline" className="justify-start" asChild>
          <Link href="/">
            <HomeIcon size={18} className="mr-2" />
            Início
          </Link>
        </Button>

        {data?.user && (
          <Button variant="outline" className="justify-start" asChild>
            <Link href="/bookings">
              <CalendarIcon size={18} className="mr-2" />
              Agendamentos
            </Link>
          </Button>
        )}
      </div>
    </>
  );
};

export default SideMenu;
