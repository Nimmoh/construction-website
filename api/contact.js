
const createTransporter = () => {
  const nodemailer = require('nodemailer');

  console.log('Creating nodemailer transporter with config:', {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.SMTP_USER ? '***' : 'MISSING'
  });

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

module.exports = async function handler(req, res) {
  const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',').map(origin => origin.trim())
    : ['http://localhost:3000', 'https://construction-website-black.vercel.app'];

  const origin = req.headers.origin;

  console.log('Request origin:', origin);
  console.log('Allowed origins:', allowedOrigins);

  // Set CORS headers
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    console.log('CORS allowed for origin:', origin);
  } else {
    // Fallback: allow the request origin if it's from Vercel
    if (origin && origin.includes('vercel.app')) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      console.log('CORS allowed for Vercel origin:', origin);
    } else {
      console.warn('CORS blocked for origin:', origin);
    }
  }

  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    console.log('API called with method:', req.method);
    console.log('Request body:', req.body);
    console.log('Environment variables check:', {
      SMTP_HOST: !!process.env.SMTP_HOST,
      SMTP_USER: !!process.env.SMTP_USER,
      SMTP_PASS: !!process.env.SMTP_PASS,
      COMPANY_EMAIL: !!process.env.COMPANY_EMAIL
    });
    console.log('SMTP_HOST value:', process.env.SMTP_HOST);
    console.log('SMTP_USER value:', process.env.SMTP_USER);

    const requiredEnvVars = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'COMPANY_EMAIL'];
    const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

    if (missingEnvVars.length > 0) {
      console.error('Missing environment variables:', missingEnvVars);
      return res.status(500).json({
        success: false,
        message: 'Server configuration error. Please contact administrator.',
        missingVars: missingEnvVars
      });
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      console.log('Validation failed - missing fields:', { name: !!name, email: !!email, subject: !!subject, message: !!message });
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    console.log('Creating transporter...');
    const transporter = createTransporter();
    console.log('Transporter created successfully');

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.COMPANY_EMAIL || process.env.SMTP_USER,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #4CAF50;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #666;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #999; font-size: 12px; text-align: center;">
            This email was sent from your website contact form.
          </p>
        </div>
      `,
    };

    const autoReplyOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting us!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4CAF50;">Thank You for Reaching Out!</h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f0f8ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Your Message Summary:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          
          <p>We typically respond within 24-48 hours.</p>
          
          <p>Best regards,<br>Your Website Team</p>
        </div>
      `,
    };

    console.log('Attempting to send main email...');
    try {
      const mainEmailResult = await transporter.sendMail(mailOptions);
      console.log('Main email sent successfully:', mainEmailResult.messageId);
    } catch (mainEmailError) {
      console.error('Failed to send main email:', mainEmailError);
      throw new Error(`Main email failed: ${mainEmailError.message}`);
    }

    console.log('Attempting to send auto-reply...');
    try {
      const autoReplyResult = await transporter.sendMail(autoReplyOptions);
      console.log('Auto-reply sent successfully:', autoReplyResult.messageId);
    } catch (autoReplyError) {
      console.error('Failed to send auto-reply:', autoReplyError);
      console.log('Auto-reply failed but main email was sent');
    }

    res.status(200).json({
      success: true,
      message: 'Email sent successfully!'
    });

  } catch (error) {
    console.error('Error in contact API:', error);
    console.error('Error stack:', error.stack);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Error response:', error.response);

    // Send detailed error for debugging
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.',
      error: error.message,
      errorCode: error.code,
      errorDetails: error.response || 'No additional details'
    });
  }
}
