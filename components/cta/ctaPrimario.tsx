'use client'
import Link from 'next/link'
import styles from './cta.module.css'
import lottie from "lottie-web";
import { useRef, useEffect } from 'react';


type Props = {
    link: string   //link para onde o botão vai
    conteudo: string   //conteúdo do botão
    ani: any        //usado para o lottie de animação do botão
}

export default function CtaPrimario({ link, conteudo, ani }: Props) {

    const container = useRef<HTMLDivElement | null>(null) //necessário para a animação do lottie funcionar no hover do botão inteiro
    const aniInstanceRef = useRef<any>(null) //necessário para cada botão ter sua própria instância do lottie 

    useEffect(() => {
        if (container.current) {
            aniInstanceRef.current = lottie.loadAnimation({
                container: container.current,
                loop: false,
                autoplay: false,
                animationData: ani,
            });

            return () => {
                if (aniInstanceRef.current) {
                    aniInstanceRef.current.destroy();
                }
            };
        }
    }, [ani]);

    return (
        <Link className={styles.ctaPrimario}
            href={link}
            onMouseEnter={() => aniInstanceRef.current && aniInstanceRef.current.play()}
            onMouseLeave={() => aniInstanceRef.current && aniInstanceRef.current.stop()}
        >
            <span>{conteudo}</span>
            <div ref={container}
                className={styles.lottie}>
            </div>
        </Link>
    )
}