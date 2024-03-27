import Link from 'next/link';
import LogoX from '~/shared/_icons/logo-x';
import { validateRequest } from '~/server/auth';
import { redirect } from 'next/navigation';

export default async function Page() {
  const { user } = await validateRequest();

  if (user) {
    return redirect('/home');
  }

  return (
    <div className={`flex h-screen flex-col bg-black text-white`}>
      <header></header>
      <main className="flex-1 px-8 pt-8 text-white lg:pt-14">
        <section className="flex h-full w-full items-center justify-center">
          <div className="flex flex-col gap-10 lg:flex-row">
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
                <Link
                  href="/i/flow/signup"
                  className="mb-3 inline-flex h-10 w-auto items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
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
    </div>
  );
}
