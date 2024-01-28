import React, { useEffect, useRef } from 'react'
import { useInView, useAnimation, motion } from 'framer-motion'

interface Props {
    children: JSX.Element
    width?: 'fit-content' | '100%'

}

export const Reveal = ({ children, width = 'fit-content' }: Props) => {
    return (
        <div style={{ position: 'relative', width, overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial='hidden'
                animate='visible'
                transition={{duration: 0.6, delay: 0.25}}
            >
                {children}
            </motion.div>
        </div>
    )
}