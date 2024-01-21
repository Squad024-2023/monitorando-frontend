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
                        <h1>Quem Somos?</h1>
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
                <div className={styles.descricaoTela2}>
                    <h1>Nosso Time</h1>
                    <p>Nosso time sentiu todas as dificuldades que um aluno de faculdade pode passar. Juntos nessa ideia
                        de ajudar os outros, criamos o monitorando para que todos possam ter uma oportunidade de seguir seus sonhos.
                    </p>
                </div>
                <div className={styles.cardsTela2}>
                    <div className={styles.cardContainer}>
                        <div className={styles.cardFoto}>
                        </div>
                        <div className={styles.cardTexto}>
                            <h1>Arthur Bernard</h1>
                            <p>VAMO DALE PRA NÃO TOMALE CARAI
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Nobis dolores, fugit laudantium, distinctio eum itaque laboriosam
                                nemo sequi cumque culpa doloribus vitae. Accusantium vero doloremque
                                provident hic saepe itaque quibusdam.
                            </p>
                        </div>
                    </div>

                    <div className={styles.cardContainer}>
                        <div className={styles.cardFoto}>
                        </div>
                        <div className={styles.cardTexto}>
                            <h1>Nayara Pereira</h1>
                            <p>Função Função Função Função Função
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Nobis dolores, fugit laudantium, distinctio eum itaque laboriosam
                                nemo sequi cumque culpa doloribus vitae. Accusantium vero doloremque
                                provident hic saepe itaque quibusdam.

                            </p>
                        </div>
                    </div>

                    <div className={styles.cardContainer}>
                        <div className={styles.cardFoto}>
                        </div>
                        <div className={styles.cardTexto}>
                            <h1>Nome</h1>
                            <p>Função</p>
                        </div>
                    </div>

                    <div className={styles.cardContainer}>
                        <div className={styles.cardFoto}>
                        </div>
                        <div className={styles.cardTexto}>
                            <h1>Nome</h1>
                            <p>Função</p>
                        </div>
                    </div>

                    <div className={styles.cardContainer}>
                        <div className={styles.cardFoto}>
                        </div>
                        <div className={styles.cardTexto}>
                            <h1>Nome</h1>
                            <p>Função</p>
                        </div>
                    </div>


                </div>


            </section>
        </main>
    )
}