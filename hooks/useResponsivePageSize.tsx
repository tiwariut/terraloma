import { useState, useEffect } from 'react';

import useScreenSize from './useScreenSize';

import { BREAKPOINTS } from '@/constants/settings';

const { DEFAULT, TAB_PORT, PHONE } = BREAKPOINTS;

const useResponsivePageSize = ({ pageSizes }: any) => {
  const [pageSize, setPageSize] = useState(pageSizes[DEFAULT.name]);

  const { width } = useScreenSize();

  useEffect(() => {
    if (width <= PHONE.minWidth) {
      setPageSize(pageSizes[PHONE.name]);
    } else if (width <= TAB_PORT.minWidth) {
      setPageSize(pageSizes[TAB_PORT.name]);
    } else {
      setPageSize(pageSizes[DEFAULT.name]);
    }
  }, [width]);

  return pageSize;
};

export default useResponsivePageSize;
