import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Marco Silva | Fotógrafo & Videógrafo Premium',
  description: 'Fotografia e vídeo profissional para casamentos, eventos corporativos, festas e publicidade. Capturamos momentos que contam histórias com qualidade cinematográfica.',
  keywords: ['fotógrafo', 'videógrafo', 'casamentos', 'eventos corporativos', 'publicidade', 'aftermovies', 'Portugal'],
  authors: [{ name: 'Marco Silva' }],
  openGraph: {
    title: 'Marco Silva | Fotógrafo & Videógrafo Premium',
    description: 'Fotografia e vídeo profissional para casamentos, eventos corporativos, festas e publicidade.',
    type: 'website',
    locale: 'pt_PT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marco Silva | Fotógrafo & Videógrafo Premium',
    description: 'Fotografia e vídeo profissional para casamentos, eventos corporativos, festas e publicidade.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
