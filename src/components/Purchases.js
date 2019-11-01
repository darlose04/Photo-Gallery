import React from "react";

const Purchases = ({ photos }) => {
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
              className="header rounded float-left mt-3 ml-2 mb-3"
              src="http://lcwphotos.imgix.net/CottonCandySunrise.jpg"
              alt="headshot"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title card-about">Picture Name Goes Here</h2>
              <p className="card-text font-weight-bold">$25.00+</p>
              <p className="card-text">Free shipping to the United States</p>
              <p className="card-text">Photos</p>
              <select className="form-control mb-3">
                <option>Select a Photo</option>
                {photos.map(photo => (
                  <option value={photo.name}>{photo.name}</option>
                ))}
              </select>
              <p className="card-text">Style</p>
              <select className="form-control">
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