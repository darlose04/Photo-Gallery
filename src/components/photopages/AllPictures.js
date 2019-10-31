import React from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const AllPictures = ({
  photos,
  openLightbox,
  closeLightbox,
  currentImage,
  viewerIsOpen
}) => {
  const portfolioStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }

  return (
    <div className='mt-2 mb-5 pt-3 pb-3 container portfolio' style={portfolioStyle}>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(photo => ({
                ...photo,
                srcset: photo.srcSet,
                caption: photo.name
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default AllPictures;
