;import Link from 'next/link';
import { Button } from '~/shared/_shacdn/ui/button';
import LogoX from '~/shared/_icons/logo-x';
import { Input } from '~/shared/_shacdn/ui/input';
import { Form } from '~/server/form';
import login from './action/signin-action';

export default function SignIn() {

  return (
    <div className="absolute left-0 top-0 h-screen w-screen bg-black text-white sm:flex sm:items-center sm:justify-center sm:bg-white/40">
      <div
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
            <Form action={login}>
              <div className="flex flex-col">
                <Input name="username" id="username" type="text" placeholder="Username" className="mb-5 text-black" />
                <Input name="password" id="password" type="password" placeholder="Password" className="mb-5 text-black" />
                <Button className="w-full mb-5">Continue </Button>
                <Button className="mb-5 w-auto">Forgot password?</Button>
              </div>
            </Form>
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
