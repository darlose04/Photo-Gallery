import React from "react";
import PortraitPicture from "./PortraitPicture";

const Portrait = ({ portraitImages }) => {
  // console.log(portraitImages);
  return (
    <div className='mt-3'>
      {/* <h2>This is the page for portrait oriented photos</h2> */}
      <PortraitPicture portraitImages={portraitImages} />
    </div>
  );
};

export default Portrait;
