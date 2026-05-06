import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useState, useEffect, useRef } from "react";

function Navbar({ setShowAuth }) {
  const { user, logout } = useUser();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const nivel = user ? Math.floor((user.puntos || 0) / 100) + 1 : 0;
  const progreso = user ? user.puntos % 100 : 0;

  // Cerrar dropdown al hacer click afuera
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
      
      {/* IZQUIERDA */}
      <div className="navbar-left">
        <h2>Ñuble Turismo</h2>
      </div>

      {/* CENTRO */}
      <div className="navbar-center">
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
        <NavLink to="/lugares" className={({ isActive }) => isActive ? "active" : ""}>Lugares</NavLink>
        <NavLink to="/desafios" className={({ isActive }) => isActive ? "active" : ""}>Desafíos</NavLink>
        <NavLink to="/mapa" className={({ isActive }) => isActive ? "active" : ""}>Mapa</NavLink>
      </div>

      {/* DERECHA */}
      <div ref={ref} style={{ position: "relative", textAlign: "right" }}>
        
        {user ? (
          <>
            {/* BOTÓN USUARIO */}
            <button
              className="button-small"
              onClick={() => setOpen(!open)}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              {/* Avatar */}
              <span style={{
                background: "#38bdf8",
                borderRadius: "50%",
                width: "28px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold"
              }}>
                {user.email[0].toUpperCase()}
              </span>

              Nivel {nivel} • {user.puntos || 0} pts ▾
            </button>

            {/* BARRA PROGRESO */}
            <div style={{
              width: "140px",
              height: "6px",
              background: "#1f2937",
              borderRadius: "10px",
              marginTop: "6px",
              marginLeft: "auto"
            }}>
              <div style={{
                width: `${progreso}%`,
                height: "100%",
                background: "#38bdf8",
                borderRadius: "10px"
              }} />
            </div>

            {/* DROPDOWN */}
            {open && (
              <div className="dropdown-user">
                <p>{user.email}</p>
                <p>Nivel {nivel}</p>
                <p>{user.puntos || 0} puntos</p>

                <button onClick={logout}>Cerrar sesión</button>
              </div>
            )}
          </>
        ) : (
          <button className="button-small" onClick={() => setShowAuth(true)}>
            Iniciar sesión
          </button>
        )}

      </div>
    </nav>
  );
}

export default Navbar;