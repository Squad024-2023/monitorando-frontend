'use client'
import SociaisLink from '../sociaisLink/sociaisLink'
import styles from './cardPessoa.module.css'
import Image from 'next/image'
import linkedin from '@/public/icons/linkedin.json'
import github from '@/public/icons/github.json'
import LottieAnimation from '../lottie/lottieAnimation'
import chat from '@/public/icons/chat.json'


type Props = {
    img: any,
    nome: string,
    descricao: string,
    linked: string
    git: string
}

export default function CardPessoa({ img, nome, descricao, linked, git }: Props) {


    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardImagem}>
                <Image
                    src={img}
                    quality={100}
                    placeholder='blur'
                    alt={`'Imagem de ${nome}'`}
                />
            </div>
            <div className={styles.cardTexto}>
                <h3>{nome}</h3>
                <p>{descricao}</p>
                <div className={styles.sociais}>
                    <LottieAnimation
                    ani={chat} />
                    <SociaisLink link={linked} ani={linkedin} />
                    <SociaisLink link={git} ani={github} />
                </div>
            </div>
        </div>
    )
}