import React, { useState } from "react";
import Information from "./Information";
import StripeCheckout from "react-stripe-checkout";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import calendar from "../photos/LCWCalendar.jpg";

const styles = [
  {
    id: 1,
    type: "Fine Art Print",
    size: "8x10",
    price: 25.0,
  },
  {
    id: 2,
    type: "Metal Print",
    size: "8x10",
    price: 70.0,
  },
  {
    id: 3,
    type: "Fine Art Print",
    size: "11x14",
    price: 35.0,
  },
  {
    id: 4,
    type: "Canvas Print",
    size: "11x14",
    price: 65.0,
  },
  {
    id: 5,
    type: "Metal Print",
    size: "11x14",
    price: 105.0,
  },
  {
    id: 6,
    type: "Fine Art Print",
    size: "16x20",
    price: 60.0,
  },
  {
    id: 7,
    type: "Canvas Print",
    size: "16x20",
    price: 80.0,
  },
  {
    id: 8,
    type: "Metal Print",
    size: "16x20",
    price: 185.0,
  },
  {
    id: 9,
    type: "Canvas Print",
    size: "24x36",
    price: 150.0,
  },
  {
    id: 10,
    type: "Calendar",
    size: "8.5x11 (Only for calendars!)",
    price: 25.0,
  },
];

const Purchases = ({ photos }) => {
  // const [purchaseSelection, setPurchaseSelection] = useState("");
  const [source, setSource] = useState(
    "https://lcwphotography.herokuapp.com/images/image/CottonCandySunrise.jpg"
  );
  const [productName, setProductName] = useState("");
  const [productDetails, setProductDetails] = useState("$25.00");

  const purchasesStyle = {
    maxWidth: 1100,
    backgroundColor: "rgba(0,0,0,0.8)",
  };

  // console.log(photos);

  const photoSelection = () => {
    return photos.map((photo) => (
      <option className="photoName" key={photo.id} value={photo.name}>
        {photo.name}
      </option>
    ));
  };

  const styleSelection = () => {
    return styles.map((style) => (
      <option
        key={style.id}
        value={[style.size, style.type, style.price, style.sale]}
      >
        {`${style.size} ${style.type} $${style.price}`}
      </option>
    ));
  };

  const photoChange = (event) => {
    setProductName(event.target.value);
    if (event.target.value === "Logan Wilson Photography Calendar") {
      setSource(calendar);
    } else {
      setSource(
        `https://lcwphotography.herokuapp.com/images/image/${event.target.value
          .split(" ")
          .join("")}.jpg`
      );
    }
  };

  const styleChange = (event) => {
    setProductDetails(event.target.value);
  };

  let productPrice = parseInt(productDetails.split(",")[2]);
  console.log(productPrice);
  // let salePrice = productPrice * 0.8;
  let productSize = productDetails.split(",")[0];
  let productType = productDetails.split(",")[1];

  const handleToken = async (token, addresses) => {
    const response = await axios.post(
      "https://logancwilsonphotography.herokuapp.com/checkout",
      // "http://localhost:5000/checkout",
      {
        token,
        productName,
        productPrice,
        // salePrice,
        productSize,
        productType,
      }
    );

    const status = response.data;
    console.log(status);

    if (status.status === "success") {
      alert("Purchase Complete! Check your email for details");
    } else {
      alert("Something went wrong");
    }
  };

  // const purchaseSelectionChange = (event) => {
  //   setPurchaseSelection(event.target.innerText);
  // };

  return (
    <div className="container mb-5">
      <div className="card about pr-2" style={purchasesStyle}>
        <div className="row no-gutters">
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title card-about">
                Photo Selection & Purchase
              </h2>
              <div className="alert alert-success">
                A limited number of calendars are available for purchase and can
                be selected from the Photos dropdown list. Make sure to select
                the 8.5x11 Calendar option under the Style dropdown.
              </div>
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
                  <select className="form-control" onChange={styleChange}>
                    <option>Select a Style</option>
                    {styleSelection()}
                  </select>
                </div>
              </form>
              {productSize === "8x12" ||
              productSize === "11x14" ||
              productSize === "16x20" ? (
                <p className="alert alert-danger" role="alert">
                  Cropping may occur at certain print sizes
                </p>
              ) : null}
              {isNaN(productPrice) ? (
                <p className="text-white">Please select a photo and a style</p>
              ) : (
                // <StripeCheckout
                //   stripeKey="pk_test_KYo2T9oUQDIpMwuNYJjCm9x200WhGiUReK"
                //   token={handleToken}
                //   billingAddress
                //   shippingAddress
                //   amount={productPrice * 100}
                //   name={productName}
                // >
                //   <button type="submit" className="btn btn-success btn-block">
                //     Purchase for ${productPrice}
                //     {/* Purchase for <del>${productPrice}</del> ${salePrice} */}
                //   </button>
                // </StripeCheckout>
                <StripeCheckout
                  stripeKey="pk_live_NfUn28zVGn82Y5WW2exzyyRw00ygY2yGyI"
                  token={handleToken}
                  billingAddress
                  shippingAddress
                  amount={productPrice * 100}
                  name={productName}
                >
                  <button type="submit" className="btn btn-success btn-block">
                    Purchase for ${productPrice}
                    {/* Purchase for <del>${productPrice}</del> ${salePrice} */}
                  </button>
                </StripeCheckout>
              )}
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
