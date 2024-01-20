'use client'
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./nav.module.css";
import Link from "next/link";
import Logo from "@/components/logo/logo";
import Doar from "../doar/doar";

export default function Nav() {
  const pathname = usePathname();
  const [drop, setDrop] = useState<boolean>(true);

  const handleClickEvent = () => {
    setDrop(!drop);
  };


  return (
    <nav className={styles.nav}>
      <Logo />
      <button className={styles.btn}
        onClick={handleClickEvent}
      >
        xzinho
      </button>
      <menu className={`${styles.menuNav} ${drop ? styles.hide : ''}`}>
        <li><Link className={pathname === '/quem-somos' ? styles.active : ''} href='/quem-somos'>Quem Somos</Link></li>
        <li><Link className={pathname === '/o-que-fazemos' ? styles.active : ''} href='/o-que-fazemos'>O Que Fazemos</Link></li>
        <li><Link className={pathname === '/monitorias' ? styles.active : ''} href='/monitorias'>Monitorias</Link></li>
        <li><Link className={pathname === '/login' ? styles.active : ''} href='/login'>Login</Link></li>
        <li><Link className={pathname === '/gestao' ? styles.active : ''} href='/gestao'>Gestão</Link></li>
        <li><Doar /></li>

      </menu>

    </nav>
  )
}
