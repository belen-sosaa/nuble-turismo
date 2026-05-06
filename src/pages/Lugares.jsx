import { useState } from "react";

import ValleLasTrancas from "../assets/images/Nevados-de-Chillan-1.jpg";
import TermasDeChillan from "../assets/images/valle-hermoso-01.jpg";
import LagunaLaja from "../assets/images/4384_Laguna_del_Laja.jpg";
import CascadaTurbinas from "../assets/images/turbina01.jpg";

function Lugares() {
  const [expandido, setExpandido] = useState(null);

  const lugares = [
    {
      id: 1,
      nombre: "Valle Las Trancas",
      descripcion:
        "Hermoso destino de montaña rodeado de bosques, ríos volcánicos y paisajes naturales. Ideal para descansar durante todo el año.",
      descripcionLarga:
        "Se encuentra en la cordillera de los Andes y ofrece un entorno natural privilegiado con senderos, aire puro y vistas increíbles.",
      imagen: ValleLasTrancas,
      puntos: 40
    },
    {
      id: 2,
      nombre: "Nevados de Chillán",
      descripcion:
        "Centro termal y turístico rodeado de volcanes y naturaleza.",
      descripcionLarga:
        "Destaca por sus aguas termales, deportes de nieve en invierno y senderismo en verano.",
      imagen: TermasDeChillan,
      puntos: 60
    },
    {
      id: 3,
      nombre: "Laguna del Laja",
      descripcion:
        "Parque nacional con paisajes volcánicos y vistas al volcán Antuco.",
      descripcionLarga:
        "Perfecto para trekking, fotografía y exploración en plena cordillera.",
      imagen: LagunaLaja,
      puntos: 50
    },
    {
      id: 4,
      nombre: "Cascada de las Turbinas",
      descripcion:
        "Caída de agua rodeada de naturaleza y tranquilidad.",
      descripcionLarga:
        "Ideal para caminatas y conexión con el entorno natural en un ambiente poco intervenido.",
      imagen: CascadaTurbinas,
      puntos: 30
    }
  ];

  return (
    <div className="container">
      <h1>Explora la Región de Ñuble</h1>

      <div className="grid">
        {lugares.map((lugar) => (
          <div className="card" key={lugar.id}>
            <img src={lugar.imagen} alt={lugar.nombre} />

            <div className="card-content">
              <h3>{lugar.nombre}</h3>

              <p>
                {expandido === lugar.id
                  ? lugar.descripcionLarga
                  : lugar.descripcion}
              </p>

              <p style={{ marginTop: "5px", color: "#38bdf8" }}>
                +{lugar.puntos} puntos
              </p>

              <button
                className="button"
                onClick={() =>
                  setExpandido(expandido === lugar.id ? null : lugar.id)
                }
              >
                {expandido === lugar.id ? "Ver menos" : "Ver más"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lugares;