import { sendContactEmail, type ContactFormData } from '@/lib/email';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, phone, message } = body;
    
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone format (basic validation for Indian numbers)
    const phoneRegex = /^[0-9]{10}$/;
    const cleanPhone = phone.replace(/\D/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    const formData: ContactFormData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: cleanPhone,
      message: message?.trim() || '',
    };

    // Send emails
    const result = await sendContactEmail(formData);

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully',
        data: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        error: 'Failed to process contact form',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
