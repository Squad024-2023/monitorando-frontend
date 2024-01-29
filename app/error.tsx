'use client'
import Link from 'next/link'
import styles from './error.module.css'
import seta from '@/public/icons/arrow-rosa.json'
import CtaPrimario from '@/components/cta/CtaPrimario'
import Image from 'next/image'
import img from '../public/images/error.svg'



//codigo para simular erro
// function getRandomInt(count: number) {
//     return Math.floor(Math.random() * count);
//   }



export default function ErrorBoundary() {

    // const random = getRandomInt(2)

    // if (random === 1) {
    //   throw new Error('Erro de teste')
    // }

    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <Image
                   priority
                   quality={100}
                   alt='Imagem de erro'
                   src={img}
                />
                <h1>ALGO INESPERADO ACONTECEU</h1>
                <CtaPrimario link='/' conteudo='Voltar à página inicial' ani={seta} />
            </section>
        </main>
    )

}