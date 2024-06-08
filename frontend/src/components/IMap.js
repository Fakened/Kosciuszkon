import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MarkIcon from '../assets/Mark.png'; 
import { krakowStops, malopolskaRoutes, routeColors } from './data';

const Map = () => {
  const bounds = [
    [49.002, 19.243],
    [50.505, 21.053],
  ];

  const krakowStops = [
    { lat: 50.0647, lng: 19.945 },
    { lat: 50.0615, lng: 19.937 },
    { lat: 50.0511, lng: 19.935 },
    { lat: 50.0514, lng: 19.937 },
    { lat: 50.0467, lng: 19.948 },
  ];

  const markIcon = L.icon({
    iconUrl: MarkIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const renderKrakowStops = () => {
    return krakowStops.map((stop) => (
      <Marker key={stop.id} position={[stop.lat, stop.lng]} icon={markIcon}>
        <Popup>
          Przystanek Kraków {stop.id}
        </Popup>
      </Marker>
    ));
  };

  const renderRoutes = () => {
    return malopolskaRoutes.map((route) => {
      const positions = route.stopIds.map(stopId => {
        const stop = krakowStops.find(s => s.id === stopId);
        return [stop.lat, stop.lng];
      });

      return (
        <Polyline key={route.id} positions={positions} color={routeColors[route.id]} />
      );
    });
  };

  return (  
    <div className="relative overflow-hidden z-40">
      <div className="flex flex-col h-screen">
        <MapContainer
          center={[50.0615, 19.937]}
          zoom={9}
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
          {renderKrakowStops()}
          {renderRoutes()}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
