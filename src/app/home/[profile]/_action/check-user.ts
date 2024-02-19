'use action';

import { db } from '~/server/db';
import { validateRequest } from '~/server/auth';

export default async function CheckUser(username: string): Promise<boolean> {
  const { user } = await validateRequest();

  if (!user) {
    return false;
  }

  const checkUsername = await db.user.findFirst({
    where: {
      username: username,
    },
    select: {
      username: true,
    },
  });

  if (checkUsername !== null) {
    return true;
  }

  return false;
}
