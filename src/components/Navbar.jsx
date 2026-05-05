import { useState } from "react";

function Navbar({ setPagina }) {
  const [openUser, setOpenUser] = useState(false);

  const toggleUser = () => setOpenUser(!openUser);

  return (
    <nav className="navbar-pro">
      
      {/* IZQUIERDA */}
      <div className="navbar-left">
        <h2>Ñuble Turismo</h2>
      </div>

      {/* CENTRO */}
      <div className="navbar-center">
        <button onClick={() => setPagina("home")}>Inicio</button>
        <button onClick={() => setPagina("lugares")}>Lugares</button>
        <button onClick={() => setPagina("desafios")}>Desafíos</button>
        <button onClick={() => setPagina("mapa")}>Mapa</button>
      </div>

      {/* DERECHA - USUARIO */}
      <div style={{ position: "relative" }}>
        <button className="button-small" onClick={toggleUser}>
          Usuario ▾
        </button>

        {openUser && (
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "40px",
              background: "#111827",
              border: "1px solid #1f2937",
              borderRadius: "10px",
              padding: "10px",
              minWidth: "150px",
              zIndex: 999
            }}
          >
            <button
              onClick={() => setPagina("perfil")}
              style={{
                display: "block",
                width: "100%",
                background: "none",
                color: "#e5e7eb",
                border: "none",
                padding: "8px",
                textAlign: "left"
              }}
            >
              Perfil
            </button>

            <button
              onClick={() => setPagina("logros")}
              style={{
                display: "block",
                width: "100%",
                background: "none",
                color: "#e5e7eb",
                border: "none",
                padding: "8px",
                textAlign: "left"
              }}
            >
              Logros
            </button>

            <button
              onClick={() => {
                localStorage.removeItem("usuarioActivo");
                window.location.reload();
              }}
              style={{
                display: "block",
                width: "100%",
                background: "none",
                color: "#ef4444",
                border: "none",
                padding: "8px",
                textAlign: "left"
              }}
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;