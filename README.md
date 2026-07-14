# Digital Growth Studio

A complete, responsive Next.js company and portfolio website for a digital growth and technology partner serving small businesses.

## Stack
- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Motion for React
- Lucide React
- React Hook Form + Zod

## Prerequisites
Install Node.js 20.9 or newer. On Windows PowerShell, use `npm.cmd` if the execution policy blocks `npm.ps1`.

## Install and run
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Verify production
```bash
npm run typecheck
npm run build
npm run start
```

## Environment variables
Copy `.env.example` to `.env.local`.

- `NEXT_PUBLIC_SITE_URL`: production domain
- `RESEND_API_KEY`: optional Resend key
- `CONTACT_TO_EMAIL`: form destination
- `NEXT_PUBLIC_CALENDLY_URL`: booking link

Without Resend credentials, development form submissions are validated and logged by the server route.

## Contact form and Resend
1. Create a Resend account and verified sending domain.
2. Add `RESEND_API_KEY` and `CONTACT_TO_EMAIL` to `.env.local` and Vercel.
3. Replace `onboarding@resend.dev` in `app/api/contact/route.ts` with a verified sender before production.
4. Add Cloudflare Turnstile or another approved spam-protection service.

## Customize content
- Company/service/industry/case-study data: `data/site.ts`
- Homepage: `app/page.tsx`
- Navigation: `components/header.tsx`
- Footer/contact placeholders: `components/footer.tsx`
- Brand tokens and layout styles: `app/globals.css`

## Replace logo and images
Place assets in `public/` and render them with Next.js `Image`. Update alt text meaningfully. The current hero uses lightweight CSS artwork to avoid external dependencies.

## Deployment to Vercel
1. Push the folder to GitHub.
2. Import the repository in Vercel.
3. Add environment variables.
4. Deploy.
5. Add a custom domain under Project Settings → Domains and follow the DNS instructions.

## Accessibility
- Semantic landmarks and heading hierarchy
- Skip link
- Keyboard-friendly controls
- Visible focus treatments
- Reduced-motion support
- Form errors announced near their fields

Run a final manual keyboard, screen-reader, color-contrast, and mobile review before launch.

## Legal note
The Privacy Policy and Terms are placeholders and must be reviewed by a qualified legal professional before commercial use.

## Future enhancements
The structure can support authentication, client portal pages, project tracking, invoices, support tickets, dashboards, an AI assistant, a cost estimator, a package quiz, and SaaS tools.

## Troubleshooting
### PowerShell blocks npm
Use:
```powershell
npm.cmd install
npm.cmd run dev
```
Or run Command Prompt instead of PowerShell.

### Port 3000 is busy
```bash
npm run dev -- -p 3001
```

### Build errors
Delete `.next`, reinstall dependencies, and rerun typecheck/build:
```bash
rm -rf .next node_modules
npm install
npm run typecheck
npm run build
```
On Windows, delete those folders from File Explorer or use the equivalent Command Prompt commands.
