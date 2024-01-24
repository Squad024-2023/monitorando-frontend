import Image from 'next/image'
import styles from './quem-somos.module.css'
import Doar from '@/components/doar/Doar'
import arthur from '@/public/images/arthur.webp'
import kaua from '@/public/images/kaua.webp'
import mariana from '@/public/images/mariana.webp'
import nayara from '@/public/images/nayara.webp'
import bianca from '@/public/images/bianca.webp'




export default function QuemSomos() {

    return (
        <main className={styles.main}>
            <section className={styles.section1}>
                <div className={styles.tela1}>
                    <div className={styles.textoTela1}>
                        <h1>Nossa Missão</h1>
                        <h2> monitorando está aqui para ajudar estudantes a seguirem seus sonhos! Oferecemos monitorias e mentorias em disciplinas acadêmicas e sociais.</h2>
                        <p>
                            Nosso objetivo principal são estudantes que não tiveram uma boa educação base do ensino médio e se deparam com grandes dificuldades
                            nos seus primeiros meses de faculdade.
                        </p>
                        <Doar />
                    </div>
                </div>
            </section>
            <section className={styles.section2}>
                <div className={styles.descricaoTela2}>
                    <h1>Nosso Time</h1>
                    <p>sentiu todas as dificuldades que um aluno de faculdade pode passar. Juntos nessa ideia
                        de ajudar o próximo, criamos o monitorando para que todos possam ter uma oportunidade de seguir seus sonhos.
                    </p>
                </div>
                <div className={styles.cardsTela2}>
                    <div className={styles.cardContainer}>
                        <Image
                            className={styles.cardFoto}
                            src={arthur}
                            quality={100}
                            placeholder='blur'
                            alt='Imagem de arthur'
                        />
                        <div className={styles.cardTexto}>
                            <h1>Arthur Bernard</h1>
                            <p>HTML | CSS | Oratória | Gestão de projetos Desenvolvedor frontend formando em design gráfico. Ajuda com apresentações, trabalhos em grupos e organização é comigo!</p>
                        </div>
                    </div>

                    <div className={styles.cardContainer}>
                        <Image
                            className={styles.cardFoto}
                            src={nayara}
                            quality={100}
                            placeholder='blur'
                            alt='Imagem de nayara'
                        />
                        <div className={styles.cardTexto}>
                            <h1>Nayara Pereira</h1>
                            <p>Mestre em História | Estudante de Desenvolvimento Full Stack Técnica em informática, licenciada e mestre em história. Auxílio em matérias na área de Ciências Humanas, acolhimento e orientações da vida acadêmica.
                            </p>
                        </div>
                    </div>

                    <div className={styles.cardContainer}>
                        <Image
                            className={styles.cardFoto}
                            src={mariana}
                            quality={100}
                            placeholder='blur'
                            alt='Imagem de mariana'
                        />
                        <div className={styles.cardTexto}>
                            <h1>Mariana Moreira</h1>
                            <p>HTML | CSS | Java | WordPress Técnica em informática e graduanda em Sistema de Informação. Ajuda com desenvolvimento de websites utilizando gerenciador de conteúdo WordPress e palavras de conforto.</p>
                        </div>
                    </div>

                    <div className={styles.cardContainer}>
                        <Image
                            className={styles.cardFoto}
                            src={kaua}
                            quality={100}
                            placeholder='blur'
                            alt='Imagem de kaua'
                        />
                        <div className={styles.cardTexto}>
                            <h1>Kauã Alves</h1>
                            <p>Desenvolvedor Web | JavaScript | CSS | Técnico de Logística Estudande full stack formando em logística. Empatia e compreensão como fundamentos pra tirar suas dúvidas.</p>
                        </div>
                    </div>

                    <div className={styles.cardContainer}>
                        <Image
                            className={styles.cardFoto}
                            src={bianca}
                            quality={100}
                            placeholder='blur'
                            alt='Imagem de bianca'
                        />
                        <div className={styles.cardTexto}>
                            <h1>Bianca Tayla</h1>
                            <p>MySQL | Java | Data Analysis | Full Stack Developer Estudante de Desenvolvimento Full Stack. Ajuda em limpeza de dados, programação utilizando R, análises usando Tableu e auxílio com pesquisa usando Big Query e Kaggle.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}