import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    
    <main className={styles.main}>
      <Link href="/gestao/professores">professores</Link>
      <Link href="/gestao/turmas">turmas</Link>
      <Link href="/gestao/alunos">alunos</Link>
      <Link href="/gestao/disciplinas">disciplinas</Link>
    </main>
    
    
    
  )
}
