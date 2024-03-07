import Link from 'next/link';
import getAllPosts from './_actions/get-all-posts';

// use sockets.io to detect new post

export default async function AllTweetsList() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col gap-5">
      {posts?.map((item, index) => {
        return (
          <div className="border-b-[1px] py-3 lg:p-4" key={index}>
            <div className="flex justify-between">
              <Link href={`home/${item.userName}`}>
                <p className="mb-2 cursor-pointer text-sm hover:underline">@{item.userName}</p>
              </Link>
              <div className="cursor-pointer text-center text-xs">...</div>
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
