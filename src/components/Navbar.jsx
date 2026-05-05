import { Link } from "react-router-dom";

function Navbar({ user, setShowAuth, logout }) {
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

      <div>
        {!user ? (
          <button className="button-small" onClick={() => setShowAuth(true)}>
            Iniciar sesión
          </button>
        ) : (
          <button className="button-small" onClick={logout}>
            Cerrar sesión
          </button>
        )}
      </div>

    </nav>
  );
}

export default Navbar;