'use client'
import { useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/reveal/Reveal'
import styles from './page.module.css'
import Image from 'next/image'
import seta from '@/public/icons/arrow-rosa.json'
import professor from '@/public/icons/teacher.json'
import HeroImage from '@/components/heroImage/HeroImage'
import heroImage from '@/public/images/studentsBG3.webp'
import CtaPrimario from '@/components/cta/CtaPrimario'
import CtaSecundario from '@/components/cta/CtaSecundario'
import CardGrande from '@/components/cardGrande/CardGrande'
import teacher from '@/public/icons/teacher.png'
import students from '@/public/icons/students.png'
import review from '@/public/icons/review.png'
import cansada from '@/public/images/studentTired.webp'
import CardPequeno from '@/components/cardPequeno/CardPequeno'
import monitores from '@/public/images/osMonitores.svg'
import linguagem from '@/public/images/aLinguagem.svg'
import desenvolva from '@/public/images/desenvolva.svg'
import voceEscolhe from '@/public/images/voceEscolhe.svg'
import umMonitor from '@/public/images/umMonitor.svg'
import conectSe from '@/public/images/conecteSe.svg'
import LottieAnimation from '@/components/lottie/LottieAnimation'
import exclamacao from '@/public/icons/exclamation.json'
import interogacao from '@/public/icons/question.json'
import busca from "@/public/icons/search.json"
import adicionar from "@/public/icons/add.json"
import alarme from '@/public/icons/alarm.json'
import calendario from '@/public/icons/calendar.json'
import notificacao from '@/public/icons/bell.json'
import check from '@/public/icons/check.json'
import gratis from '@/public/images/gratis.svg'
import comprar from '@/public/images/comprar.svg'
import dinheiro from '@/public/images/dinheiro.svg'


export default function Home() {

  //controlador de estado para o switcher de aluno e professor
  const [switcher, setSwitch] = useState<boolean>(true);
  const handleClickEvent = () => {
    setSwitch(!switcher);
  }

  //controlador de estado para o mostrar ao scrollar para baixo
  const [visivel, setVisivel] = useState<{ [key: string]: boolean }>({});

  //função para selecionar os objetoos pelo id onde ele soma o nome e um número, ex: marcador1, marcador2, marcador3...
  const handleScroll = () => {
    const marcadores = document.querySelectorAll('[id^="marcador"]');
    const marcadoresLi = document.querySelectorAll('[id^="marcadorLi"]');

    //lógica para verificar se o elemento está visível na tela. Threshold é o valor que define o quanto do elemento precisa estar visível para ser considerado(0.7 = 70% da tela)
    marcadores.forEach((element) => {
      const elementRect = element.getBoundingClientRect();
      const threshold = 0.7;
      const triggerPosition = window.innerHeight * threshold;
      const isElementVisible = elementRect.top < triggerPosition;

      setVisivel((prevVisibility) => ({
        ...prevVisibility,
        [element.id]: isElementVisible,
      }));
    });

    //lógica para verificar se o elemento está visível na tela. Threshold é o valor que define o quanto do elemento precisa estar visível para ser considerado(0.7 = 70% da tela)
    marcadoresLi.forEach((element) => {
      const elementRect = element.getBoundingClientRect();
      const threshold = 0.65;
      const triggerPosition = window.innerHeight * threshold;
      const isElementVisible = elementRect.top < triggerPosition;

      setVisivel((prevVisibility) => ({
        ...prevVisibility,
        [element.id]: isElementVisible,
      }));
    });
  };
  //desmonta o evento de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const variantesY = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        <HeroImage img={heroImage} />
        <motion.div
          className={styles.tela1}
          variants={variantesY}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.6, delay: 0.25 }}
        >
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
        </motion.div>
        <motion.div
          className={styles.cardContainer}
          variants={variantesY}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          <CardGrande titulo='Monitores' img={teacher} />
          <CardGrande titulo='Monitorias' img={students} />
          <CardGrande titulo='Depoimentos' img={review} />
        </motion.div>
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
          <Reveal delay={0.25}>
            <div className={styles.textoTela2}>
              <h1>Quando o sonho se torna pesadelo</h1>
              <p>É normal bater aquela confusão e desânimo na faculdade, especialmente nos primeiros semestres.
                O sentimento de incapacidade e frustração pode acabar afetando nossa saúde mental.
                Venha descobrir como <span>monitorando</span> pode ser aquele suporte que você não sabia que precisava.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className={styles.section3}>
        <div className={styles.tela3}>
          <h1>Por que escolher a <span>monitorando</span>?</h1>

          <div className={styles.cardContainer3}>
            <Reveal delay={0.25}>
              <CardPequeno titulo='Os Monitores'
                texto='Estão sempre prontos para tirar suas dúvidas. Seja no computador ou no telefone.'
                ani={monitores} />
            </Reveal>
            <Reveal delay={0.35}>
              <CardPequeno titulo='A Linguagem'
                texto='É dinâmica e fácil de entender, nossa preocupação também é ser acessível para todos.'
                ani={linguagem} />
            </Reveal>
            <Reveal delay={0.45}>
              <CardPequeno titulo='Desenvolva'
                texto='Suas disciplinas acadêmicas até as habilidades comportamentais. O pacote completo.'
                ani={desenvolva} />
            </Reveal>
            <Reveal delay={0.55}>
              <CardPequeno titulo='Você Escolhe'
                texto='O formato da sua monitoria, se vai ser individual ou se vai fazer parte de uma turma.'
                ani={voceEscolhe} />
            </Reveal>
            <Reveal delay={0.65}>
              <CardPequeno titulo='Você, Monitor'
                texto='Pode usar horas de monitoria lecionadas aqui como horas extracurriculares.'
                ani={umMonitor} />
            </Reveal>
            <Reveal delay={0.75}>
              <CardPequeno titulo='Conecte-se'
                texto='Com outros alunos e monitores, expanda seu network e faça amizades.'
                ani={conectSe} />
            </Reveal>
          </div>

        </div>
      </section>
      <section className={styles.section4}>
        <div className={styles.tela4}>
          <h1 className={`${styles.comoComeçar}
             ${switcher ? styles.alunoH : styles.professorH}`}>
            Como Começar?
          </h1>
          <Reveal delay={0.25}>
            <div className={styles.switcherWrapper}>
              <span
                className={`${styles.labelSwitcher} 
              ${switcher ? styles.alunoH : ''}`}>
                Alunos
              </span>
              <div className={`${styles.switcher} ${switcher ? styles.alunoSwitcher : styles.professorSwitcher}`}
                onClick={handleClickEvent}>
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
          </Reveal>
          <ol className={styles.timeline}>
            <div className={styles.linhaClara}></div>
            <div className={`${styles.linhaCor}
             ${switcher ? styles.alunoB : styles.professorB}`}
              style={{
                height: visivel.marcador1
                  ? visivel.marcador2
                    ? visivel.marcador3
                      ? visivel.marcador4
                        ? '90%' : '60%' : '30%' : '0%' : '0%'
              }}>
            </div>
            <div className={styles.marcadorWrapper}>
              <div id='marcador1'
                className={`${styles.marcador}
                 ${visivel.marcador1
                    ? switcher
                      ? styles.alunoB : styles.professorB : ''}`}>
                1
              </div>
              <div id='marcador2'
                className={`${styles.marcador} ${visivel.marcador2
                  ? switcher
                    ? styles.alunoB : styles.professorB : ''}`}>
                2
              </div>
              <div id='marcador3'
                className={`${styles.marcador} ${visivel.marcador3
                  ? switcher
                    ? styles.alunoB : styles.professorB : ''}`}>
                3
              </div>
              <div id='marcador4'
                className={`${styles.marcador} ${visivel.marcador4
                  ? switcher
                    ? styles.alunoB : styles.professorB : ''}`}>
                4
              </div>
            </div>
            <li id='marcadorLi1'
              className={`${switcher ? styles.alu : styles.pro} 
              ${visivel.marcadorLi1 ? '' : styles.invis}`}
            >
              <div className={styles.timeAluno}>
                <h5>Realize o seu cadastro como aluno.</h5>
                <div className={styles.quadrado}><LottieAnimation ani={interogacao} /></div>
              </div>
              <div className={styles.timeProfessor}>
                <h5>Realize o seu cadastro como professor.</h5>
                <div className={styles.quadrado}><LottieAnimation ani={exclamacao} /></div>
              </div>
            </li>
            <li id='marcadorLi2'
              className={`${switcher ? styles.alu : styles.pro} 
            ${visivel.marcadorLi2 ? '' : styles.invis}`}
            >
              <div className={styles.timeAluno}>
                <h5>Escolha uma das monitorias disponíveis no nosso site.</h5>
                <div className={styles.quadrado}><LottieAnimation ani={busca} /></div>
              </div>
              <div className={styles.timeProfessor}>
                <h5>Escolha qual disciplina você irá lecionar.</h5>
                <div className={styles.quadrado}><LottieAnimation ani={adicionar} /></div>
              </div>
            </li>
            <li id='marcadorLi3'
              className={`${switcher ? styles.alu : styles.pro} 
                ${visivel.marcadorLi3 ? '' : styles.invis}`}
            >
              <div className={styles.timeAluno}>
                <h5>Escolha a data e o horário da sua monitoria.</h5>
                <div className={styles.quadrado}><LottieAnimation ani={alarme} /></div>
              </div>
              <div className={styles.timeProfessor}>
                <h5>Defina a data e o horário que você estará disponível.</h5>
                <div className={styles.quadrado}><LottieAnimation ani={calendario} /></div>
              </div>
            </li>
            <li id='marcadorLi4'
              className={`${switcher ? styles.alu : styles.pro} 
                ${visivel.marcadorLi4 ? '' : styles.invis}`}
            >
              <div className={styles.timeAluno}>
                <h5>Agora é só esperar sua aula começar!</h5>
                <div className={styles.quadrado}><LottieAnimation ani={notificacao} /></div>
              </div>
              <div className={styles.timeProfessor}>
                <h5>Agora é só confirmar quando uma monitoria for solicitada!</h5>
                <div className={styles.quadrado}><LottieAnimation ani={check} /></div>
              </div>
            </li>

          </ol>
        </div>
      </section>
      <section className={styles.section5}>
        <h1>O melhor a gente deixa pro final</h1>
        <div className={styles.tela5}>
          <Reveal delay={0.25}>
            <CardPequeno titulo='Alunos'
              texto='Cursando graduação através do FIES ou PROUNI não pagam!
              É tudo de graça para te dar aquela força, sem comprometer sua vida financeira.'
              ani={gratis} />
          </Reveal>
          <Reveal delay={0.35}>
            <CardPequeno titulo='Estudantes'
              texto='Que não se encaixam na nossa gratuidade também podem utilizar nossa plataforma
              pagando o valor das horas de cada professor.'
              ani={comprar} />
          </Reveal>
          <Reveal delay={0.45}>
            <CardPequeno titulo='Monitores'
              texto='Recebem por horas lecionadas na plataforma, independente de atender alunos
              que se encaixam no nosso programa de gratuidade.'
              ani={dinheiro} />
          </Reveal>
        </div>

      </section>
    </main>
  )
}
