import React, { useState } from "react";

const TrainSchedule = ({ selectedTileId }) => {
  // Dane o trasach - przykładowe dane
  const trainRoutes = [
    { id: 1, tileId: "A1", name: "Route 1", departureTime: "08:00", arrivalTime: "10:00" },
    { id: 2, tileId: "A2", name: "Route 2", departureTime: "09:30", arrivalTime: "11:30" },
    // Tutaj możesz dodać więcej tras
  ];

  // Filtrujemy dane tylko dla wybranego kafelka
  const filteredRoutes = trainRoutes.filter(route => route.tileId === selectedTileId);

  return (
    <div className="mt-8">
      <h2 className="text-lg font-bold mb-4">Train Schedule for {selectedTileId}</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Route</th>
            <th className="px-4 py-2">Departure Time</th>
            <th className="px-4 py-2">Arrival Time</th>
          </tr>
        </thead>
        <tbody>
          {filteredRoutes.map(route => (
            <tr key={route.id}>
              <td className="border px-4 py-2">{route.name}</td>
              <td className="border px-4 py-2">{route.departureTime}</td>
              <td className="border px-4 py-2">{route.arrivalTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainSchedule;
