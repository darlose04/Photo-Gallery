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
              <select class="form-control">
                <option>Select a Style</option>
                <option>8x10 Fine Art Print ($25.00)</option>
                <option>8x10 Metal Print ($70.00)</option>
                <option>11x14 Fine Art Print ($35.00)</option>
                <option>11x14 Canvas Print ($65.00)</option>
                <option>11x14 Metal Print ($105.00)</option>
                <option>16x20 Fine Art Print ($60.00)</option>
                <option>16x20 Canvas Print ($80.00)</option>
                <option>16X20 Metal Print ($185.00)</option>
                <option>24x36 Canvas Print ($150.00)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchases;
