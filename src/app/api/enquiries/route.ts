import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getMongoClient } from '@/lib/mongodb';

export const runtime = 'nodejs';

const PHONE_PATTERN = /^[6-9]\d{9}$/;
const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;
const MAX_NAME_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 2_000;

const isConfigured = (value: string | undefined) =>
  Boolean(value && !value.includes('your-') && !value.includes('example.com'));

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Please provide valid enquiry details.' }, { status: 400 });
    }
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (
      !name ||
      name.length > MAX_NAME_LENGTH ||
      !EMAIL_PATTERN.test(email) ||
      !PHONE_PATTERN.test(phone) ||
      !message ||
      message.length > MAX_MESSAGE_LENGTH
    ) {
      return NextResponse.json({ error: 'Please provide valid enquiry details.' }, { status: 400 });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    const persistEnquiry = Boolean(process.env.MONGODB_URI);
    const sendEmail = isConfigured(gmailUser) && isConfigured(gmailAppPassword);

    if (!persistEnquiry && !sendEmail) {
      return NextResponse.json(
        { error: 'Enquiries are not configured yet. Please call or WhatsApp us directly.' },
        { status: 503 }
      );
    }

    const deliveries: Promise<unknown>[] = [];

    if (persistEnquiry) {
      deliveries.push(
        getMongoClient().then((client) =>
          client.db().collection('enquiries').insertOne({
            name,
            email,
            phone,
            message,
            createdAt: new Date(),
          })
        )
      );
    }

    if (sendEmail && gmailUser && gmailAppPassword) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: gmailUser, pass: gmailAppPassword },
      });
      deliveries.push(
        transporter.sendMail({
          from: gmailUser,
          to: email,
          subject: 'We received your enquiry',
          text: `Hi ${name},\n\nThank you for contacting RAG MARBLES. We have received your enquiry and will get back to you within 2 hours during working hours.\n\nYour requirement:\n${message}\n\nPhone: ${phone}\n\nRegards,\nRAG MARBLES`,
        }),
        transporter.sendMail({
          from: gmailUser,
          to: gmailUser,
          replyTo: email,
          subject: `New enquiry from ${name}`,
          text: `New RAG MARBLES enquiry\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nRequirement:\n${message}`,
        })
      );
    }

    const results = await Promise.allSettled(deliveries);
    if (!results.some((result) => result.status === 'fulfilled')) {
      throw new Error('All configured enquiry delivery methods failed.');
    }

    results
      .filter((result): result is PromiseRejectedResult => result.status === 'rejected')
      .forEach((result) => console.error('An enquiry delivery method failed:', result.reason));

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Failed to save enquiry:', error);
    return NextResponse.json(
      { error: 'Unable to save your enquiry. Please try again.' },
      { status: 500 }
    );
  }
}
