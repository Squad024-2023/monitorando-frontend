'use client'
import styles from './page.module.css'
import seta from '@/public/icons/arrow-rosa.json'
import professor from '@/public/icons/teacher.json'
import { motion, AnimatePresence } from "framer-motion"
import CtaPrimario from '@/components/cta/ctaPrimario'
import CtaSecundario from '@/components/cta/ctaSecundario'
import CardGrande from '@/components/cardGrande/cardGrande'
import teacher from '@/public/icons/teacher.png'
import students from '@/public/icons/students.png'
import review from '@/public/icons/review.png'


export default function Home() {

  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        <div className={styles.tela1}>
          <div className={styles.textoTela1}>
            <h1>Seu <span>sucesso acadêmico começa aqui</span></h1>
            <p>Estudantes passam por inúmeras dificuldades durante sua graduação,
              principalmente nos primeiros semestres. Nossos monitores e mentores estão revolucionando
              a forma de ensino e aprendizagem, assim garantindo chances iguais de sucesso para todos.
            </p>
          </div>
          <div className={styles.tela1Bts}>
            <CtaPrimario link='/' conteudo='Quero aprender' ani={seta} />
            <CtaSecundario link='/' conteudo='Quero ensinar' ani={professor} />
          </div>
          <div className={styles.cardContainer}>
            <CardGrande titulo='Monitores' img={teacher} />
            <CardGrande titulo='Monitorias' img={students} />
            <CardGrande titulo='Depoimentos' img{} />

          </div>
          <div className={styles.textoTela1}>
            <h1>Seu <span>sucesso acadêmico começa aqui</span></h1>
            <p>Estudantes passam por inúmeras dificuldades durante sua graduação,
              principalmente nos primeiros semestres. Nossos monitores e mentores estão revolucionando
              a forma de ensino e aprendizagem, assim garantindo chances iguais de sucesso para todos.
            </p>
          </div>
        </div>

      </section>
    </main>
  )
}
