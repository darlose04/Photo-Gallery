import React from "react";
import Contact from "../Contact";

const Navbar = ({ show, handleClose, handleShow }) => {
  return (
    <nav class='navbar  sticky-top navbar-expand-sm navbar-light mb-2'>
      <div class='container'>
        <a class='navbar-brand' href='/'>
          Logan Wilson Photography
        </a>
        <button
          class='navbar-toggler'
          data-toggle='collapse'
          data-target='#navbarNav'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div id='navbarNav' class='collapse navbar-collapse'>
          <ul class='navbar-nav'>
            <li class='nav-item '>
              <a class='nav-link' href='/'>
                Home
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='/portfolio'>
                Portfolio
              </a>
            </li>
            <li class='nav-item'>
              <a href='/about' className='nav-link'>
                About
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' onClick={handleShow} href='#'>
                Contact
                <Contact show={show} handleClose={handleClose} />
              </a>
            </li>
          </ul>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <a
                href='https://www.instagram.com/loganwilsonphotography/'
                className='nav-link'
              >
                <i className='fab fa-instagram fa-2x'></i>
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='https://www.facebook.com/LoganWilsonPhoto/'
                className='nav-link'
              >
                <i className='fab fa-facebook fa-2x'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
