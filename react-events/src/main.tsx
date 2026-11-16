import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Providers from "./app/Providers.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <header>Header</header>
    <Providers></Providers>
    <footer>Footer</footer>
  </StrictMode>,
);
