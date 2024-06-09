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
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Route ID</th>
            <th className="px-4 py-2">Times</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map(item => (
            <tr key={`${item.routeId}`}>
              <td className="border px-4 py-2">{item.trip_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
