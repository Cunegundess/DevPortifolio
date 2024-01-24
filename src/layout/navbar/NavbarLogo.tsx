import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

function NavbarLogo() {
  return (
    <Avatar>
      <AvatarFallback>LC</AvatarFallback>
      <AvatarImage
        className="h-[40px] w-[40px] rounded-full"
        src="https://github.com/cunegundess.png"
        alt="@Cunegundess"
      />
    </Avatar>
  );
}

export default NavbarLogo;
