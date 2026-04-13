# 🚀 Md Mahbubur Rahman — Portfolio

A modern, responsive developer portfolio built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. Showcasing professional experience, skills, projects, and education in a clean, performant single-page design with dedicated project detail pages.

---

## ✨ Features

- **Responsive Design** — Fully optimized for desktop, tablet, and mobile devices
- **Server-Side Rendering** — Leveraging Next.js App Router for fast page loads and SEO
- **Dynamic Project Pages** — Individual detail pages for each project with static param generation
- **Accessible UI** — Built with Radix UI primitives for screen reader and keyboard accessibility
- **Component Architecture** — Modular, reusable components with a shared design system
- **Analytics Integration** — Vercel Analytics for production traffic insights
- **SEO Optimized** — Open Graph, Twitter Card, and structured metadata on all pages

---

## 🛠️ Tech Stack

| Layer        | Technology                               |
| ------------ | ---------------------------------------- |
| Framework    | Next.js 16 (App Router, Turbopack)       |
| UI Library   | React 19                                 |
| Language     | TypeScript 5.7                           |
| Styling      | Tailwind CSS 4                           |
| UI Primitives| Radix UI + shadcn/ui                     |
| Icons        | Lucide React                             |
| Analytics    | Vercel Analytics                         |
| Package Mgr  | pnpm                                     |

---

## 📂 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with metadata & fonts
│   ├── page.tsx            # Home page (all sections)
│   ├── globals.css         # Global styles & CSS variables
│   └── projects/
│       ├── page.tsx        # All projects listing page
│       └── [id]/
│           └── page.tsx    # Dynamic project detail page
│
├── components/             # Feature components
│   ├── hero.tsx            # Hero/landing section
│   ├── about.tsx           # About me section
│   ├── skills.tsx          # Technical skills section
│   ├── experience.tsx      # Work experience section
│   ├── education.tsx       # Education section
│   ├── projects.tsx        # Featured projects grid
│   ├── project-detail.tsx  # Individual project detail view
│   ├── contact.tsx         # Contact form & info
│   ├── navbar.tsx          # Sticky navigation bar
│   ├── footer.tsx          # Site footer
│   └── ui/                 # shadcn/ui base components
│
├── data/
│   └── portfolio.ts        # All portfolio content (single source of truth)
│
├── public/                 # Static assets (images, icons)
├── lib/                    # Utility functions
├── hooks/                  # Custom React hooks
└── styles/                 # Additional stylesheets
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** (install with `npm install -g pnpm`)

### Installation

```bash
# Clone the repository
git clone https://github.com/wdmahbubur/my-portfolio.git
cd my-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at **http://localhost:3000**.

### Build for Production

```bash
pnpm build
pnpm start
```

---

## 📝 Content Management

All portfolio content is managed from a **single data file**:

```
data/portfolio.ts
```

Update your personal info, skills, experience, education, and projects by editing this file. The entire site re-renders from this source of truth — no CMS or database required.

---

## 🚀 Deployment

This project is optimized for deployment on **Vercel**:

1. Push your code to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Deploy — Vercel auto-detects Next.js and handles everything

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Md Mahbubur Rahman**
Senior Software Developer | AI & Automation

- GitHub: [@wdmahbubur](https://github.com/wdmahbubur)
- LinkedIn: [mrrohanc](https://linkedin.com/in/mrrohanc)
- Email: mahbubur.rahman0407@gmail.com
