import { ReactNode } from "react";

interface NavbarRootProps {
  children: ReactNode;
}

function NavbarRoot({ children }: NavbarRootProps) {
  return (
    <nav className="flex fixed z-50 w-full h-16 justify-between items-center pl-4 lg:pl-20 pr-4 lg:pr-20 mb-2 lg:mb-5 text-gray-950 bg-white dark:bg-gray-950 dark:text-gray-50">
      {children}
    </nav>
  );
}

export default NavbarRoot;
