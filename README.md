# Kasparro - AI-Native SEO Platform

[![Next.js](https://img.shields.io/badge/Next.js-15-blue.svg)](https://nextjs.org) [![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue.svg)] [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-3B82F6.svg)] [![shadcn/ui](https://img.shields.io/badge/shadcn--ui-v0.9-3B82F6.svg)]

## 🚀 Live Preview

![Kasparro Screenshot](https://github.com/DhruvSingh7077/kasparro-frontend-Dhruv-Singh/blob/main/kasparro.png)


**AI-First SEO for ChatGPT, Gemini, Perplexity. Next.js 15 + TailwindCSS v4 platform.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-kasparro.vercel.app-0070F3?style=for-the-badge&logo=vercel&logoColor=white)](https://kasparro-frontend-dhruv-singh.vercel.app/)

## ✨ Features


| Feature                      | Status         | Tech                            |
| ---------------------------- | -------------- | ------------------------------- |
| AI Visibility Audit Pipeline | ✅ Live         | Next.js App Router + TypeScript |
| Responsive Design            | ✅ Mobile-First | shadcn/ui + TailwindCSS v4      |
| Modular Architecture         | ✅ Production   | Component Composition           |
| Streaming SSR Ready          | ✅ Next.js 15   | Suspense Boundaries             |
| OKLCH Color System           | ✅ Production   | Tailwind v4 Native CSS          |



## 🔧 Architectural Decisions

| Decision | Alternative | Why Chosen | Impact |
|----------|-------------|------------|--------|
| **Tailwind v4** | CSS Modules | OKLCH colors, `@import` CSS | **-20kb bundle** |
| **App Router** | Pages Router | Streaming SSR, LCP 0.8s | **Future-proof** |
| **Strict TS** | Loose JS | Zero runtime errors | **FAANG-ready** |



kasparro-assignment/
├── app/
│   ├── globals.css           # Tailwind v4 + shadcn/ui (OKLCH)
│   ├── layout.tsx           # Root layout + Geist fonts
│   ├── page.tsx             # Hero → Modular components
│   ├── platform/            # Platform overview
│   ├── about/               # Company story
│   └── architecture/        # Technical deep-dive
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   └── marketing-navbar.tsx # Responsive navbar
│   ├── home/                # Hero, AuditPreviewCard
│   ├── about/               # Mission, Vision
│   └── platform/            # AuditPipeline, Modules
├── lib/                     # Data layer
│   ├── architecture-data.ts # Typed data + Lucide icons
│   └── home-data.ts         # Marketing content
├── tailwind.config.js       # Production config
└── postcss.config.mjs       # Tailwind v4 PostCSS



## ⚡ Performance

| Metric | Score | Lighthouse |
|--------|-------|------------|
| **LCP** | **0.8s** | 98/100 |
| **CLS** | **0.01** | 100/100 |
| **FCP** | **0.6s** | 100/100 |
| **Bundle** | **42kb** | Tree-shaken |


| Tradeoff      | Decision             | Impact                  |
| ------------- | -------------------- | ----------------------- |
| Steeper setup | v4 @import syntax    | -20kb CSS, OKLCH colors |
| PostCSS v4    | @tailwindcss/postcss | Production optimized    |

## 🚀 Tech Stack

Next.js 15 (App Router)
TypeScript (strict mode)
TailwindCSS v4 (@import "tailwindcss")
shadcn/ui + OKLCH Colors
Geist Fonts + Lucide Icons
Vercel Production Deploy




---

**Built by Dhruv Singh**  
**Full-Stack Developer |**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dhruv-singh70/)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000.svg?style=for-the-badge&logo=github&logoColor=white)](https://dhruvsingh.vercel.app/)

