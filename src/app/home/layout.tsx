import { validateRequest } from '~/server/auth';
import { redirect } from 'next/navigation';
import { Form } from '~/server/form';
import { Bell, Home, LogOut, Mail, Search, SquarePen, User } from 'lucide-react';
import TooltipWrapper from '../_components/tooltip-wrapper/tooltip-wrapper';
import getUser from './_action/get-user';
import { Input } from '~/shared/_shacdn/ui/input';
import logout from './_action/logout';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // way to protect routes
  const { user } = await validateRequest();
  if (!user) {
    return redirect('/');
  }

  // getting data
  const userData = await getUser();

  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
      <div className="flex h-dvh sm:mx-10 md:mx-20 lg:mx-32">
        <nav className="flex flex-col justify-between gap-5 overflow-y-auto px-3 py-2 sm:px-4 sm:py-3 lg:gap-8 xl:gap-9">
          <div className="flex h-full flex-col gap-4 lg:gap-7 xl:gap-8">
            <button className="flex items-center gap-3 rounded-full border border-black px-3 py-3 hover:bg-white/10 xl:gap-4">
              <Home />
              <p className="hidden text-sm font-medium xl:block">Home</p>
            </button>
            <button className="flex items-center gap-3 rounded-full border border-black px-3 py-3 hover:bg-white/10 xl:gap-4">
              <Search />
              <p className="hidden text-sm font-medium xl:block">Explore</p>
            </button>
            <button className="flex items-center gap-3 rounded-full border border-black px-3 py-3 hover:bg-white/10 xl:gap-4">
              <Bell />
              <p className="hidden text-sm font-medium xl:block">Notifications</p>
            </button>
            <button className="flex items-center gap-3 rounded-full border border-black px-3 py-3 hover:bg-white/10 xl:gap-4">
              <Mail />
              <p className="hidden text-sm font-medium xl:block">Messages</p>
            </button>
            <button className="flex items-center gap-3 rounded-full border border-black px-3 py-3 hover:bg-white/10 xl:gap-4">
              <User />
              <p className="hidden text-sm font-medium xl:block">Profile</p>
            </button>
            <button className="flex items-center gap-3 rounded-full border border-black px-3 py-3 hover:bg-white/10 xl:gap-4 xl:bg-white xl:text-black xl:hover:bg-white/70">
              <SquarePen className="xl:hidden" />
              <p className="hidden w-full text-center text-lg font-semibold xl:block">Post</p>
            </button>
          </div>
          <Form action={logout}>
            <TooltipWrapper>
              <button className="flex w-full items-center gap-1 rounded-full border border-black px-3 py-3 hover:bg-white/10 xl:gap-1">
                <LogOut />
                <p className="hidden w-full text-center text-lg font-semibold xl:block">
                  {userData?.username}
                </p>
              </button>
            </TooltipWrapper>
          </Form>
        </nav>
        {children}
        <footer className="hidden w-[22rem] overflow-y-auto md:px-4 md:py-3 xl:block">
          <Input
            type="search"
            placeholder="Search"
            className="mb-10 w-full rounded-full text-black"
          />
          <div className="mb-5 rounded-lg bg-white/10 p-5 text-white">
            <div className="flex w-full flex-col">
              <p className="pb-2 text-xl font-bold">Visit the GitHub project</p>
              <p className="pb-3 text-sm">
                Explore the source code of this Next.js app with server components on GitHub to
                understand its implementation.
              </p>
              <a
                href="https://github.com/K3ndev/next-twitter-clone"
                target="_blank"
                className="w-min cursor-pointer rounded-full bg-white px-5 py-3 text-base font-medium text-black hover:bg-white/70"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="rounded-lg bg-white/10 p-5 text-white">
            <div className="flex w-full flex-col">
              <p className="pb-2 text-lg font-bold">Who to follow</p>
              <p className="pb-3 text-sm">sample Person</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
