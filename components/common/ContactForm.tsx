'use client';

import React, { useState } from 'react';

import Form from './Form';
import Input from './Input';

const FORM_STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success'
};

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [formStatus, setFormStatus] = useState(FORM_STATUS.IDLE);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus(FORM_STATUS.LOADING);
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, phone, email, address })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      // Clear form and show success message
      setName('');
      setPhone('');
      setEmail('');
      setAddress('');
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
      headingText='Get your free rental analysis today!'
      headingClassName='u-highlight-text-primary '
      submitBtnType='primary'
      submitText='Submit'
      loading={formStatus === FORM_STATUS.LOADING}
      onSubmit={handleSubmit}
      className='referral__form'
      disabled={
        formStatus === FORM_STATUS.LOADING ||
        !name ||
        !phone ||
        !email ||
        !address
      }
      success={formStatus === FORM_STATUS.SUCCESS}
      successText='Request submitted!'
    >
      <Input
        type='text'
        name='name'
        id='name'
        placeholderText='Full Name'
        value={name}
        isRequired={true}
        onChange={setName}
      />
      <Input
        type='text'
        name='phone'
        id='phone'
        placeholderText='Phone Number'
        value={phone}
        isRequired={true}
        onChange={setPhone}
      />
      <Input
        type='email'
        name='email'
        id='email'
        placeholderText='Email Address'
        value={email}
        isRequired={true}
        onChange={setEmail}
      />
      <Input
        type='text'
        name='address'
        id='address'
        placeholderText='Rental Address'
        value={address}
        isRequired={true}
        onChange={setAddress}
      />
    </Form>
  );
};

export default ContactForm;
