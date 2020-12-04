import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

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

const PhotoSelection = ({ photos }) => {
  const [source, setSource] = useState(
    "https://lcwphotography.herokuapp.com/images/image/CottonCandySunrise.jpg"
  );
  const [productName, setProductName] = useState("");
  const [productDetails, setProductDetails] = useState("$25.00");

  const purchasesStyle = {
    maxWidth: 1100,
    backgroundColor: "rgba(0,0,0,0.8)",
  };

  const photoSelection = () => {
    return photos.map((photo) => (
      <option className="photoName" key={photo.id} value={photo.name}>
        {photo.name}
      </option>
    ));
  };

  return (
    <div>
      <h1>This is where I will move the Photo purchase section</h1>
    </div>
  );
};

export default PhotoSelection;
