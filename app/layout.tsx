import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import 'mapbox-gl/dist/mapbox-gl.css';
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

const openSans = Open_Sans({
  subsets: ['latin']
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={openSans.className}>
      <body>
        <HeaderWrapper />
        <main>{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}
