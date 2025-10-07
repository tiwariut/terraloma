import Image from 'next/image';

import AnchorLink from '@/components/common/AnchorLink';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import ParsedHTML from '@/components/common/ParsedHTML';
import ImageCaption from '@/components/common/ImageCaption';
import Hero from '@/components/layout/Hero';

import { ICON_CHEVRON_RIGHT } from '@/constants/icons';
import {
  COMPANY_DETAILS,
  SERVICES_SECTION_CONTENT,
  PROPERTY_MANAGEMENT_CONTENT,
  DIFFERENCE_SECTION_CONTENT,
  REVIEWS_SECTION_CONTENT,
  ABOUT_US_SECTION_CONTENT,
  ASSOCIATIONS_SECTION_CONTENT
} from '@/constants/texts';

const {
  NAME,
  TAGLINE,
  COVER_IMG: { SRC, ALT_TEXT }
} = COMPANY_DETAILS;
const {
  HEADING: MANAGEMENT_SECTION_HEADING,
  SECTION_1_TEXT_1: MANAGEMENT_SECTION_TEXT_1,
  SECTION_1_TEXT_2: MANAGEMENT_SECTION_TEXT_2,
  IMG: MANAGEMENT_SECTION_IMG,
  BTN_TEXT: MANAGEMENT_SECTION_BTN_TEXT,
  BTN_ICON: MANAGEMENT_SECTION_BTN_ICON,
  REDIRECT_TO: MANAGEMENT_SECTION_REDIRECT_TO
} = PROPERTY_MANAGEMENT_CONTENT;
const {
  HEADING: DIFFERENCE_SECTION_HEADING,
  TEXT: DIFFERENCE_SECTION_TEXT,
  IMG: DIFFERENCE_SECTION_IMG,
  BTN_TEXT: DIFFERENCE_SECTION_BTN_TEXT,
  BTN_ICON: DIFFERENCE_SECTION_BTN_ICON,
  REDIRECT_TO: DIFFERENCE_SECTION_REDIRECT_TO
} = DIFFERENCE_SECTION_CONTENT;
const {
  HEADING: REVIEWS_SECTION_HEADING,
  REVIEWS,
  BTN_TEXT: REVIEWS_SECTION_BTN_TEXT,
  BTN_ICON: REVIEWS_SECTION_BTN_ICON,
  REDIRECT_TO: REVIEWS_SECTION_REDIRECT_TO
} = REVIEWS_SECTION_CONTENT;
const {
  COMPANY: {
    HEADING: COMPANY_HEADING,
    TEXT_1: COMPANY_TEXT_1,
    TEXT_2: COMPANY_TEXT_2,
    TEXT_3: COMPANY_TEXT_3
  },
  AREAS: { HEADING: AREAS_HEADING, LIST_1: AREAS_LIST_1, LIST_2: AREAS_LIST_2 }
} = ABOUT_US_SECTION_CONTENT;
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
        size='large'
      />

      {/* SERVICES SECTION */}
      <section className='services'>
        <div className='container'>
          <div className='services__list'>
            {SERVICES_SECTION_CONTENT.map(
              ({ id, title, description, icon, redirectTo }) => {
                return (
                  <div key={id} className='services__item'>
                    <Icon name={icon} blockClass='services' />
                    <p>{title}</p>
                    <AnchorLink
                      type='primary'
                      className='services__link'
                      linkTo={redirectTo}
                    >
                      <span className='services__link-content'>
                        <span>{description}</span>
                        <Icon
                          name={ICON_CHEVRON_RIGHT}
                          blockClass='services'
                          classModifier='link'
                        />
                      </span>
                    </AnchorLink>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* PROPERTY MANAGEMENT SECTION */}
      <section className='management'>
        <div className='container'>
          <div className='management__content'>
            <div>
              <h2 className='heading-secondary u-highlight-text-primary u-margin-bottom-small'>
                {MANAGEMENT_SECTION_HEADING}
              </h2>
              <div className='u-margin-bottom-small'>
                <p>{MANAGEMENT_SECTION_TEXT_1}</p>
                <ParsedHTML content={MANAGEMENT_SECTION_TEXT_2} />
              </div>

              <Button type='primary' linkTo={MANAGEMENT_SECTION_REDIRECT_TO}>
                {MANAGEMENT_SECTION_BTN_TEXT}{' '}
                <Icon
                  name={MANAGEMENT_SECTION_BTN_ICON}
                  blockClass='management'
                ></Icon>
              </Button>
            </div>
            <Image
              className='management__img'
              src={MANAGEMENT_SECTION_IMG}
              alt='Living room'
            ></Image>
          </div>
        </div>
      </section>

      {/* DIFFERENCE WITH TERRALOMA SECTION */}
      <section className='difference'>
        <div className='container'>
          <div className='difference__content'>
            <Image
              className='difference__img'
              src={DIFFERENCE_SECTION_IMG}
              alt='360 bridge'
            ></Image>
            <div>
              <ParsedHTML content={DIFFERENCE_SECTION_HEADING} />

              <p className='u-margin-bottom-small'>{DIFFERENCE_SECTION_TEXT}</p>
              <Button type='primary' linkTo={DIFFERENCE_SECTION_REDIRECT_TO}>
                {DIFFERENCE_SECTION_BTN_TEXT}{' '}
                <Icon
                  name={DIFFERENCE_SECTION_BTN_ICON}
                  blockClass='difference'
                ></Icon>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className='reviews'>
        <div className='container'>
          <h2 className='heading-secondary u-highlight-text-primary u-margin-bottom-small u-center-text'>
            {REVIEWS_SECTION_HEADING}
          </h2>

          <div className='reviews__list u-margin-bottom-small'>
            {REVIEWS.map(({ id, review, userName, userType, userImg }) => (
              <div key={id} className='reviews__item'>
                <p className='u-margin-bottom-small'>{review}</p>
                <ImageCaption
                  iconBlockClass='reviews--user'
                  iconName='icon-user'
                  imageSrc={userImg}
                  imageAlt='User profile photo'
                  title={userName}
                  meta={userType}
                />
              </div>
            ))}
          </div>
          <Button
            type='primary'
            linkTo={REVIEWS_SECTION_REDIRECT_TO}
            openInNewTab
          >
            {REVIEWS_SECTION_BTN_TEXT}{' '}
            <Icon name={REVIEWS_SECTION_BTN_ICON} blockClass='reviews'></Icon>
          </Button>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className='about-us'>
        <div className='container'>
          <div className='about-us__content'>
            <div className='company'>
              <h2 className='heading-secondary u-highlight-text-primary u-margin-bottom-medium u-center-text'>
                {COMPANY_HEADING}
              </h2>
              <div>
                <ParsedHTML content={COMPANY_TEXT_1} />
                <ParsedHTML content={COMPANY_TEXT_2} />
                <p>{COMPANY_TEXT_3}</p>
              </div>
            </div>
            <div className='areas'>
              <h2 className='heading-secondary u-highlight-text-primary u-margin-bottom-medium u-center-text'>
                {AREAS_HEADING}
              </h2>
              <div className='about-us__area-lists'>
                <ul className='about-us__area-list'>
                  {AREAS_LIST_1.map((area, index) => (
                    <li key={index} className='about-us__area-item'>
                      {area}
                    </li>
                  ))}
                </ul>
                <ul className='about-us__area-list'>
                  {AREAS_LIST_2.map((area, index) => (
                    <li key={index} className='about-us__area-item'>
                      {area}
                    </li>
                  ))}
                  <li className='u-list-style-none'>
                    <AnchorLink
                      type='primary'
                      className='about-us__link'
                      linkTo='/areas-we-serve'
                    >
                      and many more...
                    </AnchorLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
