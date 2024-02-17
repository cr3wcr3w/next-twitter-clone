import { lucia, validateRequest } from "~/server/auth";
import { redirect } from "next/navigation";
import { type ActionResult, Form } from "~/server/form";
import { cookies } from "next/headers";

export default async function Page() {

  const { user } = await validateRequest();
  if (!user) {
		return redirect("/");
	}

  return (

    <>
    <div className="text-white">Home</div>
    <Form action={logout}>
				<button className="text-white">Sign out</button>
			</Form>
    </>
  );
}


async function logout(): Promise<ActionResult> {
	"use server";
	const { session } = await validateRequest();
	if (!session) {
		return {
			error: "Unauthorized"
		};
	}

	await lucia.invalidateSession(session.id);

	const sessionCookie = lucia.createBlankSessionCookie();
	cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	return redirect("/");
}