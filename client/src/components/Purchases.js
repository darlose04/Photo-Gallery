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
      <PhotoSelection photos={photos} purchasesStyle={purchasesStyle} />
      <Information />
    </div>
  );
};

export default Purchases;
