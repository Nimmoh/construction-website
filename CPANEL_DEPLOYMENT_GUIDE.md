# cPanel Deployment Guide

## Architecture Overview

- **Frontend (React App)**: Hosted on cPanel
- **Backend (API)**: Hosted on Vercel
- **Communication**: Frontend makes API calls to Vercel backend

---

## Step 1: Configure Vercel Backend

### 1.1 Set Environment Variables on Vercel

Go to your Vercel project dashboard and add these environment variables:

```
SMTP_HOST=mail.kambovent.co.ke
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@kambovent.co.ke
SMTP_PASS=Kambove@2025
COMPANY_EMAIL=info@kambovent.co.ke
COMPANY_NAME=Kambove Enterprises
COMPANY_PHONE=+254714312234
SEND_CONFIRMATION_EMAIL=true
EMAIL_FROM_NAME=Kambove Enterprises
ALLOWED_ORIGINS=http://localhost:3000,https://kambovent.co.ke,https://www.kambovent.co.ke
```

**Important**: Update `ALLOWED_ORIGINS` to include your actual cPanel domain!

### 1.2 Deploy Backend to Vercel

Your backend API should be accessible at:
```
https://construction-website-black.vercel.app/api/contact
```

Test it by visiting:
```
https://construction-website-black.vercel.app/api/test
```

---

## Step 2: Build Frontend for cPanel

### 2.1 Update `.env.production` file

Make sure `.env.production` has the correct Vercel backend URL:

```env
REACT_APP_API_BASE_URL=https://construction-website-black.vercel.app
```

### 2.2 Build the React App

Run this command in your local development environment:

```bash
npm run build
```

This creates a `build/` folder with optimized production files.

**Important**: The environment variables from `.env.production` are **embedded into the build** at this stage. They become part of the JavaScript bundle.

---

## Step 3: Upload to cPanel

### 3.1 Access cPanel File Manager

1. Log into your cPanel account
2. Go to **File Manager**
3. Navigate to `public_html` (or your domain's root directory)

### 3.2 Upload Build Files

**Option A: Upload via File Manager**
1. Compress your `build/` folder contents into a ZIP file
2. Upload the ZIP to cPanel
3. Extract it in the `public_html` directory

**Option B: Upload via FTP**
1. Use an FTP client (FileZilla, etc.)
2. Upload all files from the `build/` folder to `public_html`

### 3.3 File Structure on cPanel

Your `public_html` should look like this:
```
public_html/
├── index.html
├── static/
│   ├── css/
│   ├── js/
│   └── media/
├── images/
├── api/  (if you have any static API docs)
└── .htaccess
```

---

## Step 4: Configure .htaccess for React Router

Create or update `.htaccess` in `public_html`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Rewrite everything else to index.html
  RewriteRule ^ index.html [L]
</IfModule>

# Enable CORS for API calls
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## Step 5: Test Your Deployment

### 5.1 Test Frontend
Visit your cPanel domain:
```
https://kambovent.co.ke
```

### 5.2 Test Contact Form
1. Navigate to the Contact page
2. Fill out the form
3. Submit it
4. Check if the email is received

### 5.3 Check Browser Console
Open Developer Tools (F12) and check for:
- ✅ No CORS errors
- ✅ API calls going to Vercel backend
- ✅ Successful responses (200 status)

---

## Troubleshooting

### Issue 1: CORS Errors

**Error**: "Access to fetch at 'https://...' from origin 'https://kambovent.co.ke' has been blocked by CORS policy"

**Solution**: 
1. Go to Vercel dashboard
2. Update `ALLOWED_ORIGINS` environment variable to include your cPanel domain
3. Redeploy the Vercel backend

### Issue 2: API Endpoint Not Found (404)

**Error**: "API endpoint not found"

**Solution**:
1. Verify your Vercel backend is deployed correctly
2. Test the API directly: `https://construction-website-black.vercel.app/api/contact`
3. Check that `REACT_APP_API_BASE_URL` in `.env.production` is correct
4. Rebuild your React app: `npm run build`

### Issue 3: Environment Variables Not Working

**Error**: API calls going to wrong URL or undefined

**Solution**:
1. Environment variables are embedded at **build time**, not runtime
2. After changing `.env.production`, you MUST rebuild: `npm run build`
3. Re-upload the new build to cPanel

### Issue 4: React Router Not Working (404 on Refresh)

**Error**: Page not found when refreshing on routes like `/about` or `/contact`

**Solution**:
1. Make sure `.htaccess` is in `public_html`
2. Verify mod_rewrite is enabled on your cPanel hosting
3. Contact your hosting provider if needed

---

## Security Best Practices

### ✅ DO:
- Keep sensitive credentials (SMTP passwords) ONLY on Vercel backend
- Use HTTPS for both frontend and backend
- Validate and sanitize all form inputs on the backend
- Set proper CORS origins (don't use `*` in production)

### ❌ DON'T:
- Don't put sensitive data in `REACT_APP_*` variables (they're visible in browser)
- Don't commit `.env` files to Git (use `.env.example` instead)
- Don't expose API keys or passwords in frontend code

---

## Updating Your Site

### For Frontend Changes:
1. Make changes to your React code
2. Run `npm run build`
3. Upload new `build/` contents to cPanel
4. Clear browser cache

### For Backend Changes:
1. Make changes to `api/` folder
2. Commit and push to Git
3. Vercel auto-deploys (or manually deploy)
4. No need to rebuild frontend unless API contract changes

### For Environment Variable Changes:
1. Update variables on Vercel dashboard
2. Redeploy Vercel backend
3. If frontend needs new variables, update `.env.production`, rebuild, and re-upload

---

## Quick Deployment Checklist

- [ ] Backend deployed to Vercel with all environment variables
- [ ] `ALLOWED_ORIGINS` includes your cPanel domain
- [ ] `.env.production` has correct `REACT_APP_API_BASE_URL`
- [ ] Run `npm run build` locally
- [ ] Upload `build/` contents to cPanel `public_html`
- [ ] `.htaccess` configured for React Router
- [ ] Test contact form submission
- [ ] Check browser console for errors
- [ ] Verify emails are being received

---

## Support

If you encounter issues:
1. Check browser console (F12 → Console)
2. Check Vercel function logs (Vercel Dashboard → Functions → Logs)
3. Test API endpoint directly in browser or Postman
4. Verify CORS settings on Vercel

---

**Last Updated**: 2025-09-30

