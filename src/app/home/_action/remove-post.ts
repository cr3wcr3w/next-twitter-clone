'use server';

import { db } from '~/server/db';

export default async function removePost(id: string) {
  if (id === '') {
    return;
  }

  try {
    await db.post.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    return null;
  }
}
