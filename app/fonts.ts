import { Inter, Pacifico } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable:'--font-inter',
})
 
export const sunSeed = localFont({
  src: './sun-seed-webfont.woff2',
  weight: '800',
})

export const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  variable:'--font-pacifico',

})