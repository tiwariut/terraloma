'use client';

import { useState } from 'react';

import Icon from './Icon';

import { ICON_CHEVRON_DOWN } from '@/constants/icons';

type AccordionProps = {
  children: any;
  index?: string;
  className?: string;
  heading: string;
  iconName?: string;
};

const Accordion = ({
  children,
  index,
  className,
  heading,
  iconName
}: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAccordionClick = (e: any) => {
    // Stop event propagation when clicked on an anchor tag;
    if (!e.target?.href) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className={`${className} accordion`} onClick={handleAccordionClick}>
      <span className='accordion__index'>{index}</span>
      <div className='accordion__header'>
        <div className='accordion__title'>
          <p className='accordion__heading heading-tertiary'>{heading}</p>
        </div>
        {isExpanded && <div className='accordion__content'>{children}</div>}
      </div>
      <Icon
        name={iconName || ICON_CHEVRON_DOWN}
        blockClass='accordion'
        classModifier={isExpanded ? 'open' : 'close'}
      />
    </div>
  );
};

Accordion.defaultProps = {
  className: ''
};

export default Accordion;
