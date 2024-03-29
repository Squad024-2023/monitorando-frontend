'use client'
import { useRef, useEffect, ChangeEvent, useState } from 'react'
import { Reveal } from '@/components/reveal/Reveal'
import lottie from 'lottie-web'
import styles from './monitorias.module.css'
import CardPessoa from '@/components/cardPessoa/CardPessoa'
import LottieAnimation from '@/components/lottie/LottieAnimation'
import arthur from '@/public/images/arthur.webp'
import kaua from '@/public/images/kaua.webp'
import mariana from '@/public/images/mariana.webp'
import nayara from '@/public/images/nayara.webp'
import bianca from '@/public/images/bianca.webp'
import Link from 'next/link'
import math from '@/public/icons/math.json'
import bank from '@/public/icons/bank.json'
import clock from '@/public/icons/clock.json'
import statistics from '@/public/icons/statistics.json'
import port from '@/public/icons/port.json'
import code from '@/public/icons/code.json'
import foco from '@/public/icons/foco.json'
import quimica from '@/public/icons/quimica.json'
import coms from '@/public/icons/coms.json'
import histo from '@/public/icons/histo.json'
import bio from '@/public/icons/bio.json'
import phis from '@/public/icons/phis.json'
import apresentacao from '@/public/icons/apresentacao.json'
import crit from '@/public/icons/feed.json'
import Input from '@/components/form/input/Input'
import RadioInput from '@/components/form/radio/RadioInput'
import buscar from '@/public/icons/buscar.json'

export default function Monitorias() {

  const container = useRef<HTMLDivElement | null>(null) //necessário para a animação do lottie funcionar no hover do botão inteiro
  const aniInstanceRef = useRef<any>(null) //necessário para cada botão ter sua própria instância do lottie 

  useEffect(() => {
    if (container.current) {
      aniInstanceRef.current = lottie.loadAnimation({
        container: container.current,
        loop: false,
        autoplay: false,
        animationData: buscar,
      });
      return () => {
        if (aniInstanceRef.current) {
          aniInstanceRef.current.destroy();
        }
      };
    }
  }, [buscar]);


  const [selectedValue, setSelectedValue] = useState('');
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        <div className={styles.tela1}>
          <Reveal delay={0.25}>
            <form className={styles.form}>
              <h1>Encontre seu monitor particular ou sua turma</h1>
              <div className={styles.busca}>
                <label htmlFor="disciplina">
                  <input type="text" placeholder="Procure sua disciplina" name='disciplina' />
                  <span className={styles.span}>Buscar por matéria</span>
                </label>
                <button type='button' className={styles.buscaBtn}>
                  <div
                    className={styles.lottieContainer}
                    onMouseEnter={() => aniInstanceRef.current && aniInstanceRef.current.play()}
                    onMouseLeave={() => aniInstanceRef.current && aniInstanceRef.current.stop()}
                  >
                    <div ref={container}
                      className={styles.lottie}>
                    </div>
                  </div>
                </button>
              </div>
              <h4>Selecione o tipo de aula</h4>
              <div className={styles.radioContainer}>
                <label>
                  <input type='radio' id='coletiva' name='turma' value="coletiva"></input>
                  Turma Coletiva
                </label>
                <label>
                  <input type='radio' id='individual' name='turma' value="individual"></input>
                  Turma Individual</label>
              </div>
            </form>
          </Reveal>
        </div>
        <div className={styles.section1Tela2} id='monitores'>
          <h1>Monitores em Destaque</h1>
          <div className={styles.cardWrapper}>
            <Reveal delay={0.25}>
              <CardPessoa img={kaua}
                nome='Kauã Alves'
                descricao='Desenvolvedor FullStack'
                linked='https://www.linkedin.com/in/kaua-amelo96'
                git='https://github.com/kauaamelo'
              />
            </Reveal>
            <Reveal delay={0.35}>
              <CardPessoa img={bianca}
                nome='Bianca Tayla'
                descricao='Desenvolvedora FullStack'
                linked='https://www.linkedin.com/in/bianca-t-7b5972255'
                git='https://github.com/Y777-CoderTech'
              />
            </Reveal>
            <Reveal delay={0.45}>
              <CardPessoa img={mariana}
                nome='Mariana Moreira'
                descricao='Desenvolvedora FullStack'
                linked='https://www.linkedin.com/in/mariana-moreira-santos-39417828a'
                git='https://github.com/mari-moreira'
              />
            </Reveal>
            <Reveal delay={0.55}>
              <CardPessoa img={nayara}
                nome='Nayara Pereira'
                descricao='Desenvolvedora FullStack'
                linked='https://www.linkedin.com/in/nayarabpereira'
                git='https://github.com/nxyara'
              />
            </Reveal>
            <Reveal delay={0.65}>
              <CardPessoa img={arthur}
                nome='Arthur Bernard'
                descricao='Desenvolvedor FullStack'
                linked='https://www.linkedin.com/in/ber-arthur/'
                git='https://github.com/Daedaluzz'
              />
            </Reveal>
            <Reveal delay={0.75}>
              <CardPessoa img={arthur}
                nome='Arthur Bernard'
                descricao='Desenvolvedor FullStack'
                linked='https://www.linkedin.com/in/ber-arthur/'
                git='https://github.com/Daedaluzz'
              />
            </Reveal>
            <Reveal delay={0.85}>
              <CardPessoa img={arthur}
                nome='Arthur Bernard'
                descricao='Desenvolvedor FullStack'
                linked='https://www.linkedin.com/in/ber-arthur/'
                git='https://github.com/Daedaluzz'
              />
            </Reveal>
            <Reveal delay={0.95}>
              <CardPessoa img={arthur}
                nome='Arthur Bernard'
                descricao='Desenvolvedor FullStack'
                linked='https://www.linkedin.com/in/ber-arthur/'
                git='https://github.com/Daedaluzz'
              />
            </Reveal>
          </div>
        </div>
      </section>
      <section className={styles.section2} id='monitorias'>
        <div className={styles.tela2}>
          <h1>Monitorias mais Acessadas</h1>
          <div className={styles.cardWrapperTela2}>
            <Link
              prefetch={false}
              id='matematica'
              className={styles.card}
              href='#matematica'><LottieAnimation ani={math} />
              Matemática
            </Link>
            <Link
              prefetch={false}
              id='financas'
              className={styles.card}
              href='#financas'><LottieAnimation ani={bank} />
              Gestão Financeira
            </Link>
            <Link
              prefetch={false}
              id='tempo'
              className={styles.card}
              href='#tempo'><LottieAnimation ani={clock} />
              Gestão de Tempo
            </Link>
            <Link
              prefetch={false}
              id='estatistica'
              className={styles.card}
              href='#estatistica'><LottieAnimation ani={statistics} />
              Estatística
            </Link>
            <Link
              prefetch={false}
              id='portugues'
              className={styles.card}
              href='#portugues'><LottieAnimation ani={port} />
              Português
            </Link>
            <Link
              prefetch={false}
              id='logica'
              className={styles.card}
              href='#logica'><LottieAnimation ani={code} />
              Lógica de Programação
            </Link>
            <Link
              prefetch={false}
              id='foco'
              className={styles.card}
              href='#foco'><LottieAnimation ani={foco} />
              Foco e Produtividade
            </Link>
            <Link
              prefetch={false}
              id='quimica'
              className={styles.card}
              href='#quimica'><LottieAnimation ani={quimica} />
              Química
            </Link>
            <Link
              prefetch={false}
              id='coms'
              className={styles.card}
              href='#coms'><LottieAnimation ani={coms} />
              Comunicação Não Violenta
            </Link>
            <Link
              prefetch={false}
              id='historia'
              className={styles.card}
              href='#historia'><LottieAnimation ani={histo} />
              História
            </Link>
            <Link
              prefetch={false}
              id='biologia'
              className={styles.card}
              href='#biologia'><LottieAnimation ani={bio} />
              Biologia
            </Link>
            <Link
              prefetch={false}
              id='fisica'
              className={styles.card}
              href='#fisica'><LottieAnimation ani={phis} />
              Física
            </Link>
            <Link
              prefetch={false}
              id='apresentacao'
              className={styles.card}
              href='#apresentacao'><LottieAnimation ani={apresentacao} />
              Apresentação de Projetos
            </Link>
            <Link
              id='criticas'
              className={styles.card}
              href='#criticas'><LottieAnimation ani={crit} />
              Críticas Construtivas
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.section3}>
        <div className={styles.tela3}>
          <h1>Não encontrou o que precisa ou ficou com dúvidas?</h1>
          <h4>Entre em contato com nosso time! </h4>
          <form className={styles.formSection3}>
            <Input type='text' nome='nome' placeholder='Nome' />
            <Input type='email' nome='email' placeholder='E-mail' />
            <Input type='text' nome='telefone' placeholder='Telefone' />
            <RadioInput
              name='tipoDeCadastro'
              texto1='Aluno'
              texto2='Professor'
              value={selectedValue}
              onChange={handleRadioChange}
            />
            <label htmlFor="duvidas"
              className={styles.duvidas} >
              <textarea placeholder='Dúvidas ou sugestões' name='duvidas' />
              <span className={styles.span}>Dúvidas ou sugestões</span>
            </label>
            <button type='submit'>Enviar</button>
          </form>
        </div>
      </section>
    </main>
  )
}
