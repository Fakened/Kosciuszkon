import React from 'react';
import PageHelmet from './components/PageHelmet';
import Navbar from './components/Navbar';
import Map from './components/IMap';
import CardSection from './components/CardSection';
import Schedule from './components/Schedule';

const App = () => {
  return (
    <div className="h-screen overflow-y-scroll overflow-x-hidden">
      <PageHelmet title="Koleje Małopolskie - Monitor Tras"/>
      <Navbar />
      <CardSection />
      <Map />
      <Schedule/>
    </div>
  );
}

export default App;
