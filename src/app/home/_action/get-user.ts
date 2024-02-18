'use action';
import { db } from '~/server/db';
import { validateRequest } from '~/server/auth';

export default async function getUser(): Promise<{ username: string } | null> {
  const { user } = await validateRequest();

  const name = await db.user.findFirst({
    where: {
      id: user?.id,
    },
    select: {
      username: true,
    },
  });

  return name;
}
