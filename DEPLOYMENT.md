# Vercel Deployment

This project is ready for Vercel as a Vite site with a serverless contact form.

## Build Settings

Vercel should auto-detect Vite, but these settings are also in `vercel.json`:

- Build command: `npm run build`
- Output directory: `dist`

## Contact Form Email

The contact form posts to `/api/contact`, which sends email through Resend.

Add these environment variables in Vercel:

```env
RESEND_API_KEY=re_your_resend_api_key
CONTACT_TO_EMAIL=admin@mbanjwassociates.co.za
CONTACT_FROM_EMAIL=Mbanjwa & Associates <website@mbanjwassociates.co.za>
```

Important: `CONTACT_FROM_EMAIL` must use a sender/domain verified in Resend. For quick testing, Resend allows `Mbanjwa & Associates <onboarding@resend.dev>`, but production should use the firm's verified domain.

## Deploy Steps

1. Push the project to GitHub.
2. In Vercel, import the GitHub repository.
3. Set the framework preset to Vite if it is not auto-detected.
4. Add the environment variables above in Project Settings > Environment Variables.
5. Deploy.

After deployment, test the contact form from the live Vercel URL.
