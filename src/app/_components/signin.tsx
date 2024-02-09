'use client';

import { useClickOutside } from '@mantine/hooks';
import Link from 'next/link';
import { Button } from '~/shared/_shacdn/ui/button';
import { Separator } from '~/shared/_shacdn/ui/separator';
import { useRouter } from 'next/navigation';
import LogoX from '~/shared/_icons/logo-x';

export default function SignIn() {
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
            <div className="flex flex-col">
              <Button className="mb-5 w-auto">Sign up with Google</Button>
              <Button className="mb-5 w-auto">Sign up with Apple</Button>
              <div className="mb-3 flex w-auto">
                <Separator className="my-4" style={{ flexShrink: 1 }} />
                <p className="mx-2">or</p>
                <Separator className="my-4" style={{ flexShrink: 1 }} />
              </div>
              <input type="text" placeholder="Phone, email, or username" className="mb-6" />
              <Button className="mb-5 w-auto">Next</Button>
              <Button className="mb-9 w-auto">Forgot password?</Button>
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
    </div>
  );
}
