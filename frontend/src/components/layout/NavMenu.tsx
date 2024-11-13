// import NavItem from "@/interfaces/NavItem";
// import { ChevronDown, Home } from "lucide-react";
// import Link from "next/link";

// interface NavMenuItemsProps {
//   navItems: NavItem[];
// }

// export default function NavMenu({ navItems }: NavMenuItemsProps) {
//   return (
//     <nav className="hidden lg:flex flex-1 justify-center space-x-6">
//       <ul className="flex items-center space-x-6">
//         <li>
//           <Link href="/" className="flex items-center">
//             <Home className="h-6 w-6" aria-label="Home" />
//           </Link>
//         </li>

//         {navItems.map((item) => (
//           <li key={item.name} className="relative group">
//             <Link
//               href={item.href}
//               className={`text-sm font-medium hover:text-gray-900 no-underline ${
//                 item.current ? "text-gray-900" : "text-gray-700"
//               } flex items-center`}
//             >
//               {item.name}
//               {item.dropdown && (
//                 <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
//               )}
//             </Link>

//             {item.dropdown && (
//               <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md border border-gray-200 w-[200px] mt-0">
//                 {item.dropdown.map((subItem) => (
//                   <li key={subItem.name}>
//                     <Link
//                       href={subItem.href}
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline"
//                     >
//                       {subItem.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

import NavItem from "@/interfaces/NavItem";
import { ChevronDown, Home } from "lucide-react";
import Link from "next/link";

interface NavMenuItemsProps {
  navItems: NavItem[];
}

export default function NavMenu({ navItems }: NavMenuItemsProps) {
  return (
    <nav className="hidden lg:flex flex-1 justify-center space-x-6">
      <ul className="flex items-center space-x-6">
        <li>
          <Link href="/" className="flex items-center">
            <Home className="h-6 w-6" aria-label="Home" />
          </Link>
        </li>

        {navItems.map((item) => (
          <li key={item.name} className="relative group">
            <Link
              href={item.href}
              className={`text-sm font-medium hover:no-underline flex items-center`}
            >
              {item.name}
              {item.dropdown && (
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
              )}
            </Link>

            {item.dropdown && (
              <ul className="absolute left-0 hidden group-hover:block shadow-lg rounded-md border w-[200px] mt-0">
                {item.dropdown.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.href}
                      className="block px-4 py-2 text-sm no-underline"
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
