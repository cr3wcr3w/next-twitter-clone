'use client';

import { Github, MoreHorizontal, Repeat2, Trash2, UserPlus } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '~/shared/_shacdn/ui/popover';
import removePost from '~/app/home/_action/remove-post';
import { useState } from 'react';

export function SettingsMenu({
  UserId,
  id,
  currentUserId,
}: {
  UserId: string;
  id: string;
  currentUserId: string | undefined;
}) {
  const [isOpenModalPost, setIsOpenModalPost] = useState(false);

  return (
    <Popover open={isOpenModalPost} onOpenChange={setIsOpenModalPost}>
      <PopoverTrigger asChild className="relative">
        <MoreHorizontal className="z-40 h-5 w-5" />
      </PopoverTrigger>
      <PopoverContent className="absolute -right-5 -top-5 m-0 bg-black p-0 text-sm text-white">
        <div className="grid gap-4">
          <div className="space-y-2">
            <a
              href="https://github.com/K3ndev/next-twitter-clone"
              className="flex items-center gap-2 p-3 hover:bg-white/20"
              target="_blank"
            >
              <Github className="w-5" />
              <h4 className="font-medium leading-none">Visit the GitHub project</h4>
            </a>

            {UserId !== currentUserId && (
              <button className="flex w-full items-center gap-2 p-3 hover:bg-white/20">
                <UserPlus className="w-5" />
                <h4 className="font-medium leading-none">Follow this organism</h4>
              </button>
            )}

            {UserId !== currentUserId && (
              <button className="flex w-full items-center gap-2 p-3 hover:bg-white/20">
                <Repeat2 className="w-5" />
                <h4 className="font-medium leading-none">Repost</h4>
              </button>
            )}

            {UserId === currentUserId && (
              <button
                className="flex w-full items-center gap-2 p-3 hover:bg-white/20"
                onClick={async () => {
                  await removePost(id);
                  setIsOpenModalPost(false);
                }}
              >
                <Trash2 className="w-5" />
                <h4 className="font-medium leading-none">Delete this post</h4>
              </button>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
