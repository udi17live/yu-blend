import Link from "next/link";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Search } from "lucide-react";
import SearchDialog from "./SearchDialog";

export default function SearchButton() {
  return (
    <Dialog>
      <DialogTrigger>
        <Search className="cursor-pointer h-5 w-5" />
      </DialogTrigger>
      <SearchDialog />
    </Dialog>
  );
}
