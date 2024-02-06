import { Toaster } from "./components/ui/sonner";
import { Navbar } from "./layout/navbar/index.ts";
import AboutMePage from "./pages/AboutMe";
import ContactMePage from "./pages/ContactMe";
import { IntroPage } from "./pages/Intro";
import ProjectsPage from "./pages/Projects.tsx";
import SkillsPage from "./pages/Skills";
import Work from "./pages/Work";
import "./utils/i18n.ts";

// TODO: Add animations when scroll pages

function App() {
  return (
    <main className="dark:bg-slate-950">
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
      <Toaster />
    </main>
  );
}

export default App;
