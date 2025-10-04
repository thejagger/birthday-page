# 🌐 Deun One-Pager

**Tagline:** *Simply Split Fairly.*  
A modern one-pager for Deun — an expense-sharing app that makes splitting costs simple and fair.

---

## 🚀 Overview

This project is a responsive landing page built with **React 19**, **TailwindCSS v4**, and **[shadcn/ui](https://ui.shadcn.com)**.  
It introduces the Deun app, features, screenshots, and provides download links for iOS and Android.

**Features include:**
- Hero section with app tagline and download buttons  
- Features grid with 3 highlight cards  
- Screenshot placeholders for app previews  
- Contact form with name, email, and message fields  
- Footer with copyright and optional privacy link  
- Built-in **Light/Dark mode toggle**  

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React **19.x** |
| Styling | Tailwind CSS **v4.x** |
| UI Components | shadcn/ui *(React 19 + Tailwind v4 compatible)* |
| Icons | lucide-react |
| Deployment | GitHub Pages or custom webserver (Docker + Nginx via Portainer) |

---

## 🧩 Project Structure
```
deun-landing/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── ui/               # shadcn/ui components
│   ├── sections/             # Page sections (Hero, Features, Screenshots, Contact, Footer)
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 💡 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/deun-landing.git
cd deun-landing
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌗 Theme Switching

The site supports **Light** and **Dark** mode using Tailwind’s `dark:` class and a toggle switch.  
Theme preference is saved in the browser using `localStorage`.

---

## 📩 Contact Form

The contact form includes fields for name, email, and message.  
You can connect it to your preferred backend service (e.g., **Supabase Edge Function** with `denomailer`, **Formspree**, or **SendGrid**).

---

## 🚀 Deployment

### Option 1 — GitHub Pages
1. Add the homepage URL in your `package.json`:
   ```json
   "homepage": "https://<your-username>.github.io/deun"
   ```
2. Add the GitHub Actions workflow or deploy manually using `gh-pages`:
   ```bash
   npm run build
   npm install gh-pages --save-dev
   npx gh-pages -d build
   ```

### Option 2 — Your Webserver (Docker + Nginx)
1. Build the project:
   ```bash
   npm run build
   ```
2. Use an Nginx container to serve the static files:
   ```bash
   docker run -d -p 80:80 -v $(pwd)/build:/usr/share/nginx/html nginx
   ```
3. Deploy through **Portainer** for easy management.

---

## 🧱 Contributing

Feel free to fork and adapt this project.  
All source code is available under the **MIT License**.

---

## 📜 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

© 2025 Deun. All rights reserved.  
_Last updated: 04.10.2025_
