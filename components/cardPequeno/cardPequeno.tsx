import Image from 'next/image'
import styles from './cardPequeno.module.css'
import lottie from "lottie-web";
import { useRef, useEffect } from 'react';

type Props = {
    titulo: string,
    texto: string,
    ani: any,

}

export default function CardPequeno({ titulo, texto, ani }: Props) {

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
        <div className={styles.cardWrapper}
            onMouseEnter={() => aniInstanceRef.current && aniInstanceRef.current.play()}
            onMouseLeave={() => aniInstanceRef.current && aniInstanceRef.current.stop()}
        >
            <div ref={container}
                className={styles.lottie}>
            </div>
            <div className={styles.cardTexto}>
                <h4>{titulo}</h4>
                <p>{texto}</p>
            </div>
        </div>
    )
}