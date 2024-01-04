import { EmailTemplate } from '@/app/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any, res: any) {

    const { name, email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: `${process.env.FROM_EMAIL}`,
      to: `${process.env.TO_EMAIL}`,
      subject: '🎉 New submission to your contact form!',
      react: EmailTemplate({ name, email, subject, message }),
      html: ''
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}