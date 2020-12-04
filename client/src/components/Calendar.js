import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Calendar = ({ purchasesStyle }) => {
  let productPrice = 25;
  let productName = "Calendar";

  const handleToken = async (token, addresses) => {
    const response = await axios.post(
      "https://logancwilsonphotography.herokuapp.com/checkout",
      {
        token,
        productName,
        productPrice,
      }
    );
  };

  return (
    <div className="card about pr-2" style={purchasesStyle}>
      <div className="row no-gutters">
        <div className="col-md-6">
          <div className="card-body">
            <h2 className="card-title card-about">Calendar Purchase</h2>
            <p className="card-text">Free shipping to the United States</p>
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
              </button>
            </StripeCheckout>
          </div>
        </div>
        <div className="col-md-6">
          <img
            className="header rounded float-right mt-3 mr-2 mb-3"
            src="../photos/LCWCalendar.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
