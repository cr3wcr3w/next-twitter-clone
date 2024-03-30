'use client';

import { useEffect } from 'react';
import { notFound } from 'next/navigation';
import SignIn from '~/app/_components/signin/signin';
import SignUp from '~/app/_components/signup/signup';
import SignInForm from '~/app/_components/signin/form-signin';
import SignUpForm from '~/app/_components/signup/form-signup';
import PasswordResetForm from '~/app/_components/password-reset/form-password-reset';
import PasswordReset from '~/app/_components/password-reset/password-reset';

export default function Page({ params: { slug } }: { params: { slug: string[] } }) {
  useEffect(() => {
    if (slug === undefined) {
      return;
    }

    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!slug) {
    return null;
  }

  if (slug[1] !== 'flow') {
    return notFound();
  }

  if (slug[2] === 'signin') {
    return (
      <SignIn>
        <SignInForm />
      </SignIn>
    );
  }

  if (slug[2] === 'signup') {
    return (
      <SignUp>
        <SignUpForm />
      </SignUp>
    );
  }

  if (slug[2] === 'password_reset') {
    return (
      <PasswordReset>
        <PasswordResetForm />
      </PasswordReset>
    );
  }

  return notFound();
}
