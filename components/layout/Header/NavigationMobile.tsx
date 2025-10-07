import { useState, useEffect } from 'react';

import Link from 'next/link';

import useScreenSize from '@/hooks/useScreenSize';

import Icon from '@/components/common/Icon';
import Button from '@/components/common/Button';

import {
  ICON_CHEVRON_LEFT,
  ICON_CROSS,
  ICON_MENU,
  ICON_CHEVRON_RIGHT
} from '@/constants/icons';

import { BREAKPOINTS } from '@/constants/settings';
import { NAVIGATION_GROUPS, HEADER_NAVIGATION } from '@/constants/navigation';

type NavigationMobileProps = {
  headerRef: any;
  user: any;
  currentPagePath: string;
  filterNavigationOptions: (
    navigationOptions: any,
    group: any,
    loggedInUser: any
  ) => any;
  onOptionClick: (value: string) => void;
  renderIconOrImage: (option: any, loggedInUser: any) => any;
};

const NavigationMobile = ({
  headerRef,
  user,
  currentPagePath,
  filterNavigationOptions,
  onOptionClick,
  renderIconOrImage
}: NavigationMobileProps) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNavigationGroup, setSelectedNavigationGroup] =
    useState<any>(null);
  const [navigationOptions, setNavigationOptions] = useState(HEADER_NAVIGATION);

  const { width } = useScreenSize();

  useEffect(() => {
    if (isOpen && width > BREAKPOINTS.TAB_PORT.minWidth) {
      setIsOpen(false);
    }
  }, [width, isOpen]);

  useEffect(() => {
    setLoggedInUser(user);
  }, [user]);

  useEffect(() => {
    const body: any = document.querySelector('body');

    const classesForBody = ['screen-overlay'];
    const classesForHeader = [
      'screen-overlay',
      'screen-overlay--scroll-enabled'
    ];

    if (isOpen) {
      body.classList.add(...classesForBody);
      headerRef.current.classList.add(...classesForHeader);
    } else {
      body.classList.remove(...classesForBody);
      headerRef.current.classList.remove(...classesForHeader);
    }
  }, [isOpen, headerRef]);

  const handleOptionClick = (option: any) => {
    if (!option.dropdownOptions) {
      setIsOpen(false);
    }
    onOptionClick(option.value);
  };

  const renderMobileNavigation = () => {
    return (
      <nav className='mobile-navbar'>
        {selectedNavigationGroup && (
          <div className='mobile-navbar__header'>
            <h3 className='mobile-navbar__header-text'>
              {selectedNavigationGroup.label}
            </h3>
            <Button
              type='white'
              className='header__mobile-nav-btn'
              onClick={() => {
                setNavigationOptions(HEADER_NAVIGATION);
                setSelectedNavigationGroup(null);
              }}
            >
              <Icon
                name={ICON_CHEVRON_LEFT}
                blockClass='navbar'
                classModifier='mobile-nav'
              />
            </Button>
          </div>
        )}
        {Object.keys(NAVIGATION_GROUPS).map((group: any) => {
          const filteredNavigationOptions = filterNavigationOptions(
            navigationOptions,
            NAVIGATION_GROUPS[group],
            loggedInUser
          );

          if (filteredNavigationOptions.length) {
            return (
              <ul key={group} className={`mobile-navbar__list`}>
                {filteredNavigationOptions.map((option: any) => {
                  let isActive;
                  if (option.dropdownOptions && option.dropdownOptions.length) {
                    isActive =
                      option.dropdownOptions[0].navigateTo &&
                      currentPagePath.includes(
                        option.dropdownOptions[0].navigateTo.split('/')[1]
                      );
                  } else {
                    isActive =
                      option.navigateTo &&
                      currentPagePath.includes(option.navigateTo);
                  }

                  return (
                    <li
                      key={option.value}
                      className='mobile-navbar__list-item'
                      onClick={(e) => {
                        e.preventDefault();

                        if (option.dropdownOptions) {
                          setNavigationOptions(option.dropdownOptions);
                          setSelectedNavigationGroup(option);
                        }
                      }}
                    >
                      <Link
                        href={option.navigateTo || 'javascript:void(0);'}
                        className={`mobile-navbar__link ${
                          isActive ? 'mobile-navbar__link--active' : ''
                        }`}
                        onClick={() => handleOptionClick(option)}
                      >
                        {option.label && <span>{option.label}</span>}
                        {(option.iconName || option.imageUrl) &&
                          renderIconOrImage(option, loggedInUser)}
                        {option.dropdownOptions && (
                          <Icon name={ICON_CHEVRON_RIGHT} />
                        )}
                      </Link>
                    </li>
                  );
                })}
                <li></li>
              </ul>
            );
          }
        })}
      </nav>
    );
  };

  return (
    <>
      {isOpen && renderMobileNavigation()}
      <Button
        type='white'
        className={`header__mobile-nav-btn ${
          isOpen ? 'header__mobile-nav-btn--floated' : ''
        }`}
        onClick={() => {
          setNavigationOptions(HEADER_NAVIGATION);
          setSelectedNavigationGroup(null);
          setIsOpen(!isOpen);
        }}
      >
        <Icon
          name={isOpen ? ICON_CROSS : ICON_MENU}
          blockClass='navbar'
          classModifier='mobile-nav'
        />
      </Button>
    </>
  );
};

export default NavigationMobile;
