'use action';
import { db } from '~/server/db';

export default async function getAllPosts(): Promise<
  { tweets: string; id: string; createdAt: Date; userId: string; userName: string }[] | null
> {
  try {
    // temp delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const posts = await db.post.findMany({
      select: {
        tweets: true,
        id: true,
        createdAt: true,
        userId: true,
        userName: true,
      },
    });

    return posts;
  } catch (error) {
    return null;
  }
}

// todo cache this data
