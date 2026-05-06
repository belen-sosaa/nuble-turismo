import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Lugares from "./pages/Lugares";
import Desafios from "./pages/Desafios";
import Mapa from "./pages/Mapa";

import PageTransition from "./components/PageTransition";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />

          <Route
            path="/lugares"
            element={
              <PageTransition>
                <Lugares />
              </PageTransition>
            }
          />

          <Route
            path="/desafios"
            element={
              <PageTransition>
                <Desafios />
              </PageTransition>
            }
          />

          <Route
            path="/mapa"
            element={
              <PageTransition>
                <Mapa />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;