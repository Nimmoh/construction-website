module.exports = async function handler(req, res) {
 
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    console.log('Test API called');
    console.log('Method:', req.method);
    console.log('Environment variables check:', {
      SMTP_HOST: !!process.env.SMTP_HOST,
      SMTP_USER: !!process.env.SMTP_USER,
      SMTP_PASS: !!process.env.SMTP_PASS,
      COMPANY_EMAIL: !!process.env.COMPANY_EMAIL,
      NODE_ENV: process.env.NODE_ENV
    });

    res.status(200).json({
      success: true,
      message: 'Test API is working!',
      timestamp: new Date().toISOString(),
      method: req.method,
      envVarsPresent: {
        SMTP_HOST: !!process.env.SMTP_HOST,
        SMTP_USER: !!process.env.SMTP_USER,
        SMTP_PASS: !!process.env.SMTP_PASS,
        COMPANY_EMAIL: !!process.env.COMPANY_EMAIL
      }
    });
  } catch (error) {
    console.error('Test API Error:', error);
    res.status(500).json({
      success: false,
      message: 'Test API failed',
      error: error.message
    });
  }
};
