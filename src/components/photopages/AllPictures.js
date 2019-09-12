import React from "react";
// import { render } from 'react-dom';
import Gallery from "react-photo-gallery";

const AllPictures = ({ allPictures }) => {
  let key;

  allPictures.map(picture => {
    return (key = picture.name);
  });
  return (
    <div className='mt-2'>
      <Gallery key={key} photos={allPictures} />
    </div>
  );
};

export default AllPictures;
