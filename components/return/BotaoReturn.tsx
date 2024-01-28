'use client'
import { useRef, useEffect } from 'react'
import Link from "next/link"
import lottie from "lottie-web"
import styles from './botaoReturn.module.css'
import setaCima from '@/public/icons/setaCima.json'
export default function BotaoReturn() {

    const container = useRef<HTMLDivElement | null>(null) //necessário para a animação do lottie funcionar no hover do botão inteiro
    const aniInstanceRef = useRef<any>(null) //necessário para cada botão ter sua própria instância do lottie 

    useEffect(() => {
        if (container.current) {
            aniInstanceRef.current = lottie.loadAnimation({
                container: container.current,
                loop: false,
                autoplay: false,
                animationData: setaCima,
            });

            return () => {
                if (aniInstanceRef.current) {
                    aniInstanceRef.current.destroy();
                }
            };
        }
    }, [setaCima]);


    return(
        <Link
        className={styles.return}
        href='#nav'
        prefetch={false}
        onMouseEnter={() => aniInstanceRef.current && aniInstanceRef.current.play()}
        onMouseLeave={() => aniInstanceRef.current && aniInstanceRef.current.stop()}
        >
         <div ref={container}
                className={styles.lottie}>
            </div>
        
        </Link>

    )
}