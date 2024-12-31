import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbarr() {
  return (
    <div>
        <Navbar className='custom-navbar' bg='dark' variant='dark' expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="/">Travel Snapshot Journal</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
            <Nav className="ms-auto">
                <Link className='link' to={"/travel-journal"}>Home</Link>
                <Link className='link' to={"/explore"}>Explore Map</Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );
}

export default Navbarr;
