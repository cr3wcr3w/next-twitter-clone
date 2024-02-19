'use action';

import { db } from '~/server/db';
import { validateRequest } from '~/server/auth';

export default async function CheckUser(username: string): Promise<boolean> {
  const { user } = await validateRequest();

  const validate = await db.user.findFirst({
    where: {
      id: user?.id,
    },
    select: {
      username: true,
    },
  });

  const checkUsername = await db.user.findFirst({
    where: {
      username: username,
    },
    select: {
      username: true,
    },
  });

  if (validate !== null) {
    if (checkUsername !== null) {
      return true;
    }

    return false;
  }

  return false;
}
