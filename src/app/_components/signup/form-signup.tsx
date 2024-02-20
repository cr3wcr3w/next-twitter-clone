import { useFormStatus } from 'react-dom';
import signup from './action/signup-action';
import { Form } from '~/server/form';
import { Button } from '~/shared/_shacdn/ui/button';
import { Input } from '~/shared/_shacdn/ui/input';

function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Loading...' : 'Continue'}
    </Button>
  );
}

export default function SignUpForm() {
  return (
    <Form action={signup}>
      <div className="mb-10">
        <h1 className="mb-9 text-2xl sm:text-3xl">Create your account</h1>
        <div>
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
            className="text-black"
          />
        </div>
      </div>

      <div>
        <Submit />
      </div>
    </Form>
  );
}
