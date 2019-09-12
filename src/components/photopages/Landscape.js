import React from "react";
import LandscapePicture from "./LandscapePicture";

const Landscape = ({ landscapeImages }) => {
  // console.log(pictures);

  return (
    <div className='mt-3'>
      {/* <h2>This is the page for landscape oriented photos</h2> */}
      <LandscapePicture landscapeImages={landscapeImages} />
    </div>
  );
};

export default Landscape;
