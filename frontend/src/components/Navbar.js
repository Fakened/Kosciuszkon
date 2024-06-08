
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-neutral-200 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="">
          <img src=""></img>
        </div>
        <div className="flex-shrink-0">
          <a href="/" className="text-blue-950 font-bold text-xl">Koleje Małopolskie - Route Tracker</a>
        </div>
        <div className="hidden md:block">
          <a href="/" className="text-blue-950 mr-4 hover:text-blue-500">Home</a>
          <a href="/about" className="text-blue-950 mr-4 hover:text-blue-500">About</a>
          <a href="/contact" className="text-blue-950 hover:text-blue-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
