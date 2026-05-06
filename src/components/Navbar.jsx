import { Link } from "react-router-dom";

function Navbar() {
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
    </nav>
  );
}

export default Navbar;