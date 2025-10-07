import { useRef } from 'react';

import useClickAwayListener from '@/hooks/useClickAwaysListner';

type Props = {
  triggerUseEffect: boolean;
  onClickAway?: (event: MouseEvent) => void;
  children: React.ReactElement;
};

const ClickAwayListener = (props: Props) => {
  const { onClickAway = () => {}, triggerUseEffect, children } = props;
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useClickAwayListener(wrapperRef, onClickAway, triggerUseEffect);

  return <div ref={wrapperRef}>{children}</div>;
};

ClickAwayListener.defaultProps = {
  triggerUseEffect: false,
  onClickAway: () => {}
};

export default ClickAwayListener;
