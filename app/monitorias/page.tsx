
import styles from './monitorias.module.css'
import CardPessoa from '../../components/cardPessoa/cardPessoa'
import arthur from '@/public/images/arthur.webp'
import kaua from '@/public/images/kaua.webp'
import mariana from '@/public/images/mariana.webp'
import nayara from '@/public/images/nayara.webp'
import bianca from '@/public/images/bianca.webp'

export default function Monitorias() {


  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        <div className={styles.tela1}>
          <h1>Encontre seu monitor particular ou turma</h1>
          <form className={styles.form}>
            <div className={styles.busca}>
              <input type="text" placeholder="Procure sua disciplina"></input>
              <button type='button' className={styles.buscaBtn}>Buscar</button>
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
          <h1>Monitores em Destaque</h1>
          <div className={styles.cardWrapper}>
            <CardPessoa img={arthur}
              nome='Arthur Bernard'
              descricao='Desenvolvedor FullStack, gestor de projetos e especialista em oratória.'
              linked='https://www.linkedin.com/in/ber-arthur/'
              git='https://github.com/Daedaluzz'
            />

            <CardPessoa img={arthur}
              nome='Arthur Bernard'
              descricao='Desenvolvedor FullStack, gestor de projetos e especialista em oratória.'
              linked='https://www.linkedin.com/in/ber-arthur/'
              git='https://github.com/Daedaluzz'
            />

            <CardPessoa img={arthur}
              nome='Arthur Bernard'
              descricao='Desenvolvedor FullStack, gestor de projetos e especialista em oratória.'
              linked='https://www.linkedin.com/in/ber-arthur/'
              git='https://github.com/Daedaluzz'
            />

            <CardPessoa img={arthur}
              nome='Arthur Bernard'
              descricao='Desenvolvedor FullStack, gestor de projetos e especialista em oratória.'
              linked='https://www.linkedin.com/in/ber-arthur/'
              git='https://github.com/Daedaluzz'
            />

            <CardPessoa img={arthur}
              nome='Arthur Bernard'
              descricao='Desenvolvedor FullStack, gestor de projetos e especialista em oratória.'
              linked='https://www.linkedin.com/in/ber-arthur/'
              git='https://github.com/Daedaluzz'
            />




          </div>
        </div>

        <div className={styles.conteudo}>

        </div>

      </section>
      <section className={styles.section2}>
        <div className={styles.conteudo}>

        </div>
      </section>
    </main>
  )
}
