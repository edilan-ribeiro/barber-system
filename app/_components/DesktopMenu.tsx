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

  const handleLoginGithub = () => signIn("github");
  const handleLoginGoogle = () => signIn("google");

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
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="default" className="w-full justify-start">
                <CircleUser className="mr-2" size={18} /> Fazer login
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="flex w-[400px] flex-col items-center">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-center">
                  Faça login na plataforma
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Conecte-se usando sua conta do Google ou Github.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="mt-2">
                <AlertDialogAction
                  className="w-[134px] border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                  asChild
                >
                  <Button variant="outline" onClick={handleLoginGoogle}>
                    <svg
                      className="mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M6 12a6 6 0 0 0 11.659 2H12v-4h9.805v4H21.8c-.927 4.564-4.962 8-9.8 8c-5.523 0-10-4.477-10-10S6.477 2 12 2a9.99 9.99 0 0 1 8.282 4.393l-3.278 2.295A6 6 0 0 0 6 12"
                      />
                    </svg>
                    Google
                  </Button>
                </AlertDialogAction>
                <AlertDialogAction
                  className="w-[134px] border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                  asChild
                >
                  <Button variant="outline" onClick={handleLoginGithub}>
                    <svg
                      className="mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="currentColor"
                        d="M20 10.25c0 2.234-.636 4.243-1.908 6.027c-1.271 1.784-2.914 3.018-4.928 3.703c-.234.045-.406.014-.514-.093a.539.539 0 0 1-.163-.4V16.67c0-.863-.226-1.495-.677-1.895a8.72 8.72 0 0 0 1.335-.24c.394-.107.802-.28 1.223-.52a3.66 3.66 0 0 0 1.055-.888c.282-.352.512-.819.69-1.402c.178-.583.267-1.252.267-2.008c0-1.077-.343-1.994-1.028-2.75c.32-.81.286-1.717-.105-2.723c-.243-.08-.594-.03-1.054.147a6.94 6.94 0 0 0-1.198.587l-.495.32a9.03 9.03 0 0 0-2.5-.346a9.03 9.03 0 0 0-2.5.347a11.52 11.52 0 0 0-.553-.36c-.23-.143-.593-.314-1.088-.514c-.494-.2-.868-.26-1.12-.18c-.381 1.005-.412 1.912-.09 2.722c-.686.756-1.03 1.673-1.03 2.75c0 .756.09 1.423.268 2.002c.178.578.406 1.045.683 1.401a3.53 3.53 0 0 0 1.048.894c.421.24.83.414 1.224.52c.395.108.84.188 1.335.241c-.347.32-.56.779-.638 1.375a2.539 2.539 0 0 1-.586.2a3.597 3.597 0 0 1-.742.067c-.287 0-.57-.096-.853-.287c-.282-.192-.523-.47-.723-.834a2.133 2.133 0 0 0-.631-.694c-.256-.178-.471-.285-.645-.32l-.26-.04c-.182 0-.308.02-.378.06c-.07.04-.09.09-.065.153a.738.738 0 0 0 .117.187a.961.961 0 0 0 .17.16l.09.066c.192.09.38.259.567.508c.187.249.324.476.41.68l.13.307c.113.338.304.612.574.821c.269.21.56.343.872.4c.312.058.614.09.905.094c.29.004.532-.011.723-.047l.299-.053c0 .338.002.734.007 1.188l.006.72c0 .16-.056.294-.17.4c-.112.108-.286.139-.52.094c-2.014-.685-3.657-1.92-4.928-3.703C.636 14.493 0 12.484 0 10.25c0-1.86.447-3.574 1.341-5.145a10.083 10.083 0 0 1 3.64-3.73A9.6 9.6 0 0 1 10 0a9.6 9.6 0 0 1 5.02 1.375a10.083 10.083 0 0 1 3.639 3.73C19.553 6.675 20 8.391 20 10.25"
                      />
                    </svg>
                    Github
                  </Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}
    </>
  );
};

export default DesktopMenu;
