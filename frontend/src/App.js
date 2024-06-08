import React from 'react'
import Navbar from './components/Navbar'
import Map from './components/IMap'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const App = () => {
  return (
    <div>
      <Navbar />
      <Map />
    </div>
  )
}

export default App
