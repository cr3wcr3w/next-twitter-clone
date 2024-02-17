
"use server";
import { db } from "~/server/db";
import { Argon2id } from "oslo/password";
import { cookies } from "next/headers";
import { lucia } from "~/server/auth";
import { redirect } from "next/navigation";

import type { ActionResult } from "~/server/form";

export default async function login(_: unknown, formData: FormData): Promise<ActionResult> {
	const username = formData.get("username");
	if (
		typeof username !== "string" ||
		username.length < 3 ||
		username.length > 31 ||
		!/^[a-z0-9_-]+$/.test(username)
	) {
		return {
			error: "Invalid username"
		};
	}
	const password = formData.get("password");
	if (typeof password !== "string" || password.length < 6 || password.length > 255) {
		return {
			error: "Invalid password"
		};
	}

    const existingUser = await db.user.findFirst({
        where: {
            username: username
        }
    });

    if (!existingUser) {
        return {
            error: "Incorrect username or password"
        };
    }

	const validPassword = await new Argon2id().verify(existingUser.password, password);
	if (!validPassword) {
		return {
			error: "Incorrect username or password"
		};
	}

	const session = await lucia.createSession(existingUser.id, {});
	const sessionCookie = lucia.createSessionCookie(session.id);
	cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	return redirect("/home");
}