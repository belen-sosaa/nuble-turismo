import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar({ user, setShowAuth, logout }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar-pro">
      <div className="navbar-left">
        <h2>Explora Ñuble</h2>
      </div>

      <div className="navbar-center">
        <Link to="/">Inicio</Link>
        <Link to="/lugares">Lugares</Link>
        <Link to="/mapa">Mapa</Link>
        <Link to="/desafios">Desafíos</Link>
      </div>

      <div className="navbar-right">
        {!user ? (
          <button className="button-small" onClick={() => setShowAuth(true)}>
            Iniciar sesión
          </button>
        ) : (
          <div style={{ position: "relative" }}>
            <button
              className="button-small"
              onClick={() => setOpen(!open)}
            >
              👤
            </button>

            {open && (
              <div className="dropdown">
                <p style={{ fontSize: "12px", marginBottom: "8px" }}>
                  {user.email}
                </p>
                <button onClick={logout} className="button-small">
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;