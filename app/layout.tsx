import type { Metadata } from 'next'
import { inter, pacifico } from './fonts'
import './globals.css'
import Nav from '@/components/nav/nav'


export const metadata: Metadata = {
  title: 'monitorando',
  description: '',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${pacifico.variable}`}>
      <Nav />
        {children}</body>
    </html>
  )
}
