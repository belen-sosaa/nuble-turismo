import { useState, useEffect } from "react";

function calcularNivel(puntos) {
  if (puntos < 100) return 1;
  if (puntos < 250) return 2;
  if (puntos < 500) return 3;
  return 4;
}

function Desafios() {
  const [puntos, setPuntos] = useState(0);
  const [nivel, setNivel] = useState(1);

  const [desafios, setDesafios] = useState([
    { id: 1, titulo: "Visita un mirador", descripcion: "Sube una foto desde un mirador", completado: false, puntos: 50 },
    { id: 2, titulo: "Explora una plaza", descripcion: "Visita una plaza de Ñuble", completado: false, puntos: 30 },
    { id: 3, titulo: "Ruta de montaña", descripcion: "Completa una caminata en la montaña", completado: false, puntos: 70 }
  ]);

  const [logros, setLogros] = useState([
    { id: 1, nombre: "Primer paso", desbloqueado: false },
    { id: 2, nombre: "Explorador", desbloqueado: false },
    { id: 3, nombre: "Aventurero", desbloqueado: false }
  ]);

  // CARGAR DATOS
  useEffect(() => {
    const data = localStorage.getItem("progreso");
    if (data) {
      const parsed = JSON.parse(data);
      setPuntos(parsed.puntos || 0);
      setDesafios(parsed.desafios || desafios);
      setLogros(parsed.logros || logros);
    }
  }, []);

  // GUARDAR DATOS
  useEffect(() => {
    localStorage.setItem(
      "progreso",
      JSON.stringify({ puntos, desafios, logros, nivel })
    );
  }, [puntos, desafios, logros, nivel]);

  // COMPLETAR DESAFÍO
  const completarDesafio = (id) => {
    setDesafios((prev) =>
      prev.map((d) => {
        if (d.id === id && !d.completado) {
          const nuevosPuntos = puntos + d.puntos;
          setPuntos(nuevosPuntos);
          setNivel(calcularNivel(nuevosPuntos));
          return { ...d, completado: true };
        }
        return d;
      })
    );
  };

  // LOGROS (REGLAS SIMPLES Y ESTABLES)
  useEffect(() => {
    const completados = desafios.filter((d) => d.completado).length;

    setLogros((prev) =>
      prev.map((l) => {
        if (l.id === 1 && completados >= 1) return { ...l, desbloqueado: true };
        if (l.id === 2 && puntos >= 100) return { ...l, desbloqueado: true };
        if (l.id === 3 && completados === desafios.length) return { ...l, desbloqueado: true };
        return l;
      })
    );
  }, [puntos, desafios]);

  const progresoNivel = puntos % 100;

  return (
    <div className="container">
      <h1>Desafíos</h1>

      <h2>Puntos: {puntos}</h2>
      <h3>Nivel: {nivel}</h3>

      {/* PROGRESO */}
      <div style={{
        height: "18px",
        background: "#222",
        borderRadius: "10px",
        overflow: "hidden",
        marginBottom: "10px"
      }}>
        <div style={{
          width: `${progresoNivel}%`,
          background: "#22c55e",
          height: "100%"
        }} />
      </div>

      <p>{progresoNivel}/100 para subir de nivel</p>

      {/* LOGROS */}
      <h2>Logros</h2>
      <div className="grid">
        {logros.map((l) => (
          <div
            key={l.id}
            className="card"
            style={{
              background: l.desbloqueado ? "#1f2937" : "#111",
              color: "white",
              opacity: l.desbloqueado ? 1 : 0.5
            }}
          >
            <div className="card-content">
              <h3>{l.nombre}</h3>
              <p>{l.desbloqueado ? "Desbloqueado" : "Bloqueado"}</p>
            </div>
          </div>
        ))}
      </div>

      {/* DESAFÍOS */}
      <h2>Desafíos</h2>
      <div className="grid">
        {desafios.map((d) => (
          <div key={d.id} className="card">
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