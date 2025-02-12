import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home-container'>
      <div className="home">
        <h1 className='home-title'>
            Welcome to Travel Snapshot Journal
        </h1>
        <p className='home-description'>
            Discover Popular Places In Visakhapatnam and capture unforgettable memories!
        </p>
        <Link to={"/explore"}><button className='explore-button'>Explore Now</button></Link>
      </div>
    </div>
  )
}

export default Home
