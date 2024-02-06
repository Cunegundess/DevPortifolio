import { ReactNode } from "react";

interface NavbarRootProps {
  children: ReactNode;
}

function NavbarRoot({ children }: NavbarRootProps) {
  return (
    <nav className="flex fixed z-50 w-full h-16 justify-between items-center px-5 lg:px-20 text-zinc-950 bg-white dark:bg-slate-950 dark:text-zinc-50">
      {children}
    </nav>
  );
}

export default NavbarRoot;
