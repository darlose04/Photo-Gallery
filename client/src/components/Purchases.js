import React, { useState } from "react";
import Information from "./Information";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import PhotoSelection from "./PhotoSelection";
import Calendar from "./Calendar";

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
];

const Purchases = ({ photos }) => {
  return (
    <div className="container mb-5">
      <PhotoSelection photos={photos} />
      <Information />
    </div>
  );
};

export default Purchases;
