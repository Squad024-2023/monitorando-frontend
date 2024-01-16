'use client'
import Link from 'next/link'
import styles from './doar.module.css'
import pigAnimation from '@/public/icons/pig.json'
import lottie from "lottie-web";
import { useRef, useEffect } from 'react';


export default function CtaSecundario() {

    const container = useRef<HTMLDivElement | null>(null);;
    const aniInstanceRef = useRef<any>(null) //necessário para cada botão ter sua própria instância do lottie 

    useEffect(() => {
        if (container.current) {
            aniInstanceRef.current = lottie.loadAnimation({
                container: container.current,
                loop: false,
                autoplay: false,
                animationData: pigAnimation,
            })

            return () => {
                if (aniInstanceRef.current) {
                    aniInstanceRef.current.destroy()
                }
            }
        }
    }, [pigAnimation])

    return (
        <Link className={styles.botaoDoar}
            href='/'
            onMouseEnter={() => aniInstanceRef.current && aniInstanceRef.current.play()}
            onMouseLeave={() => aniInstanceRef.current && aniInstanceRef.current.stop()}
        >
            <span>Doar</span>
            <div ref={container}
                className={styles.pig}>
            </div>
        </Link>
    )
}