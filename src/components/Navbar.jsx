import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useState, useEffect, useRef } from "react";

function Navbar({ setShowAuth }) {
  const { user, logout } = useUser();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const nivel = user ? Math.floor((user.puntos || 0) / 100) + 1 : 0;
  const progreso = user ? user.puntos % 100 : 0;

  // cerrar dropdown
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="navbar-pro">

      {/* LOGO */}
      <div className="navbar-left">
        <h2>Ñuble Turismo</h2>
      </div>

      {/* MENÚ */}
      <div className="navbar-center">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
          Inicio
        </NavLink>

        <NavLink to="/lugares" className={({ isActive }) => isActive ? "active" : ""}>
          Lugares
        </NavLink>

        <NavLink to="/desafios" className={({ isActive }) => isActive ? "active" : ""}>
          Desafíos
        </NavLink>

        <NavLink to="/mapa" className={({ isActive }) => isActive ? "active" : ""}>
          Mapa
        </NavLink>
      </div>

      {/* USUARIO */}
      <div ref={ref} className="navbar-user">

        {user ? (
          <>
            {/* BOTÓN */}
            <button
              className="user-btn"
              onClick={() => setOpen(!open)}
            >
              {/* AVATAR */}
              <div className="avatar">
                {user.email?.[0]?.toUpperCase()}
              </div>

              <div className="user-info">
                <span className="nivel">Nivel {nivel}</span>
                <span className="puntos">{user.puntos || 0} pts</span>
              </div>

              <span className={`arrow ${open ? "open" : ""}`}>▾</span>
            </button>

            {/* PROGRESO */}
            <div className="mini-progress">
              <div style={{ width: `${progreso}%` }} />
            </div>

            {/* DROPDOWN */}
            {open && (
              <div className="dropdown-user">
                <p className="email">{user.email}</p>

                <div className="dropdown-stats">
                  <span>Nivel {nivel}</span>
                  <span>{user.puntos || 0} puntos</span>
                </div>

                <button onClick={logout}>
                  Cerrar sesión
                </button>
              </div>
            )}
          </>
        ) : (
          <button
            className="button-small"
            onClick={() => setShowAuth(true)}
          >
            Iniciar sesión
          </button>
        )}

      </div>
    </nav>
  );
}

export default Navbar;