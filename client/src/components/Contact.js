import React from "react";

const Contact = ({ handleClose, handleShow }) => {
  const ulStyle = {
    listStyle: "none",
  };

  const aStyle = {
    color: "black",
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">
                Contact Logan
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul style={ulStyle}>
                <li>loganwilsonphotography@gmail.com</li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    style={aStyle}
                    href="https://www.instagram.com/loganwilsonphotography/"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    style={aStyle}
                    href="https://www.facebook.com/LoganWilsonPhoto/"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">
                Contact the Developer
              </h4>
            </div>
            <div className="modal-body">
              <ul style={ulStyle}>
                <li>zsmith126028@gmail.com</li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    style={aStyle}
                    href="https://github.com/darlose04"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
