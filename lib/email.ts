import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, phone, message } = data;

  // Email to admin/sales team
  const adminEmail = await resend.emails.send({
    from: 'THE DIVINE FARMS <onboarding@resend.dev>',
    to: ['penumatsakumar@gmail.com'], // Update this to your admin email
    subject: `New Lead: ${name} - THE DIVINE FARMS`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1a1a1a; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #166534 0%, #15803d 100%); color: white; padding: 30px; text-align: center; border-radius: 12px 12px 0 0; }
            .header h1 { margin: 0; font-size: 24px; }
            .header p { margin: 10px 0 0; opacity: 0.9; }
            .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
            .field { margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #f3f4f6; }
            .field:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
            .label { font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
            .value { font-size: 16px; color: #1f2937; font-weight: 500; }
            .cta { text-align: center; margin-top: 20px; }
            .cta a { display: inline-block; padding: 12px 24px; background: #166534; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; background: #f9fafb; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none; }
            .badge { display: inline-block; padding: 4px 12px; background: #fef3c7; color: #92400e; border-radius: 20px; font-size: 12px; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Lead Received!</h1>
              <p>THE DIVINE FARMS - Near Kolanupaka, Aler</p>
            </div>
            <div class="content">
              <div style="text-align: center; margin-bottom: 20px;">
                <span class="badge">Hot Lead</span>
              </div>
              <div class="field">
                <div class="label">Full Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Phone Number</div>
                <div class="value"><a href="tel:${phone}" style="color: #166534; text-decoration: none;">${phone}</a></div>
              </div>
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}" style="color: #166534; text-decoration: none;">${email}</a></div>
              </div>
              ${message ? `
              <div class="field">
                <div class="label">Message / Inquiry</div>
                <div class="value">${message}</div>
              </div>
              ` : ''}
              <div class="cta">
                <a href="tel:${phone}">Call Now</a>
                <a href="https://wa.me/91${phone}" style="background: #25D366; margin-left: 10px;">WhatsApp</a>
              </div>
            </div>
            <div class="footer">
              <p>This lead was generated from THE DIVINE FARMS website</p>
              <p>SRLN Infra Developers | Contact: 6309123731</p>
            </div>
          </div>
        </body>
      </html>
    `,
  });

  // Confirmation email to customer
  const customerEmail = await resend.emails.send({
    from: 'THE DIVINE FARMS <onboarding@resend.dev>',
    to: [email],
    subject: 'Thank you for your interest in THE DIVINE FARMS!',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1a1a1a; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #166534 0%, #15803d 100%); color: white; padding: 40px 30px; text-align: center; border-radius: 12px 12px 0 0; }
            .header h1 { margin: 0; font-size: 28px; font-weight: 700; }
            .header p { margin: 15px 0 0; opacity: 0.9; font-size: 16px; }
            .content { background: #ffffff; padding: 40px 30px; border: 1px solid #e5e7eb; border-top: none; }
            .greeting { font-size: 18px; color: #1f2937; margin-bottom: 20px; }
            .highlight-box { background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-left: 4px solid #166534; padding: 20px; margin: 25px 0; border-radius: 0 8px 8px 0; }
            .highlight-box h3 { margin: 0 0 10px; color: #166534; }
            .feature-list { list-style: none; padding: 0; margin: 20px 0; }
            .feature-list li { padding: 10px 0; padding-left: 30px; position: relative; }
            .feature-list li:before { content: "✓"; position: absolute; left: 0; color: #166534; font-weight: bold; }
            .cta-section { text-align: center; margin: 30px 0; }
            .cta-button { display: inline-block; padding: 15px 30px; background: #166534; color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; }
            .contact-info { background: #f9fafb; padding: 20px; border-radius: 8px; margin: 25px 0; }
            .contact-info h4 { margin: 0 0 15px; color: #1f2937; }
            .contact-item { display: flex; align-items: center; margin: 10px 0; }
            .footer { text-align: center; padding: 25px; color: #6b7280; font-size: 13px; background: #f9fafb; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb; border-top: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>THE DIVINE FARMS</h1>
              <p>A New Lifestyle Close to Nature</p>
            </div>
            <div class="content">
              <p class="greeting">Dear ${name},</p>
              <p>Thank you for your interest in <strong>THE DIVINE FARMS</strong>! We're excited to help you find your perfect farm plot near Kolanupaka, Aler.</p>
              
              <div class="highlight-box">
                <h3>Special Offers for You!</h3>
                <ul class="feature-list" style="margin: 0;">
                  <li>Easy EMI Options Available</li>
                  <li>FREE Resort Membership</li>
                  <li>Pre-launch Pricing Benefits</li>
                </ul>
              </div>

              <p>Our premium farm plots come with world-class amenities including:</p>
              <ul class="feature-list">
                <li>Clubhouse & Swimming Pool</li>
                <li>Farm Cottage & Glam Pod</li>
                <li>Beach View with Gazebo</li>
                <li>Box Cricket & Children's Play Area</li>
                <li>Mahogany & Fruit Plantation</li>
                <li>Party Lawn & Campfire Area</li>
              </ul>

              <div class="contact-info">
                <h4>Our team will contact you shortly. You can also reach us at:</h4>
                <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:6309123731" style="color: #166534;">+91 6309123731</a></p>
                <p style="margin: 10px 0;"><strong>WhatsApp:</strong> <a href="https://wa.me/916309123731" style="color: #25D366;">Chat with us</a></p>
              </div>

              <div class="cta-section">
                <a href="https://wa.me/916309123731?text=Hi!%20I'm%20${encodeURIComponent(name)}%20and%20I'm%20interested%20in%20THE%20DIVINE%20FARMS.%20Please%20share%20more%20details." class="cta-button" style="background: #25D366;">
                  WhatsApp Us Now
                </a>
              </div>
            </div>
            <div class="footer">
              <p><strong>THE DIVINE FARMS</strong></p>
              <p>Near Kolanupaka, Aler | SRLN Infra Developers</p>
              <p style="margin-top: 15px; font-size: 11px; color: #9ca3af;">
                You received this email because you submitted an inquiry on our website.
              </p>
            </div>
          </div>
        </body>
      </html>
    `,
  });

  return { adminEmail, customerEmail };
}
