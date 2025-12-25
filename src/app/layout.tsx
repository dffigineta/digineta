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
  title: 'Digineta – India\'s Political Technology Venture',
  description: 'Digineta is India\'s dedicated political technology venture, providing data-driven apps, analytics and digital outreach solutions for leaders, parties and political organisations.',
  keywords: 'political technology, election analytics, political campaign management, voter analytics, digital campaigning, Indian politics, Digineta',
  authors: [{ name: 'Digineta' }],
  openGraph: {
    title: 'Digineta – For Political Success in the Digital World',
    description: 'Apps, analytics and full-funnel digital outreach for political leaders, parties and organisations across India.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digineta – India\'s Political Technology Venture',
    description: 'Data-driven political technology, voter insights and digital communication for Indian politics.',
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