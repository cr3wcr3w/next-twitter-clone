import { Textarea } from '~/shared/_shacdn/ui/textarea';
import { Separator } from '~/shared/_shacdn/ui/separator';
import { Input } from '~/shared/_shacdn/ui/input';
import ListAllUsers from './_components/list-all-users/listAllUsers';

export default function Page() {
  return (
    <>
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
                  <div className="">Tweets Section</div>
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
        <ListAllUsers />
      </footer>
    </>
  );
}

// /home [2 tabs]
