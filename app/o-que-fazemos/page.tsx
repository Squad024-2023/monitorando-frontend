'use client'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/reveal/Reveal'
import styles from './o-que-fazemos.module.css'
import Image from 'next/image'
import student from '@/public/images/studentNotebook.webp'
import students from '@/public/images/studentsNotebook.webp'
import problems from '@/public/images/problems.webp'
import solucao from '@/public/images/solucao.webp'
import results from '@/public/images/results.webp'

export default function OqueFazemos() {

  const variantes = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }
  const variantes2 = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  }


  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        <div className={styles.tela1}>
          <motion.div className={styles.textoTela1}
            variants={variantes}
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <h1>O Que Fazemos?</h1>
            <h5>Atualmente temos mais de 200 mil horas de aprendizado, divididas entre mentorias e monitorias para alunos em mais de 15 estados brasileiros e 300 universidades diferentes.</h5>
            <Image
              className={styles.imagemTextoTela1}
              src={students}
              priority
              quality={100}
              placeholder='blur'
              alt='Imagem de estudante com notebook'
            />
          </motion.div>
          <motion.div
            className={styles.imagemTela1}
            variants={variantes2}
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <Image
              className={styles.imagemTela1}
              src={student}
              priority
              quality={100}
              placeholder='blur'
              alt='Imagem de estudante com notebook'
            />
          </motion.div>
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.tela2}>
          <Reveal delay={0.45}>
            <div className={styles.textoTela2}>
              <h1>Como Nós Fazemos?</h1>
              <h5>Nos desenvolvemos monitorias e mentorias com um método de ensino voltado para facilitar a aprendizagem e a comunicação.
                Visamos transmitir conhecimento de forma simples e objetiva, para que o aluno possa aprender de forma mais rápida e eficiente.
              </h5>
            </div>
          </Reveal>
          <div className={styles.comoContainer}>
            <Reveal delay={0.35}>
              <div className={styles.textoComo}>
                <h2>Conhecendo os Problemas</h2>
                <h5>Várias dificuldades podem ser encontradas na vida acadêmica. Através de pesquisas e experiências com instituições de ensino, conseguimos identificar os principais problemas que os alunos enfrentam em seus campos.
                </h5>
              </div>
            </Reveal>
            <Image
              className={styles.imagemTextoComo1}
              src={problems}
              priority
              quality={100}
              placeholder='blur'
              alt='Imagem de estudante com notebook'
            />
          </div>
          <div className={styles.comoContainer}>
            <Image
              className={styles.imagemTextoComo2}
              src={solucao}
              priority
              quality={100}
              placeholder='blur'
              alt='Imagem de estudante com notebook'
            />
            <Reveal delay={0.35}>
              <div className={styles.textoComo}>
                <h2>Trabalhando na Solução</h2>
                <h5>Nosso monitores e mentores são treinados para desenvolver planos de estudos e orientações de forma eficiente. Focados nas resoluções dos problemas, eles são capazes de ajudar os alunos a superarem suas dificuldades.
                </h5>
              </div>
            </Reveal>
          </div>
          <div className={styles.comoContainer}>
            <Reveal delay={0.35}>
              <div className={styles.textoComo}>
                <h2>Verificando Resultados</h2>
                <h5>Após o período de 1 semestre de aplicações de aulas e orientações, retornamos o contato a instuição qual o aluno pertence para verificar os resultados obtidos. Com isso, conseguimos identificar se o aluno conseguiu superar suas dificuldades e se o nosso trabalho foi eficiente.
                </h5>
              </div>
            </Reveal>
            <Image
              className={styles.imagemTextoComo1}
              src={results}
              priority
              quality={100}
              placeholder='blur'
              alt='Imagem de estudante com notebook'
            />
          </div>
          <Reveal delay={0.35}>
            <div className={styles.textoTela2}>
              <h1>Repetir e Melhorar</h1>
              <h5>A medida que mais alunos e mais ciclos se iniciam, repetimos o processo de identificação de problemas e soluções, sempre buscando melhorar a qualidade do nosso trabalho e a eficiência das nossas aulas e orientações.
              </h5>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
