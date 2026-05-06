function Home() {
  return (
    <div
      style={{
        minHeight: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          padding: "40px",
          textAlign: "center",
          maxWidth: "800px",
          margin: "auto"
        }}
      >
        <h1 style={{ fontSize: "2.6rem", marginBottom: "10px", color: "#38bdf8" }}>
          Explora Ñuble
        </h1>

        <h2 style={{ marginBottom: "20px", color: "#e5e7eb" }}>
          Turismo interactivo y gamificado
        </h2>

        <p style={{ fontSize: "1.1rem", color: "#cbd5e1", marginBottom: "15px" }}>
          Descubre los paisajes, cultura y rincones más hermosos mientras completas
          desafíos, subes de nivel y desbloqueas logros.
        </p>

        <p style={{ fontSize: "1rem", color: "#94a3b8", marginBottom: "25px" }}>
          Cada lugar visitado suma puntos. Cada desafío completado te acerca a nuevas
          recompensas.
        </p>

        <div
          style={{
            padding: "20px",
            background: "#111827",
            border: "1px solid #1f2937",
            borderRadius: "12px",
            marginBottom: "20px"
          }}
        >
          <h3 style={{ color: "#f8fafc", marginBottom: "15px" }}>
            🎯 ¿Qué puedes hacer?
          </h3>

          {/* 👇 CAMBIO CLAVE */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              color: "#cbd5e1"
            }}
          >
            <li style={{ transition: "0.2s"}}>📍 Explorar lugares turísticos de Ñuble</li>
            <li style={{ transition: "0.2s"}}>🏆 Completar desafíos y ganar puntos</li>
            <li style={{ transition: "0.2s"}}>📈 Subir de nivel como explorador</li>
            <li style={{ transition: "0.2s"}}>🥇 Desbloquear logros especiales</li>
            <li style={{ transition: "0.2s"}}>🗺 Usar el mapa interactivo</li>
          </ul>
        </div>

        <p style={{ color: "#64748b" }}>
          Comienza tu aventura desde el menú superior.
        </p>
      </div>
    </div>
  );
}

export default Home;