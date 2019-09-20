import React from "react";
import Gallery from "react-photo-gallery";
import ImageSelection from "./ImageSelection";

const AllPictures = ({ photos }) => {
  // let key;

  // photos.map(photo => {
  //   return (key = photo.id);
  // });

  const imageRenderer = ({ photo }) => {
    return <ImageSelection key={photo.id} photo={photo} />;
  };

  return (
    <div className='mt-2 mb-5'>
      <Gallery photos={photos} renderImage={imageRenderer} />
    </div>
  );
};

export default AllPictures;
