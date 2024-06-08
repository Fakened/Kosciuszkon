
import React, { useState } from 'react';
import FormWindow from './FormWindow';

const Card = ({ title, description, form }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#385088] m-4" style={{ width: '350px', height: '180px' }}>
      <div className="px-6 py-4">
        <div className="text-white font-bold text-xl mb-2 text-center">{title}</div>
        <p className="text-neutral-100 text-base text-center">{description}</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <button
            className="text-center bg-yellow-500 hover:bg-yellow-700 text-neutral-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={toggleForm}
          >
            Wyszukaj
          </button>
        </div>
        {showForm && <FormWindow onClose={toggleForm} formType={form} />}
      </div>
    </div>
  );
};

export default Card;
