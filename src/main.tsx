import {createRoot} from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import {HelmetProvider} from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </ThemeProvider>,
);
