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
  return (
    <div className='mt-2 mb-5 container'>
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
