import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './gestao.module.css'
import Sidenav from '@/components/sidebar/sidenav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gestão monitorando',
  description: '',
}

export default function GestaoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <main className={styles.mainGestao}>
      <Sidenav />
      {children}
    </main>
  )
}
