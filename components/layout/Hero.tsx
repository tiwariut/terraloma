import Image, { StaticImageData } from 'next/image';

import ParsedHTML from '../common/ParsedHTML';

type HeroProps = {
  imgSrc: StaticImageData;
  imgAltText: string;
  heading?: string;
  subheading?: string;
  size?: string;
};

const Hero = ({
  imgSrc,
  imgAltText,
  heading,
  subheading,
  size = 'small'
}: HeroProps) => {
  return (
    <section id='home' className={`hero hero--${size}`}>
      <Image
        className='background__img hero__img'
        src={imgSrc}
        alt={imgAltText}
      ></Image>
      <div className='container'>
        <div className='hero__text'>
          {heading && (
            <ParsedHTML
              parentClassName='hero__text'
              content={`<h1 class='heading-primary u-margin-bottom-small'>${heading}</h1>`}
            />
          )}
          {subheading && <h3 className='heading-tertiary'>{subheading}</h3>}
        </div>
      </div>
    </section>
  );
};

Hero.defaultProps = {
  size: 'small'
};

export default Hero;
