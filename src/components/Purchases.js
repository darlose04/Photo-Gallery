import React from "react";

const Purchases = () => {
  const purchasesStyle = {
    maxWidth: 1050,
    backgroundColor: "rgba(0,0,0,0.7)"
  };

  return (
    <div className="container">
      <div className="card about pl-2" style={purchasesStyle}>
        <div className="row no-gutters">
          <div className="col-md-6">
            <img
              className="header rounded float-left mt-4 ml-2"
              src="http://lcwphotos.imgix.net/CottonCandySunrise.jpg"
              alt="headshot"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title card-about">Picture Name Goes Here</h2>
              <p className="card-text">$25.00+</p>
              <p className="card-text">Style</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchases;
