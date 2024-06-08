// MapWithSidebar.js
import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import SearchForm from './SearchForm';
import Logo from '../assets/Logo.png'
import CardSection from './CardSection';

const MapWithSidebar = () => {
  const bounds = [
    [49.002, 19.243],
    [50.505, 21.053]
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="flex flex-col h-screen">
        <nav className="bg-neutral-200 p-4">
          <div>
            <CardSection />
          </div>
        </nav>
        <SearchForm isOpen={sidebarOpen} /> {/* Use your new component */}
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

export default MapWithSidebar;
