'use client'
import styles from './page.module.css'
import Image from 'next/image'
import seta from '@/public/icons/arrow-rosa.json'
import professor from '@/public/icons/teacher.json'
import heroImage from '@/public/images/studentsBG3.webp'
import { motion, AnimatePresence } from "framer-motion"
import CtaPrimario from '@/components/cta/ctaPrimario'
import CtaSecundario from '@/components/cta/ctaSecundario'
import CardGrande from '@/components/cardGrande/cardGrande'
import teacher from '@/public/icons/teacher.png'
import students from '@/public/icons/students.png'
import review from '@/public/icons/review.png'
import CardPequeno from '@/components/cardPequeno/cardPequeno'
import pig from '@/public/icons/pig.json'

export default function Home() {

  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        <div className={styles.heroImage}>
          <Image
            fill
            sizes="100vw"
            priority
            quality={100}
            placeholder='blur'
            alt='Imagem de estudantes'
            src={heroImage}
            style={{
              objectFit: 'cover',
            }}
          ></Image>
        </div>
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
            <CardGrande titulo='Depoimentos' img={review} />
          </div>
        </div>
  
      </section>
      <section className={styles.section2}>
        <div className={styles.tela2}>
          <h1>Por que escolher a monitorando?</h1>
          <div className={styles.cardContainer2}>
            <CardPequeno titulo='Os Monitores'
              texto='estão sempre prontos pra tirar suas dúvidas em qualquer lugar. Seja no computador ou no telefone.'
              ani={pig} />
            <CardPequeno titulo='A Linaguagem'
              texto='é dinâmica e de fácil entendimento, acessível para todos.'
              ani={pig} />
            <CardPequeno titulo='Desenvolva' texto='disciplinas acadêmicas e também suas habilidades comportamentais.' ani={pig} />
            <CardPequeno titulo='Você Escolhe'
              texto='se quer monitoria individual ou fazer parte de uma turma.'
              ani={pig} />
            <CardPequeno titulo='Um Monitor'
              texto='pode usar as suas horas de monitoria na nossa plataforma como horas extracurriculares.'
              ani={pig} />
            <CardPequeno titulo='Conecte-se' texto='com outros estudantes, faça conexões e amizades.' ani={pig} />

          </div>
        </div>
      </section>
    </main>
  )
}
