import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import calendar from "../photos/LCWCalendar.jpg";

const Calendar = ({ purchasesStyle }) => {
  let productPrice = 25.0;
  let productName = "Logan Wilson Photography Calendar";
  let productType = "Calendar";
  let productSize = "8.5x11";

  const handleToken = async (token, addresses) => {
    const response = await axios.post(
      "https://logancwilsonphotography.herokuapp.com/checkout",
      {
        token,
        productName,
        productPrice,
        productSize,
        productType,
      }
    );

    const status = response.data;
    console.log(status.status);

    if (status.status === "success") {
      alert("Purchase Complete! Check your email for details");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className="card about pr-2" style={purchasesStyle}>
      <div className="row no-gutters">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="card-body">
            <h3 className="card-title card-about">
              Logan Wilson Photography Calendar
            </h3>
            <p className="card-text text-center">
              (8.5x11, Limited Availability)
            </p>
            <img
              className="header rounded float-right mt-3 mr-2 mb-3"
              src={calendar}
              alt="Calendar"
            />
            <p className="card-text">Free shipping to the United States</p>
            <StripeCheckout
              // stripeKey="pk_live_NfUn28zVGn82Y5WW2exzyyRw00ygY2yGyI"
              stripeKey="pk_test_KYo2T9oUQDIpMwuNYJjCm9x200WhGiUReK"
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
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Calendar;
