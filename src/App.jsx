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
      {user && <Navbar />}

      {user && (
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <p>Usuario: {user.email}</p>
          <button className="button" onClick={logout}>
            Cerrar sesión
          </button>
        </div>
      )}

      <Routes>
        {!user ? (
          <Route path="*" element={<Auth setUser={setUser} />} />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/lugares" element={<Lugares />} />
            <Route path="/desafios" element={<Desafios />} />
            <Route path="/mapa" element={<Mapa />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;