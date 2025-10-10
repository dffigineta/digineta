import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'i-maritime - Maritime Consultant',
  description: 'India\'s top maritime, port and shipbuilding consultant providing quality consulting and research-based maritime services.',
  keywords: 'maritime consultant, port consultant, shipping consultant, shipbuilding consultant, logistics consultant',
  authors: [{ name: 'i-maritime Consultancy Private Limited' }],
  openGraph: {
    title: 'i-maritime - Maritime Consultant',
    description: 'India\'s top maritime, port and shipbuilding consultant providing quality consulting and research-based maritime services.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'i-maritime - Maritime Consultant',
    description: 'India\'s top maritime, port and shipbuilding consultant providing quality consulting and research-based maritime services.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} antialiased`}> 
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}