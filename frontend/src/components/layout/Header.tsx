import { Moon } from "lucide-react";
import MobileMenuIcon from "./MobileMenuIcon";
import Logo from "../Logo";
import NavMenuItems from "./NavMenu";
import NavItem from "@/interfaces/NavItem";
import SearchButton from "./SearchButton";
import ThemeToggle from "../ThemeToggle";

const navItems: NavItem[] = [
  {
    name: "Travel",
    href: "/travel",
    current: false,
  },
  {
    name: "Food",
    href: "/food",
    current: false,
  },
  {
    name: "Tech",
    href: "/tech",
    current: false,
  },
  {
    name: "More",
    href: "#",
    current: false,
    dropdown: [
      {
        name: "Lifestyle",
        href: "/lifestyle",
        current: false,
      },
      {
        name: "Health",
        href: "/health",
        current: false,
      },
      {
        name: "Entertainment",
        href: "/entertainment",
        current: false,
      },
      {
        name: "Sports",
        href: "/sports",

        current: false,
      },
      {
        name: "Business",
        href: "/business",
        current: false,
      },
    ],
  },
];

export default function Header() {
  return (
    <header className="border-b">
      <div className="flex justify-between items-center py-6 w-full">
        <Logo />
        <NavMenuItems navItems={navItems} />
        <div className="flex items-center gap-6 w-[200px] justify-end">
          <SearchButton />
          <ThemeToggle />
          <MobileMenuIcon />
        </div>
      </div>
    </header>
  );
}
