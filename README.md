# Reflexion Landing Page

Welcome to the **Reflexion Landing Page** repository. This site serves as the public-facing introduction to the Reflexion platform — an AI-powered emotional insight tool designed for self-guided reflection and long-term mental resilience.

---

## Live Demo

**Website**: [https://reflexionai.dev](https://reflexionai.dev)

---

## Project Role

* **Developer**: Shou-Tzu Han
* **Role**: Full-stack developer, UX/UI designer
* **Tools**: Next.js 15 (App Router), Tailwind CSS, Firebase (Auth + Firestore), Vercel, GitHub

---

## Features

* **Responsive Design**: Fully mobile-friendly and optimized across screen sizes.
* **Google Sign-In**: Firebase Authentication for easy onboarding of prototype users.
* **User Data Capture**: Emails and profile info saved to Firestore.
* **Call-to-Actions**: Clear entry points for trying the demo and signing up.
* **Thematic Sections**: Includes About, Features, Technical Status, FAQ, and Contact.

---

## Technical Stack

* **Frontend**: Next.js (App Router), React, Tailwind CSS
* **Backend**: Firebase Authentication, Firestore
* **Deployment**: Vercel (custom domain configured)

---

## Local Development

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/reflexion-landing-page.git
cd reflexion-landing-page

# Install dependencies
npm install

# Start dev server
npm run dev
```

> You will need to create a `.env.local` file with your Firebase credentials:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

---

## Project Status

This landing page is live and integrated with a working Google Sign-In flow. It is intended to support user acquisition for the Reflexion prototype.

---

## Future Improvements

* Add email confirmation
* User dashboard (after login)
* CMS integration for dynamic content (e.g. blog posts or updates)

---

## License

MIT License
