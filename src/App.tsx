import { Navbar } from "./layout/navbar";
import { IntroPage } from "./pages/Intro";

function App() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950">
      <Navbar.Root>
        <Navbar.Logo />
        <Navbar.Content />
      </Navbar.Root>

      <IntroPage />
    </div>
  );
}

export default App;
