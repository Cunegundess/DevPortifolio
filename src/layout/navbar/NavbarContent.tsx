import ThemeToggle from "../../components/ThemeToggle";

function NavbarContent() {
  return (
    <ul className="flex gap-10 flex-row font-medium items-center">
      <li>Home</li>
      <li>Work</li>
      <li>Projects</li>
      <li>Contact</li>
      <ThemeToggle />
    </ul>
  );
}

export default NavbarContent;
