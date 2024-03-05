'use action';
import { db } from '~/server/db';
import { validateRequest } from '~/server/auth';

export default async function getUser(): Promise<{ username: string; id: string } | null> {
  const { user } = await validateRequest();

  try {
    const name = await db.user.findFirst({
      where: {
        id: user?.id,
      },
      select: {
        username: true,
        id: true,
      },
    });

    return name;
  } catch (error) {
    return null;
  }
}
