// 'use action';

import { db } from '~/server/db';
// import { validateRequest } from '~/server/auth';

export default async function getAllUserData(): Promise<{ username: string }[] | null> {
  // const { user } = await validateRequest();

  // if (!user) {
  //   return null;
  // }

  const userData = await db.user.findMany({
    select: {
      username: true,
    },
  });

  if (userData !== null) {
    return userData;
  }

  return null;
}
