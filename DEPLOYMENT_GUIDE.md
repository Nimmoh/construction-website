# Deployment Guide for Construction Website

## Issues Fixed

The 400 error you were experiencing was caused by several configuration issues:

1. **CORS Configuration**: The backend was hardcoded to only allow `localhost:3000` as origin
2. **API Endpoint Inconsistency**: Different components were calling different endpoints
3. **Environment Variables**: Missing proper environment variable configuration for production

## Single Project Deployment (Recommended)

Since your backend is inside your frontend folder, I've converted it to use Vercel serverless functions. This means you only need to deploy one project.

### 1. Deploy to Vercel

1. Deploy your `construction-website` folder to Vercel
2. Vercel will automatically detect the `/api` folder and create serverless functions
3. Set the following environment variables in Vercel dashboard:

```
SMTP_HOST=mail.bonganasi.co.ke
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=customer@bonganasi.co.ke
SMTP_PASS=@Customer2024
COMPANY_EMAIL=ndabari79@gmail.com
COMPANY_NAME=Kambove Enterprises
COMPANY_PHONE=+254 720 020 453
SEND_CONFIRMATION_EMAIL=true
EMAIL_FROM_NAME=Evocore Tech Limited
ALLOWED_ORIGINS=http://localhost:3000,https://construction-website-black.vercel.app
```

That's it! Your contact form will now work at `https://construction-website-black.vercel.app/api/contact`

## Local Development Setup

### Backend (.env file)
Create a `.env` file in the `contact-form-backend` directory:

```
NODE_ENV=development
PORT=5000
COMPANY_EMAIL=ndabari79@gmail.com
COMPANY_NAME=Kambove Enterprises
COMPANY_PHONE=+254 720 020 453
SMTP_HOST=mail.bonganasi.co.ke
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=customer@bonganasi.co.ke
SMTP_PASS=@Customer2024
SEND_CONFIRMATION_EMAIL=true
EMAIL_FROM_NAME=Evocore Tech Limited
RATE_LIMIT_WINDOW_MS=3600000
RATE_LIMIT_MAX_REQUESTS=5
MIN_NAME_LENGTH=2
MAX_NAME_LENGTH=100
MIN_MESSAGE_LENGTH=10
MAX_MESSAGE_LENGTH=2000
CORS_ENABLED=true
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5000
```

### Frontend (.env file)
Create a `.env` file in the `construction-website` directory:

```
REACT_APP_API_BASE_URL=http://localhost:5000
REACT_APP_CONTACT_API_ENDPOINT=/api/contact
```

## Testing

### Local Testing
1. Start backend: `cd contact-form-backend && npm start`
2. Start frontend: `cd construction-website && npm start`
3. Test the contact form at `http://localhost:3000/contact`

### Production Testing
1. Test the health endpoint: `https://your-backend-domain.vercel.app/api/health`
2. Test the contact form on your deployed frontend

## Troubleshooting

### Common Issues:

1. **CORS Error**: Make sure your frontend domain is added to `ALLOWED_ORIGINS` in backend environment variables
2. **500 Error**: Check SMTP credentials and email configuration
3. **404 Error**: Verify the API endpoint URLs match between frontend and backend
4. **Environment Variables**: Ensure all required environment variables are set in Vercel dashboard

### Debug Steps:

1. Check Vercel function logs for backend errors
2. Use browser developer tools to inspect network requests
3. Test API endpoints directly using tools like Postman or curl
4. Verify environment variables are properly set in Vercel dashboard

## Security Notes

- Never commit `.env` files to version control
- Use strong passwords for SMTP authentication
- Consider implementing rate limiting for production
- Validate and sanitize all user inputs
- Use HTTPS in production
