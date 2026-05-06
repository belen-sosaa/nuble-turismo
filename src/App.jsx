import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Lugares from "./pages/Lugares";
import Desafios from "./pages/Desafios";
import Mapa from "./pages/Mapa";
import Auth from "./pages/Auth";

import PageTransition from "./components/PageTransition";

function App() {
  const location = useLocation();

  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);

  // 🔹 CARGAR SESIÓN
  useEffect(() => {
    const activo = localStorage.getItem("usuarioActivo");
    if (activo) setUser(JSON.parse(activo));
  }, []);

  // 🔹 LOGOUT
  const logout = () => {
    localStorage.removeItem("usuarioActivo");
    setUser(null);
  };

  return (
    <>
      <Navbar user={user} logout={logout} openAuth={() => setShowAuth(true)} />

      {showAuth && (
        <Auth setUser={setUser} close={() => setShowAuth(false)} />
      )}

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

          {/* ✅ DESAFÍOS PÚBLICOS */}
          <Route
            path="/desafios"
            element={
              <PageTransition>
                <Desafios
                  user={user}
                  setUser={setUser}
                  openAuth={() => setShowAuth(true)}
                />
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