import { Textarea } from '~/shared/_shacdn/ui/textarea';
import { Separator } from '~/shared/_shacdn/ui/separator';

export default function Page() {
  return (
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
  );
}

// put this code into your layout.tsx, then create a nested routes and pages for your 2nd section...
// layout / pages|nested-pages / layout
// /home [2 tabs]
// /home/explore
// /home/notifications
// /home/messages
// /home/profile
