import React from 'react';

const SearchForm = ({ isOpen }) => {
  return (
    <div className={`bg-white w-full ${isOpen ? 'block' : 'hidden'}`}>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Wyszukaj trasę</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="departure" className="block text-gray-700 font-medium">Wyjazd</label>
            <input type="text" id="departure" name="departure" placeholder="Miejsce wyjazdu" className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="destination" className="block text-gray-700 font-medium">Przyjazd</label>
            <input type="text" id="destination" name="destination" placeholder="Miejsce przyjazdu" className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Szukaj</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
