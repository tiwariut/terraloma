'use client';

import { usePathname } from 'next/navigation';

import { DISABLED_NAV_PAGES} from '@/constants/navigation'
import Footer from '../Footer';

export default function HeaderWrapper() {
  const pathname = usePathname();
  const isFooterDisabled = DISABLED_NAV_PAGES.some((page) => pathname.includes(page));

  if (isFooterDisabled) return null;

  return <Footer />;
}
