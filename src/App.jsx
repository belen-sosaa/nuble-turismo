import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Lugares from "./pages/Lugares";
import Desafios from "./pages/Desafios";
import Auth from "./pages/Auth";
import Mapa from "./pages/Mapa";

function App() {
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    const activo = localStorage.getItem("usuarioActivo");
    if (activo) setUser(JSON.parse(activo));
  }, []);

  const logout = () => {
    localStorage.removeItem("usuarioActivo");
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Navbar
        user={user}
        setShowAuth={setShowAuth}
        logout={logout}
      />

      {showAuth && <Auth setUser={setUser} close={() => setShowAuth(false)} />}

      <Routes>
        {/* PÚBLICAS */}
        <Route path="/" element={<Home />} />
        <Route path="/lugares" element={<Lugares />} />
        <Route path="/mapa" element={<Mapa />} />

        {/* PRIVADA (desafíos) */}
        <Route
          path="/desafios"
          element={
            user ? (
              <Desafios user={user} />
            ) : (
              <div style={{ padding: 40, textAlign: "center" }}>
                <h2>Debes iniciar sesión para ver los desafíos</h2>
                <button onClick={() => setShowAuth(true)} className="button">
                  Iniciar sesión
                </button>
              </div>
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;