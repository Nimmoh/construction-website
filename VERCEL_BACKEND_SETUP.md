# Vercel Backend Setup Guide

## Overview

This guide will help you set up your backend API on Vercel to work with your cPanel-hosted frontend.

---

## Step 1: Prepare Your Backend for Vercel

### 1.1 Verify File Structure

Make sure your project has this structure:

```
construction-website/
├── api/
│   ├── contact.js       # Your contact form handler
│   └── test.js          # Test endpoint
├── package.json
├── vercel.json          # Vercel configuration (optional)
└── .gitignore
```

### 1.2 Create/Update vercel.json (Optional)

Create `vercel.json` in the root directory:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/**/*.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    }
  ]
}
```

---

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production:
```bash
vercel --prod
```

### Option B: Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect and deploy

---

## Step 3: Configure Environment Variables on Vercel

### 3.1 Access Environment Variables

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**

### 3.2 Add These Variables

Add the following environment variables:

| Variable Name | Value | Environment |
|--------------|-------|-------------|
| `SMTP_HOST` | `mail.kambovent.co.ke` | Production, Preview, Development |
| `SMTP_PORT` | `587` | Production, Preview, Development |
| `SMTP_SECURE` | `false` | Production, Preview, Development |
| `SMTP_USER` | `info@kambovent.co.ke` | Production, Preview, Development |
| `SMTP_PASS` | `Kambove@2025` | Production, Preview, Development |
| `COMPANY_EMAIL` | `info@kambovent.co.ke` | Production, Preview, Development |
| `COMPANY_NAME` | `Kambove Enterprises` | Production, Preview, Development |
| `COMPANY_PHONE` | `+254714312234` | Production, Preview, Development |
| `SEND_CONFIRMATION_EMAIL` | `true` | Production, Preview, Development |
| `EMAIL_FROM_NAME` | `Kambove Enterprises` | Production, Preview, Development |
| `ALLOWED_ORIGINS` | `http://localhost:3000,https://kambovent.co.ke,https://www.kambovent.co.ke` | Production, Preview, Development |

**Important**: Replace `https://kambovent.co.ke` with your actual cPanel domain!

### 3.3 Save and Redeploy

After adding environment variables:
1. Click **Save**
2. Go to **Deployments**
3. Click **Redeploy** on the latest deployment

---

## Step 4: Test Your Vercel Backend

### 4.1 Test the Test Endpoint

Visit in your browser:
```
https://construction-website-black.vercel.app/api/test
```

You should see:
```json
{
  "success": true,
  "message": "API is working!",
  "timestamp": "2025-09-30T..."
}
```

### 4.2 Test the Contact Endpoint

Use Postman or curl to test:

```bash
curl -X POST https://construction-website-black.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -H "Origin: https://kambovent.co.ke" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

---

## Step 5: Update CORS Settings

### 5.1 Why CORS Matters

CORS (Cross-Origin Resource Sharing) allows your cPanel frontend to communicate with your Vercel backend.

### 5.2 Verify ALLOWED_ORIGINS

Make sure `ALLOWED_ORIGINS` includes:
- Your cPanel domain: `https://kambovent.co.ke`
- With www: `https://www.kambovent.co.ke`
- For testing: `http://localhost:3000`

Example:
```
ALLOWED_ORIGINS=http://localhost:3000,https://kambovent.co.ke,https://www.kambovent.co.ke
```

### 5.3 Test CORS

Open browser console on your cPanel site and run:

```javascript
fetch('https://construction-website-black.vercel.app/api/test', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(res => res.json())
.then(data => console.log('Success:', data))
.catch(err => console.error('Error:', err));
```

If you see CORS errors, check your `ALLOWED_ORIGINS` setting.

---

## Step 6: Monitor and Debug

### 6.1 View Function Logs

1. Go to Vercel Dashboard
2. Select your project
3. Go to **Functions** → **Logs**
4. You'll see real-time logs of API calls

### 6.2 Common Issues

**Issue**: CORS Error
- **Solution**: Add your domain to `ALLOWED_ORIGINS` and redeploy

**Issue**: 500 Internal Server Error
- **Solution**: Check function logs for detailed error messages
- Verify SMTP credentials are correct

**Issue**: Email not sending
- **Solution**: 
  - Check SMTP settings
  - Verify email credentials
  - Check spam folder
  - Test SMTP connection separately

---

## Step 7: Custom Domain (Optional)

### 7.1 Add Custom Domain to Vercel

If you want your API at `api.kambovent.co.ke`:

1. Go to Vercel Dashboard → Settings → Domains
2. Add `api.kambovent.co.ke`
3. Vercel will provide DNS records
4. Add these records in your cPanel DNS settings:
   - Type: `CNAME`
   - Name: `api`
   - Value: `cname.vercel-dns.com`

### 7.2 Update Frontend

Update `.env.production`:
```env
REACT_APP_API_BASE_URL=https://api.kambovent.co.ke
```

Rebuild and redeploy frontend.

---

## Security Checklist

- [ ] All sensitive credentials are in Vercel environment variables (not in code)
- [ ] `ALLOWED_ORIGINS` is set to specific domains (not `*`)
- [ ] HTTPS is enabled on both frontend and backend
- [ ] Email credentials are correct and secure
- [ ] Test endpoint is working
- [ ] Contact form sends emails successfully
- [ ] CORS is properly configured
- [ ] Function logs show no errors

---

## Maintenance

### Updating Backend Code

1. Make changes to `api/` files
2. Commit to Git
3. Push to GitHub (if using GitHub integration)
4. Vercel auto-deploys
5. Check function logs for any errors

### Updating Environment Variables

1. Go to Vercel Dashboard → Settings → Environment Variables
2. Update the variable
3. Redeploy the project

### Monitoring

- Check Vercel function logs regularly
- Monitor email delivery
- Set up Vercel notifications for deployment failures

---

## Troubleshooting Commands

### Test API locally before deploying:
```bash
vercel dev
```

### Check deployment status:
```bash
vercel ls
```

### View logs:
```bash
vercel logs
```

---

**Last Updated**: 2025-09-30

