type InputProps = {
  className?: string;
  type?: string;
  name?: string;
  id?: string;
  showLabel?: boolean;
  labelText?: string;
  placeholderText?: string;
  value?: string;
  isChecked?: boolean;
  isRequired?: boolean;
  disableAutoComplete?: boolean;
  onChange: (value: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onMouseDown?: () => void;
};

const Input = ({
  className,
  type,
  name,
  id,
  showLabel,
  labelText,
  placeholderText,
  value,
  isChecked,
  isRequired,
  disableAutoComplete,
  onChange,
  onFocus,
  onBlur,
  onMouseDown
}: InputProps) => {
  return (
    <div className='input-group'>
      {labelText && (
        <label
          className={`input-label ${showLabel ? 'input-label--visible' : ''}`}
          htmlFor={name}
        >{`${labelText} ${isRequired ? '*' : ''}`}</label>
      )}
      <input
        className={`input ${className}`}
        type={type}
        name={name}
        id={id}
        placeholder={placeholderText}
        value={value}
        checked={isChecked}
        required={isRequired}
        autoComplete={disableAutoComplete ? 'new-password' : 'on'}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseDown={onMouseDown}
      />
    </div>
  );
};

Input.defaultProps = {
  className: '',
  type: 'text',
  name: 'input',
  placeholderText: '',
  value: '',
  isChecked: false,
  isRequired: false
};

export default Input;
