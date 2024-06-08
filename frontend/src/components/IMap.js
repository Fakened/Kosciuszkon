// MapWithSidebar.js
import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapWithSidebar = () => {
  const bounds = [
    [49.002, 19.243],
    [50.505, 21.053]
  ];

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <MapContainer
        center={[50.0615, 19.937]}
        zoom={9}
        minZoom={9}
        maxZoom={14}
        maxBounds={bounds}
        maxBoundsViscosity={1.0}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default MapWithSidebar;
