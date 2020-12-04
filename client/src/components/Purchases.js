import React, { useState } from "react";
import Information from "./Information";
import PhotoSelection from "./PhotoSelection";
import Calendar from "./Calendar";

const Purchases = ({ photos }) => {
  return (
    <div className="container mb-5">
      <PhotoSelection photos={photos} />
      <Information />
    </div>
  );
};

export default Purchases;
