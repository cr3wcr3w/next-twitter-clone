import getUserData from '../_action/get-user-data';
import Link from 'next/link';
import { validateRequest } from '~/server/auth';
import { SettingsMenu } from './settings-menu';

export default async function TweetsProfilePost({ params }: { params: { profile: string } }) {
  const userData = await getUserData(params.profile);
  const { user } = await validateRequest();

  return (
    <div className="flex flex-col">
      {userData?.posts?.reverse().map((item, index) => {
        return (
          <div className="border-b-[1px] px-3 py-4 hover:bg-white/20 lg:px-4 lg:py-5" key={index}>
            <div className="flex justify-between">
              <Link href={`/home/${item.userName}`}>
                <p className="mb-2 cursor-pointer text-sm hover:underline">@{item.userName}</p>
              </Link>
              <SettingsMenu
                UserId={item.userId}
                id={item.id}
                currentUserId={user?.id}
                user={user?.username}
              />
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
