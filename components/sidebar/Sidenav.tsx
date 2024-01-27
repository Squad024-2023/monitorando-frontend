'use client'
import React from 'react'
import styles from './sidenav.module.css'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation';
import SubNav from './subNav/SubNav'
import hamb from '@/public/icons/hamburguer.json'
import lottie from 'lottie-web'


export default function Sidenav() {


  const pathname = usePathname();
  const [drop, setDrop] = useState<boolean>(true);
  const handleClickEvent = () => {
    if (aniInstanceRef.current) {
      if (drop) {
        aniInstanceRef.current.playSegments([0, 60], true);
      } else {
        aniInstanceRef.current.playSegments([60, 0], true);
      }
    }

    setDrop(!drop);
  };


  const container = useRef<HTMLDivElement | null>(null) //necessário para a animação do lottie funcionar no hover do botão inteiro
  const aniInstanceRef = useRef<any>(null) //necessário para cada botão ter sua própria instância do lottie 

  useEffect(() => {
    if (container.current) {
      aniInstanceRef.current = lottie.loadAnimation({
        container: container.current,
        loop: false,
        autoplay: false,
        animationData: hamb,

      });

      return () => {
        if (aniInstanceRef.current) {
          aniInstanceRef.current.destroy();
        }
      };
    }
  }, [hamb]);

  return (
    <aside className={styles.sidenav}>
      <div className={styles.botaoSideNav} onClick={handleClickEvent}>
        <div ref={container} className={styles.lottie}>
        </div>
      </div>
      <menu className={`${styles.menuNav} ${drop ? styles.hideNav : ''}`}>
        <li className={styles.menuNavLi}>
          <SubNav label='Professores' link1='/gestao/professores' link2='/gestao/professores/cadastrar' link3='/gestao/professores/buscar' />
        </li>

        <li className={styles.menuNavLi}>
          <SubNav label='Alunos' link1='/gestao/alunos' link2='/gestao/alunos/cadastrar' link3='/gestao/alunos/buscar' />
        </li>

        <li className={styles.menuNavLi}>
          <SubNav label='Disciplinas' link1='/gestao/disciplinas' link2='/gestao/disciplinas/cadastrar' link3='/gestao/disciplinas/buscar' />
        </li>

        <li className={styles.menuNavLi}>
          <SubNav label='Turmas' link1='/gestao/turmas' link2='/gestao/turmas/cadastrar' link3='/gestao/turmas/buscar' />
        </li>

      </menu>
    </aside>
  )
}
