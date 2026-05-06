import logo from "../assets/images/ChatGPT Image 5 may 2026, 08_03_14 p.m..png";

function Navbar({ setPagina }) {
  return (
    <nav className="navbar-pro">

      <div className="navbar-left" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={logo}
          alt="Logo Ñuble Turismo"
          style={{ width: "40px", height: "40px", objectFit: "contain" }}
        />
        <h2>Ñuble Turismo</h2>
      </div>

      <div className="navbar-center">
        <button onClick={() => setPagina("home")}>Inicio</button>
        <button onClick={() => setPagina("lugares")}>Lugares</button>
        <button onClick={() => setPagina("desafios")}>Desafíos</button>
        <button onClick={() => setPagina("mapa")}>Mapa</button>
      </div>

    </nav>
  );
}

export default Navbar;