import '~/shared/_styles/globals.css';

import { Inter } from 'next/font/google';
import { type ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Twitter Clone',
  description: '/',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

type PropsType = {
  children: ReactNode;
  modal: ReactNode;
};

export default function Layout({ children, modal }: PropsType) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} flex h-screen flex-col bg-black`}>
        {modal}
        {children}
      </body>
    </html>
  );
}
