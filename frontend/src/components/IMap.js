import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MarkIcon from '../assets/Mark.png'; 
import stopsData from '../data/stop';

const Map = () => {
  const bounds = [
    [49.002, 19.243],
    [50.505, 21.053],
  ];

  const markIcon = L.icon({
    iconUrl: MarkIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const renderStops = () => {
    return stopsData.map((stop) => (
      <Marker key={stop.id} position={[stop.lat, stop.lng]} icon={markIcon}>
        <Popup>
          {stop.name}<br />
          {stop.address}
        </Popup>
      </Marker>
    ));
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden z-40">
      <div className="flex flex-col h-screen">
        <MapContainer
          center={[50.0615, 19.937]}
          zoom={12}
          minZoom={9}
          maxZoom={14}
          maxBounds={bounds}
          maxBoundsViscosity={1.0}
          className="flex-grow"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {renderStops()}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
