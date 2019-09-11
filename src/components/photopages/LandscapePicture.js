import React from "react";

const LandscapePicture = ({ pictures }) => {
  console.log(pictures);
  return (
    <div className='container'>
      {pictures.map(picture => (
        <div key={picture.name} className='card'>
          <img src={picture.url} alt='things' />
          <div className='card-body'>
            <h5 className='card-title'>{picture.name}</h5>
            <p className='card-text'>{picture.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandscapePicture;
