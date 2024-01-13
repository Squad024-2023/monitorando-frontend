'use client'
import styles from './gestao.module.css'
import Link from 'next/link'
import { motion, AnimatePresence } from "framer-motion"

export default function Gestao() {
  return (
    <AnimatePresence>
      <motion.div
        key="gestao"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.gestao}>
        <h1 key='titulo'>gestão</h1>
        <Link key="professores" href="/gestao/professores">professores</Link>
        <Link key="turmas" href="/gestao/turmas">turmas</Link>
        <Link key="alunos" href="/gestao/alunos">alunos</Link>
        <Link key="disciplinas" href="/gestao/disciplinas">disciplinas</Link>
      </motion.div>
    </AnimatePresence>

  )
}
