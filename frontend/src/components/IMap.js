import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import SearchForm from './SearchForm';
import CardSection from './CardSection';
import trainImage from '../assets/train.jpg';

const Map = () => {
  const bounds = [
    [49.002, 19.243],
    [50.505, 21.053]
  ];

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="flex flex-col h-screen">
        <nav
          className="bg-neutral-200 p-4"
          style={{
            backgroundImage: `url(${trainImage})`,
            backgroundPosition: 'center 10%',
            backgroundSize: 'cover',
            borderTop: '1px solid black',
            borderBottom: '1px solid black' 
          }}
        >
          <div>
            <CardSection />
          </div>
        </nav>
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
