'use client'
import styles from './page.module.css'
import Image from 'next/image'
import seta from '@/public/icons/arrow-rosa.json'
import professor from '@/public/icons/teacher.json'
import heroImage from '@/public/images/studentsBG3.webp'
import CtaPrimario from '@/components/cta/ctaPrimario'
import CtaSecundario from '@/components/cta/ctaSecundario'
import CardGrande from '@/components/cardGrande/cardGrande'
import teacher from '@/public/icons/teacher.png'
import students from '@/public/icons/students.png'
import review from '@/public/icons/review.png'
import CardPequeno from '@/components/cardPequeno/cardPequeno'
import monitores from '@/public/images/osMonitores.svg'
import linguagem from '@/public/images/aLinguagem.svg'
import desenvolva from '@/public/images/desenvolva.svg'
import voceEscolhe from '@/public/images/voceEscolhe.svg'
import umMonitor from '@/public/images/umMonitor.svg'
import conectSe from '@/public/images/conecteSe.svg'

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
          <h1>Por que escolher a <span>monitorando</span>?</h1>
          <div className={styles.cardContainer2}>
            <CardPequeno titulo='Os Monitores'
              texto='Estão sempre prontos pra tirar suas dúvidas. Seja no computador ou no telefone.'
              ani={monitores} />
            <CardPequeno titulo='A Linguagem'
              texto='É dinâmica para facilitar o entendimento, tornando-a acessível para todos.'
              ani={linguagem} />
            <CardPequeno titulo='Desenvolva' texto='Disciplinas acadêmicas e também suas habilidades comportamentais.'
              ani={desenvolva} />
            <CardPequeno titulo='Você Escolhe'
              texto='Se quer monitoria individual ou fazer parte de uma turma.'
              ani={voceEscolhe} />
            <CardPequeno titulo='Um Monitor'
              texto='Pode usar as suas horas de monitoria como horas extracurriculares.'
              ani={umMonitor} />
            <CardPequeno titulo='Conecte-se'
              texto='Com outros estudantes, espanda sua network e faça amizades.'
              ani={conectSe} />

          </div>
        </div>
      </section>
    </main>
  )
}
