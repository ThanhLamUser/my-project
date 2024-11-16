import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

if (window.location.pathname !== "/" && window.location.pathname !== "/success" &&  window.location.pathname !== "/cancel") {
  window.location.replace("/");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
