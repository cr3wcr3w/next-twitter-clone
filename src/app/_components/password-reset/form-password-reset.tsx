import { Input } from '~/shared/_shacdn/ui/input';
import { Form } from '~/server/form';
import reset from './action/reset-password-action';
import { Button } from '~/shared/_shacdn/ui/button';
import { useFormStatus } from 'react-dom';

function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="mb-5 w-full">
      {pending ? 'Loading...' : 'Continue'}
    </Button>
  );
}

export default function PasswordResetForm() {
  return (
    <>
      <div className="flex flex-col">
        <Form action={reset}>
          <Input
            name="username"
            id="username"
            type="text"
            placeholder="Username"
            className="mb-5 text-black"
          />
          <Input
            name="newpassword"
            id="newpassword"
            type="password"
            placeholder="New Password"
            className="mb-5 text-black"
          />
          <Submit />
        </Form>
      </div>
    </>
  );
}
