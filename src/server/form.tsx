"use client";

import { useFormState } from "react-dom";

export function Form({
	children,
	action
}: {
	children: React.ReactNode;
	action: (prevState: unknown, formData: FormData) => Promise<ActionResult>;
}) {
	const [state, formAction] = useFormState(action, {
		error: null
	});
	return (
		<form action={formAction}>
			{children}
			<p className="text-red-900 my-2">{state.error}</p>
		</form>
	);
}

export interface ActionResult {
	error: string | null;
}