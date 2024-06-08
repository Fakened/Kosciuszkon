
import React from 'react';
import CardSection from './CardSection';
import MapSection from './MapSection';
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
        <MapSection bounds={bounds} />
      </div>
    </div>
  );
};

export default Map;
