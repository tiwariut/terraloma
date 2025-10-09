import Image from 'next/image';

import ParsedHTML from '@/components/common/ParsedHTML';
import Hero from '@/components/layout/Hero';

import {
  COMPANY_DETAILS,
  DESCRIPTION_SECTION_CONTENT,
  ASSOCIATIONS_SECTION_CONTENT
} from '@/constants/texts';
import AnchorLink from '@/components/common/AnchorLink';

import roseCastro from '@/images/rose-castro.jpg';
import Button from '@/components/common/Button';

const {
  NAME,
  TAGLINE,
  COVER_IMG: { SRC, ALT_TEXT }
} = COMPANY_DETAILS;
const {
  COMPANY: {
    HEADING: DESCRIPTION_HEADING,
    TEXT_1: DESCRIPTION_TEXT_1,
    TEXT_2: DESCRIPTION_TEXT_2,
    TEXT_3: DESCRIPTION_TEXT_3,
    TEXT_4: DESCRIPTION_TEXT_4,
    TEXT_5: DESCRIPTION_TEXT_5
  }
} = DESCRIPTION_SECTION_CONTENT;
const { HEADING: ASSOCIATIONS_SECTION_HEADING, LIST: ASSOCIATIONS_LIST } =
  ASSOCIATIONS_SECTION_CONTENT;

export default function Home() {
  return (
    <>
      <Hero
        imgSrc={SRC}
        imgAltText={ALT_TEXT}
        heading={NAME}
        subheading={TAGLINE}
        size='full'
      />

      {/* DESCRIPTION SECTION */}
      <section id='description' className='description'>
        <div className='container'>
          <div className='description__content'>
            <div className='company'>
              <h2 className='heading-secondary u-highlight-text-primary u-margin-bottom-medium u-center-text'>
                {DESCRIPTION_HEADING}
              </h2>
              <div className='description__texts'>
                <ParsedHTML content={DESCRIPTION_TEXT_1} />
                <ParsedHTML content={DESCRIPTION_TEXT_2} />
                <ParsedHTML content={DESCRIPTION_TEXT_3} />
                <p className='u-highlight-text-secondary u-text-bold'>
                  {DESCRIPTION_TEXT_4}
                </p>
                <p>{DESCRIPTION_TEXT_5}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGENT SECTION */}
      <section id='agent' className='agent'>
        <h2 className='heading-secondary u-highlight-text-primary u-margin-bottom-small u-center-text'>
          Rose Castro
        </h2>

        <div className='agent__content'>
          <div>
            <AnchorLink
              linkTo='https://www.austinoptionsrealestate.com'
              type='primary'
              openInNewTab={true}
            >
              Austin Options Realty
            </AnchorLink>{' '}
            <span>/ Listing Agent</span>
          </div>

          <AnchorLink
            linkTo='mailto:rose.optionsrealty@gmail.com'
            type='primary'
          >
            rose.optionsrealty@gmail.com
          </AnchorLink>

          <Image className='agent__img' src={roseCastro} alt='Roose Castro' />

          <div className='agent__contact'>
            <div>
              <span>Mobile:</span>{' '}
              <AnchorLink linkTo='tel:(512) 656-3281' type='primary'>
                (512) 656-3281
              </AnchorLink>
            </div>
            <div>
              <span>Office:</span>{' '}
              <AnchorLink linkTo='tel:(512) 250-9882' type='primary'>
                (512) 656-3281
              </AnchorLink>
            </div>
          </div>

          <Button type='primary'>View Bio</Button>
        </div>
      </section>

      {/* ASSOCIATIONS SECTION */}
      <section className='associations'>
        <div className='container'>
          <div className='associations__content'>
            <h2 className='heading-secondary u-highlight-text-primary '>
              {ASSOCIATIONS_SECTION_HEADING}
            </h2>
            <div className='associations__list'>
              {ASSOCIATIONS_LIST.map(({ id, title, logo }) => (
                <Image
                  key={id}
                  className='associations__logo'
                  src={logo}
                  alt={title}
                ></Image>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
