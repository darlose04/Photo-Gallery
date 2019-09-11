import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>Logan Wilson Photography</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Portfolio</Nav.Link>
        <Nav.Link>Prints</Nav.Link>
        <Nav.Link>About</Nav.Link>
        <Nav.Link>Contact</Nav.Link>
      </Nav>
      <Nav className='ml-auto'>
        <Nav.Link href='https://www.instagram.com/loganwilsonphotography/'>
          <i className='fab fa-instagram fa-2x'></i>
        </Nav.Link>
        <Nav.Link href='https://www.facebook.com/LoganWilsonPhoto/'>
          <i className='fab fa-facebook fa-2x'></i>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
