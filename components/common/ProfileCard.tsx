import Image, { StaticImageData } from 'next/image';
import React from 'react';
import AnchorLink from './AnchorLink';

type ProfileCardProps = {
  id: string;
  img?: StaticImageData;
  title: string;
  email?: string;
  description: string;
};

const ProfileCard = ({
  id,
  img,
  title,
  email,
  description
}: ProfileCardProps) => {
  return (
    <article key={id} className='profile-card u-display-flex'>
      {img && (
        <div className='profile-card__img-container'>
          <Image
            className='profile-card__img-container__img'
            src={img}
            alt='Team member'
          />
        </div>
      )}
      <section className='profile-card__info'>
        <h2 className='heading-secondary u-highlight-text-primary'>{title}</h2>
        {email && (
          <AnchorLink
            type='primary'
            linkTo={`mailto:${email}`}
            className='profile-card__info__email'
          >
            {email}
          </AnchorLink>
        )}
        <p>{description}</p>
      </section>
    </article>
  );
};

export default ProfileCard;
