import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please provide all required fields: name, email, and message.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // =========================================================================
    // TODO: INTEGRATE EMAIL SERVICE HERE
    // =========================================================================
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'contact@handysof.com',
    //   to: 'team@handysof.com',
    //   subject: `New inquiry from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    // });
    //
    // Example with Nodemailer / SMTP:
    // await transporter.sendMail({ ... });
    // =========================================================================

    // In-development log for tracking
    console.log('[Contact Form Submission]:', {
      name,
      email,
      messageLength: message.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out! We will get back to you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling contact submission:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later or email us directly.' },
      { status: 500 }
    );
  }
}
