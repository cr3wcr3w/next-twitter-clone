import Link from 'next/link';
import LogoX from '~/shared/_icons/logo-x';
import { Button } from '~/shared/_shacdn/ui/button';
import { Separator } from '~/shared/_shacdn/ui/separator';

export default function Page() {
  return (
    <>
      <header></header>
      <main className="flex-1 px-8 pt-8 text-white lg:pt-14">
        <section className="flex flex-col lg:flex-row">
          <div className="lg:w-2/4">
            <div className="mb-14 h-full lg:mb-0">
              <div className="w-16 lg:mx-auto lg:h-full lg:w-80">
                <LogoX />
              </div>
            </div>
          </div>
          <div className="lg:w-2/4">
            <h1 className="mb-7 text-5xl md:text-6xl">Happening now</h1>
            <h2 className="mb-5 text-2xl lg:text-3xl">Join today.</h2>
            <div className="flex w-auto min-w-[15rem] max-w-[22rem] flex-col">
              <Button className="mb-2 w-auto">Sign up with Google</Button>
              <Button className="mb-3 w-auto">Sign up with Apple</Button>
              <div className="mb-3 flex w-auto">
                <Separator className="my-4" style={{ flexShrink: 1 }} />
                <p className="mx-2">or</p>
                <Separator className="my-4" style={{ flexShrink: 1 }} />
              </div>
              <Link
                href="/i/flow/signup"
                className="mb-3 inline-flex h-10 w-auto items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 lg:mb-0"
              >
                Create account
              </Link>
              <p className="mb-14 text-xs">
                By signing up, you agree to the{' '}
                <span className="cursor-pointer hover:underline">Terms of Service</span> and{' '}
                <span className="cursor-pointer hover:underline">Privacy Policy</span>, including{' '}
                <span className="cursor-pointer hover:underline">Cookie Use</span>.
              </p>
              <h3 className="mb-4 text-lg lg:text-xl">Already have an account?</h3>
              <Link
                href="/i/flow/signin"
                className="mb-14 inline-flex h-10 w-auto items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 lg:mb-0"
              >
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="px-8 pb-5 text-white">
        <div className="flex flex-wrap justify-center gap-2 text-sm md:gap-3 lg:gap-4">
          <a href="" className="cursor-pointer hover:underline">
            About
          </a>
          <a href="" className="cursor-pointer hover:underline">
            Download the X app
          </a>
          <a href="" className="cursor-pointer hover:underline">
            Help Center
          </a>
          <a href="" className="cursor-pointer hover:underline">
            Terms of Service
          </a>
          <a href="" className="cursor-pointer hover:underline">
            Privacy Policy
          </a>
          <a href="" className="cursor-pointer hover:underline">
            Cookie Policy
          </a>
          <a href="" className="cursor-pointer hover:underline">
            Accessibility
          </a>
          <a href="" className="cursor-pointer hover:underline">
            Ads info
          </a>
          <a href="" className="cursor-pointer hover:underline">
            Blog
          </a>
          <a href="" className="cursor-pointer hover:underline">
            Status
          </a>
          <a href="" className="cursor-pointer hover:underline">
            Careers
          </a>
          <a href="" className="cursor-pointer hover:underline">
            Brand Resources
          </a>
          <a href="" className="cursor-pointer hover:underline">
            Advertising
          </a>
          <a href="" className="cursor-pointer hover:underline">
            Marketing
          </a>
          <a href="" className="cursor-pointer hover:underline">
            X for Business
          </a>
          <a href="" className="cursor-pointer hover:underline">
            developers
          </a>
          <a href="" className="cursor-pointer hover:underline">
            Directory
          </a>
          <a href="" className="cursor-pointer hover:underline">
            Settings
          </a>
          <a href="" className="cursor-pointer hover:underline">
            © 2024 X Corp.
          </a>
        </div>
      </footer>
    </>
  );
}
