# 🏗️ Deun One-Pager — Architecture Overview (v1.3)

## Purpose

Document how the Deun one-pager is structured, which technologies it uses, and how components interact.

---

## 1. Technology Stack

- **Framework:** React **19.x**
- **Styling:** Tailwind CSS **v4.x**
- **UI Library:** [shadcn/ui](https://ui.shadcn.com) (compatible with React 19 and Tailwind v4)
- **Icons:** lucide-react (default in recent shadcn versions)
- **Deployment Targets:**
  - GitHub Pages _(default for simplicity)_
  - Custom webserver _(Docker + Nginx via Portainer)_

> ⚠️ _Note:_ shadcn’s components have been updated for React 19 and Tailwind v4. Previous versions (React 18 / Tailwind v3) are still supported but new projects should use v4 + React 19.

---

## 2. Project Structure

```
deun-landing/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components (copied into your project)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   └── switch.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Screenshots.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── index.css             # Tailwind base styles
│   └── main.tsx              # App entry point
├── tailwind.config.js        # Tailwind + shadcn theme setup
├── postcss.config.js
├── package.json
└── README.md
```

---

## 3. Theme & Styling

- Theme is toggled via `class="dark"` on `<html>` or `<body>`.
- Components use Tailwind’s `dark:` variants and theming support from shadcn/ui.
- Color palettes and custom theming done via `tailwind.config.js`.
- Persist user’s theme choice (e.g., store in `localStorage`).

---

## 4. Components

| Component     | Purpose                                              |
| ------------- | ---------------------------------------------------- |
| `Hero`        | Displays app name, tagline, and download buttons     |
| `Features`    | Lists core features in responsive cards              |
| `Screenshots` | Grid or carousel showing app previews (placeholders) |
| `Contact`     | Form collecting name, email, message                 |
| `Footer`      | Simple footer with copyright / links                 |

---

## 5. Contact Form Flow

- Fields: Name, Email, Message
- Backend options:
  - Supabase Edge Function + `denomailer`
  - Formspree / SendGrid / other email API
- Client-side validation (React, shadcn form utilities)

---

## 6. Build & Deployment

### Development

```bash
npm install
npm run dev
```

### Production Build

```bash
npm run build
```

### GitHub Pages Deployment

- Set `"homepage"` in `package.json` to `https://<username>.github.io/deun`
- Use GitHub Actions or `gh-pages` to deploy the build output

### Webserver Deployment (Docker + Nginx)

- Build the project
- Serve via Nginx container, mounting `build` to `/usr/share/nginx/html`

---

## 7. Dependency / Version Notes

- `react` and `react-dom` should both be **19.x**.
- `tailwindcss` should be **v4.x**.
- `shadcn/ui` should be the latest version compatible with Tailwind v4.
- Use the **latest shadcn CLI** (or `canary` build) to bootstrap Tailwind v4 support.
- Other recommended dependencies:
  - `lucide-react` (for icons)
  - `clsx` (for class management)
  - `tailwind-variants` (for advanced theming)

---

_Last updated: 04.10.2025_
