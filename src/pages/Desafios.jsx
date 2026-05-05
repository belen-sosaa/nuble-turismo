import { useState, useEffect } from "react";

function Desafios() {
  const [puntos, setPuntos] = useState(0);

  const [desafios, setDesafios] = useState([
    { id: 1, titulo: "Visita un mirador", descripcion: "Sube una foto desde un mirador", completado: false, puntos: 50 },
    { id: 2, titulo: "Explora una plaza", descripcion: "Visita una plaza de Ñuble", completado: false, puntos: 30 },
    { id: 3, titulo: "Ruta de montaña", descripcion: "Completa una caminata en la montaña", completado: false, puntos: 70 }
  ]);

  const [logros, setLogros] = useState([
    { id: 1, nombre: "Primer paso", condicion: "Completa 1 desafío", desbloqueado: false },
    { id: 2, nombre: "Explorador", condicion: "Gana 100 puntos", desbloqueado: false },
    { id: 3, nombre: "Aventurero", condicion: "Completa todos los desafíos", desbloqueado: false }
  ]);

  // Cargar datos
  useEffect(() => {
    const datosGuardados = localStorage.getItem("progreso");

    if (datosGuardados) {
      const datos = JSON.parse(datosGuardados);
      setPuntos(datos.puntos);
      setDesafios(datos.desafios);
      if (datos.logros) setLogros(datos.logros);
    }
  }, []);

  // Guardar datos
  useEffect(() => {
    localStorage.setItem(
      "progreso",
      JSON.stringify({ puntos, desafios, logros })
    );
  }, [puntos, desafios, logros]);

  // Completar desafío
  const completarDesafio = (id) => {
    const nuevosDesafios = desafios.map((d) => {
      if (d.id === id && !d.completado) {
        setPuntos((prev) => prev + d.puntos);
        return { ...d, completado: true };
      }
      return d;
    });

    setDesafios(nuevosDesafios);
  };

  // Verificar logros
  useEffect(() => {
    const completados = desafios.filter(d => d.completado).length;

    const nuevosLogros = logros.map((l) => {
      if (l.id === 1 && completados >= 1) return { ...l, desbloqueado: true };
      if (l.id === 2 && puntos >= 100) return { ...l, desbloqueado: true };
      if (l.id === 3 && completados === desafios.length) return { ...l, desbloqueado: true };
      return l;
    });

    setLogros(nuevosLogros);
  }, [puntos, desafios]);

  // Nivel
  const nivel = Math.floor(puntos / 100) + 1;
  const progreso = puntos % 100;

  return (
    <div className="container">
      <h1>Desafíos</h1>

      <h2>Puntos: {puntos}</h2>
      <h3>Nivel: {nivel}</h3>

      {/* Barra progreso */}
      <div style={{
        height: "20px",
        background: "#ddd",
        borderRadius: "10px",
        overflow: "hidden",
        marginBottom: "20px"
      }}>
        <div style={{
          width: `${progreso}%`,
          background: "#f8c8dc",
          height: "100%"
        }}></div>
      </div>

      <p>{progreso}/100 puntos para el siguiente nivel</p>

      {/* Logros */}
      <h2>Logros</h2>
      <div className="grid">
        {logros.map((l) => (
          <div
            key={l.id}
            className="card"
            style={{
              background: l.desbloqueado ? "#d4edda" : "#eee"
            }}
          >
            <div className="card-content">
              <h3>{l.nombre}</h3>
              <p>{l.condicion}</p>
              <p>{l.desbloqueado ? "Desbloqueado" : "Bloqueado"}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desafíos */}
      <h2 style={{ marginTop: "30px" }}>Lista de desafíos</h2>

      <div className="grid">
        {desafios.map((d) => (
          <div className="card" key={d.id}>
            <div className="card-content">
              <h3>{d.titulo}</h3>
              <p>{d.descripcion}</p>
              <p>+{d.puntos} puntos</p>

              <button
                className="button"
                onClick={() => completarDesafio(d.id)}
                disabled={d.completado}
              >
                {d.completado ? "Completado" : "Completar"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Desafios;