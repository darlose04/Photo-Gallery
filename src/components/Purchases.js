import React, { useState } from "react";
import Information from "./Information";

const Purchases = ({ photos }) => {
  const [source, setSource] = useState(
    "http://lcwphotos.imgix.net/CottonCandySunrise.jpg"
  );
  console.log(source);

  const purchasesStyle = {
    maxWidth: 1100,
    backgroundColor: "rgba(0,0,0,0.7)"
  };

  const photoSelection = () => {
    return photos.map(photo => (
      <option className="photoName" key={photo.id} value={photo.src}>
        {photo.name}
      </option>
    ));
  };

  const photoChange = event => {
    setSource(event.target.value);
  };

  return (
    <div className="container">
      <div className="card about pr-2" style={purchasesStyle}>
        <div className="row no-gutters">
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title card-about">
                Photo Selection & Purchase
              </h2>
              <p className="card-text font-weight-bold">$25.00+</p>
              <p className="card-text">Free shipping to the United States</p>

              <form>
                <label className="card-text">Photos</label>
                <div className="form-group">
                  <select
                    id="photo-value"
                    className="form-control mb-3"
                    onChange={photoChange}
                  >
                    <option>Select a Photo</option>
                    {photoSelection()}
                  </select>
                </div>
                <label className="card-text">Style</label>
                <div className="form-group">
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
                <button type="submit" className="btn btn-success btn-block">
                  Purchase
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <img
              className="header rounded float-right mt-3 mr-2 mb-3"
              src={source}
              alt=""
            />
          </div>
        </div>
      </div>
      <Information />
    </div>
  );
};

export default Purchases;
