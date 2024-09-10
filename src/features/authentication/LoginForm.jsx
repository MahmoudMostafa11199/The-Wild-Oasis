import { useState } from 'react';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import FormRowVertical from '../../ui/FormRowVertical';
import Logo from '../../ui/Logo';
import Heading from '../../ui/Heading';
import SpinnerMini from '../../ui/SpinnerMini';

import { useLogin } from './useLogin';

function LoginForm() {
  const [email, setEmail] = useState('mahmoud@admin.com');
  const [password, setPassword] = useState('mahmoud2210');

  const { login, isLoggingIn } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email && !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }

  return (
    <>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <Form onSubmit={handleSubmit}>
        <FormRowVertical label="Email address">
          <Input
            type="email"
            id="email"
            // This makes this form better for password managers
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoggingIn}
          />
        </FormRowVertical>
        <FormRowVertical label="Password">
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoggingIn}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button size="large" disabled={isLoggingIn}>
            {isLoggingIn ? <SpinnerMini /> : 'Log in'}
          </Button>
        </FormRowVertical>
      </Form>
    </>
  );
}

export default LoginForm;
