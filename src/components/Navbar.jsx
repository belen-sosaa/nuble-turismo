function Navbar({ setPagina }) {
  return (
    <nav>
      <button onClick={() => setPagina("home")}>Inicio</button>
      <button onClick={() => setPagina("lugares")}>Lugares</button>
      <button onClick={() => setPagina("desafios")}>Desafíos</button>
      <button onClick={() => setPagina("mapa")}>Mapa</button>
    </nav>
  );
}

export default Navbar;