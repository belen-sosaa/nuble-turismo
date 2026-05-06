import { useState, useEffect } from "react";

function calcularNivel(puntos) {
  if (puntos < 100) return 1;
  if (puntos < 250) return 2;
  if (puntos < 500) return 3;
  return 4;
}

function Desafios({ user, setUser, openAuth }) {
  const [puntos, setPuntos] = useState(user?.puntos || 0);
  const [nivel, setNivel] = useState(user?.nivel || 1);

  const [desafios, setDesafios] = useState(
    user?.desafios || [
      { id: 1, titulo: "📍 Mirador de Chillán", descripcion: "Sube una foto desde un mirador panorámico", completado: false, puntos: 50 },
      { id: 2, titulo: "🌳 Plaza de Armas", descripcion: "Explora el centro histórico de Chillán", completado: false, puntos: 30 },
      { id: 3, titulo: "⛰ Ruta de Montaña", descripcion: "Completa una caminata en la precordillera", completado: false, puntos: 70 },
      { id: 4, titulo: "♨ Termas de Chillán", descripcion: "Visita las termas y captura el momento", completado: false, puntos: 80 },
      { id: 5, titulo: "🌄 Valle Las Trancas", descripcion: "Explora el valle", completado: false, puntos: 60 },
      { id: 6, titulo: "📸 Ruta Fotográfica", descripcion: "Toma 3 fotos turísticas", completado: false, puntos: 90 }
    ]
  );

  const [logros, setLogros] = useState(
    user?.logros || [
      { id: 1, nombre: "Primer paso", desbloqueado: false },
      { id: 2, nombre: "Explorador", desbloqueado: false },
      { id: 3, nombre: "Aventurero", desbloqueado: false }
    ]
  );

  // ✅ GUARDAR SOLO SI HAY USUARIO
  useEffect(() => {
    if (!user) return;

    const updatedUser = {
      ...user,
      puntos,
      nivel,
      desafios,
      logros
    };

    localStorage.setItem("usuarioActivo", JSON.stringify(updatedUser));
    setUser(updatedUser);
  }, [puntos, nivel, desafios, logros]);

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
        <h2>⭐ {puntos} puntos</h2>
        <h3>🏅 Nivel {nivel}</h3>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progreso}%` }} />
        </div>

        <p>{progreso}/100 para subir de nivel</p>
      </div>

      <h2>🏆 Logros</h2>
      <div className="grid">
        {logros.map((l) => (
          <div
            key={l.id}
            className="card"
            style={{
              opacity: l.desbloqueado ? 1 : 0.5,
              border: l.desbloqueado ? "1px solid #22c55e" : ""
            }}
          >
            <div className="card-content">
              <h3>{l.nombre}</h3>
              <p>{l.desbloqueado ? "✔ Desbloqueado" : "🔒 Bloqueado"}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "30px" }}>🗺 Misiones</h2>

      {/* 🔔 MENSAJE SI NO HAY LOGIN */}
      {!user && (
        <p style={{ color: "#facc15", marginBottom: "10px" }}>
          ⚠ Inicia sesión para guardar tu progreso
        </p>
      )}

      <div className="grid">
        {desafios.map((d) => (
          <div key={d.id} className="card">
            <div className="card-content">
              <h3>{d.titulo}</h3>
              <p>{d.descripcion}</p>
              <p style={{ color: "#38bdf8" }}>+{d.puntos} XP</p>

              <button
                className="button"
                onClick={() => {
                  if (!user) {
                    openAuth();
                    return;
                  }
                  completarDesafio(d.id);
                }}
                disabled={d.completado}
              >
                {!user
                  ? "Inicia sesión"
                  : d.completado
                  ? "✔ Completado"
                  : "Completar"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Desafios;