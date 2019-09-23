import React from "react";
// import LargeImage from "./LargeImage";

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

  const imageModal = () => {
    // console.log(`${photo.name} clicked`);
    return (
      <div
        className='modal fade'
        id='exampleModalCenter'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalCenterTitle'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalCenterTitle'>
                {photo.name}
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <img className='img-fluid' src={photo.src} alt={photo.name} />
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
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
        alt={photo.name}
        onClick={handleImage}
        // onClick={imageModal}
        data-toggle='modal'
        data-target='#exampleModalCenter'
      />
      {imageModal()}
      <style>{`.image-selection:hover{outline:2px solid #06befa}`}</style>
    </div>
  );
};

export default ImageSelection;
