'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import Form from '@/components/common/Form';
import Input from '@/components/common/Input';
import Textarea from '@/components/common/Textarea';

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
  const [verified, setVerified] = useState(false);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleVerify = async (token: string | null) => {
    if (!token) return;
    const res = await fetch('/api/verify-recaptcha', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token })
    });
    const data = await res.json();

    if (data.success) setVerified(true);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setFormStatus(FORM_STATUS.LOADING);

    if (!verified) {
      setFormStatus(FORM_STATUS.IDLE);
      return;
    }

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone, message })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

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

    // Reset Captcha
    setVerified(false);
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
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
        !message ||
        !verified
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

      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
        onChange={handleVerify}
      />
    </Form>
  );
};

export default ContactForm;
