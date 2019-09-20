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

  const handleImage = () => {
    console.log(`The image named ${photo.name} was clicked`);
  };

  return (
    <div>
      <img
        style={imageStyle}
        className='image-selection'
        src={photo.src}
        alt={photo.title}
        onClick={handleImage}
      />
      <style>{`.image-selection:hover{outline:2px solid #06befa}`}</style>
    </div>
  );
};

export default ImageSelection;
