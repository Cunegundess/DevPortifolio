import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import MessageRoot from "./routes/MessageRoot.tsx";
import Root from "./routes/Root.tsx";
import "./utils/i18n.ts";

// TODO: Add animations when scroll pages

function App() {
  const [t] = useTranslation("translation");
  return (
    <main className="dark:bg-slate-950">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path={`/${t("Navbar.Message")}`} element={<MessageRoot />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </main>
  );
}

export default App;
