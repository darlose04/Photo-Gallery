import React, { useState } from "react";
import Information from "./Information";
import PhotoSelection from "./PhotoSelection";
import Calendar from "./Calendar";

const Purchases = ({ photos }) => {
  const [purchaseSelection, setPurchaseSelection] = useState("");

  const purchasesStyle = {
    maxWidth: 1100,
    backgroundColor: "rgba(0,0,0,0.8)",
  };

  const purchaseSelectionChange = (event) => {
    setPurchaseSelection(event.target.innerText);
  };

  return (
    <div className="container mb-5">
      <div className="card about pr-2 mb-3" style={purchasesStyle}>
        <div className="row no-gutters">
          <button className="btn btn-light " onClick={purchaseSelectionChange}>
            Purchase Photo Prints
          </button>
          <button className="btn btn-light" onClick={purchaseSelectionChange}>
            Purchase Calendar
          </button>
        </div>
      </div>

      <PhotoSelection photos={photos} purchasesStyle={purchasesStyle} />
      <Information />
    </div>
  );
};

export default Purchases;
