import HeroImage from '@/components/heroImage/heroImage'
import Image from 'next/image'
import styles from './quem-somos.module.css'
import Doar from '@/components/doar/doar'




export default function QuemSomos() {

    return (
        <main className={styles.main}>
            <section className={styles.section1}>
                <div className={styles.tela1}>
                    <div className={styles.textoTela1}>
                        <h1>QUEM SOMOS?</h1>
                        <h2> monitorando esta aqui para ajudar estudantes a seguirem seus sonhos, oferecendo monitorias e mentorias em disciplinas acadêmicas e sociais.</h2>
                        <p>
                            Nosso foco é principalmente nos estudantes que não tem uma boa educação base do ensino médio e se deparam com dificuldades imensas
                            logo nos seus primeiros meses de faculdade.
                        </p>
                        <Doar />
                    </div>
                </div>
            </section>
            <section className={styles.section2}>
                <div className={styles.tela2}>
                    <div className={styles.textoTela2}>
                        <h1>QUEM SOMOS?</h1>
                        <h2> monitorando ta aqui para ajudar estudantes a seguirem seus sonhos, oferecendo monitorias e mentorias em disciplinas acadêmicas e sociais.</h2>
                        <p>
                            Nosso foco é principalmente nos estudantes que não tem uma boa educação base do ensino médio e se deparam com dificuldades imensas
                            logo nos seus primeiros meses de faculdade.
                        </p>

                    </div>
                </div>
            </section>
        </main>
    )
}