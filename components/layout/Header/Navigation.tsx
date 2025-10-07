import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ClickAwayListener from '@/components/common/ClickAwayListener';
import Icon from '@/components/common/Icon';

import { ICON_CHEVRON_DOWN } from '@/constants/icons';

import {
  NAVIGATION_GROUPS,
  HEADER_NAVIGATION,
  PLACEMENT_POSITIONS
} from '@/constants/navigation';

const { LEFT, RIGHT } = PLACEMENT_POSITIONS;

type NavigationProps = {
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

const Navigation = ({
  user,
  currentPagePath,
  filterNavigationOptions,
  onOptionClick,
  renderIconOrImage
}: NavigationProps) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [openedNavigationDropdown, setOpenedNavigationDropdown] = useState('');

  useEffect(() => {
    setLoggedInUser(user);
  }, [user]);

  const openNavigationDropdown = (dropdown: any) => {
    setOpenedNavigationDropdown((current) =>
      current === dropdown ? '' : dropdown
    );
  };

  const renderNavigationDropdown = (options: any, position = RIGHT) => {
    return (
      <nav className='navbar navbar-dropdown'>
        <ul
          className={`navbar__list navbar__list--dropdown ${
            position === LEFT ? 'navbar__list--dropdown-left' : ''
          }`}
        >
          {options.map(
            ({
              value,
              label,
              imageUrl,
              iconName,
              navigateTo,
              openInNewTab
            }: any) => (
              <li key={value} className='u-display-flex'>
                <Link
                  href={navigateTo || 'javascript:void(0);'}
                  className='navbar__link navbar__link--dropdown'
                  onClick={() => {
                    onOptionClick(value);
                  }}
                  target={openInNewTab ? '_blank' : '_self'}
                >
                  {iconName && <Icon name={iconName} />}
                  {imageUrl && (
                    <Image
                      src={imageUrl}
                      className='navbar__img'
                      alt='User profile photo'
                    />
                  )}
                  <span>{label}</span>
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    );
  };

  const renderNavigation = (group: any) => {
    const filteredNavigationOptions = filterNavigationOptions(
      HEADER_NAVIGATION,
      group,
      loggedInUser
    );

    if (filteredNavigationOptions.length) {
      return (
        <div
          key={group.value}
          className={`navbar navbar--${group.classModifier}`}
        >
          <ul
            key={group.value}
            className={`navbar__list navbar__list--${group.classModifier}`}
          >
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
                  className='navbar__list-item u-display-flex'
                  onClick={() =>
                    option.dropdownOptions &&
                    openNavigationDropdown(option.value)
                  }
                >
                  <Link
                    href={option.navigateTo || 'javascript:void(0);'}
                    className={`navbar__link ${
                      option.type === 'btn' ? 'navbar__link--btn' : ''
                    } 
                    ${
                      option.type === 'btn' && option.btnType === 'outline'
                        ? 'navbar__link--btn--outline'
                        : ''
                    }
                    ${
                      option.type !== 'btn' && isActive
                        ? 'navbar__link--active'
                        : ''
                    }`}
                    onClick={() => {
                      onOptionClick(option.value);
                    }}
                  >
                    {option.iconName &&
                      option.iconPlacement === LEFT &&
                      renderIconOrImage(option, loggedInUser)}
                    {option.label && <span>{option.label}</span>}
                    {option.dropdownOptions && (
                      <Icon
                        name={ICON_CHEVRON_DOWN}
                        blockClass='navbar'
                        classModifier={
                          openedNavigationDropdown === option.value
                            ? 'open'
                            : 'close'
                        }
                      />
                    )}
                    {option.iconName &&
                      option.iconPlacement === RIGHT &&
                      renderIconOrImage(option, loggedInUser)}
                  </Link>
                  {option.dropdownOptions &&
                    openedNavigationDropdown === option.value &&
                    renderNavigationDropdown(
                      option.dropdownOptions,
                      option.dropdownPosition
                    )}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  };

  return (
    <ClickAwayListener
      onClickAway={() => openNavigationDropdown('')}
      triggerUseEffect={true}
    >
      <nav className='navbar__container'>
        {Object.keys(NAVIGATION_GROUPS).map((group: any) =>
          renderNavigation(NAVIGATION_GROUPS[group])
        )}
      </nav>
    </ClickAwayListener>
  );
};

export default Navigation;
