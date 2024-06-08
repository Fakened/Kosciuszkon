import Logo from '../assets/Logo_Koleje_Małopolskie.png'
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="">
          <img src={Logo} alt="Koleje Małopolskie" className="w-24 h-auto"></img>
        </div>
        <div className="flex-shrink-0">
          <a href="/" className="text-blue-950 font-bold text-xl">Koleje Małopolskie - Route Tracker</a>
        </div>
        <div className="hidden md:block">
          <a href="/" className="text-blue-950 mr-4 hover:text-blue-500">Wyszukaj</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
