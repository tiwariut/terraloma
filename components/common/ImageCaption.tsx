import Image from 'next/image';

import AnchorLink from './AnchorLink';
import Icon from './Icon';

type ImageCaptionProps = {
  imageSrc?: any;
  imageAlt?: string;
  iconName?: string;
  iconBlockClass?: string;
  title: string;
  meta?: string;
  linkTo?: string;
  className?: string;
};

const ImageCaption = ({
  imageSrc,
  imageAlt,
  iconName,
  iconBlockClass,
  title,
  meta,
  linkTo,
  className
}: ImageCaptionProps) => {
  return (
    <figure className={`image-caption ${className}`}>
      {imageSrc ? (
        <Image
          className='image-caption__image'
          src={imageSrc}
          alt={imageAlt || ''}
        ></Image>
      ) : (
        <Icon name={iconName} blockClass={iconBlockClass} />
      )}
      <figcaption className='image-caption__data'>
        {linkTo ? (
          <AnchorLink type='primary' className='image-caption__link'>
            {title}
          </AnchorLink>
        ) : (
          <span className='image-caption__name'>{title}</span>
        )}
        {meta && <span className='image-caption__meta'>{meta}</span>}
      </figcaption>
    </figure>
  );
};

ImageCaption.defaultProps = {
  className: ''
};

export default ImageCaption;
