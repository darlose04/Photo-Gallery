import React from "react";
import Contact from "../Contact";

const Navbar = ({ show, handleClose, handleShow }) => {
  return (
    <div className="container">
      <nav className='navbar sticky-top navbar-expand-sm navbar-light mb-2'>
        <div className='container'>
          <a className='navbar-brand' href='/'>
            Logan Wilson Photography
          </a>
          <button
            className='navbar-toggler'
            data-toggle='collapse'
            data-target='#navbarNav'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div id='navbarNav' className='collapse navbar-collapse'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link' href='/portfolio'>
                  Portfolio
                </a>
              </li>
              <li className='nav-item'>
                <a href='/about' className='nav-link'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a href='/purchases' className='nav-link'>
                  Purchase Prints
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  onClick={handleShow}
                  href='#'
                  data-toggle='modal'
                  data-target='#exampleModal'
                >
                  Contact
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
      <Contact show={show} handleClose={handleClose} handleShow={handleShow} />
    </div>
  );
};

export default Navbar;
