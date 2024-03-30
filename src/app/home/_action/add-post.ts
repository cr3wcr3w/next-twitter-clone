'use server';

import { db } from '~/server/db';
import getUser from '~/app/home/_action/get-user';
import { v4 as uuid } from 'uuid';

export default async function addPost(post: string) {
  if (post === '') {
    return;
  }

  const userData = await getUser();

  const createdPost = {
    tweets: post,
    id: uuid(),
    userId: userData!.id,
    userName: userData!.username,
  };

  await db.post.create({
    data: createdPost,
  });

  return createdPost;
}
