'use action';

import { db } from '~/server/db';
import { validateRequest } from '~/server/auth';

export default async function getUserData(username: string): Promise<{ username: string } | null> {
  const { user } = await validateRequest();

  const validate = await db.user.findFirst({
    where: {
      id: user?.id,
    },
    select: {
      username: true,
    },
  });

  const userData = await db.user.findFirst({
    where: {
      username: username,
    },
    select: {
      username: true,
    },
  });

  if (validate !== null) {
    if (userData !== null) {
      return userData;
    }

    return null;
  }

  return null;
}
