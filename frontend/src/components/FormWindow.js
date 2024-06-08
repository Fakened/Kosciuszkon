
import React from 'react';

const FormWindow = ({ onClose, formType }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Formularz</h2>
        {formType === 'szybkie-polaczenie-form' && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="skad" className="block text-gray-700 font-bold mb-2">Skąd:</label>
              <input type="text" id="skad" name="skad" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Wpisz skąd" required />
            </div>
            <div className="mb-4">
              <label htmlFor="dokad" className="block text-gray-700 font-bold mb-2">Dokąd:</label>
              <input type="text" id="dokad" name="dokad" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Wpisz dokąd" required />
            </div>
            <div className="mb-4">
              <label htmlFor="data" className="block text-gray-700 font-bold mb-2">Data:</label>
              <input type="date" id="data" name="data" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <div className="mb-4">
              <label htmlFor="godzina" className="block text-gray-700 font-bold mb-2">Godzina:</label>
              <input type="time" id="godzina" name="godzina" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Szukaj</button>
          </form>
        )}
        {formType === 'zaplanuj-podroz-form' && (
          <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="skad" className="block text-gray-700 font-bold mb-2">Skąd:</label>
            <input type="text" id="skad" name="skad" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Wpisz skąd" required />
          </div>
          <div className="mb-4">
            <label htmlFor="dokad" className="block text-gray-700 font-bold mb-2">Dokąd:</label>
            <input type="text" id="dokad" name="dokad" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Wpisz dokąd" required />
          </div>
          <div className="mb-4">
            <label htmlFor="data" className="block text-gray-700 font-bold mb-2">Data:</label>
            <input type="date" id="data" name="data" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <div className="mb-4">
            <label htmlFor="godzina" className="block text-gray-700 font-bold mb-2">Godzina:</label>
            <input type="time" id="godzina" name="godzina" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Szukaj</button>
        </form>
      )}
        {formType === 'sprawdz-rozklad-form' && (
          <div>
            {/* Przekierowanie do dolnej części strony z rozkładem jazdy */}
            <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Zamknij</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormWindow;
