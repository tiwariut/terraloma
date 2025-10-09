'use client';

import { useState } from 'react';

import Form from '@/components/common/Form';
import Input from '@/components/common/Input';
import Textarea from '../../common/Textarea';

const FORM_STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success'
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState(FORM_STATUS.IDLE);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setFormStatus(FORM_STATUS.LOADING);

    try {
      // const response = await fetch('/api/send', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({ name, email, phone, message })
      // });

      // const data = await response.json();
      // if (!response.ok) {
      //   throw new Error(data.error || 'Something went wrong');
      // }

      // Clear form and show success message
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setFormStatus(FORM_STATUS.SUCCESS);
      setTimeout(() => {
        setFormStatus(FORM_STATUS.IDLE);
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
      setFormStatus(FORM_STATUS.IDLE);
    }
  };
  return (
    <Form
      headingClassName='u-highlight-text-primary '
      submitBtnType='primary'
      submitText='SEND MESSAGE'
      loading={formStatus === FORM_STATUS.LOADING}
      onSubmit={handleSubmit}
      className='referral__form'
      disabled={
        formStatus === FORM_STATUS.LOADING ||
        !name ||
        !email ||
        !phone ||
        !message
      }
      success={formStatus === FORM_STATUS.SUCCESS}
      successText='Request submitted!'
    >
      <Input
        type='text'
        name='name'
        id='name'
        placeholderText='Your name'
        value={name}
        isRequired={true}
        onChange={setName}
      />
      <Input
        type='email'
        name='email'
        id='email'
        placeholderText='Email'
        value={email}
        isRequired={true}
        onChange={setEmail}
      />
      <Input
        type='text'
        name='phone'
        id='phone'
        placeholderText='Phone'
        value={phone}
        isRequired={true}
        onChange={setPhone}
      />

      <Textarea
        rows={4}
        showLabel={true}
        placeholderText='Your message'
        value={message}
        isRequired={false}
        onChange={setMessage}
      ></Textarea>
    </Form>
  );
};

export default ContactForm;
