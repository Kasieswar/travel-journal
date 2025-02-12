import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import 'bootstrap/dist/css/bootstrap.min.css';


// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
})

const locations = [
  { id: 1, name: "Kailasagiri", position: [17.7445, 83.3428] },
  { id: 2, name: "R.K Beach", position: [17.7100, 83.3163] },
  { id: 3, name: "Araku Valley", position: [18.3272, 82.8804] },
  { id: 4, name: "Rushikonda Beach", position: [17.7893, 83.3856] },
  { id: 5, name: "Simhachalam Temple", position: [17.766333, 83.2505] },
  { id: 6, name: "Indira Gandhi Zoological Park", position: [17.76706, 83.34857] },
  { id: 7, name: "Dolphin’s Nose Lighthouse", position: [17.67646, 83.292643] },
  { id: 8, name: "Yarada Beach", position: [17.66335, 83.28435] },
  { id: 9, name: "Borra Caves", position: [18.27621, 83.05012] },
  { id: 10, name: "VUDA Park", position: [17.723671, 83.33912] },
  { id: 11, name: "Thotlakonda Buddhist Complex", position: [17.8088, 83.3956] },
  { id: 12, name: "Bheemili Beach", position: [17.890755, 83.455727] },
  { id: 13, name: "Tenneti Park", position: [17.748257, 83.349956] },
  { id: 14, name: "Matsya Darshini Aquarium", position: [17.7120, 83.3195] },
  { id: 15, name: "Victory at Sea Memorial", position: [17.718653, 83.332106] },
  { id: 16, name: "Erra Matti Dibbalu (Red Sand Hills)", position: [17.8315, 83.4085] },
  { id: 17, name: "Kambalakonda Wildlife Sanctuary", position: [17.779494, 83.339987] },
  { id: 18, name: "Lambasingi", position: [17.8828, 82.6042] },
  { id: 19, name: "Mudasarlova Park", position: [17.763344, 83.300499] },
  { id: 20, name: "Gosthani River", position: [18.135722, 83.197725] },
]


const MapComponent = () => {
  return (
    <div className="map-page">
      <h1 className="map-title">Explore Popular Places</h1>
      <div className="map-list">
        {locations.map((location) => (
          <div key={location.id} className="map-card">
            <h3>{location.name}</h3>
            <MapContainer
              center={location.position}
              zoom={13}
              scrollWheelZoom={false}
              className="map"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={location.position}>
                <Popup>
                <div>
                  <h4>{location.name}</h4>
                  <p>A beautiful tourist spot in Visakhapatnam!</p>
                </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapComponent;
