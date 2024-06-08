import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const bounds = [
    [49.002, 19.243],
    [50.505, 21.053],
  ];

  return (
    <div className="relative h-screen w-screen overflow-hidden z-40">
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
        </MapContainer>
        
      </div>
    </div>
  );
};

export default Map;
