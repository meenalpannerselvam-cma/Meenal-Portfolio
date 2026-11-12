# Meenal P - Portfolio Website

A single-page, fully responsive personal portfolio website for **Meenal P**, a CMA India aspirant (Foundation cleared) from Chennai specializing in Cost & Management Accounting, Financial Analysis, and Internal Audit.

Built with **React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion**, featuring interactive 3D-styled SVGs, accessible flip cards, an interactive Break-Even CVP Playground calculator with live graph, expandable career timeline, project modals, and a contact form.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js (v18.0.0 or higher, v24 LTS recommended)
- npm (v9.0.0 or higher)

### Setup & Launch
```bash
# 1. Clone or navigate to the project directory
cd meenal-portfolio

# 2. Install dependencies
npm install

# 3. Start local development server with Hot Module Replacement
npm run dev

# 4. Open in your browser
http://localhost:5173
```

### Production Build & Preview
```bash
# Typecheck and compile production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📝 How to Update Portfolio Content

All text, copy, links, metrics, and milestones are centralized in a single file:
👉 **`src/data/content.ts`**

### 1. Editing Profile & Personal Information
In `src/data/content.ts`, locate `PORTFOLIO_DATA.personal`:
- **Name & Title**: Update `name`, `heroTag`, `tagline`.
- **Email**: Update `email` (updates all buttons, mailto fallbacks, and copy-to-clipboard action).
- **LinkedIn Profile**: Replace `"https://www.linkedin.com/in/TODO-meenal"` with your public LinkedIn profile link.

### 2. Updating TODO Items
- **CVP Analysis Real Figures**: In `PORTFOLIO_DATA.projects.items[0]`, update `whatIFound` and remove or update `todoNote` with real figures from TANFAC Industries when cleared.
- **Non-Profit Audit Study**: In `PORTFOLIO_DATA.projects.items[1]`, add your specific audit conclusions under `whatIFound`.
- **Power BI Variance Dashboard**: Once completed, update `comingSoon: false` and link your live dashboard or interactive embed.
- **CMA Intermediate / Final Status**: In `PORTFOLIO_DATA.education.cmaTracker`, update the status from `'in_progress'` / `'upcoming'` to `'cleared'` and provide the passing year.

### 3. Replacing Resume and Profile Assets
- **Resume PDF**: Replace `public/resume.pdf` with your actual PDF document. Any clicks on "Download resume" or "Read my resume" automatically download this file.
- **Profile Photo**: To display a custom photo instead of the monogram initials badge, place your photo at `public/assets/photo.jpg` and reference it in `src/components/Hero.tsx` or `src/components/About.tsx`.

---

## 📬 Contact Form Configuration (`VITE_FORM_ENDPOINT`)

The contact form is configured to work out-of-the-box with **zero backend required**:
1. **With an endpoint**: It sends asynchronous JSON requests to your form handler (e.g. [Web3Forms](https://web3forms.com) or [Formspree](https://formspree.io)).
2. **Without an endpoint (Default)**: It smoothly opens a pre-filled email draft in the visitor's default email client via `mailto:meenalpannerselvam@gmail.com` with subject and message pre-populated.

### To Connect Web3Forms or Formspree:
1. Create a `.env` file in the project root:
   ```env
   VITE_FORM_ENDPOINT=https://api.web3forms.com/submit
   ```
   *(or your Formspree endpoint: `https://formspree.io/f/your_form_id`)*
2. In production (Vercel / Netlify), add `VITE_FORM_ENDPOINT` to your environment variables.

> [!NOTE]
> In strict accordance with privacy guidelines, no phone number is displayed anywhere on the website.

---

## ☁️ Deployment Guide

### Deploying to Vercel (Recommended)
1. Push this repository to GitHub or GitLab.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel will automatically detect **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Add the environment variable `VITE_FORM_ENDPOINT` if using Web3Forms or Formspree.
5. Click **Deploy**. Your portfolio is live with free global CDN and HTTPS!

### Deploying to Netlify
1. Sign in to [Netlify](https://netlify.com) and select **"Add new site" > "Import an existing project"**.
2. Select your repository:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Click **Deploy site**.

---

## 🎨 Design System & Accessibility

- **Palette**:
  - Background Warm Cream: `#F7F5F0`
  - Ink Navy: `#14213D`
  - Primary Accent Teal: `#0F766E`
  - Highlight Amber: `#F59E0B`
  - Highlight Coral: `#F26B4E`
  - Success Green: `#16A34A`
- **Typography**: Google Fonts *Space Grotesk* (Headings) and *Inter* (Body, minimum 16px).
- **Responsive Viewports**: Fully verified across 1440px desktop, 768px tablet, and 390px mobile viewports with zero horizontal scrolling.
- **Accessibility**: Full keyboard navigation support (flip cards support `Enter`/`Space`, modal supports `Escape` and focus trap), ARIA labels, semantic landmark elements, and automatic suppression of continuous floating physics under `prefers-reduced-motion`.
