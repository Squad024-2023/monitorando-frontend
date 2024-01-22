
import styles from './monitorias.module.css'

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
        </div>
    

        Monitoria em turma
        Monitoria individual
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
