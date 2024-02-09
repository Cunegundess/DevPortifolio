import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import MessageRoot from "./routes/message-root.tsx";
import Root from "./routes/root.tsx";
import "./utils/i18n.ts";

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
      <Toaster richColors={false} />
    </main>
  );
}

export default App;
