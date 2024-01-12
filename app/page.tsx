import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    
    <main className={styles.main}>
      <Link href="/gestao/professores">PROFESSORES</Link>
      <Link href="/gestao/turmas">PROFESSORES</Link>
      <Link href="/gestao/alunos">PROFESSORES</Link>
      <Link href="/gestao/disciplinas">PROFESSORES</Link>
      
    </main>
    
    
    
  )
}
