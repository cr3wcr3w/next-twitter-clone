"use client"

import Link from 'next/link';
import LogoX from '~/shared/_icons/logo-x';
import { useClickOutside } from '@mantine/hooks';
import { useRouter } from 'next/navigation';
import { type ReactNode } from 'react';

export default function SignIn({children}: {children: ReactNode}) {
  const router = useRouter();

  const ref = useClickOutside(() => {
    router.push('/');
  });

  return (
    <div className="absolute left-0 top-0 h-screen w-screen bg-black text-white sm:flex sm:items-center sm:justify-center sm:bg-white/40">
      <div
        ref={ref}
        className="h-full p-4 sm:h-[40.625rem] sm:w-[37.5rem] sm:rounded-lg sm:bg-black"
      >
        <div className="mb-20">
          <Link href="/" className="fixed">
            X
          </Link>

          <div className="w-full">
            <div className="mx-auto w-8">
              <LogoX />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full min-w-[15rem] max-w-[22rem]">
            <h1 className="mb-9 text-2xl sm:text-3xl">Sign in to X </h1>
            {children}
            <p className="text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/i/flow/signup" className="cursor-pointer hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
