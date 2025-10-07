'use client';

import { useState } from 'react';

import Icon from '@/components/common/Icon';
import ReviewCard from '@/components/common/ReviewCard';

import { ICON_CHEVRON_DOWN } from '@/constants/icons';

type ReviewsProps = {
  id: string;
  reviews: any;
};

const Reviews = ({ id, reviews }: ReviewsProps) => {
  const [expandedReviews, setExpandedReviews] = useState<
    Record<string, boolean>
  >({});

  const toggleReviews = (realtorId: string) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [realtorId]: !prev[realtorId]
    }));
  };

  return (
    <>
      {reviews.length > 0 && (
        <div className='realtors__card__reviews'>
          <div
            className='realtors__card__reviews__heading'
            onClick={() => (reviews.length > 1 ? toggleReviews(id) : undefined)}
            role={reviews.length > 1 ? 'button' : undefined}
            tabIndex={reviews.length > 1 ? 0 : undefined}
          >
            <h1 className='u-highlight-text-primary'>Recent Reviews</h1>
            {reviews.length > 1 && (
              <Icon
                name={ICON_CHEVRON_DOWN}
                blockClass='realtors__card__reviews__heading'
                classModifier={expandedReviews[id] ? 'open' : 'close'}
              />
            )}
          </div>
          <ul className='realtors__card__reviews__list'>
            {reviews
              .slice(0, expandedReviews[id] ? undefined : 1)
              .map((review: any) => (
                <ReviewCard key={review.id} {...review} />
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Reviews;
