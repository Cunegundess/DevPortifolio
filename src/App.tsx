import { Toaster } from "./components/ui/sonner";
import { projects } from "./data/projects";
import { Navbar } from "./layout/navbar";
import AboutMePage from "./pages/AboutMe";
import ContactMePage from "./pages/ContactMe";
import { IntroPage } from "./pages/Intro";
import ProjectsPage from "./pages/Projects";
import SkillsPage from "./pages/Skills";
import Work from "./pages/Work";

// TODO: Add animations when scroll pages
// TODO: Add the feature of translating the page

function App() {
  return (
    <main className="h-screen0 dark:bg-gray-950">
      <Navbar.Root>
        <Navbar.Logo />
        <Navbar.Content />
      </Navbar.Root>

      <IntroPage />
      <AboutMePage />
      <SkillsPage />
      <Work />
      <ProjectsPage projects={projects} />
      <ContactMePage />

      <Toaster />
    </main>
  );
}

export default App;
