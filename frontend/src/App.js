import React from 'react'
import PageHelmet from './components/PageHelmet'
import Navbar from './components/Navbar'
import Map from './components/IMap'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <PageHelmet title="KM - Route Tracker"/>
      <Map />
    </div>
  )
}

export default App
