import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import VisuallyHidden from "../ui/visually-hidden";
import MenuSheet from "./MenuSheet";

export default function MobileMenuIcon() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full lg:hidden">
          <Menu className="cursor-pointer h-5 w-5" />
          <VisuallyHidden>Toggle navigation menu</VisuallyHidden>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-4 sr-only">
        <DialogTitle className="sr-only">Mobile Menu</DialogTitle>
        <MenuSheet />
      </DialogContent>
    </Dialog>
  );
}
