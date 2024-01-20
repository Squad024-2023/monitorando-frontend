import type { Metadata } from 'next'
import { inter, pacifico, sunSeed } from './fonts'
import './globals.css'
import Nav from '@/components/nav/nav'
import Footer from '@/components/footer/footer'


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
    <html lang="pt">
      <body className={`${inter.variable} ${pacifico.variable} ${sunSeed.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
