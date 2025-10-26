'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type CarouselProps = {
  images: any;
};

const Carousel = ({ images }: CarouselProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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

  return (
    <div className='carousel'>
      <div className='carousel__container'>
        {images.map(({ id, image, caption }: any, index: number) => {
          if (activeImageIndex === index) {
            return (
              <div key={id} className='carousel__slide fade'>
                <div className='carousel__number'>
                  {++index} / {images.length}
                </div>
                <Image className='carousel__image' src={image} alt={caption} />
                <div className='carousel__caption'>{caption}</div>
              </div>
            );
          }
        })}

        <a
          className='carousel__control carousel__control--prev'
          onClick={() => navigateImages('prev')}
        >
          &#10094;
        </a>
        <a
          className='carousel__control carousel__control--next'
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

export default Carousel;
