import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FloatingCTA } from "./components/floating-cta";
import { Toaster } from "./components/ui/sonner";
import MessageRoot from "./routes/message-root.tsx";
import Root from "./routes/root.tsx";
import "./utils/i18n.ts";

// Criar QueryClient uma vez
const queryClient = new QueryClient();

function App() {
  const [t] = useTranslation("translation");
  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-background dark:bg-background">
        <BrowserRouter>
          <FloatingCTA />
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path={`/${t("Navbar.Message")}`} element={<MessageRoot />} />
          </Routes>
        </BrowserRouter>
        <Toaster richColors={false} />
      </main>
    </QueryClientProvider>
  );
}

export default App;
