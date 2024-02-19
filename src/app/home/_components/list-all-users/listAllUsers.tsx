import getAllUserData from './_actions/get-all-user-data';
import Link from 'next/link';

export default async function ListAllUsers() {
  const DATA = await getAllUserData();

  return (
    <div className="rounded-lg bg-white/10 p-5 text-white">
      <div className="flex w-full flex-col">
        <p className="pb-2 text-lg font-bold">Who to follow</p>
        <div>
          {DATA?.map(user => {
            return (
              <div key={user.username}>
                <Link href={`/home/${user.username}`} className="pb-3 text-sm underline">
                  @{user.username}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// when the user put '@' it will direct to username then if not it will direct to tweets body
