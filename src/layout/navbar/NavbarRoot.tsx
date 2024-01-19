import { ReactNode } from "react";

interface NavbarRootProps {
  children: ReactNode;
}

function NavbarRoot({ children }: NavbarRootProps) {
  return (
    <nav className="flex fixed w-full justify-between pl-20 pr-20 my-5 text-zinc-950 dark:text-zinc-50">
      {children}
    </nav>
  );
}

export default NavbarRoot;
