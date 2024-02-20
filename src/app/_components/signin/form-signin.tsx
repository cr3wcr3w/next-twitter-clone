import { Input } from '~/shared/_shacdn/ui/input';
import { Form } from '~/server/form';
import login from './action/signin-action';
import { Button } from '~/shared/_shacdn/ui/button';
import { useFormStatus } from 'react-dom';

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="mb-5 w-full">
      {pending ? 'Loading...' : 'Continue'}
    </button>
  );
}

export default function SignInForm() {
  return (
    <>
      <div className="flex flex-col">
        <Form action={login}>
          <Input
            name="username"
            id="username"
            type="text"
            placeholder="Username"
            className="mb-5 text-black"
          />
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            className="mb-5 text-black"
          />
          <Submit />
        </Form>
        <Button className="mb-5 w-auto">Forgot password?</Button>
      </div>
    </>
  );
}
