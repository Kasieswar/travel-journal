import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import Footer from './Components/Footer'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import MapComponent from './Components/MapComponent'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/travel-journal' element={<Home />} />
          <Route path='/explore' element={<MapComponent />} />
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
