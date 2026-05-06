import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useState } from "react";

function Navbar() {
  const { user, logout } = useUser();
  const [open, setOpen] = useState(false);

  const nivel = user ? Math.floor((user.puntos || 0) / 100) + 1 : 0;

  return (
    <nav className="navbar-pro">
      <div className="navbar-left">
        <h2>Ñuble Turismo</h2>
      </div>

      <div className="navbar-center">
        <Link to="/">Inicio</Link>
        <Link to="/lugares">Lugares</Link>
        <Link to="/desafios">Desafíos</Link>
        <Link to="/mapa">Mapa</Link>
      </div>

      <div style={{ position: "relative" }}>
        {user ? (
          <button className="button-small" onClick={() => setOpen(!open)}>
            Nivel {nivel} • {user.puntos || 0} pts ▾
          </button>
        ) : (
          <span style={{ color: "#94a3b8" }}>Invitado</span>
        )}

        {open && user && (
          <div className="dropdown-user">
            <p>{user.email}</p>
            <p>Nivel {nivel}</p>
            <p>{user.puntos || 0} puntos</p>

            <button onClick={logout}>Cerrar sesión</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;