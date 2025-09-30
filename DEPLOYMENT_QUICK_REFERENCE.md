# Deployment Quick Reference

## 🎯 Architecture

```
┌─────────────────────┐         ┌─────────────────────┐
│   cPanel Hosting    │         │   Vercel Hosting    │
│                     │         │                     │
│  React Frontend     │────────▶│   Backend API       │
│  (Static Files)     │  HTTPS  │   (Serverless)      │
│                     │         │                     │
│  kambovent.co.ke    │         │  vercel.app/api     │
└─────────────────────┘         └─────────────────────┘
```

---

## 🚀 Quick Deploy Steps

### Backend (Vercel)

1. **Set environment variables** on Vercel dashboard
2. **Deploy** via GitHub or Vercel CLI
3. **Test** endpoint: `https://your-project.vercel.app/api/test`

### Frontend (cPanel)

1. **Update** `.env.production` with Vercel API URL
2. **Build**: `npm run build` (or run `build-for-cpanel.bat`)
3. **Upload** `build/` contents to cPanel `public_html`
4. **Add** `.htaccess` file for React Router

---

## 📝 Environment Variables

### Vercel (Backend) - Set in Vercel Dashboard

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

### Local Development (.env)

```
# Comment out for local API testing
# REACT_APP_API_BASE_URL=https://construction-website-black.vercel.app

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
ALLOWED_ORIGINS=http://localhost:3000,https://kambovent.co.ke
```

### Production (.env.production)

```
REACT_APP_API_BASE_URL=https://construction-website-black.vercel.app
```

---

## 🔧 Common Commands

### Local Development
```bash
npm start                    # Start dev server
npm run build               # Build for production
```

### Vercel Deployment
```bash
vercel                      # Deploy to preview
vercel --prod              # Deploy to production
vercel logs                # View logs
vercel env ls              # List environment variables
```

### Build for cPanel (Windows)
```bash
build-for-cpanel.bat       # Automated build script
```

---

## ✅ Testing Checklist

### Backend (Vercel)
- [ ] Test endpoint works: `/api/test`
- [ ] Contact endpoint works: `/api/contact`
- [ ] Environment variables are set
- [ ] CORS is configured correctly
- [ ] Emails are being sent

### Frontend (cPanel)
- [ ] Site loads correctly
- [ ] All pages accessible (Home, About, Products, Contact, Careers)
- [ ] Images load properly
- [ ] Contact form submits successfully
- [ ] No console errors
- [ ] React Router works (no 404 on refresh)

---

## 🐛 Troubleshooting

### CORS Error
**Problem**: "Access to fetch has been blocked by CORS policy"

**Solution**:
1. Add your domain to `ALLOWED_ORIGINS` on Vercel
2. Redeploy Vercel backend
3. Clear browser cache

### API Not Found (404)
**Problem**: "API endpoint not found"

**Solution**:
1. Verify Vercel deployment is successful
2. Test API directly: `https://your-project.vercel.app/api/test`
3. Check `.env.production` has correct URL
4. Rebuild frontend: `npm run build`

### Environment Variables Not Working
**Problem**: API calls going to wrong URL

**Solution**:
1. Environment variables are embedded at **build time**
2. After changing `.env.production`, run `npm run build`
3. Re-upload to cPanel

### React Router 404 on Refresh
**Problem**: Page not found when refreshing

**Solution**:
1. Add `.htaccess` to `public_html`
2. Verify mod_rewrite is enabled
3. Contact hosting provider if needed

### Email Not Sending
**Problem**: Form submits but no email received

**Solution**:
1. Check Vercel function logs
2. Verify SMTP credentials
3. Check spam folder
4. Test SMTP connection separately

---

## 📁 File Locations

### Development
```
construction-website/
├── .env                    # Local development (not committed)
├── .env.production         # Production build settings
├── .env.example           # Template for .env
├── api/                   # Backend API (deployed to Vercel)
├── src/                   # React source code
├── public/                # Static assets
│   └── .htaccess         # React Router config for cPanel
└── build/                # Production build (upload to cPanel)
```

### cPanel (public_html)
```
public_html/
├── index.html
├── .htaccess              # React Router configuration
├── static/
│   ├── css/
│   ├── js/
│   └── media/
└── images/
```

---

## 🔐 Security Notes

### ✅ Safe to Expose (Frontend)
- `REACT_APP_API_BASE_URL` - Public API endpoint

### ❌ Never Expose (Backend Only)
- SMTP credentials
- Email passwords
- API keys
- Database credentials

**Remember**: Anything in `REACT_APP_*` is visible in the browser!

---

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **React Docs**: https://react.dev
- **cPanel Docs**: https://docs.cpanel.net

---

## 🔄 Update Workflow

### Frontend Changes
1. Edit React code
2. Test locally: `npm start`
3. Build: `npm run build`
4. Upload to cPanel
5. Clear browser cache

### Backend Changes
1. Edit `api/` files
2. Test locally: `vercel dev`
3. Deploy: `vercel --prod`
4. Check function logs

### Environment Variable Changes
1. Update on Vercel dashboard
2. Redeploy Vercel backend
3. If frontend needs update, rebuild and re-upload

---

**Quick Links**:
- 📖 [Full cPanel Guide](./CPANEL_DEPLOYMENT_GUIDE.md)
- 🚀 [Vercel Backend Setup](./VERCEL_BACKEND_SETUP.md)
- 🔧 [Build Script](./build-for-cpanel.bat)

---

**Last Updated**: 2025-09-30

