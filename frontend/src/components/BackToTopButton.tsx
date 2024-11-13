"use client";

import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button variant={"outline"} onClick={handleScrollToTop}>
      <ChevronUp />
      <span className="hidden md:inline">Back to top</span>
    </Button>
  );
}
