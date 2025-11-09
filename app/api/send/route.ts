import { Resend } from 'resend';

import { EmailTemplate } from '@/components/common/EmailTemplate';
import { RESEND_CONFIG } from '../../../config/config';

const resend = new Resend(RESEND_CONFIG.apiKey);

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as FormData;
    const { name, phone, email, message } = body;

    const { data, error } = await resend.emails.send({
      from: RESEND_CONFIG.from,
      to: RESEND_CONFIG.to,
      subject: RESEND_CONFIG.subject,
      react: EmailTemplate({
        name,
        phoneNumber: phone,
        email,
        message
      }) as React.ReactElement
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
