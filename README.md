# IAMILKAY® Corporate Website

Production-ready Next.js corporate website for IAMILKAY®.

## Stack

- Next.js App Router
- Tailwind CSS
- Framer Motion
- Nodemailer contact API
- Vercel-ready project structure

## Local Development

```bash
npm install
npm run dev
```

## Environment

Copy `.env.example` to `.env.local` and configure SMTP variables.

All contact submissions are sent to `MAIL_TO`, defaulting to `connect@ilkaybatur.com`.
If SMTP is not configured yet, the frontend opens a prepared email to `connect@ilkaybatur.com` as a fallback.

## Pages

- `/`
- `/about`
- `/software`
- `/mobile-applications`
- `/marketing`
- `/global-operations`
- `/technologies`
- `/contact`
