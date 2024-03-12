import { Input } from '~/shared/_shacdn/ui/input';
import CheckUser from './_action/check-user';
import { notFound } from 'next/navigation';
import getUserData from './_action/get-user-data';
import ListAllUsers from '../_components/list-all-users/listAllUsers';
import ButtonGoBack from './_components/button-goback';
import Link from 'next/link';
import { MoreHorizontal } from 'lucide-react';

export default async function Page({ params }: { params: { profile: string } }) {
  const isUserExist = await CheckUser(params.profile);

  // getting data
  const userData = await getUserData(params.profile);

  if (!isUserExist) {
    notFound();
  }

  return (
    <>
      <main className="max-w-[50rem] flex-1 border-x-[1px] border-white/55 text-white">
        <div className="flex h-full flex-col">
          <div className="sticky top-0 flex gap-2 border-b-[1px] border-white/55 p-2 backdrop-blur-sm lg:gap-3 lg:p-3">
            <ButtonGoBack />
            <p>{userData?.username}</p>
          </div>
          <div className="flex-1">
            <div>
              <div className="border-b-[1px] p-4 lg:p-5">{userData?.username}&apos;s Tweets</div>

              <div className="flex flex-col">
                {userData?.posts?.reverse().map((item, index) => {
                  return (
                    <div
                      className="border-b-[1px] px-3 py-4 hover:bg-white/20 lg:px-4 lg:py-5"
                      key={index}
                    >
                      <div className="flex justify-between">
                        <Link href={`/home/${item.userName}`}>
                          <p className="mb-2 cursor-pointer text-sm hover:underline">
                            @{item.userName}
                          </p>
                        </Link>
                        <div className="flex w-6 cursor-pointer items-center justify-center rounded-full hover:bg-white/15">
                          <MoreHorizontal className="w-5" />
                        </div>
                      </div>
                      <div className="pl-4">
                        <p className="text-pretty break-words break-all text-lg">{item.tweets}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="sticky top-0 hidden h-dvh w-[22rem] md:px-4 md:py-3 xl:block">
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
        <ListAllUsers />
      </footer>
    </>
  );
}
