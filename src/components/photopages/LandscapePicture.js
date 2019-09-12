import React from "react";

const LandscapePicture = ({ landscapeImages }) => {
  // console.log(pictures);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 d-flex align-items-stretch'>
          {/* {pictures.map(picture => (
            <div key={picture.name} className='card mb-3'>
              <img src={picture.url} alt='things' />
              <div className='card-body'>
                <h5 className='card-title'>{picture.name}</h5>
                <p className='card-text'>{picture.price}</p>
              </div>
            </div>
          ))} */}
          <div key={landscapeImages[0].name} className='card mb-3'>
            <img
              className='img-thumbnail'
              src={landscapeImages[0].url}
              alt='things'
            />
            <div className='card-body'>
              <h5 className='card-title'>{landscapeImages[0].name}</h5>
              <p className='card-text'>{landscapeImages[0].price}</p>
            </div>
          </div>
        </div>
        <div className='col-md-4 d-flex align-items-stretch'>
          <div key={landscapeImages[1].name} className='card mb-3'>
            <img
              className='img-thumbnail'
              src={landscapeImages[1].url}
              alt='things'
            />
            <div className='card-body'>
              <h5 className='card-title'>{landscapeImages[1].name}</h5>
              <p className='card-text'>{landscapeImages[1].price}</p>
            </div>
          </div>
        </div>
        <div className='col-md-4 d-flex align-items-stretch'>
          <div key={landscapeImages[2].name} className='card mb-3'>
            <img
              className='img-thumbnail'
              src={landscapeImages[2].url}
              alt='things'
            />
            <div className='card-body'>
              <h5 className='card-title'>{landscapeImages[2].name}</h5>
              <p className='card-text'>{landscapeImages[2].price}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4 d-flex align-items-stretch'>
          <div key={landscapeImages[3].name} className='card mb-3'>
            <img
              className='img-thumbnail'
              src={landscapeImages[3].url}
              alt='things'
            />
            <div className='card-body'>
              <h5 className='card-title'>{landscapeImages[3].name}</h5>
              <p className='card-text'>{landscapeImages[3].price}</p>
            </div>
          </div>
        </div>
        <div className='col-md-4 d-flex align-items-stretch'>
          <div key={landscapeImages[4].name} className='card mb-3'>
            <img
              className='img-thumbnail'
              src={landscapeImages[4].url}
              alt='things'
            />
            <div className='card-body'>
              <h5 className='card-title'>{landscapeImages[4].name}</h5>
              <p className='card-text'>{landscapeImages[4].price}</p>
            </div>
          </div>
        </div>
        <div className='col-md-4 d-flex align-items-stretch'>
          <div key={landscapeImages[5].name} className='card mb-3'>
            <img
              className='img-thumbnail'
              src={landscapeImages[5].url}
              alt='things'
            />
            <div className='card-body'>
              <h5 className='card-title'>{landscapeImages[5].name}</h5>
              <p className='card-text'>{landscapeImages[5].price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandscapePicture;
