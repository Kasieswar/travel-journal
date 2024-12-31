import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Navbarr() {
  return (
    <div>
        <Navbar className='custom-navbar' bg='dark' variant='dark' expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="/">Travel Snapshot Journal</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar">
            <Nav className="ms-auto">
                <Nav.Link href="/travel-journal">Home</Nav.Link>
                <Nav.Link href="/explore">Explore Map</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  );
}

export default Navbarr;
