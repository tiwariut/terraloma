import Link from 'next/link';
import Image from 'next/image';

import { FOOTER_NAVIGATION, LICENSES } from '@/constants/navigation';

import { COMPANY_DETAILS } from '@/constants/texts';

import austinOptionsLogo from 'public/images/austin-options-logo.png';

const {
  NAME,
  PHONE,
  EMAIL,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  ADDRESS_LINE_3,
  LOGO,
  BUSINESS_HOURS
} = COMPANY_DETAILS;

const Footer = () => {
  return (
    <footer id='footer' className='footer'>
      <div className='container'>
        <Image
          src={austinOptionsLogo}
          alt='AUSTIN OPTIONS REALTY'
          className='footer__logo'
        />

        <div className='footer__content'>
          <div className='footer__meta'>
            <p className='footer__heading'>AUSTIN OPTIONS REALTY</p>
            <p>{ADDRESS_LINE_1}</p>
            <p>{ADDRESS_LINE_2}</p>
            <p>{ADDRESS_LINE_3}</p>
            <a href={`tel:${PHONE}`}>{PHONE}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <p>{BUSINESS_HOURS}</p>
          </div>

          <div>
            <p className='footer__heading'>Our Company</p>
            <div className='footer__lists'>
              <nav className='footer__nav'>
                <ul className='footer__nav-list'>
                  {FOOTER_NAVIGATION.map(
                    ({ value, label, navigateTo, openInNewTab }: any) => (
                      <li key={value}>
                        <Link
                          href={navigateTo || 'javascript:void(0);'}
                          className='footer__link'
                          target={openInNewTab ? '_blank' : '_self'}
                        >
                          {label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </nav>

              <ul className='footer__nav-list'>
                {LICENSES.map(({ label, value, navigateTo, openInNewTab }) => (
                  <li key={value}>
                    {navigateTo ? (
                      <Link
                        href={navigateTo || 'javascript:void(0);'}
                        className='footer__link'
                        target={openInNewTab ? '_blank' : '_self'}
                      >
                        {label}
                      </Link>
                    ) : (
                      label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className='footer__text'>
        {NAME} &reg;. All Rights Reserved. Copyright &copy;{' '}
        {new Date().getFullYear()}. {EMAIL}
      </p>
    </footer>
  );
};

export default Footer;
