import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const gilroyBold = localFont({
  src: '../public/fonts/Gilroy-Bold.ttf',
  variable: '--font-display',
  display: 'swap',
})

const gilroyRegular = localFont({
  src: '../public/fonts/Gilroy-Regular.ttf',
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Panto - Modern Furniture Landing Page',
  description: 'Make your interior more minimalistic & modern',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${gilroyRegular.variable} ${gilroyBold.variable}`}>
      <body>{children}</body>
    </html>
  )
}