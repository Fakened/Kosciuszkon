import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ScheduleTable = ({ routeId }) => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tripsResponse = await axios.get(`http://localhost:8000/api/trips/${routeId}`);
        const trips = tripsResponse.data;

        const scheduleData = await Promise.all(trips.map(async (trip) => {
          const stopsResponse = await axios.get(`http://localhost:8000/api/stops/${trip.trip_id}`);
          return stopsResponse.data.map(stop => ({
            trip,
            stop,
          }));
        }));

        console.log(scheduleData)
        setSchedule(scheduleData.flat());
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
            <th className="px-4 py-2">Trasa</th>
            <th className="px-4 py-2">Strefa</th>
            <th className="px-4 py-2">Przystanek</th>
            <th className="px-4 py-2">Przyjazd</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"}>
              <td className="px-4 py-2 text-center">{item.trip.route.route_long_name}</td>
              <td className="px-4 py-2 text-center">{item.trip.route.route_type}</td>
              <td className="px-4 py-2 text-center">{item.stop.stop.stop_name}</td>
              <td className="px-4 py-2 text-center">{item.stop.arrival_time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
