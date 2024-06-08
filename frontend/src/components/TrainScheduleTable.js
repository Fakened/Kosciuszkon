import React from "react";

const TrainScheduleTable = () => {
  const tiles = [];

  // Generate tiles from A1 to A50
  for (let i = 1; i <= 50; i++) {
    const tileId = `A-${i}`; // Unique ID for each tile
    tiles.push(
      <div key={tileId} id={tileId} className="border p-4 flex justify-center items-center transition-colors hover:bg-gray-200">
        <span>A{i}</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-10 gap-4">
      {tiles}
    </div>
  );
};

export default TrainScheduleTable;