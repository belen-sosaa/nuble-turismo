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
    {
      id: 1,
      titulo: "📍 Mirador de Chillán",
      descripcion: "Sube una foto desde un mirador panorámico",
      completado: false,
      puntos: 50
    },
    {
      id: 2,
      titulo: "🌳 Plaza de Armas",
      descripcion: "Explora el centro histórico de Chillán",
      completado: false,
      puntos: 30
    },
    {
      id: 3,
      titulo: "⛰ Ruta de Montaña",
      descripcion: "Completa una caminata en la precordillera",
      completado: false,
      puntos: 70
    },
    {
      id: 4,
      titulo: "♨ Termas de Chillán",
      descripcion: "Visita las termas y captura el momento",
      completado: false,
      puntos: 80
    },
    {
      id: 5,
      titulo: "🌄 Valle Las Trancas",
      descripcion: "Explora el valle y sus paisajes naturales",
      completado: false,
      puntos: 60
    },
    {
      id: 6,
      titulo: "📸 Ruta Fotográfica",
      descripcion: "Toma 3 fotos de distintos lugares turísticos",
      completado: false,
      puntos: 90
    }
  ]);

  const [logros, setLogros] = useState([
    { id: 1, nombre: "Primer paso", desbloqueado: false },
    { id: 2, nombre: "Explorador", desbloqueado: false },
    { id: 3, nombre: "Aventurero", desbloqueado: false }
  ]);

  // CARGAR
  useEffect(() => {
    const data = localStorage.getItem("progreso");
    if (data) {
      const parsed = JSON.parse(data);
      setPuntos(parsed.puntos || 0);
      setDesafios(parsed.desafios || desafios);
      setLogros(parsed.logros || logros);
    }
  }, []);

  // GUARDAR
  useEffect(() => {
    localStorage.setItem(
      "progreso",
      JSON.stringify({ puntos, desafios, logros, nivel })
    );
  }, [puntos, desafios, logros, nivel]);

  // COMPLETAR
  const completarDesafio = (id) => {
    setDesafios((prev) =>
      prev.map((d) => {
        if (d.id === id && !d.completado) {
          const nuevos = puntos + d.puntos;
          setPuntos(nuevos);
          setNivel(calcularNivel(nuevos));
          return { ...d, completado: true };
        }
        return d;
      })
    );
  };

  // LOGROS
  useEffect(() => {
    const completados = desafios.filter((d) => d.completado).length;

    setLogros((prev) =>
      prev.map((l) => {
        if (l.id === 1 && completados >= 1) return { ...l, desbloqueado: true };
        if (l.id === 2 && puntos >= 150) return { ...l, desbloqueado: true };
        if (l.id === 3 && completados === desafios.length) return { ...l, desbloqueado: true };
        return l;
      })
    );
  }, [puntos, desafios]);

  const progreso = puntos % 100;

  return (
    <div className="container">
      <h1>🎮 Aventura Ñuble</h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2>⭐ Puntos: {puntos}</h2>
        <h3>🏅 Nivel: {nivel}</h3>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progreso}%` }} />
        </div>

        <p style={{ color: "#94a3b8" }}>
          {progreso}/100 para subir de nivel
        </p>
      </div>

      {/* LOGROS */}
      <h2>🏆 Logros</h2>
      <div className="grid">
        {logros.map((l) => (
          <div
            key={l.id}
            className="card"
            style={{
              opacity: l.desbloqueado ? 1 : 0.5,
              border: l.desbloqueado ? "1px solid #22c55e" : "1px solid #1f2937"
            }}
          >
            <div className="card-content">
              <h3>{l.nombre}</h3>
              <p>{l.desbloqueado ? "✔ Desbloqueado" : "🔒 Bloqueado"}</p>
            </div>
          </div>
        ))}
      </div>

      {/* DESAFÍOS */}
      <h2 style={{ marginTop: "30px" }}>🗺 Misiones de exploración</h2>

      <div className="grid">
        {desafios.map((d) => (
          <div key={d.id} className="card">
            <div className="card-content">
              <h3>{d.titulo}</h3>
              <p>{d.descripcion}</p>
              <p style={{ color: "#38bdf8" }}>+{d.puntos} XP</p>

              <button
                className="button"
                onClick={() => completarDesafio(d.id)}
                disabled={d.completado}
              >
                {d.completado ? "✔ Completado" : "Completar misión"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Desafios;