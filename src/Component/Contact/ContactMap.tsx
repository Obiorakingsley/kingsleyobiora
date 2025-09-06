import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import "./Contact.scss";
import { Link } from "react-router-dom";

import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const ContactMap = () => {
  return (
    <div className="w-full">
      <div className="info-map  h-32 w-full p-2 flex flex-col justify-around">
        <p>KIngsley Obiora</p>
        <p>Lagos</p>
        <p>Nigeria</p>
        <p>
          <a
            href={`mailto:${"kingsleyobiora527@gmail.com"}`}
            aria-label="Email: kingsleyobiora527@gmail.com"
            className="text-primary underline"
          >
            kingsleyobiora527@gmail.com
          </a>
        </p>
      </div>
      <MapContainer
        center={[6.5244, 3.3792]}
        zoom={13}
        className="map-container w-full"
      >
        {/* Tile Layer */}
        <TileLayer
          className="map-layer"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={[6.5244, 3.3792]}>
          <Popup>
            Kingsley lives here <br /> Let’s connect ;)
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactMap;
