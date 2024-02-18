import { Input } from '~/shared/_shacdn/ui/input';
import { Form } from '~/server/form';
import login from './action/signin-action';
import { Button } from '~/shared/_shacdn/ui/button';

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
          <Button type="submit" className="mb-5 w-full">
            Continue{' '}
          </Button>
        </Form>
        <Button className="mb-5 w-auto">Forgot password?</Button>
      </div>
    </>
  );
}
