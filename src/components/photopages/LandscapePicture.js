import React from "react";

const LandscapePicture = ({ pictures }) => {
  console.log(pictures);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          {/* {pictures.map(picture => (
            <div key={picture.name} className='card mb-3'>
              <img src={picture.url} alt='things' />
              <div className='card-body'>
                <h5 className='card-title'>{picture.name}</h5>
                <p className='card-text'>{picture.price}</p>
              </div>
            </div>
          ))} */}
          <div key={pictures[0].name} className='card mb-3'>
            <img src={pictures[0].url} alt='things' />
            <div className='card-body'>
              <h5 className='card-title'>{pictures[0].name}</h5>
              <p className='card-text'>{pictures[0].price}</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div key={pictures[1].name} className='card mb-3'>
            <img src={pictures[1].url} alt='things' />
            <div className='card-body'>
              <h5 className='card-title'>{pictures[1].name}</h5>
              <p className='card-text'>{pictures[1].price}</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div key={pictures[2].name} className='card mb-3'>
            <img src={pictures[2].url} alt='things' />
            <div className='card-body'>
              <h5 className='card-title'>{pictures[2].name}</h5>
              <p className='card-text'>{pictures[2].price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandscapePicture;
