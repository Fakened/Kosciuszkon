import React from 'react';

const ScheduleTable = ({ routeId, schedule }) => {
  // Filter schedule data for the chosen route
  const routeSchedule = schedule.filter(item => item.routeId === routeId);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Stop ID</th>
            <th className="px-4 py-2">Times</th>
          </tr>
        </thead>
        <tbody>
          {routeSchedule.map(item => (
            <tr key={`${item.routeId}-${item.stopId}`}>
              <td className="border px-4 py-2">{item.stopId}</td>
              <td className="border px-4 py-2">{item.times.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
