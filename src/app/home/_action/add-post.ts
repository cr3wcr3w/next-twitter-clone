'use server';

import { db } from '~/server/db';
import getUser from '~/app/home/_action/get-user';
import { v4 as uuid } from 'uuid';
import { redirect } from 'next/navigation';

export default async function addPost(post: string) {

  if (post === '') {
    return;
  }

  try {
    const userData = await getUser();

    await db.post.create({
      data: {
        tweets: post,
        id: uuid(),
        userId: userData!.id,
        userName: userData!.username,
      },
    });
  } catch (error) {
    return null;
  }

  return redirect('/home');
}
