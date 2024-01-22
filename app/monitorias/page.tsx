
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
            <CardPessoa img={kaua}
              nome='Kauã Alves'
              descricao='Desenvolvedor FullStack'
              linked='https://www.linkedin.com/in/kaua-amelo96'
              git='https://github.com/kauaamelo'
            />

            <CardPessoa img={bianca}
              nome='Bianca Tayla'
              descricao='Desenvolvedora FullStack'
              linked='https://www.linkedin.com/in/bianca-t-7b5972255'
              git='https://github.com/Y777-CoderTech'
            />

            <CardPessoa img={mariana}
              nome='Mariana Moreira'
              descricao='Desenvolvedora FullStack'
              linked='https://www.linkedin.com/in/mariana-moreira-santos-39417828a'
              git='https://github.com/mari-moreira'
            />

            <CardPessoa img={nayara}
              nome='Nayara Pereira'
              descricao='Desenvolvedora FullStack'
              linked='https://www.linkedin.com/in/nayarabpereira'
              git='https://github.com/nxyara'
            />

            <CardPessoa img={arthur}
              nome='Arthur Bernard'
              descricao='Desenvolvedor FullStack'
              linked='https://www.linkedin.com/in/ber-arthur/'
              git='https://github.com/Daedaluzz'
            />


            <CardPessoa img={arthur}
              nome='Arthur Bernard'
              descricao='Desenvolvedor FullStack'
              linked='https://www.linkedin.com/in/ber-arthur/'
              git='https://github.com/Daedaluzz'
            />

            <CardPessoa img={arthur}
              nome='Arthur Bernard'
              descricao='Desenvolvedor FullStack'
              linked='https://www.linkedin.com/in/ber-arthur/'
              git='https://github.com/Daedaluzz'
            />

            <CardPessoa img={arthur}
              nome='Arthur Bernard'
              descricao='Desenvolvedor FullStack'
              linked='https://www.linkedin.com/in/ber-arthur/'
              git='https://github.com/Daedaluzz'
            />
          </div>
        </div>
      </section>
      <section className={styles.section2}>
    <div className={styles.tela2}>
TELA 2

    </div>
      </section>
    </main>
  )
}
