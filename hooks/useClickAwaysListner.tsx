import { useEffect } from 'react';

type Props = {
  triggerUseEffect: boolean;
  onClickAway?: (event: MouseEvent) => void;
  children: React.ReactElement;
};

const useClickAwayListener = (
  ref: any,
  onClickAway: (event: MouseEvent) => void,
  triggerUseEffect: boolean
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        event.stopPropagation();
        onClickAway(event);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, triggerUseEffect, onClickAway]);
};

export default useClickAwayListener;
