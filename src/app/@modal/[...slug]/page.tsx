'use client';

import { useEffect } from 'react';
import { notFound } from 'next/navigation';
import SignIn from '~/app/_components/signin';
import SignUp from '~/app/_components/signup';

export default function Page({ params: { slug } }: { params: { slug: string[] } }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  if (!slug) {
    return null;
  }

  if (slug[1] !== 'flow') {
    return notFound();
  }

  if (slug[2] === 'signin') {
    return <SignIn />;
  }

  if (slug[2] === 'signup') {
    return <SignUp />;
  }

  return notFound();
}
