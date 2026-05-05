import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Mapa() {
  const posicionCentro = [-36.6066, -72.1034]; // Chillán aprox

  const lugares = [
    {
      nombre: "Valle Las Trancas",
      posicion: [-36.905, -71.493]
    },
    {
      nombre: "Termas de Chillán",
      posicion: [-36.9055, -71.409]
    },
    {
      nombre: "Plaza de Chillán",
      posicion: [-36.6066, -72.1034]
    }
  ];

  return (
    <div className="container">
      <h1>Mapa de Ñuble</h1>

      <MapContainer
        center={posicionCentro}
        zoom={10}
        style={{ height: "500px", borderRadius: "15px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {lugares.map((lugar, index) => (
          <Marker key={index} position={lugar.posicion}>
            <Popup>{lugar.nombre}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Mapa;