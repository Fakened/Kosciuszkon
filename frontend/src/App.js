import React from 'react';
import PageHelmet from './components/PageHelmet';
import Navbar from './components/Navbar';
import Map from './components/IMap';

const App = () => {
  return (
    <div className="h-screen overflow-y-scroll overflow-x-hidden">
      <PageHelmet title="Koleje Małopolskie - Monitor Tras"/>
      <Navbar />
      <Map />
    </div>
  );
}

export default App;
