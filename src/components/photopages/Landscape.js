import React from "react";
import LandscapePicture from "./LandscapePicture";

const Landscape = ({ pictures }) => {
  // console.log(pictures);

  return (
    <div className='mt-3'>
      {/* <h2>This is the page for landscape oriented photos</h2> */}
      <LandscapePicture pictures={pictures} />
    </div>
  );
};

export default Landscape;
