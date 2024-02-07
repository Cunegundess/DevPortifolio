import { Navbar } from "@/layout/navbar";
import AboutMePage from "@/pages/AboutMe";
import ContactMePage from "@/pages/ContactMe";
import { IntroPage } from "@/pages/Intro";
import ProjectsPage from "@/pages/Projects";
import SkillsPage from "@/pages/Skills";
import Work from "@/pages/Work";

function Root() {
  return (
    <>
      <Navbar.Root>
        <Navbar.Logo />
        <Navbar.Content />
      </Navbar.Root>
      <IntroPage />
      <AboutMePage />
      <SkillsPage />
      <ProjectsPage />
      <Work />
      <ContactMePage />
    </>
  );
}

export default Root;
