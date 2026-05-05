import ValleLasTrancas from "../assets/images/Nevados-de-Chillan-1.jpg";

function Lugares() {
  const lugares = [
    {
      nombre: "Valle Las Trancas",
      descripcion: "Hermoso destino de montaña ubicado en la cordillera de los Andes, ideal para descansar y desconectarse del ritmo de la ciudad. Se encuentra rodeado de imponentes paisajes naturales, bosques nativos, ríos de origen volcánico y montañas que lo convierten en un entorno privilegiado durante todo el año.",
      imagen: ValleLasTrancas
    },
    {
      nombre: "Termas de Chillán",
      descripcion: "Relajo total en aguas termales",
      imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    {
      nombre: "Plaza de Armas de Chillán",
      descripcion: "Centro histórico y cultural",
      imagen: "https://images.unsplash.com/photo-1491553895911-0055eca6402d"
    }
  ];

  return (
    <div className="container">
      <h1>Explora la Región de Ñuble</h1>

      <div className="grid">
        {lugares.map((lugar, index) => (
          <div className="card" key={index}>
            <img src={lugar.imagen} alt={lugar.nombre} />
            <div className="card-content">
              <h3>{lugar.nombre}</h3>
              <p>{lugar.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lugares;