import '~/shared/_styles/globals.css';

import { type ReactNode } from 'react';

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
      {modal}
      {children}
    </html>
  );
}
