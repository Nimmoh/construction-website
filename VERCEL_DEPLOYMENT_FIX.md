# Fix Contact Form on Vercel - Step by Step

## The Problem
Your contact form is failing because it's trying to call the wrong API endpoint on Vercel.

## The Solution

### Step 1: Update Vercel Environment Variables

Go to your Vercel dashboard → Your Project → Settings → Environment Variables

**REMOVE or COMMENT OUT:**
- `REACT_APP_API_BASE_URL` (This should NOT be set in Vercel)

**ADD these environment variables:**
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
EMAIL_FROM_NAME=Kambove Enterprises
ALLOWED_ORIGINS=http://localhost:3000,https://construction-website-black.vercel.app
```

### Step 2: Redeploy

After updating the environment variables, redeploy your site:
1. Go to Vercel dashboard → Deployments
2. Click "Redeploy" on the latest deployment
3. Wait for deployment to complete

### Step 3: Test

1. Go to your deployed site: https://construction-website-black.vercel.app/contact
2. Fill out the contact form
3. Submit it
4. Check browser console for any errors

## How It Works

- **Local Development**: Uses `REACT_APP_API_BASE_URL=http://localhost:5000` to call your Express server
- **Vercel Production**: Uses `/api/contact` (serverless function) when `REACT_APP_API_BASE_URL` is not set

## Troubleshooting

If it still doesn't work:

1. **Check Vercel Function Logs:**
   - Go to Vercel dashboard → Functions → View Function Logs
   - Look for errors in the `/api/contact` function

2. **Check Browser Network Tab:**
   - Should see a request to `/api/contact` (not to localhost:5000)
   - Check the response for error details

3. **Verify Environment Variables:**
   - Make sure all email settings are correctly set in Vercel
   - Double-check SMTP credentials

## Expected Behavior

✅ **Local**: Form calls `http://localhost:5000/api/contact` (Express server)
✅ **Vercel**: Form calls `/api/contact` (Serverless function)
