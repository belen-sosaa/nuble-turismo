import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Lugares from "./pages/Lugares";
import Desafios from "./pages/Desafios";
import Mapa from "./pages/Mapa";

import { useState } from "react";

function App() {
  const [pagina, setPagina] = useState("home");

  const render = () => {
    if (pagina === "home") return <Home />;
    if (pagina === "lugares") return <Lugares />;
    if (pagina === "desafios") return <Desafios />;
    if (pagina === "mapa") return <Mapa />;
    return <Home />;
  };

  return (
    <>
      <Navbar setPagina={setPagina} />
      {render()}
    </>
  );
}

export default App;