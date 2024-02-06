import LogoX from '~/shared/_icons/logo-x';
import { Button } from '~/shared/_shacdn/ui/button'
import { Separator } from '~/shared/_shacdn/ui/separator';

export default function RootPage() {
  return (
    <>
      <header></header>
      <main className="flex-1 px-8 pt-8 lg:pt-14 text-white">
        <section className='flex flex-col lg:flex-row'>
          <div className='lg:w-2/4'>
            <div className='mb-14 lg:mb-0 h-full'>
              <div className='w-16 lg:w-80 lg:h-full lg:mx-auto'>
                <LogoX />
              </div>
            </div>
          </div>
          <div className='lg:w-2/4'>
            <h1 className='text-5xl md:text-6xl mb-7'>Happening now</h1>
            <h2 className='text-2xl lg:text-3xl mb-5'>Join today.</h2>
            <div className='flex flex-col w-auto min-w-[15rem] max-w-[22rem]'>
              <Button className='w-auto mb-1'>Sign up with Google</Button>
              <Button className='w-auto mb-3'>Sign up with Apple</Button>
              <div className='mb-3 w-auto flex'>
                  <Separator className="my-4" style={{ flexShrink: 1 }} />
                  <p className='mx-2'>or</p>
                  <Separator className="my-4" style={{ flexShrink: 1 }} />
                </div>
              <Button className='w-auto mb-1'>Create account</Button>
              <p className='text-xs mb-14'>By signing up, you agree to the <span className='hover:underline cursor-pointer'>Terms of Service</span> and <span className='hover:underline cursor-pointer'>Privacy Policy</span>, including <span className='hover:underline cursor-pointer'>Cookie Use</span>.</p>
              <h3 className='text-lg lg:text-xl mb-4'>Already have an account?</h3>
              <Button className='w-auto mb-14 sm:mb-0'>Sign in</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className='px-8 pb-5 text-white'>
        <div className='flex flex-wrap gap-2 md:gap-3 lg:gap-4 justify-center text-sm'>
          <a href="" className='hover:underline cursor-pointer'>About</a>
          <a href="" className='hover:underline cursor-pointer'>Download the X app</a>
          <a href="" className='hover:underline cursor-pointer'>Help Center</a>
          <a href="" className='hover:underline cursor-pointer'>Terms of Service</a>
          <a href="" className='hover:underline cursor-pointer'>Privacy Policy</a>
          <a href="" className='hover:underline cursor-pointer'>Cookie Policy</a>
          <a href="" className='hover:underline cursor-pointer'>Accessibility</a>
          <a href="" className='hover:underline cursor-pointer'>Ads info</a>
          <a href="" className='hover:underline cursor-pointer'>Blog</a>
          <a href="" className='hover:underline cursor-pointer'>Status</a>
          <a href="" className='hover:underline cursor-pointer'>Careers</a>
          <a href="" className='hover:underline cursor-pointer'>Brand Resources</a>
          <a href="" className='hover:underline cursor-pointer'>Advertising</a>
          <a href="" className='hover:underline cursor-pointer'>Marketing</a>
          <a href="" className='hover:underline cursor-pointer'>X for Business</a>
          <a href="" className='hover:underline cursor-pointer'>developers</a>
          <a href="" className='hover:underline cursor-pointer'>Directory</a>
          <a href="" className='hover:underline cursor-pointer'>Settings</a>
          <a href="" className='hover:underline cursor-pointer'>© 2024 X Corp.</a>
        </div>
      </footer>
    </>
  );
}
