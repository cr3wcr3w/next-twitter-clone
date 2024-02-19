import { validateRequest } from '~/server/auth';
import { redirect } from 'next/navigation';
import { Form } from '~/server/form';
import { Bell, Home, LogOut, Mail, Search, SquarePen, User } from 'lucide-react';
import TooltipWrapper from '../_components/tooltip-wrapper/tooltip-wrapper';
import logout from './_action/logout';
import Link from 'next/link';
import getUser from './_action/get-user';

export default async function Layout({ children }: { children: React.ReactNode }) {
  // way to protect routes
  // Do i need to authorization every request? dunno but i just put authorization in every request

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
            <Link
              href={'/home'}
              className="flex items-center gap-3 rounded-full border border-black px-3 py-3 hover:bg-white/10 xl:gap-4"
            >
              <Home />
              <p className="hidden text-sm font-medium xl:block">Home</p>
            </Link>
            <Link
              href={'/home/explore'}
              className="flex items-center gap-3 rounded-full border border-black px-3 py-3 hover:bg-white/10 xl:gap-4"
            >
              <Search />
              <p className="hidden text-sm font-medium xl:block">Explore</p>
            </Link>
            <Link
              href={'/home/notifications'}
              className="flex items-center gap-3 rounded-full border border-black px-3 py-3 hover:bg-white/10 xl:gap-4"
            >
              <Bell />
              <p className="hidden text-sm font-medium xl:block">Notifications</p>
            </Link>
            <Link
              href={'/home/messages'}
              className="flex items-center gap-3 rounded-full border border-black px-3 py-3 hover:bg-white/10 xl:gap-4"
            >
              <Mail />
              <p className="hidden text-sm font-medium xl:block">Messages</p>
            </Link>
            <Link
              href={`/home/${userData?.username}`}
              className="flex items-center gap-3 rounded-full border border-black px-3 py-3 hover:bg-white/10 xl:gap-4"
            >
              <User />
              <p className="hidden text-sm font-medium xl:block">Profile</p>
            </Link>
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
                  @{userData?.username}
                </p>
              </button>
            </TooltipWrapper>
          </Form>
        </nav>
        {children}
      </div>
    </section>
  );
}
