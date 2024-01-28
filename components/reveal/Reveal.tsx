'use client'
import React, { useEffect, useRef } from 'react'
import { useInView, useAnimation, motion } from 'framer-motion'

interface Props {
    children: JSX.Element
    width?: 'fit-content' | '100%'
    delay: number
}

export const Reveal = ({ children, width = 'fit-content', delay }: Props) => {

    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [inView])

    return (
        <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial='hidden'
                animate={controls}
                transition={{ duration: 0.6, delay }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export const RevealX = ({ children, width = 'fit-content', delay }: Props) => {

    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [inView])

    return (
        <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial='hidden'
                animate={controls}
                transition={{ duration: 0.6, delay }}
            >
                {children}
            </motion.div>
        </div>
    )
}