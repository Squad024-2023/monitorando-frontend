'use client'
import lottie from "lottie-web";
import { useRef, useEffect } from 'react';
import styles from './lottie.module.css'

type Props = {
    ani: any        //usado para o lottie de animação do botão
}

export default function LottieAnimation({ ani }: Props) {

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
        <div
            className={styles.lottieContainer}
            onMouseEnter={() => aniInstanceRef.current && aniInstanceRef.current.play()}
            onMouseLeave={() => aniInstanceRef.current && aniInstanceRef.current.stop()}
        >
            <div ref={container}
                className={styles.lottie}>
            </div>
        </div>
    );
}