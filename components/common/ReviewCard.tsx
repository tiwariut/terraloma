import Image, { StaticImageData } from 'next/image';
import React from 'react';

type ReviewCardProps = {
  id: string;
  userImg: StaticImageData;
  userName: string;
  review: string;
};

const ReviewCard = ({ id, userImg, userName, review }: ReviewCardProps) => {
  return (
    <article className='review-card' key={id}>
      <div className='review-card__user-profile'>
        <div className='review-card__user-profile__img-container'>
          <Image
            className='review-card__user-profile__img-container__img'
            src={userImg || ''}
            alt='Team member'
          ></Image>
        </div>
        <span className='review-card__user-profile__name'>{userName}</span>
      </div>
      <p className='review-card__review'>{review}</p>
    </article>
  );
};

export default ReviewCard;
