import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const mainDIV = document.getElementById("root")!;

createRoot(mainDIV).render(
  <StrictMode>
    <App />
  </StrictMode>
);
