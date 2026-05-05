function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center", maxWidth: "800px", margin: "auto" }}>
      
      <h1 style={{ fontSize: "2.6rem", marginBottom: "10px", color: "#38bdf8" }}>
        Explora Ñuble
      </h1>

      <h2 style={{ marginBottom: "20px", color: "#e5e7eb" }}>
        Turismo interactivo y gamificado
      </h2>

      <p style={{ fontSize: "1.1rem", color: "#cbd5e1", marginBottom: "15px" }}>
        Descubre los paisajes, cultura y rincones más hermosos de la Región de Ñuble
        mientras completas desafíos, subes de nivel y desbloqueas logros.
      </p>

      <p style={{ fontSize: "1rem", color: "#94a3b8", marginBottom: "25px" }}>
        Cada lugar visitado suma puntos. Cada desafío completado te acerca a nuevas
        recompensas. Tu experiencia se convierte en una aventura digital.
      </p>

      <div style={{
        padding: "15px",
        background: "#111827",
        border: "1px solid #1f2937",
        borderRadius: "12px",
        marginBottom: "20px"
      }}>
        <h3 style={{ color: "#f8fafc", marginBottom: "10px" }}>
          🎯 ¿Qué puedes hacer?
        </h3>
        <ul style={{ textAlign: "left", color: "#cbd5e1", lineHeight: "1.8" }}>
          <li>📍 Explorar lugares turísticos de Ñuble</li>
          <li>🏆 Completar desafíos y ganar puntos</li>
          <li>📈 Subir de nivel como explorador</li>
          <li>🥇 Desbloquear logros especiales</li>
          <li>🗺 Usar el mapa interactivo</li>
        </ul>
      </div>

      <p style={{ color: "#64748b" }}>
        Comienza tu aventura desde el menú superior y conviértete en un explorador de Ñuble.
      </p>

    </div>
  );
}

export default Home;