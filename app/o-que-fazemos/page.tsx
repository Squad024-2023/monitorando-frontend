'use client'
import { useState, useEffect } from 'react'
import styles from './o-que-fazemos.module.css'
import HeroImage from '@/components/heroImage/heroImage'
import bg1 from '@/public/images/backgroundPinkOval.webp'
import bg2 from '@/public/images/backgroundPinkOval2.webp'


export default function OqueFazemos() {


  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        <div className={styles.conteudo}></div>
      </section>
      <section className={styles.section2}>

        <div className={styles.tela1}>
          <div className={styles.conteudo}></div>
        </div>
        <div className={styles.tela2}>
          <div className={styles.conteudo}></div>
        </div>
      </section>
    </main>
  )
}
