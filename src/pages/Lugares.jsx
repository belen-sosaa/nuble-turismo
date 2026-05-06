import ValleLasTrancas from "../assets/images/Nevados-de-Chillan-1.jpg";
import TermasDeChillan from "../assets/images/valle-hermoso-01.jpg";
import LagunaLaja from "../assets/images/4384_Laguna_del_Laja.jpg";
import CascadaTurbinas from "../assets/images/turbina01.jpg"

function Lugares() {
  const lugares = [
    {
      nombre: "Valle Las Trancas",
      descripcion: "Es un hermoso destino de montaña ubicado en la cordillera de los Andes, ideal para descansar y desconectarse del ritmo de la ciudad. Se encuentra rodeado de imponentes paisajes naturales, bosques nativos, ríos de origen volcánico y montañas, lo que lo convierte en un entorno privilegiado durante todo el año.",
      imagen: ValleLasTrancas
    },
    {
      nombre: "Nevados de Chillán",
      descripcion: "Destino de montaña y centro termal ubicado en plena cordillera de los Andes, rodeado de bosques nativos, volcanes y paisajes naturales de gran belleza. Destaca por sus aguas termales de origen volcánico, ideales para el descanso, la relajación y el bienestar en un entorno natural único. Es un lugar turístico muy visitado durante todo el año, ya que combina naturaleza, tranquilidad y actividades al aire libre como senderismo y deportes de nieve en invierno.",
      imagen: TermasDeChillan
    },
    {
      nombre: "Parque Nacional Laguna del Laja",
      descripcion: "Parque natural dominado por el volcán Antuco y la Laguna del Laja, caracterizado por sus paisajes volcánicos, formaciones rocosas y amplios contrastes naturales. Es un destino ideal para realizar senderismo, explorar el entorno y disfrutar de vistas panorámicas en plena cordillera.",
      imagen: LagunaLaja
    },
    {
      nombre: "Cascada de las Turbinas",
      descripcion: "Hermosa caída de agua ubicada en un entorno natural de montaña, rodeada de abundante vegetación y bosques nativos. Se forma a partir de aguas de origen cordillerano que descienden con fuerza entre rocas, creando un paisaje atractivo y refrescante. Es un lugar ideal para quienes buscan tranquilidad, contacto con la naturaleza y realizar caminatas en un ambiente limpio y poco intervenido.",
      imagen: CascadaTurbinas
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