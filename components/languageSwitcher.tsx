import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  return (
    <div className="flex gap-4">
      <Link href={`/en${pathname}`} className="text-blue-600">
        English
      </Link>
      <Link href={`/hi${pathname}`} className="text-green-600">
        हिन्दी
      </Link>
    </div>
  );
}
