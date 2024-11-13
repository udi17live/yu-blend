import React from "react";
import { Button } from "../ui/button";
import { ChevronUp } from "lucide-react";
import BackToTopButton from "../BackToTopButton";

export default function Footer() {
  return (
    <footer className="border-t flex justify-between items-center py-4 mt-auto">
      <div>Copyright &copy; 2024 YU Blends</div>
      <BackToTopButton />
    </footer>
  );
}
