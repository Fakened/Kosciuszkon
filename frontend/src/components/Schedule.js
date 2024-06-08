import React, { useState } from 'react';
import { malopolskaRoutes, schedule, routeColors } from './data'; // Import your route, schedule, and routeColors data
import ScheduleTable from './ScheduleTable';

const Schedule = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);

  // Function to handle route selection
  const handleRouteSelect = (routeId) => {
    setSelectedRoute(routeId);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Select a Route</h1>
      <div className="flex space-x-4 mb-4">
        {/* Render buttons for each route */}
        {malopolskaRoutes.map(route => (
          <button
            key={route.id}
            onClick={() => handleRouteSelect(route.id)}
            className={`px-4 py-2 bg-${routeColors[route.id]} text-black rounded`}
          >
            {route.id}
          </button>
        ))}
      </div>
      {/* Render schedule table if a route is selected */}
      {selectedRoute && (
        <>
          <h2 className="text-xl font-bold mb-2">Schedule for Route {selectedRoute}</h2>
          <ScheduleTable routeId={selectedRoute} schedule={schedule} />
        </>
      )}
    </div>
  );
};

export default Schedule;
