import React from "react";

const PortraitPicture = ({ portraitImages }) => {
  // console.log(pictures);
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
          <div key={portraitImages[0].name} className='card mb-3'>
            <img
              className='img-thumbnail'
              src={portraitImages[0].url}
              alt='things'
            />
            <div className='card-body'>
              <h5 className='card-title'>{portraitImages[0].name}</h5>
              <p className='card-text'>{portraitImages[0].price}</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div key={portraitImages[1].name} className='card mb-3'>
            <img
              className='img-thumbnail'
              src={portraitImages[1].url}
              alt='things'
            />
            <div className='card-body'>
              <h5 className='card-title'>{portraitImages[1].name}</h5>
              <p className='card-text'>{portraitImages[1].price}</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div key={portraitImages[2].name} className='card mb-3'>
            <img
              className='img-thumbnail'
              src={portraitImages[2].url}
              alt='things'
            />
            <div className='card-body'>
              <h5 className='card-title'>{portraitImages[2].name}</h5>
              <p className='card-text'>{portraitImages[2].price}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4'>
          <div key={portraitImages[3].name} className='card mb-3'>
            <img
              className='img-thumbnail'
              src={portraitImages[3].url}
              alt='things'
            />
            <div className='card-body'>
              <h5 className='card-title'>{portraitImages[3].name}</h5>
              <p className='card-text'>{portraitImages[3].price}</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div key={portraitImages[4].name} className='card mb-3'>
            <img
              className='img-thumbnail'
              src={portraitImages[4].url}
              alt='things'
            />
            <div className='card-body'>
              <h5 className='card-title'>{portraitImages[4].name}</h5>
              <p className='card-text'>{portraitImages[4].price}</p>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div key={portraitImages[5].name} className='card mb-3'>
            <img
              className='img-thumbnail'
              src={portraitImages[5].url}
              alt='things'
            />
            <div className='card-body'>
              <h5 className='card-title'>{portraitImages[5].name}</h5>
              <p className='card-text'>{portraitImages[5].price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortraitPicture;
