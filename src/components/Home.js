import React from "react";
import Image from "react-bootstrap/Image";
import westimage from "../LoganPhotos/TheWindowToTheWest.jpg";

const Home = () => {
  return (
    <div className='container'>
      <Image src={westimage} fluid />
    </div>
  );
};

export default Home;
