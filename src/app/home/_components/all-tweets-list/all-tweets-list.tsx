'use client';

import Link from 'next/link';
import getAllPosts, { type getAllPostsType } from './_actions/get-all-posts';
import { SettingsMenu } from './_components/settings-menu';
import { useQuery } from '@tanstack/react-query';
import { usePostStore } from '~/shared/_store/userTempPost';
import { useEffect } from 'react';

export default function AllTweetsList({
  posts,
  user,
}: {
  posts: getAllPostsType[] | undefined;
  user: { id: string | undefined } | null;
}) {
  const { userData, resetUserData } = usePostStore();

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['tweets'],
    queryFn: () => getAllPosts(),
    initialData: posts,
  });

  useEffect(() => {
    if (isFetching) {
      resetUserData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  return (
    <div className="flex flex-col">
      {/* data from global store */}
      {userData
        .slice()
        .reverse()
        .map((item, index) => {
          return (
            <div className="border-b-[1px] px-3 py-4 hover:bg-white/20 lg:px-4 lg:py-5" key={index}>
              <div className="flex justify-between">
                <Link href={`home/${item.userName}`}>
                  <p className="mb-2 cursor-pointer text-sm hover:underline">@{item.userName}</p>
                </Link>
                <SettingsMenu UserId={item.userId} id={item.id} currentUserId={user?.id} />
              </div>
              <div className="pl-4">
                <p className="text-pretty break-words break-all text-lg">{item.tweets}</p>
              </div>
            </div>
          );
        })}

      {/* data from db */}
      {!isLoading &&
        data?.map((item, index) => {
          return (
            <div className="border-b-[1px] px-3 py-4 hover:bg-white/20 lg:px-4 lg:py-5" key={index}>
              <div className="flex justify-between">
                <Link href={`home/${item.userName}`}>
                  <p className="mb-2 cursor-pointer text-sm hover:underline">@{item.userName}</p>
                </Link>
                <SettingsMenu UserId={item.userId} id={item.id} currentUserId={user?.id} />
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
