import styles from './o-que-fazemos.module.css'
import Image from 'next/image'
import student from '@/public/images/studentNotebook.webp'
import students from '@/public/images/studentsNotebook.webp'
import problems from '@/public/images/problems.webp'

export default function OqueFazemos() {


  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        <div className={styles.tela1}>
          <div className={styles.textoTela1}>
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
          </div>
          <Image
            className={styles.imagemTela1}
            src={student}
            priority
            quality={100}
            placeholder='blur'
            alt='Imagem de estudante com notebook'
          />
        </div>
      </section>


      <section className={styles.section2}>
        <div className={styles.tela2}>
          <div className={styles.textoTela2}>
            <h1>Como Nós Fazemos?</h1>
            <h5>Nos desenvolvemos monitorias e mentorias com um método de ensino voltado para facilitar a aprendizagem e a comunicação.
              Visamos transmitir conhecimento de forma simples e objetiva, para que o aluno possa aprender de forma mais rápida e eficiente.
            </h5>
          </div>


          <div className={styles.comoContainer}>
            <div className={styles.textoComo}>
              <h2>Conhecendo os problemas</h2>
              <h5>Várias dificuldades podem ser encontradas na vida acadêmica. Conhecer os problemas atuais dos estudantes é fundamental para desenvolver
                planos de estudo e orientação da forma mais eficiente possível.
              </h5>
            </div>
            <Image
              className={styles.imagemTextoComo1}
              src={problems}
              priority
              quality={100}
              placeholder='blur'
              alt='Imagem de estudante com notebook'
            />
          </div>



        </div>
      </section>
    </main>
  )
}
