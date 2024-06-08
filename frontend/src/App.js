import React from 'react'
import Navbar from './components/Navbar'
import Map from './components/IMap'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <Navbar />
      <Map />
      <Card />
    </div>
  )
}

export default App
