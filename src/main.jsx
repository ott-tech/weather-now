import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { UnitProvider } from "./Context/UnitContext";
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./Context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
    <UnitProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </UnitProvider>
    </ThemeProvider>
  </StrictMode>
);