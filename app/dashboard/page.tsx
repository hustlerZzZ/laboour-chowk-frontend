import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Briefcase, PlusCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
        <Button
          className="h-32 w-32 text-2xl bg-blue-600 hover:bg-blue-700 text-white flex flex-col items-center justify-center gap-2"
          asChild
        >
          <Link href="/dashboard/labour">
            <Briefcase className="w-10 h-10" /> Apply
          </Link>
        </Button>
        <Button
          className="h-32 w-32 text-2xl bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 flex flex-col items-center justify-center gap-2"
          asChild
        >
          <Link href="/dashboard/user">
            <PlusCircle className="w-10 h-10" /> Post
          </Link>
        </Button>
      </div>
    </div>
  );
}
