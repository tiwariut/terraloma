import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  buttonType?: 'button' | 'submit';
  type?: string;
  className?: string;
  linkTo?: string;
  openInNewTab?: boolean;
  isDisabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  loading?: boolean;
};

const Button = ({
  children,
  buttonType = 'button',
  type,
  className = '',
  linkTo,
  openInNewTab,
  isDisabled,
  onClick,
  loading = false
}: ButtonProps) => {
  const renderLink = () => {
    return openInNewTab ? (
      <a
        href={linkTo}
        onClick={onClick}
        className={`btn btn--${type} ${className}`}
        target='_blank'
      >
        {children}
      </a>
    ) : (
      <Link
        href={linkTo || '#'}
        onClick={onClick}
        className={`btn btn--${type} ${className} ${
          isDisabled ? 'btn--disabled' : ''
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <>
      {linkTo ? (
        renderLink()
      ) : (
        <button
          type={buttonType}
          className={`btn btn--${type} ${className}`}
          onClick={onClick}
          disabled={loading || isDisabled}
        >
          {loading ? (
            <span className='button__loader'>
              <span className='dot'></span>
              <span className='dot'></span>
              <span className='dot'></span>
            </span>
          ) : (
            children
          )}
        </button>
      )}
    </>
  );
};

Button.defaultProps = {
  buttonType: 'button',
  type: 'default',
  className: '',
  linkTo: '#',
  isDisabled: false
};

export default Button;
