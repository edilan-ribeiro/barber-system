import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { LogOutIcon, CalendarIcon, CircleUser } from "lucide-react";
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

const DesktopMenu = () => {
  const { data } = useSession();

  const handleLogoutClick = () => signOut();

  const handleLoginClick = () => signIn("google");

  return (
    <>
      {data?.user ? (
        <div className="flex items-center justify-between gap-5 px-5 py-6">
          <Button variant="outline" className="justify-start" asChild>
            <Link href="/bookings">
              <CalendarIcon size={18} className="mr-2" />
              Agendamentos
            </Link>
          </Button>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={data.user?.image ?? ""} />
            </Avatar>
            <h2 className="font-bold">{data.user.name}</h2>
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="secondary">
                Sair
                <LogOutIcon className="ml-3" />
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
        <div className="flex gap-3 px-5 py-6">
          <Button
            variant="default"
            className="w-full justify-start"
            onClick={handleLoginClick}
          >
            <CircleUser className="mr-2" size={18} /> Fazer login
          </Button>
        </div>
      )}
    </>
  );
};

export default DesktopMenu;
