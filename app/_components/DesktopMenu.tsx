import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  LogOutIcon,
  CalendarIcon,
  CircleUser,
} from "lucide-react";
import Link from "next/link";

const DesktopMenu = () => {
  const { data } = useSession();

  const handleLogoutClick = () => signOut();

  const handleLoginClick = () => signIn("google");

  return (
    <>
      {data?.user ? (
        <div className="mr-3 flex items-center justify-between px-5 py-6 gap-5">
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

          <Button variant="secondary"  onClick={handleLogoutClick} >
            Sair
            <LogOutIcon className="ml-3"/>
          </Button>
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
