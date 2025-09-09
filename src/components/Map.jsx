import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Correction icônes Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function Map() {
  return (
    <section id="map" style={{ padding: "2rem 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        Project Locations
      </h2>
      <MapContainer
        center={[37.5, 12]} // Centré sur Méditerranée
        zoom={4}
        dragging={true}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        style={{ height: "450px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* Tunis */}
        <Marker position={[36.8065, 10.1815]}>
          <Popup>Tunis, Tunisia – IoT Supervision Projects</Popup>
        </Marker>

        {/* Ben Arous */}
        <Marker position={[36.7531, 10.2189]}>
          <Popup>
            Ben Arous, Tunisia – Kaizen Pro, Evopro, Sofima, Bouzguenda
          </Popup>
        </Marker>

        {/* Ariana */}
        <Marker position={[36.8663, 10.1647]}>
          <Popup>Ariana, Tunisia – Freelance 3D Design</Popup>
        </Marker>

        {/* M’Ghira */}
        <Marker position={[36.7, 10.25]}>
          <Popup>M’Ghira, Tunisia – Aerolia Aircraft Structures</Popup>
        </Marker>

        {/* Italie */}
        <Marker position={[45.8, 12.2]}>
          <Popup>
            Moriago della Battaglia, Italy – Assembly Line Validation (Oil & Fuel
            Filters)
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}
