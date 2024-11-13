import Link from "next/link";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export default function SearchDialog() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="sr-only">Search</DialogTitle>
      </DialogHeader>
      <Command className="bg-transparent">
        <CommandInput placeholder="Search Articles ..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandList>
      </Command>
    </DialogContent>
  );
}
