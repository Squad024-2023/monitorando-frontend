'use client'
import Link from 'next/link'
import styles from './doar.module.css'
import pigAnimation from '@/public/icons/pig.json'
import lottie from "lottie-web";
import { sunSeed} from '@/app/fonts';
import { useRef, useEffect } from 'react';
import { color } from 'framer-motion';

export default function Doar() {

    const container = useRef<HTMLDivElement | null>(null);;

    useEffect(() => {
        if (container.current) {
            lottie.loadAnimation({
                container: container.current,
                loop: true,
                autoplay: false,
                animationData: pigAnimation
            });

            return () => {
                lottie.destroy();
            };
        }
    }, []);


    return (
        <Link
            className={styles.botaoDoar}
            href='#'
            onMouseEnter={() => container.current && lottie.play()}
            onMouseLeave={() => container.current && lottie.pause()}>
            <span>Doar</span>
            <div ref={container}
                className={styles.pig}>
            </div>

        </Link>
    )
}