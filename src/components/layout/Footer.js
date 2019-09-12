import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar
      style={{ height: "3rem" }}
      fixed='bottom'
      bg='dark'
      variant='dark'
      expand='md'
    >
      <div className='container'>
        <Nav className='ml-auto'>
          <Nav.Link
            style={{ color: "white" }}
            href='https://github.com/darlose04'
          >
            Website built by darlose04{" "}
            <i className='fab fa-github-square fa-2x ml-2'></i>
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Footer;
