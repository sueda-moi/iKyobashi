import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { CONTACT_EMAIL } from '@/constants/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, message } = body;

    if (!name || !message) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    console.log('\u2709\ufe0f Sending email to:', CONTACT_EMAIL);
    console.log('--- Content ---');
    console.log('From:', name);
    console.log('Phone:', phone);
    console.log('Message:', message);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error handling contact form:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
