import Link from "next/link";
import { SheetContent } from "@/components/ui/sheet";

export default function MenuSheet() {
  return (
    <SheetContent side="left" className="lg:hidden">
      <div className="grid gap-4 p-4">
        <Link
          href="#"
          className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          prefetch={false}
        >
          Travel
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          prefetch={false}
        >
          Food
        </Link>
        <Link
          href="#"
          className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          prefetch={false}
        >
          More
        </Link>
      </div>
    </SheetContent>
  );
}
