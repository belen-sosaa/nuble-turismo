import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App.jsx";
import { UserProvider } from "./context/UserContext";

import "./index.css";
import "./styles.css";
import "leaflet/dist/leaflet.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </HashRouter>
  </StrictMode>
);