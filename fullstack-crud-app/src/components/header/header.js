import React from 'react';
import { Navbar , Nav , Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import header from './header.css'

const Header = () => {
  return (
    <div>
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className='logo' as={Link} to="/" >My App</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link className='nav-links' as={Link} to="/">Dashboard</Nav.Link>
            <Nav.Link className='nav-links' as={Link} to="/user">PostUser</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;
