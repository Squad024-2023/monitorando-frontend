'use client'
import { usePathname } from "next/navigation";
import styles from "./nav.module.css";
import Link from "next/link";
import Logo from "@/components/logo/logo";
import Doar from "../doar/doar";

export default function Nav() {
  const pathname = usePathname();


  return (
    <nav className={styles.nav}>
      <Logo />
      <menu className={styles.menuNav}>
        <li><Link className={pathname === '/'?styles.active:''} href='/'>Quem Somos</Link></li>
        <li><Link href='/'>O Que Fazemos</Link></li>
        <li><Link href='/'>Monitorias</Link></li>
        <li><Link href='/'>Login</Link></li>
        <li><Link href='/gestao'>Gestão</Link></li>
      </menu>
      <Doar />
    </nav>
  )
}
