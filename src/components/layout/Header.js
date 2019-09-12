import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Contact from "../Contact";

const Header = ({ show, handleClose, handleShow }) => {
  return (
    <Navbar bg='dark' variant='dark' expand='md'>
      <div className='container'>
        <Navbar.Brand href='/'>Logan Wilson Photography</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <NavDropdown title='Portfolio Prints' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/prints/landscape'>
                Landscape
              </NavDropdown.Item>
              <NavDropdown.Item href='/prints/portrait'>
                Portrait
              </NavDropdown.Item>
              <NavDropdown.Item href='/prints/all'>All Photos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='#'>
              <Nav.Item onClick={handleShow}>Contact</Nav.Item>
              <Contact show={show} handleClose={handleClose} />
            </Nav.Link>
          </Nav>
          <Nav className='ml-auto'>
            <Nav.Link href='https://www.instagram.com/loganwilsonphotography/'>
              <i className='fab fa-instagram fa-2x'></i>
            </Nav.Link>
            <Nav.Link href='https://www.facebook.com/LoganWilsonPhoto/'>
              <i className='fab fa-facebook fa-2x'></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
