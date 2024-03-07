import { Separator } from '~/shared/_shacdn/ui/separator';
import { Input } from '~/shared/_shacdn/ui/input';
import ListAllUsers from './_components/list-all-users/listAllUsers';
import { Suspense } from 'react';
import Loading from './_components/all-tweets-list/loading';
import PostTweet from './_components/post-tweet/post-tweet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/shared/_shacdn/ui/tabs';
import AllTweetsList from './_components/all-tweets-list/all-tweets-list';

export default function Page() {
  return (
    <>
      <main className="max-w-[50rem] flex-1 border-x-[1px] border-white/55 text-white">
        <div className="flex h-full flex-col border-b-[1px] border-white/55">
          {/* tabs */}
          <Tabs defaultValue="foryou">
            <TabsList className="sticky top-0 flex h-min w-full justify-evenly border-b-[1px] border-white/55 bg-black/75 backdrop-blur-sm">
              <TabsTrigger
                value="foryou"
                className="h-12 w-full text-sm font-medium hover:bg-white/10 lg:text-base"
              >
                For you
              </TabsTrigger>
              <TabsTrigger
                value="following"
                className="h-12 w-full text-sm font-medium hover:bg-white/10 lg:text-base"
              >
                Following
              </TabsTrigger>
            </TabsList>
            <TabsContent value="foryou">
              <div className="flex-1">
                <div>
                  <div className="p-2 sm:p-[0.6rem] lg:p-3">
                    <PostTweet />
                  </div>
                  <Separator className="my-[1px]" />
                  <div>
                    <Suspense fallback={<Loading />}>
                      <AllTweetsList />
                    </Suspense>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="following">Coming Soon</TabsContent>
          </Tabs>
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
