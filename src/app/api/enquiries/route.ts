import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { mongoClientPromise } from '@/lib/mongodb';

export const runtime = 'nodejs';

const PHONE_PATTERN = /^[6-9]\d{9}$/;
const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;
const MAX_NAME_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 2_000;

export async function POST(request: Request) {
  try {
    const body = await request.json();
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

    const client = await mongoClientPromise;
    await client.db().collection('enquiries').insertOne({
      name,
      email,
      phone,
      message,
      createdAt: new Date(),
    });

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword) {
      throw new Error('Gmail mailer environment variables are missing.');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: gmailUser, pass: gmailAppPassword },
    });

    await Promise.all([
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
      }),
    ]);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Failed to save enquiry:', error);
    return NextResponse.json(
      { error: 'Unable to save your enquiry. Please try again.' },
      { status: 500 }
    );
  }
}
