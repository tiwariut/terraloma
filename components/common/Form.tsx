import Button from './Button';

type FormProps = {
  children: any;
  className?: string;
  headingClassName?: string;
  headingText?: string;
  submitBtnClassName?: string;
  submitBtnType?: string;
  submitText: string;
  onSubmit: () => void;
  loading?: boolean;
  disabled?: boolean;
  success?: boolean;
  successText?: string;
};

const Form = ({
  children,
  className,
  headingClassName,
  headingText,
  submitBtnClassName,
  submitBtnType,
  submitText,
  onSubmit,
  loading = false,
  disabled = false,
  success = false,
  successText = 'Request submitted!'
}: FormProps) => {
  return (
    <form className={`form ${className}`} onSubmit={(e) => e.preventDefault()}>
      {headingText && (
        <h3 className={`form__heading ${headingClassName}`}>{headingText}</h3>
      )}
      {children}
      <Button
        buttonType='submit'
        type={submitBtnType}
        className={submitBtnClassName}
        onClick={onSubmit}
        loading={loading}
        isDisabled={disabled}
      >
        {submitText}
      </Button>
      {success && successText && (
        <div className="form__success">
          {successText}
        </div>
      )}
    </form>
  );
};

Form.defaultProps = {
  className: ''
};

export default Form;
