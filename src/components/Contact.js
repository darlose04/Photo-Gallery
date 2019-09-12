import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Contact = ({ show, handleClose }) => {
  const ulStyle = {
    listStyle: "none"
  };

  const aStyle = {
    color: "black"
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Logan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul style={ulStyle}>
            <li>lcwphotos@gmail.com</li>
            <li>
              <a
                style={aStyle}
                href='https://www.instagram.com/loganwilsonphotography/'
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                style={aStyle}
                href='https://www.facebook.com/LoganWilsonPhoto/'
              >
                Facebook
              </a>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
