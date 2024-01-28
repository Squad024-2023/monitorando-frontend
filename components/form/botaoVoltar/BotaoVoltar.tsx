'use client'
import styles from '../form.module.css'
import { useRouter } from 'next/navigation'

export default function BotaoVoltar() {
  const router = useRouter();

  return (
    <button className={styles.botaoVoltar}
      onClick={() => router.back()}
    >
      Voltar
    </button>
  )
}