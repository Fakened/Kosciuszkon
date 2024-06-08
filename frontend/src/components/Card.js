import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="border-2 border-blue-900 max-w-sm rounded overflow-hidden shadow-lg bg-[#385088] m-4">
      <div className="px-6 py-4">
        <div className="text-white font-bold text-xl mb-2 text-center">{title}</div>
        <p className="text-neutral-100 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;