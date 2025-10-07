import Button from './Button';
import Icon from './Icon';

import { ICON_CHEVRON_LEFT, ICON_CHEVRON_RIGHT } from '@/constants/icons';

type PaginationProps = {
  children: any;
  showNext: boolean;
  showPrev: boolean;
  onNextClick: () => void;
  onPrevClick: () => void;
};

const Pagination = ({
  children,
  showPrev,
  showNext,
  onPrevClick,
  onNextClick
}: PaginationProps) => {
  return (
    <div className='pagination'>
      <Button
        className={`pagination__btn ${
          showPrev ? 'pagination__btn--visible' : ''
        }`}
        onClick={onPrevClick}
      >
        <Icon name={ICON_CHEVRON_LEFT} blockClass='pagination' />
      </Button>
      {children}
      <Button
        className={`pagination__btn ${
          showNext ? 'pagination__btn--visible' : ''
        }`}
        onClick={onNextClick}
      >
        <Icon name={ICON_CHEVRON_RIGHT} blockClass='pagination' />
      </Button>
    </div>
  );
};

export default Pagination;
