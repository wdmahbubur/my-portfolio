import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Mahbubur Rahman - Senior Software Developer | AI & Automation',
  description: 'Senior Full Stack Developer with 3+ years of experience in MERN stack, AI integration, and cloud solutions. Specializing in scalable web applications and DevOps.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'React', 'Node.js', 'TypeScript', 'AI Integration', 'Automation', 'DevOps', 'Cloud Solutions', 'Scalable Web Applications', 'Angular.js', 'Next.js', 'Tailwind CSS', 'MS SQL', 'Azure', 'Git', 'GitHub', 'CI/CD Pipelines', 'Webpack & Vite', 'Linux/Unix', 'Software Developer'],
  authors: [{ name: 'Mahbubur Rahman' }],
  openGraph: {
    title: 'Mahbubur Rahman - Senior Software Developer',
    description: 'Full Stack Developer | AI & Automation',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahbubur Rahman - Senior Software Developer',
    description: 'Full Stack Developer | AI & Automation',
  },
  icons: {
    icon: [
      {
        url: '/icon-light.svg',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark.svg',
        type: 'image/svg+xml',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
