import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <div className='container'>
        <Navbar.Brand href='/'>Logan Wilson Photography</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
          <Nav.Link href='/prints'>Prints</Nav.Link>
          <Nav.Link href='/about'>About</Nav.Link>
          <Nav.Link href='/contact'>Contact</Nav.Link>
        </Nav>
        <Nav className='ml-auto'>
          <Nav.Link href='https://www.instagram.com/loganwilsonphotography/'>
            <i className='fab fa-instagram fa-2x'></i>
          </Nav.Link>
          <Nav.Link href='https://www.facebook.com/LoganWilsonPhoto/'>
            <i className='fab fa-facebook fa-2x'></i>
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Header;
