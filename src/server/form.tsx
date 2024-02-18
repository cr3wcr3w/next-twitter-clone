'use client';

import { useFormState } from 'react-dom';

export function Form({
  children,
  action,
}: {
  children: React.ReactNode;
  action: (prevState: unknown, formData: FormData) => Promise<ActionResult>;
}) {
  const [state, formAction] = useFormState(action, {
    error: null,
  });
  return (
    <form action={formAction}>
      {children}
      <p className="my-2 text-red-900">{state.error}</p>
    </form>
  );
}

export interface ActionResult {
  error: string | null;
}
