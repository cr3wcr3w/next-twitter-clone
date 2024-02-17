import { Input } from '~/shared/_shacdn/ui/input';
import { Form } from '~/server/form';
import login from './action/signin-action';
import { Button } from '~/shared/_shacdn/ui/button';

export default function SignInForm() {
  return (
    <Form action={login}>
        <div className="flex flex-col">
        <Input name="username" id="username" type="text" placeholder="Username" className="mb-5 text-black" />
        <Input name="password" id="password" type="password" placeholder="Password" className="mb-5 text-black" />
        <Button className="w-full mb-5">Continue </Button>
        <Button className="mb-5 w-auto">Forgot password?</Button>
        </div>
    </Form>
  )
}