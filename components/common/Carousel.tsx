'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import Modal from './Modal';

type CarouselProps = {
  images: any;
};

const Carousel = ({ images }: CarouselProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const navigateImages = (type: string) => {
    let newActiveImageIndex;

    if (type === 'prev') {
      newActiveImageIndex =
        activeImageIndex === 0 ? images.length - 1 : activeImageIndex - 1;
    } else {
      newActiveImageIndex =
        activeImageIndex === images.length - 1 ? 0 : activeImageIndex + 1;
    }

    setActiveImageIndex(newActiveImageIndex);
  };

  const renderCarousel = () => {
    return (
      <div className='carousel'>
        <div className='carousel__container'>
          {images.map(
            ({ id, image, caption, captionColor }: any, index: number) => {
              if (activeImageIndex === index) {
                return (
                  <div
                    key={id}
                    className='carousel__slide fade'
                    onClick={() => !isPreviewOpen && setIsPreviewOpen(true)}
                  >
                    <div
                      className={`carousel__number ${isPreviewOpen ? 'carousel__number--preview' : ''}`}
                    >
                      {++index} / {images.length}
                    </div>
                    <Image
                      className={`carousel__image ${isPreviewOpen ? 'carousel__image--preview' : ''}`}
                      src={image}
                      alt={caption}
                    />
                    <div
                      className={`carousel__caption ${isPreviewOpen ? 'carousel__caption--preview' : ''} ${captionColor === 'dark' ? 'carousel__caption--dark' : ''}`}
                    >
                      {caption}
                    </div>
                  </div>
                );
              }
            }
          )}

          <a
            className={`carousel__control carousel__control--prev ${isPreviewOpen ? 'carousel__control--preview' : ''}`}
            onClick={() => navigateImages('prev')}
          >
            &#10094;
          </a>
          <a
            className={`carousel__control carousel__control--next ${isPreviewOpen ? 'carousel__control--preview' : ''}`}
            onClick={() => navigateImages('next')}
          >
            &#10095;
          </a>
        </div>

        <div className='carousel__dots'>
          {images.map((_item: any, index: number) => (
            <span
              key={index}
              className={`carousel__dot ${activeImageIndex === index ? 'carousel__dot--active' : ''}`}
              onClick={() => setActiveImageIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      {renderCarousel()}
      {isPreviewOpen && (
        <Modal
          className='carousel__preview-modal'
          onClose={() => setIsPreviewOpen(false)}
        >
          {renderCarousel()}
        </Modal>
      )}
    </>
  );
};

export default Carousel;
