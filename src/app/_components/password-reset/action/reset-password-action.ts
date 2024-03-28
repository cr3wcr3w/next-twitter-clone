'use server';
import { db } from '~/server/db';
import { redirect } from 'next/navigation';
import { Argon2id } from 'oslo/password';
import type { ActionResult } from '~/server/form';

// function delay(ms: number) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

export default async function reset(_: unknown, formData: FormData): Promise<ActionResult> {
  const username = formData.get('username');
  if (
    typeof username !== 'string' ||
    username.length < 3 ||
    username.length > 31 ||
    !/^[a-z0-9_-]+$/.test(username)
  ) {
    return {
      error: 'Invalid username',
    };
  }
  const password = formData.get('newpassword');
  if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
    return {
      error: 'Invalid password',
    };
  }

  // await delay(2000);

  const existingUser = await db.user.findFirst({
    where: {
      username: username,
    },
  });

  if (!existingUser) {
    return {
      error: 'Incorrect username or password',
    };
  }

  const hashedPassword = await new Argon2id().hash(password);

  await db.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      password: hashedPassword,
    },
  });

  return redirect('/home');
}
