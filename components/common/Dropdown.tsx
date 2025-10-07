import { useEffect, useState } from 'react';

import Button from './Button';
import Icon from './Icon';
import Input from './Input';

import { ICON_CHEVRON_DOWN, ICON_MAGNIFYING_GLASS } from '@/constants/icons';

type Dropdown = {
  options: any;
  selectedOption: any;
  placeholderText: string;
  enableSearch?: boolean;
  className?: string;
  hideAllOption?: boolean;
  onOptionClick: (option: any) => void;
  handleSearchBtnClick?: (selectedOption: any) => void;
};

const Dropdown = ({
  options,
  selectedOption,
  placeholderText,
  enableSearch,
  className,
  hideAllOption,
  onOptionClick,
  handleSearchBtnClick
}: Dropdown) => {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (value && enableSearch) {
      const filteredData = options.filter((option: any) =>
        option.label.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filteredData);
    } else {
      setFilteredOptions(options);
    }
  }, [options, value, enableSearch]);

  useEffect(() => {
    if (selectedOption) {
      setValue(selectedOption.label);
    }
  }, [selectedOption]);

  const handleValueChange = (value: any) => {
    if (!enableSearch) {
      return;
    }

    setValue(value);

    if (selectedOption) {
      onOptionClick(null);
    }
  };

  const handleDropdownClick = () => {
    if (!enableSearch) {
      setIsActive(!isActive);
    }
  };

  const handleOptionClick = (option: any) => {
    onOptionClick(option);
    setIsActive(false);
  };

  return (
    <div className={`dropdown ${className}`}>
      <div
        className={`dropdown__input-container ${
          isActive ? 'dropdown__input-container--active' : ''
        }`}
      >
        <Input
          className={`dropdown__input ${
            !enableSearch ? 'dropdown__input--disabled-search' : ''
          }`}
          placeholderText={placeholderText}
          value={value}
          onChange={handleValueChange}
          onFocus={() => setIsActive(true)}
          onBlur={() => {
            setIsActive(false);
          }}
          onMouseDown={handleDropdownClick}
        />
        {true && (
          <Button
            type={`${enableSearch ? 'secondary' : 'white'}`}
            className='dropdown__button'
            onClick={() =>
              enableSearch && handleSearchBtnClick
                ? handleSearchBtnClick(selectedOption)
                : handleDropdownClick()
            }
          >
            <Icon
              name={enableSearch ? ICON_MAGNIFYING_GLASS : ICON_CHEVRON_DOWN}
              blockClass='dropdown'
              classModifier={`${!enableSearch ? 'disabled-search' : ''}`}
            />
          </Button>
        )}
      </div>
      {isActive && (
        <ul className='dropdown__options'>
          {!enableSearch && !hideAllOption && (
            <li
              className={`dropdown__option ${
                !selectedOption ? 'dropdown__option--selected' : ''
              }`}
              key={filteredOptions.length}
              onMouseDown={() => {
                handleOptionClick(null);
                setValue('');
              }} // Because mousedown event is called before the blur of input
            >
              All
            </li>
          )}
          {filteredOptions.map((option: any) => (
            <li
              className={`dropdown__option ${
                selectedOption?.id === option.id
                  ? 'dropdown__option--selected'
                  : ''
              }`}
              key={option.id}
              onMouseDown={() => handleOptionClick(option)} // Because mousedown event is called before the blur of input
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.defaultProps = {
  className: ''
};

export default Dropdown;
