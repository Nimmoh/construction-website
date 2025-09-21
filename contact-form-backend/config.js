// config/emailConfig.js
const nodemailer = require('nodemailer');

// Dynamic email service configuration
const getEmailConfig = () => {
  const emailService = process.env.EMAIL_SERVICE || 'gmail';
  
  const serviceConfigs = {
    gmail: {
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    },
    outlook: {
      service: 'outlook',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    },
    yahoo: {
      service: 'yahoo',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    },
    custom: {
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    }
  };

  return serviceConfigs[emailService] || serviceConfigs.gmail;
};

// Validate required environment variables
const validateEmailConfig = () => {
  const required = ['EMAIL_USER', 'EMAIL_PASS'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }

  // Additional validation for custom SMTP
  if (process.env.EMAIL_SERVICE === 'custom') {
    const customRequired = ['SMTP_HOST', 'SMTP_PORT'];
    const customMissing = customRequired.filter(key => !process.env[key]);
    
    if (customMissing.length > 0) {
      throw new Error(`Missing custom SMTP variables: ${customMissing.join(', ')}`);
    }
  }
};

// Create dynamic transporter
const createDynamicTransporter = () => {
  try {
    validateEmailConfig();
    const config = getEmailConfig();
    return nodemailer.createTransporter(config);
  } catch (error) {
    console.error('Email configuration error:', error.message);
    throw error;
  }
};

// Get email templates based on environment
const getEmailTemplates = () => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  return {
    subject: {
      contact: process.env.EMAIL_SUBJECT_PREFIX 
        ? `${process.env.EMAIL_SUBJECT_PREFIX}: Contact Form` 
        : 'Contact Form',
      autoReply: process.env.AUTO_REPLY_SUBJECT || 'Thank you for contacting us!'
    },
    
    from: {
      name: process.env.FROM_NAME || 'Website Contact Form',
      email: process.env.EMAIL_USER
    },
    
    // Dynamic recipient list
    recipients: {
      primary: process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER,
      cc: process.env.CC_EMAILS ? process.env.CC_EMAILS.split(',') : [],
      bcc: process.env.BCC_EMAILS ? process.env.BCC_EMAILS.split(',') : []
    },
    
    // Development vs Production settings
    settings: {
      enableAutoReply: process.env.ENABLE_AUTO_REPLY !== 'false',
      enableNotifications: process.env.ENABLE_NOTIFICATIONS !== 'false',
      debugMode: isDevelopment,
      rateLimitPerHour: parseInt(process.env.RATE_LIMIT_PER_HOUR) || 10
    }
  };
};

module.exports = {
  createDynamicTransporter,
  getEmailTemplates,
  validateEmailConfig
};