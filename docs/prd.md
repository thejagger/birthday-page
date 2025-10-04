# Deun One-Pager PRD (Draft v1.3)

## 1. Project Overview
**Name:** Deun  
**Core Message:** *“Simply Split Fairly.”*  
**Goal:** Provide a clean, modern one-pager that introduces the app, showcases its value, includes screenshots, and directs users to install it on iOS/Android.  

---

## 2. Target Audience
- People who share expenses (friends, couples, roommates, travel groups).  
- Users seeking a **simple, fair, cross-platform expense tracker**.  
- Visitors coming from search, word of mouth, or app store listing.  

---

## 3. Page Structure
1. **Hero Section**  
   - App name + tagline ("Simply Split Fairly.")  
   - Brief description (2–3 sentences).  
   - Call-to-action buttons:  
     - "Download on the App Store"  
     - "Get it on Google Play"  

2. **Features Section**  
   - 3–4 key value points (e.g. "Fair Splitting," "Group Friendly," "Simple UI").  
   - Icons or small graphics for each point.  

3. **Screenshots Section**  
   - Screenshot carousel or grid (placeholders until you add real ones).  

4. **Theme Switcher**  
   - **Light/Dark Mode toggle** in header.  
   - Smooth transition between modes.  
   - Default mode: System preference.  

5. **Contact Section**  
   - Short description: "Have feedback or questions? Reach out to us!"  
   - Contact form: Name, Email, Message → send to your email.  

6. **Footer**  
   - Copyright © 2025 Deun.  
   - Privacy policy link (optional, if required by stores).  

---

## 4. Technical Requirements
- **Framework:** React **19.x**  
- **Styling:** Tailwind CSS **v4.x**  
- **UI Library:** [shadcn/ui](https://ui.shadcn.com) (React 19 + Tailwind v4 compatible)  
- **Icons:** lucide-react  
- **Dark/Light Theme:** Implemented using shadcn's theme management and Tailwind `dark:` classes.  
- **Deployment:**  
  - GitHub Pages (via GitHub Actions).  
  - OR build + deploy to Jakob’s webserver (React static bundle via Docker + Nginx).  
- **Assets:** Placeholder images for screenshots.  
- **Responsive:** Must look good on desktop + mobile.  

---

## 5. Success Criteria
✅ Users immediately understand the app’s purpose.  
✅ Clear CTAs to download the app.  
✅ Mobile-first responsive design.  
✅ Contact form works with your email setup.  
✅ **Seamless Light/Dark theme switcher via shadcn/ui**.  
✅ Fast load time (optimized assets, static hosting).  
✅ Uses **React 19 + Tailwind v4** for long-term compatibility.  

---

_Last updated: 04.10.2025_
