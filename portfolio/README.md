# Kaveen Kumar G — Portfolio

React + Vite portfolio website. Structured for easy editing and deployment.

---

## Project Structure

```
portfolio/
├── public/
│   ├── photo.jpg          ← Your profile photo (add this!)
│   ├── resume.pdf         ← Your resume PDF (add this!)
│   └── README.md
├── src/
│   ├── data/
│   │   └── portfolio.js   ← ✏️  EDIT THIS to update all content
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css          ← 🎨 Edit CSS variables here (colors, fonts)
├── index.html
├── package.json
└── vite.config.js
```

---

## How to Run Locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173

---

## How to Update Content

**All portfolio content lives in one file: `src/data/portfolio.js`**

- Change your name, email, phone, LinkedIn, GitHub → edit `personal`
- Add/remove projects → edit the `projects` array
- Add skills → edit the `skills` array
- Update timeline/experience → edit `timeline`
- Update certifications → edit `certifications`

---

## How to Change Theme / Colors

Open `src/index.css` and edit the `:root` variables:

```css
:root {
  --bg: #07090f;          /* page background */
  --surface: #0e1219;     /* section background */
  --card: #131822;        /* card background */
  --accent: #00e5c0;      /* primary accent (teal) */
  --accent2: #7b6ef6;     /* secondary accent (purple) */
  --text: #e8ecf4;        /* main text */
  --muted: #8892a0;       /* secondary text */
  --border: #1e2535;      /* border color */
}
```

---

## Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repository
2. Go to https://vercel.com → New Project → Import your repo
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click Deploy ✅

---

## Deploy to Netlify

1. Run `npm run build` → uploads the `dist/` folder
2. Go to https://netlify.com → Drag & drop the `dist/` folder
3. Or connect your GitHub repo for auto-deploys

---

## Add Your Profile Photo

Place your photo as `public/photo.jpg`. It will appear in the hero section.
The image is cropped to a circle, so a square headshot works best.

## Add Your Resume

Place your resume as `public/resume.pdf`. The "Download CV" button will serve this file.
