'use client';

import { COMPANY_DETAILS } from '@/constants/texts';
import Image from 'next/image';
import Input from './Input';
import { useState } from 'react';
import Button from './Button';
import AnchorLink from './AnchorLink';
const { NAME, LOGO } = COMPANY_DETAILS;

interface AuthPanelProps {
  role: 'Owner' | 'Tenant';
}

const AuthPanel = ({ role }: AuthPanelProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section className='auth-panel'>
      <div className='auth-panel__header'>
        <Image src={LOGO} alt={NAME} className='auth-panel__logo' />
        <h1 className='auth-panel__heading'>Welcome to the {role} Portal</h1>
      </div>
      <p className='auth-panel__subheading'>
        If you haven’t logged in with a password before,{' '}
        <span className='u-text-bold u-highlight-text-primary'>
          create your password now
        </span>
      </p>
      <form className='auth-panel__form'>
        <Input
          type='text'
          name='email'
          id='email'
          placeholderText='Email'
          value={email}
          isRequired={true}
          onChange={setEmail}
        />
        <Input
          type='password'
          name='password'
          id='password'
          placeholderText='Password'
          value={password}
          isRequired={true}
          onChange={setPassword}
        />
      </form>
      <Button type='primary' className='auth-panel__button'>
        Login
      </Button>
      <div className='auth-panel__footer'>
        <AnchorLink linkTo='#' type='primary'>
          Create a password
        </AnchorLink>
        <AnchorLink linkTo='#' type='primary'>
          Forgot your password?
        </AnchorLink>
      </div>
    </section>
  );
};

export default AuthPanel;
