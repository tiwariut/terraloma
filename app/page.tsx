import Image from 'next/image';

import Hero from '@/components/layout/Hero';

import ContactForm from '@/components/ContactForm';
import AgentModal from '@/components/AgentModal';

import AnchorLink from '@/components/common/AnchorLink';
import MapboxMap from '@/components/common/MapboxMap';
import ParsedHTML from '@/components/common/ParsedHTML';

import {
  COMPANY_DETAILS,
  DESCRIPTION_SECTION_CONTENT,
  ASSOCIATIONS_SECTION_CONTENT,
  AGENT_DETAILS,
  CONTACT_SECTION_CONTENT,
  RESIDENTIAL_LOTS_SECTION_CONTENT
} from '@/constants/texts';

import roseCastro from '@/images/rose-castro.jpg';

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

const { HEADING: RESIDENTIAL_LOTS_HEADING, LOTS } =
  RESIDENTIAL_LOTS_SECTION_CONTENT;

const {
  NAME: AGENT_NAME,
  COMPANY: { NAME: COMPANY_NAME, WEBSITE, PHONE: COMPANY_PHONE },
  DESIGNATION,
  EMAIL,
  PHONE
} = AGENT_DETAILS;

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
        ctaBtnText='Schedule your visit now!'
        ctaBtnLinkTo='#contact'
      />

      {/* DESCRIPTION SECTION */}
      <section id='description' className='description'>
        <div className='container'>
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
      </section>

      {/* RESIDENTIAL LOTS SECTION */}
      <section id='residential-lots' className='residential-lots'>
        <div className='container'>
          <h2 className='heading-secondary u-highlight-text-primary u-margin-bottom-medium u-center-text'>
            {RESIDENTIAL_LOTS_HEADING}
          </h2>

          <div className='residential-lots__lots'>
            {LOTS.map(
              ({
                value,
                name,
                address,
                area,
                price,
                links,
                images,
                isSold
              }) => (
                <div key={value} className='residential-lots__lot'>
                  <div className='residential-lots__info'>
                    <h3 className='heading-tertiary u-highlight-text-secondary u-text-bold u-margin-bottom-small'>
                      {name}
                    </h3>
                    <p>{address}</p>
                    <p>
                      {area} for {price}
                    </p>
                    {links?.map(({ id, link, label }) => (
                      <AnchorLink
                        type='primary'
                        linkTo={link}
                        openInNewTab={true}
                        key={id}
                      >
                        {label}
                      </AnchorLink>
                    ))}
                  </div>

                  <div className='residential-lots__image-container'>
                    <Image
                      className='residential-lots__image'
                      src={images[0]}
                      alt='Lot A'
                    />

                    {isSold && (
                      <span className='residential-lots__badge'>SOLD</span>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* AGENT SECTION */}
      <section id='agent' className='agent'>
        <div className='container'>
          <h2 className='heading-secondary u-highlight-text-primary u-margin-bottom-small u-center-text'>
            {AGENT_NAME}
          </h2>
          <div className='agent__content'>
            <div>
              <AnchorLink linkTo={WEBSITE} type='primary' openInNewTab={true}>
                {COMPANY_NAME}
              </AnchorLink>{' '}
              <span>/ {DESIGNATION}</span>
            </div>
            <AnchorLink linkTo={`mailto:${EMAIL}`} type='primary'>
              {EMAIL}
            </AnchorLink>
            <Image className='agent__img' src={roseCastro} alt='Roose Castro' />
            <div className='agent__contact'>
              <div>
                <span>Mobile:</span>{' '}
                <AnchorLink linkTo={`tel:${PHONE}`} type='primary'>
                  {PHONE}
                </AnchorLink>
              </div>
              <div>
                <span>Office:</span>{' '}
                <AnchorLink linkTo={`tel:${COMPANY_PHONE}`} type='primary'>
                  {COMPANY_PHONE}
                </AnchorLink>
              </div>
            </div>
            {<AgentModal />}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id='contact' className='contact'>
        <div className='container'>
          <div className='contact__box'>
            <h2 className='heading-secondary u-highlight-text-primary u-margin-bottom-medium u-center-text'>
              {CONTACT_SECTION_CONTENT.HEADING}
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section id='map' className='map'>
        <div className='container'>
          <MapboxMap
            center={[-98.055, 30.257]}
            zoom={10}
            style={{ height: '400px', width: '100%' }}
          />
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
