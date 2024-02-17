import signup from './action/signup-action';
import { Form } from "~/server/form";
import { Button } from '~/shared/_shacdn/ui/button';
import { Input } from '~/shared/_shacdn/ui/input';

export default function SignUpForm() {
  return (
    <Form action={signup} >
        <div className="mb-10">
        <h1 className="mb-9 text-2xl sm:text-3xl">Create your account</h1>
        <div >
            <Input name="username" id="username" type="text" placeholder="Username" className="mb-5 text-black" />
            <Input name="password" id="password" type="password" placeholder="Password" className="text-black" />
        </div>
        </div>

        <div>
        <Button className="w-full">Continue </Button>
        </div>
    </Form>
  )
}

