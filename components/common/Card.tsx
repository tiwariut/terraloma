import Image from 'next/image';
import moment from 'moment';

import ImageCaption from './ImageCaption';
import Button from './Button';
import Link from 'next/link';

type CardProps = {
  imageURL?: string;
  venue?: { date: any; location: string };
  title: string;
  description?: string;
  meta?: { author: { name: string; profilePhotoUrl: string }; date: any };
  linkTo: string;
  btnText?: string;
  openInNewTab?: boolean;
  highlightedText?: string;
};

const Card = ({
  imageURL,
  venue,
  title,
  description,
  meta,
  linkTo,
  openInNewTab,
  btnText,
  highlightedText
}: CardProps) => {
  let trimmedDescription = description || '';

  if (trimmedDescription.length > 100) {
    trimmedDescription = `${description?.substring(0, 99)}...`;
  }

  const renderCard = () => {
    return (
      <div className='card'>
        {imageURL && (
          <Image className='card__img' src={imageURL} alt='Card image' />
        )}
        <div className='card__content'>
          {(venue || highlightedText) && (
            <div className='card__venue'>
              <span>{venue?.date || highlightedText}</span>
              <span>{venue?.location}</span>
            </div>
          )}
          <p className='card__title'>{title}</p>
          {description && (
            <div className='card__description'>
              <p>{trimmedDescription}</p>
            </div>
          )}
          {btnText && (
            <Button type='black' linkTo={linkTo} openInNewTab={true}>
              {btnText}
            </Button>
          )}
          {meta && (
            <ImageCaption
              iconBlockClass='forum--user'
              iconName='icon-user'
              imageSrc={meta?.author.profilePhotoUrl}
              imageAlt='User profile photo'
              title={meta?.author?.name}
              meta={
                meta?.date
                  ? moment(meta?.date).format('MMMM Do YYYY, h:mm a')
                  : ''
              }
            />
          )}
        </div>
      </div>
    );
  };

  return openInNewTab ? (
    <a className='card__no-style-link' href={linkTo} target='_blank'>
      {renderCard()}
    </a>
  ) : (
    <Link href={linkTo}>{renderCard()}</Link>
  );
};

Card.defaultProps = {
  linkTo: ''
};

export default Card;
