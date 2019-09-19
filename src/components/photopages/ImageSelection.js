import React from "react";

const ImageSelection = ({ photo }) => {
  const cont = {
    backgroundColor: "#eee",
    cursor: "pointer",
    overflow: "hidden",
    position: "relative"
  };

  const imageStyle = {
    margin: "2px",
    height: photo.height,
    width: photo.width,
    ...cont
  };

  return (
    <div>
      <img
        style={imageStyle}
        className='image-selection'
        src={photo.src}
        alt={photo.title}
      />
    </div>
  );
};

export default ImageSelection;