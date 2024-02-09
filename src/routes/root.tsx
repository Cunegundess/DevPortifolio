import { Navbar } from "@/layout/navbar";
import AboutMePage from "@/pages/about-me";
import ContactMePage from "@/pages/contact-me";
import { IntroPage } from "@/pages/intro";
import ProjectsPage from "@/pages/projects";
import SkillsPage from "@/pages/skills";
import Work from "@/pages/work";

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
