type TextareaProps = {
  className?: string;
  name?: string;
  id?: string;
  rows?: number;
  showLabel?: boolean;
  labelText?: string;
  placeholderText?: string;
  value?: string;
  isRequired?: boolean;
  onChange: (value: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onMouseDown?: () => void;
};

const Textarea = ({
  className,
  name,
  id,
  rows,
  showLabel,
  labelText,
  placeholderText,
  value,
  isRequired,
  onChange,
  onFocus,
  onBlur,
  onMouseDown
}: TextareaProps) => {
  return (
    <div className='input-group'>
      {labelText && (
        <label
          className={`input-label ${showLabel ? 'input-label--visible' : ''}`}
          htmlFor={name}
        >{`${labelText} ${isRequired ? '*' : ''}`}</label>
      )}
      <textarea
        className={`textarea ${className}`}
        name={name}
        id={id}
        rows={rows}
        placeholder={placeholderText}
        value={value}
        required={isRequired}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseDown={onMouseDown}
      />
    </div>
  );
};

Textarea.defaultProps = {
  className: '',
  name: 'input',
  placeholderText: '',
  value: '',
  isRequired: false
};

export default Textarea;
