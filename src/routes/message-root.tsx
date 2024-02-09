import { Navbar } from "@/layout/navbar";
import MessagePage from "@/pages/message";

function MessageRoot() {
  return (
    <>
      <Navbar.Root>
        <Navbar.Logo />
        <Navbar.Content />
      </Navbar.Root>
      <MessagePage />
    </>
  );
}

export default MessageRoot;
