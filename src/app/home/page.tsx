import { lucia, validateRequest } from '~/server/auth';
import { redirect } from 'next/navigation';
import { type ActionResult, Form } from '~/server/form';
import { cookies } from 'next/headers';
import { Bell, Home, LogOut, Mail, Search, SquarePen, User } from 'lucide-react';
import TooltipWrapper from '../_components/tooltip-wrapper/tooltip-wrapper';
import getUser from './_action/get-user';
import { Input } from '~/shared/_shacdn/ui/input';
import { Textarea } from '~/shared/_shacdn/ui/textarea';
import { Separator } from '~/shared/_shacdn/ui/separator';

export default async function Page() {
  // protected routes
  const { user } = await validateRequest();
  if (!user) {
    return redirect('/');
  }

  // getting data
  const userData = await getUser();

  return (
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
      <main className="flex-1 border-x-[1px] border-white/55 text-white">
        <div className="flex h-full flex-col ">
          <div className="border-b-[1px] border-white/55 px-4 py-2">
            <div className="flex justify-evenly">
              <p className="w-full cursor-pointer p-1 text-center text-sm font-medium hover:bg-white/10 sm:p-[0.4rem] lg:p-2 lg:text-base">
                For you
              </p>
              <p className="w-full cursor-pointer p-1 text-center text-sm font-medium hover:bg-white/10 sm:p-[0.4rem] lg:p-2 lg:text-base">
                Following
              </p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div>
              <div className="p-2 sm:p-[0.6rem] lg:p-3">
                <form>
                  <Textarea placeholder="What is happening?!" className="mb-5 text-black" />
                  <button className="rounded-full bg-white px-5 py-2 text-base font-normal text-black hover:bg-white/70">
                    Post
                  </button>
                  <Separator className="my-4" />
                </form>
              </div>
              <div>
                <div className="p-2 sm:p-[0.6rem] lg:p-3 ">
                  <div className="">sample tweets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
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
  );
}

async function logout(): Promise<ActionResult> {
  'use server';
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: 'Unauthorized',
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  return redirect('/');
}
