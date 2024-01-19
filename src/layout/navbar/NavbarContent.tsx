import ThemeToggle from "../../components/ThemeToggle";

function NavbarContent() {
  return (
    <ul className="flex flex-col lg:flex-row lg:gap-10 font-medium items-center">
      <li className="mb-2 lg:mb-0">Home</li>
      <li className="mb-2 lg:mb-0">Work</li>
      <li className="mb-2 lg:mb-0">Projects</li>
      <li className="mb-2 lg:mb-0">Contact</li>
      <ThemeToggle />
    </ul>
  );
}

export default NavbarContent;
