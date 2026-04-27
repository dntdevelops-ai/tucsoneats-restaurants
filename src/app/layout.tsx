import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Partner With TucsonEats | Restaurant Partner Portal',
  description:
    'Join TucsonEats and reach thousands of hungry Tucsonans. 0% commission for your first 30 days. Local restaurants, real drivers, fair prices.',
  keywords: 'Tucson food delivery, restaurant partner, TucsonEats, local delivery Tucson',
  openGraph: {
    title: 'Partner With TucsonEats',
    description: 'Your kitchen. Tucson\'s doorstep. 0% commission for 30 days.',
    url: 'https://restaurants.tucsoneats.com',
    siteName: 'TucsonEats',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
