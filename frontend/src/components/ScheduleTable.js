import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ScheduleTable = ({ routeId }) => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/trips/${routeId}`);
        setSchedule(response.data);
      } catch (error) {
        console.error('Błąd pobierania danych:', error);
      }
    };

    fetchData();
  }, [routeId]);

  return (
    <div id="skok" className="overflow-x-auto pb-4 w-full pt-4">
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-[#385088] text-white">
            <th className="px-4 py-2">Miejscowość</th>
            <th className="px-4 py-2">Strefa</th>
            <th className="px-4 py-2">Przystanek</th>
            <th className="px-4 py-2">Przyjazd</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={`${item.trip_id}`} className={index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}>
              <td className="px-4 py-2 text-center">{item.route.route_long_name}</td>
              <td className="px-4 py-2 text-center">{item.service.service_id}</td>
              <td className="px-4 py-2 text-center">{item.shape_id.id}</td>
              <td className="px-4 py-2 text-center">{item.trip_short_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
