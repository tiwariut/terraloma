import Hero from '@/components/layout/Hero';

import { COMPANY_DETAILS } from '@/constants/texts';

const {
  COVER_IMG: { SRC, ALT_TEXT }
} = COMPANY_DETAILS;

import ContactForm from '@/components/layout/ContactForm';

type PageWrapperProps = {
  children: any;
  heroHeading?: string;
  heroSubheading?: string;
  heroSize?: string;
  showSidebar?: boolean;
};

const PageWrapper = ({
  children,
  heroHeading,
  heroSubheading,
  heroSize,
  showSidebar = true
}: PageWrapperProps) => {
  return (
    <>
      <Hero
        imgSrc={SRC}
        imgAltText={ALT_TEXT}
        heading={heroHeading}
        subheading={heroSubheading}
        size={heroSize}
      />

      <div className='container'>
        <div className={showSidebar ? 'with-sidebar' : ''}>
          {children}
          {showSidebar && (
            <aside className='sidebar'>
              <ContactForm />
            </aside>
          )}
        </div>
      </div>
    </>
  );
};

PageWrapper.defaultProps = {
  showSidebar: true
};

export default PageWrapper;
