import React from 'react';
import PageHelmet from './components/PageHelmet';
import Navbar from './components/Navbar';
import Map from './components/IMap';
import Card from './components/Card';

const App = () => {
  return (
    <div className="h-screen overflow-y-scroll overflow-x-hidden">
      <PageHelmet title="KM - Route Tracker"/>
      <Navbar />
      <Map />
    </div>
  );
}

export default App;
