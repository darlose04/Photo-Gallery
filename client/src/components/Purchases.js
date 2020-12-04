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
      <div className="card about pr-2 p-2 mb-2" style={purchasesStyle}>
        <div className="row no-gutters">
          <div className="col-md-12">
            <div className="text-center">
              <button
                className="btn btn-outline-light btn-block"
                onClick={purchaseSelectionChange}
              >
                Purchase Photo Prints
              </button>
              <button
                className="btn btn-outline-light btn-block"
                onClick={purchaseSelectionChange}
              >
                Purchase Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
      {purchaseSelection == "Purchase Photo Prints" ? (
        <PhotoSelection photos={photos} purchasesStyle={purchasesStyle} />
      ) : (
        <div></div>
      )}
      {purchaseSelection == "Purchase Calendar" ? (
        <Calendar purchasesStyle={purchasesStyle} />
      ) : (
        <div></div>
      )}

      <Information />
    </div>
  );
};

export default Purchases;
