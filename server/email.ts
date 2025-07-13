import nodemailer from 'nodemailer';
import type { ContactRequest } from '@shared/schema';

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

// Simple email configuration - can be customized
const emailConfig: EmailConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'info@silberreh.de',
    pass: process.env.SMTP_PASS || 'app-password-here'
  }
};

let transporter: nodemailer.Transporter | null = null;

// Initialize email transporter
function initializeEmailTransporter() {
  try {
    transporter = nodemailer.createTransport(emailConfig);
    console.log('Email transporter initialized successfully');
  } catch (error) {
    console.error('Failed to initialize email transporter:', error);
    // Fallback to console logging if email fails
    transporter = null;
  }
}

export async function sendContactNotification(contactRequest: ContactRequest): Promise<boolean> {
  // If no transporter, log to console as fallback
  if (!transporter) {
    console.log('📧 New Contact Request:', {
      name: contactRequest.name,
      email: contactRequest.email,
      phone: contactRequest.phone,
      serviceType: contactRequest.serviceType,
      message: contactRequest.message
    });
    return true;
  }

  try {
    const mailOptions = {
      from: `"SILBERREH Website" <${emailConfig.auth.user}>`,
      to: 'info@silberreh.de',
      subject: `Neue Kontaktanfrage - ${contactRequest.serviceType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Neue Kontaktanfrage</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">SILBERREH GmbH Website</p>
          </div>
          
          <div style="padding: 30px; background: #f8fafc;">
            <h2 style="color: #1e40af; margin-bottom: 20px;">Kontaktdaten</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Name:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${contactRequest.name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Email:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${contactRequest.email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Telefon:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${contactRequest.phone}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Dienstleistung:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${contactRequest.serviceType}</td>
                </tr>
                ${contactRequest.company ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Firma:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${contactRequest.company}</td>
                </tr>
                ` : ''}
                ${contactRequest.size ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Größe:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${contactRequest.size}</td>
                </tr>
                ` : ''}
                ${contactRequest.frequency ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Häufigkeit:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${contactRequest.frequency}</td>
                </tr>
                ` : ''}
                ${contactRequest.preferredDate ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #374151;">Gewünschter Termin:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #374151;">${contactRequest.preferredDate}</td>
                </tr>
                ` : ''}
              </table>
            </div>
            
            ${contactRequest.message ? `
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1e40af; margin-top: 0;">Nachricht:</h3>
              <p style="color: #374151; line-height: 1.6; margin: 0;">${contactRequest.message}</p>
            </div>
            ` : ''}
            
            <div style="text-align: center; margin-top: 30px;">
              <p style="color: #6b7280; font-size: 14px;">
                Eingegangen am: ${new Date().toLocaleString('de-DE')}
              </p>
            </div>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Contact notification email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending contact notification email:', error);
    // Log to console as fallback
    console.log('📧 New Contact Request (Email failed):', {
      name: contactRequest.name,
      email: contactRequest.email,
      phone: contactRequest.phone,
      serviceType: contactRequest.serviceType,
      message: contactRequest.message
    });
    return false;
  }
}

// Initialize on module load
initializeEmailTransporter();