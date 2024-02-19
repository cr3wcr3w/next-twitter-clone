'use action';

import { db } from '~/server/db';
import { validateRequest } from '~/server/auth';

export default async function getUserData(username: string): Promise<{ username: string } | null> {
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
    },
  });

  if (userData !== null) {
    return userData;
  }

  return null;
}