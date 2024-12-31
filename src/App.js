import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import Footer from './Components/Footer'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import MapComponent from './Components/MapComponent'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<MapComponent />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
