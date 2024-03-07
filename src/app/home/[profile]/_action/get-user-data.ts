'use action';

import { db } from '~/server/db';
import { validateRequest } from '~/server/auth';

type postType = {
  id: string;
  tweets: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  userName: string;
};

export default async function getUserData(
  username: string
): Promise<{ username: string; posts: postType[] } | null> {
  const { user } = await validateRequest();

  if (!user) {
    return null;
  }

  const userData = await db.user.findFirst({
    where: {
      username: username,
    },
    select: {
      username: true,
      posts: true,
    },
  });

  if (userData !== null) {
    return userData;
  }

  return null;
}
