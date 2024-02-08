'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '~/shared/_shacdn/ui/button';
import { Separator } from '~/shared/_shacdn/ui/separator';
import { notFound } from 'next/navigation';

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
    return (
      <div className="fixed left-0 top-0 h-screen w-screen bg-black text-white sm:flex sm:items-center sm:justify-center sm:bg-white/40">
        <div className=" h-full p-4 sm:h-[40.625rem] sm:w-[37.5rem] sm:rounded-lg sm:bg-black">
          <div className="">
            <Link href="/" className="fixed">
              X
            </Link>

            <div className="w-full">
              <div className="mx-auto w-min">logo</div>
            </div>
          </div>

          <div className="flex h-full flex-col items-center justify-center">
            <div className="w-full min-w-[15rem] max-w-[22rem]">
              <h1 className="mb-9">Sign in to X {slug[2]}</h1>
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
                <p>
                  Don&apos;t have an account?{' '}
                  <span className="cursor-pointer hover:underline">Sign up</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (slug[2] === 'signup') {
    return (
      <div className="fixed left-0 top-0 h-screen w-screen bg-black text-white sm:flex sm:items-center sm:justify-center sm:bg-white/40">
        <div className=" h-full p-4 sm:h-[40.625rem] sm:w-[37.5rem] sm:rounded-lg sm:bg-black">
          <div className="">
            <Link href="/" className="fixed">
              X
            </Link>

            <div className="w-full">
              <div className="mx-auto w-min">logo</div>
            </div>
          </div>

          <div className="flex h-full flex-col items-center justify-center">
            <div className="w-full min-w-[15rem] max-w-[22rem]">
              <h1 className="mb-9">Sign in to X {slug[2]}</h1>
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
                <p>
                  Don&apos;t have an account?{' '}
                  <span className="cursor-pointer hover:underline">Sign up</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return notFound();
}
