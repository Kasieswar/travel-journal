import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Navbarr() {

  const location = useLocation()

  return (
    <div>
        <Navbar className='custom-navbar' bg='dark' variant='dark' expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="/">Travel Snapshot Journal</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
            <Nav className="ms-auto">
                <Link 
                className={`link ${location.pathname === '/travel-journal' ? 'active': ''}`} 
                to={"/travel-journal"}>Home</Link>
                <Link 
                className={`link ${location.pathname === '/explore' ? 'active': ''}`} 
                to={"/explore"}>Explore Map</Link>
                <Link 
                className={`link ${location.pathname === '/about' ? 'active': ''}`} 
                to={"/about"}>About Me</Link>
                <Link 
                className={`link ${location.pathname === '/contact' ? 'active': ''}`} 
                to={"/contact"}>Contact</Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );
}

export default Navbarr;
