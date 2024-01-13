'use client'
import styles from './page.module.css'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  return (
    <div className={styles.gestao}>
      <main className={styles.main}>
        <Link key="professores" href="/gestao/professores">professores</Link>
        <Link key="turmas" href="/gestao/turmas">turmas</Link>
        <Link key="alunos" href="/gestao/alunos">alunos</Link>
        <Link key="disciplinas" href="/gestao/disciplinas">disciplinas</Link>
      </main>
    </div>
  )
}
