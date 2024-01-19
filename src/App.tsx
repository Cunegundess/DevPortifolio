import { Navbar } from "./layout/navbar";
import AboutMePage from "./pages/AboutMe";
import ContactMePage from "./pages/ContactMe";
import { IntroPage } from "./pages/Intro";
import ProjectsPage from "./pages/Projects";
import Work from "./pages/Work";

function App() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950">
      <Navbar.Root>
        <Navbar.Logo />
        <Navbar.Content />
      </Navbar.Root>

      <IntroPage />
      <AboutMePage />
      <Work />
      <ProjectsPage />
      <ContactMePage />
    </div>
  );
}

export default App;
