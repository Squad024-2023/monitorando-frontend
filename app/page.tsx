'use client'
import { useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import seta from '@/public/icons/arrow-rosa.json'
import professor from '@/public/icons/teacher.json'
import HeroImage from '@/components/heroImage/heroImage'
import heroImage from '@/public/images/studentsBG3.webp'
import CtaPrimario from '@/components/cta/ctaPrimario'
import CtaSecundario from '@/components/cta/ctaSecundario'
import CardGrande from '@/components/cardGrande/cardGrande'
import teacher from '@/public/icons/teacher.png'
import students from '@/public/icons/students.png'
import review from '@/public/icons/review.png'
import cansada from '@/public/images/studentTired.webp'
import CardPequeno from '@/components/cardPequeno/cardPequeno'
import monitores from '@/public/images/osMonitores.svg'
import linguagem from '@/public/images/aLinguagem.svg'
import desenvolva from '@/public/images/desenvolva.svg'
import voceEscolhe from '@/public/images/voceEscolhe.svg'
import umMonitor from '@/public/images/umMonitor.svg'
import conectSe from '@/public/images/conecteSe.svg'

export default function Home() {

  const [switcher, setSwitch] = useState<boolean>(true);
  const handleClickEvent = () => {
    setSwitch(!switcher);
  }



  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        <HeroImage img={heroImage} />
        <div className={styles.tela1}>
          <div className={styles.textoTela1}>
            <h1>Seu <span>sucesso acadêmico começa aqui</span></h1>
            <p>Com monitorias e mentorias personalizadas, didáticas atuais e uma boa dose de empatia,
              a gente tá virando o jogo no jeito de aprender e ensinar. É tudo pra todo mundo ter chances iguais sucesso.
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
          <Image
            className={styles.imgTela2}
            sizes="50vw"
            quality={100}
            placeholder='blur'
            alt='Imagem de estudante cansada'
            src={cansada}
          ></Image>
          <div className={styles.textoTela2}>
            <h1>Quando o sonho se torna pesadelo</h1>
            <p>É normal bater aquela confusão e desânimo na faculdade, especialmente nos primeiros semestres.
              O sentimento de incapacidade e frustração, pode acabar afetando nossa saúde mental.
              Experimente como <span>monitorando</span> pode ser aquele suporte que você não sabia que precisava.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section3}>
        <div className={styles.tela3}>
          <h1>Por que escolher a <span>monitorando</span>?</h1>
          <div className={styles.cardContainer3}>
            <CardPequeno titulo='Os Monitores'
              texto='Estão sempre prontos pra tirar suas dúvidas. Seja no computador ou no telefone.'
              ani={monitores} />
            <CardPequeno titulo='A Linguagem'
              texto='É dinâmica para facilitar o entendimento, tornando-a acessível para todos.'
              ani={linguagem} />
            <CardPequeno titulo='Desenvolva'
              texto='Disciplinas acadêmicas e também suas habilidades comportamentais.'
              ani={desenvolva} />
            <CardPequeno titulo='Você Escolhe'
              texto='Se quer monitoria individual ou fazer parte de uma turma.'
              ani={voceEscolhe} />
            <CardPequeno titulo='Você Monitor'
              texto='Pode usar as suas horas de monitoria como horas extracurriculares.'
              ani={umMonitor} />
            <CardPequeno titulo='Conecte-se'
              texto='Com outros estudantes, espanda sua network e faça amizades.'
              ani={conectSe} />
          </div>
        </div>
      </section>
      <section className={styles.section4}>
        <div className={styles.tela4}>
          <h1 className={`${styles.comoComeçar}
             ${switcher ? styles.alunoH : styles.professorH}`}>
            Como Começar?
          </h1>
          <div className={styles.switcherWrapper}>
            <span
              className={`${styles.labelSwitcher} 
              ${switcher ? styles.alunoH : ''}`}>
              Alunos
            </span>
            <div className={`${styles.switcher} ${switcher ? styles.alunoSwitcher : styles.professorSwitcher}`}>
              <button
                className={switcher ? styles.alunoBtn : styles.professorBtn}
                type='button'
                onClick={handleClickEvent}>
              </button>
            </div>
            <span className={`${styles.labelSwitcher}
             ${switcher ? '' : styles.professorH}`}>
              Professor
            </span>
          </div>
          <ol className={styles.timeline}>
            <div className={styles.linhaClara}></div>
            <div className={`${styles.linhaCor}
             ${switcher ? styles.alunoB : styles.professorB}`}></div>
            <li className={styles.timeElemento}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus voluptates, recusandae fugiat qui iure cum sunt doloremque,
                similique enim dicta obcaecati eius facilis nulla facere ad distinctio,
                dignissimos nam quo.</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus voluptates, recusandae fugiat qui iure cum sunt doloremque,
                similique enim dicta obcaecati eius facilis nulla facere ad distinctio,
                dignissimos nam quo.</p>
            </li>
            <li className={styles.timeElemento}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus voluptates, recusandae fugiat qui iure cum sunt doloremque,
                similique enim dicta obcaecati eius facilis nulla facere ad distinctio,
                dignissimos nam quo.</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus voluptates, recusandae fugiat qui iure cum sunt doloremque,
                similique enim dicta obcaecati eius facilis nulla facere ad distinctio,
                dignissimos nam quo.</p>
            </li>
            <li className={styles.timeElemento}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus voluptates, recusandae fugiat qui iure cum sunt doloremque,
                similique enim dicta obcaecati eius facilis nulla facere ad distinctio,
                dignissimos nam quo.</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus voluptates, recusandae fugiat qui iure cum sunt doloremque,
                similique enim dicta obcaecati eius facilis nulla facere ad distinctio,
                dignissimos nam quo.</p>
            </li>
            <li className={styles.timeElemento}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus voluptates, recusandae fugiat qui iure cum sunt doloremque,
                similique enim dicta obcaecati eius facilis nulla facere ad distinctio,
                dignissimos nam quo.</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus voluptates, recusandae fugiat qui iure cum sunt doloremque,
                similique enim dicta obcaecati eius facilis nulla facere ad distinctio,
                dignissimos nam quo.</p>
            </li>
            <li className={styles.timeElemento}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus voluptates, recusandae fugiat qui iure cum sunt doloremque,
                similique enim dicta obcaecati eius facilis nulla facere ad distinctio,
                dignissimos nam quo.</p>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus voluptates, recusandae fugiat qui iure cum sunt doloremque,
                similique enim dicta obcaecati eius facilis nulla facere ad distinctio,
                dignissimos nam quo.</p>
            </li>
          </ol>
        </div>

      </section>
    </main>
  )
}
