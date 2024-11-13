// components/ui/DropdownMenuContentClient.tsx
"use client";

import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

interface DropdownMenuContentClientProps {
  categories: string[];
}

export default function DropdownMenuContentModule({
  categories,
}: DropdownMenuContentClientProps) {
  return (
    <DropdownMenuContent
      align="start"
      side="bottom"
      className="w-[200px] mt-2 bg-white shadow-lg rounded-md border border-gray-200 z-50"
    >
      {categories.map((category) => (
        <DropdownMenuItem key={category} asChild>
          <Link
            href={`/${category.toLowerCase()}`}
            className="w-full px-4 py-2 block text-sm text-gray-700 hover:bg-gray-100"
          >
            {category}
          </Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  );
}
