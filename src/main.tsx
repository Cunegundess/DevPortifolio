import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";

import { I18nextProvider } from "react-i18next";
import App from "./App.tsx";
import i18n from "./utils/i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
