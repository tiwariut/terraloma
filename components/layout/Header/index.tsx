'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Navigation from './Navigation';
import NavigationMobile from './NavigationMobile';

import Icon from '@/components/common/Icon';

// import { ICON_LOGO } from '@/constants/icons';

import { AUTH_TYPES } from '@/constants/settings';
import { USER } from '@/constants/navigation';

import { COMPANY_DETAILS } from '@/constants/texts';

const { NAME, LOGO } = COMPANY_DETAILS;

type HeaderProps = {
  currentPagePath: string;
  disableNavigation?: boolean;
};

// Will from from auth. Make null to logout user
const loggedInUser = {
  username: 'Utkarsh',
  profileImg: '',
  memberType: { name: 'Bronze' }
};

const Header = ({ currentPagePath, disableNavigation }: HeaderProps) => {
  const headerRef = useRef(null);
  const observerRef: any = useRef(null);
  const observerTargetSectionRef: any = useRef(null);

  useEffect(() => {
    // Sticky navigation
    if (observerRef.current) {
      // Clear previous page observer
      observerRef.current.unobserve(observerTargetSectionRef.current);
      observerTargetSectionRef.current = null;
      observerRef.current = null;
    }

    observerTargetSectionRef.current = document.querySelector(
      '.section-nav-obs-target'
    );

    // Will not be sticky initially for components with hero section
    if (!disableNavigation) {
      if (observerTargetSectionRef.current) {
        observerRef.current = new IntersectionObserver(
          function (entries) {
            const ent = entries[0];

            if (!ent.isIntersecting) {
              document.body.classList.add('sticky');
            } else {
              document.body.classList.remove('sticky');
            }
          },
          {
            // In the viewport
            root: null,
            threshold: 0,
            rootMargin: '-80px'
          }
        );

        observerRef.current.observe(observerTargetSectionRef.current);
      } else {
        document.body.classList.add('sticky');
      }
    }
  }, [currentPagePath, disableNavigation]);

  const filterNavigationOptions = (
    navigationOptions: any,
    group: any,
    loggedInUser: any
  ) => {
    return navigationOptions.filter((option: any) => {
      if (option.group === group.value) {
        if (option.authType) {
          if (option.authType === AUTH_TYPES.LOGGED_IN) {
            if (!loggedInUser) {
              return false;
            } else if (
              option.userTypes &&
              !option.userTypes.includes(loggedInUser.memberType?.name)
            ) {
              return false;
            }
          } else if (loggedInUser) {
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    });
  };

  const handleOptionClick = (value: string) => {
    // For options with functionality, like logout
    switch (value) {
      case 'A':
        break;
      default:
        break;
    }
  };

  const renderIconOrImage = (option: any, loggedInUser: any) => {
    const userProfilePhoto = loggedInUser?.profileImg;

    if (option.imageUrl || (option.value == USER && userProfilePhoto)) {
      return (
        <Image
          src={option.imageUrl || userProfilePhoto}
          className={`${option.imageUrl ? 'navbar__img' : 'navbar__user-img'}`}
          alt='Navigation image'
        />
      );
    } else {
      return (
        <Icon
          name={option.iconName}
          blockClass='navbar'
          classModifier={option.iconType}
        />
      );
    }
  };

  return (
    <header className='header' ref={headerRef}>
      <Link href='/' className='header__link'>
        {/* <Icon name={ICON_LOGO} blockClass='header' /> */}
        <Image src={LOGO} alt={NAME} className='header__logo' />
      </Link>

      {!disableNavigation && (
        <>
          <Navigation
            user={loggedInUser}
            currentPagePath={currentPagePath}
            filterNavigationOptions={filterNavigationOptions}
            onOptionClick={handleOptionClick}
            renderIconOrImage={renderIconOrImage}
          />

          <NavigationMobile
            headerRef={headerRef}
            user={loggedInUser}
            currentPagePath={currentPagePath}
            filterNavigationOptions={filterNavigationOptions}
            onOptionClick={handleOptionClick}
            renderIconOrImage={renderIconOrImage}
          />
        </>
      )}
    </header>
  );
};

export default Header;
