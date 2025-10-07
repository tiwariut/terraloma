import React, { useEffect, useRef, useState } from 'react';

import ClickAwayListener from './ClickAwayListener';
import Icon from './Icon';

type ModalProps = {
  children: any;
  className?: string;
  heading?: string;
  onClose?: () => void;
};

const Modal = ({ children, className, heading, onClose }: ModalProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    const classesForBody = ['screen-overlay', 'screen-overlay--disable-navbar'];
    const body = document.querySelector('body');
    body?.classList.add(...classesForBody);

    return () => {
      body?.classList.remove(...classesForBody);
    };
  }, []);

  return (
    <ClickAwayListener
      onClickAway={() => onClose && onClose()}
      triggerUseEffect={true}
    >
      <div className={`modal ${className}`} ref={modalRef}>
        <div
          className='modal__header'
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h3 className='modal__heading heading-tertiary u-highlight-text-secondary'>
            {heading}
          </h3>
          {onClose ? (
            <div onClick={onClose}>
              <Icon name='icon-cross' blockClass='modal' />
            </div>
          ) : null}
        </div>
        <div className='modal__content'>{children}</div>
      </div>
    </ClickAwayListener>
  );
};

Modal.defaultProps = {
  className: ''
};

export default Modal;
