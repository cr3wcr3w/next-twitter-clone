'use server';

import { db } from '~/server/db';

export type getAllPostsType = {
  tweets: string;
  id: string;
  createdAt: Date;
  userId: string;
  userName: string;
};

export default async function getAllPosts(): Promise<getAllPostsType[] | null> {
  const posts = await db.post.findMany({
    select: {
      tweets: true,
      id: true,
      createdAt: true,
      userId: true,
      userName: true,
    },
  });

  return posts.reverse();
}
