import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-3/5 w-full flex-row items-center justify-center text-2xl">
      <h2>Carregando</h2>
      <Loader2 className="ml-2 h-6 w-6 animate-spin" />
    </div>
  );
}
