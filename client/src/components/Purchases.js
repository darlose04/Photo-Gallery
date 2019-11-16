import React, { useState } from "react";
import Information from "./Information";
import { Elements, injectStripe } from "react-stripe-elements";

const styles = [
  {
    id: 1,
    type: "Fine Art Print",
    size: "8x10",
    price: "$25.00"
  },
  {
    id: 2,
    type: "Metal Print",
    size: "8x10",
    price: "$70.00"
  },
  {
    id: 3,
    type: "Fine Art Print",
    size: "11x14",
    price: "$35.00"
  },
  {
    id: 4,
    type: "Canvas Print",
    size: "11x14",
    price: "$65.00"
  },
  {
    id: 5,
    type: "Metal Print",
    size: "11x14",
    price: "$105.00"
  },
  {
    id: 6,
    type: "Fine Art Print",
    size: "16x20",
    price: "$60.00"
  },
  {
    id: 7,
    type: "Canvas Print",
    size: "16x20",
    price: "$80.00"
  },
  {
    id: 8,
    type: "Metal Print",
    size: "16x20",
    price: "$185.00"
  },
  {
    id: 9,
    type: "Canvas Print",
    size: "24x36",
    price: "$150.00"
  }
];

const Purchases = ({ photos }) => {
  const [source, setSource] = useState(
    "http://lcwphotos.imgix.net/CottonCandySunrise.jpg"
  );

  const [price, setPrice] = useState("$25.00");

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

  const styleSelection = () => {
    return styles.map(style => (
      <option key={style.id} value={style.price}>
        {style.size + " " + style.type + " " + style.price}
      </option>
    ));
  };

  const photoChange = event => {
    setSource(event.target.value);
  };

  const styleChange = event => {
    setPrice(event.target.value);
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
              <Elements>
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
                    <select className="form-control" onChange={styleChange}>
                      <option>Select a Style</option>
                      {styleSelection()}
                    </select>
                  </div>
                  <button type="submit" className="btn btn-success btn-block">
                    Purchase for {price}
                  </button>
                </form>
              </Elements>
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