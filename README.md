# Construction Website (React + Tailwind)

## What's included
- React app source (src/)
- Tailwind config
- Basic pages: Home, About, Products, Contact, Careers
- Components: Navbar, Footer, Gallery, Booking, ContactForm
- Forms wired to EmailJS (you must configure your EmailJS user id & template)

## Quick start
1. Ensure Node.js and npm are installed.
2. Create the project and install dependencies:
   ```
   npm install
   ```
3. Initialize Tailwind (if you prefer to regenerate config) or use included config.
4. Start the dev server:
   ```
   npm start
   ```
5. Replace placeholders (company name, contact email, images) in `src/` as needed.

## Notes
- Email sending uses `emailjs-com`. Sign up at https://www.emailjs.com/, get your user ID and create an email template.
- Gallery uses a simple CSS lightbox; you can swap for a library if preferred.
- Booking form currently stores submissions by sending an email via EmailJS. For production, consider a backend and calendar integration.
