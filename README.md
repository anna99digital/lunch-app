# 99 דיגיטל · הזמנת אוכל (Lunch Order App)

A small Next.js app where employees pick their daily lunch. Each order is sent
to a webhook (POST) on submit and on any change.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy to Vercel

### Option A — via GitHub (recommended)
1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com → **Add New… → Project**.
3. Import the repository. Vercel auto-detects Next.js — no settings needed.
4. Click **Deploy**. You'll get a live URL in ~1 minute.

### Option B — via the Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the prompts (accept the defaults). Run `vercel --prod` to promote to production.

## Configuration

The webhook URL lives near the top of `app/page.jsx`:

```js
const WEBHOOK_URL = "https://builder5.99digital.co.il/5035/webhook/...";
```

Edit the employee list (`EMPLOYEES`) and the weekly menu (`MENU`) in the same file.

## Notes
- The form is locked to the current weekday's menu automatically.
- On Friday/Saturday it falls back to Sunday's menu.
- If orders don't arrive, check the browser console for a CORS error — that's
  fixed on the webhook/server side (allow your Vercel domain), not in the app.
