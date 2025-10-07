import React, { useEffect, useState } from 'react';

type ToggleSwitchProps = {
  label: string;
  className?: string;
  isEnabled: boolean;
  onChange: (isEnabled: boolean) => void;
  readOnly?: boolean;
  disabled?: boolean;
  id?: string;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  className = '',
  isEnabled,
  onChange,
  readOnly = false,
  disabled = false,
  id = ''
}) => {
  const [isOn, setIsOn] = useState(isEnabled);

  useEffect(() => {
    setIsOn(isEnabled);
  }, [isEnabled]);

  const toggleSwitch = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (readOnly || disabled) return; // Prevent toggling when readOnly or disabled

    onChange(!isOn);
    setIsOn((prev) => !prev);
  };

  return (
    <div className='toggle-switch__container'>
      <p>{label}</p>
      <label
        className={`toggle-switch ${className} 
        ${readOnly ? 'toggle-switch--readonly' : ''} 
        ${disabled ? 'toggle-switch--disabled' : ''}`}
        onClick={toggleSwitch}
        aria-disabled={readOnly || disabled}
      >
        <input
          type='checkbox'
          checked={isOn}
          id={id}
          readOnly
          disabled={disabled}
        />
        <span
          className={`toggle-switch__slider ${isOn ? 'toggle-switch__slider--on' : ''}`}
        />
      </label>
    </div>
  );
};

export default ToggleSwitch;
