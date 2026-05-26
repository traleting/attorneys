declare const process: {
  env: Record<string, string | undefined>;
};

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  matter?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonResponse(body: unknown, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || 'info@dlaminiattorneys.co.za';
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Dlamini Attorneys <onboarding@resend.dev>';

  if (!apiKey) {
    return jsonResponse(
      { message: 'Contact form email is not configured yet.' },
      503
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return jsonResponse({ message: 'Invalid request body.' }, 400);
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const matter = clean(payload.matter);
  const message = clean(payload.message);

  if (!name || !email || !matter || !message) {
    return jsonResponse({ message: 'Please complete all required fields.' }, 400);
  }

  if (!emailPattern.test(email)) {
    return jsonResponse({ message: 'Please enter a valid email address.' }, 400);
  }

  const text = [
    'New consultation request from the Dlamini Attorneys website.',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || 'Not provided'}`,
    `Area of law: ${matter}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `New consultation request: ${matter}`,
      text,
    }),
  });

  if (!resendResponse.ok) {
    return jsonResponse(
      { message: 'We could not send your message right now. Please call or email us directly.' },
      502
    );
  }

  return jsonResponse({ message: 'Message sent successfully.' });
}

export function GET() {
  return jsonResponse({ message: 'Use POST to submit the contact form.' }, 405);
}
