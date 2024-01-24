'use client'
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './nav.module.css';
import Link from 'next/link';
import Logo from '../logo/Logo';
import Doar from '../doar/Doar';
import hamb from '@/public/icons/hamburguer.json'
import lottie from 'lottie-web';

export default function Nav() {

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
  const handleLinkClick = () => {
    //fechar a navbar quando clicar em algum link
    setDrop(true);
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
    <nav className={styles.nav}>
      <Logo />
      <button className={styles.btn} onClick={handleClickEvent}>
        <div ref={container} className={styles.lottie}></div>
      </button>
      <menu className={`${styles.menuNav} ${drop ? styles.hide : ''}`}>

        <li><Link className={pathname === '/quem-somos' ? styles.active : ''} href='/quem-somos' onClick={handleLinkClick}>Quem Somos</Link></li>
        <li><Link className={pathname === '/o-que-fazemos' ? styles.active : ''} href='/o-que-fazemos' onClick={handleLinkClick}>O Que Fazemos</Link></li>
        <li><Link className={pathname === '/monitorias' ? styles.active : ''} href='/monitorias' onClick={handleLinkClick}>Monitorias</Link></li>
        <li><Link className={pathname === '/login' ? styles.active : ''} href='/login' onClick={handleLinkClick}>Login</Link></li>
        <li><Link className={pathname === '/gestao' ? styles.active : ''} href='/gestao' onClick={handleLinkClick}>Gestão</Link></li>
        <li onClick={handleLinkClick}><Doar /></li>

      </menu>
    </nav>
  )
}
