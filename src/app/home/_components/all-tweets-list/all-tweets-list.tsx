import Link from 'next/link';
import getAllPosts from './_actions/get-all-posts';
import { SettingsMenu } from './_components/settings-menu';
import { validateRequest } from '~/server/auth';

// use sockets.io to detect new post

export default async function AllTweetsList() {
  const posts = await getAllPosts();
  const { user } = await validateRequest();

  return (
    <div className="flex flex-col">
      {posts?.reverse().map((item, index) => {
        return (
          <div className="border-b-[1px] px-3 py-4 hover:bg-white/20 lg:px-4 lg:py-5" key={index}>
            <div className="flex justify-between">
              <Link href={`home/${item.userName}`}>
                <p className="mb-2 cursor-pointer text-sm hover:underline">@{item.userName}</p>
              </Link>
              <div className="flex w-6 cursor-pointer items-center justify-center rounded-full hover:bg-white/15">
                <SettingsMenu UserId={item.userId} id={item.id} currentUserId={user?.id} />
              </div>
            </div>
            <div className="pl-4">
              <p className="text-pretty break-words break-all text-lg">{item.tweets}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
