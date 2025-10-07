'use client';

import Header from '@/components/layout/Header';
import { usePathname } from 'next/navigation';

import { DISABLED_NAV_PAGES} from '@/constants/navigation'

export default function HeaderWrapper() {
  const pathname = usePathname();
  const isNavDisabled = DISABLED_NAV_PAGES.some((page) => pathname.includes(page));

  return <Header currentPagePath={pathname} disableNavigation={isNavDisabled} />;
} 