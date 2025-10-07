import type { Metadata } from 'next';

import '../sass/main.scss';

import { METADATA } from '@/constants/texts';
import HeaderWrapper from '../components/layout/Header/HeaderWrapper';
import FooterWrapper from '../components/layout/Header/FooterWrapper';

const {
  HOME: { TITLE, DESCRIPTION }
} = METADATA;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <HeaderWrapper />
        <main>{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}
