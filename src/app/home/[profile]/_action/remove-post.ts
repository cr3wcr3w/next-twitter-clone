'use server';

import { db } from '~/server/db';
import { redirect } from 'next/navigation';

export default async function removePost(id: string, account: string | undefined) {
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

  return redirect(`/home/${account}`);
}
