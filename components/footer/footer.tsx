'use client'
import { usePathname } from 'next/navigation'
import styles from './footer.module.css'
import Link from 'next/link'
import Logo from '../logo/logo';
import SociaisLink from '../sociaisLink/sociaisLink';
import alarme from '@/public/icons/alarm.json'

export default function Footer() {

    const pathname = usePathname();


    return (
        <section className={styles.footerContainer}>

            <div className={styles.monitorandoFooter}>
                <Logo />
                <span>monitorando é uma instituição fictícia, criada para o
                    demonstrar as habilidades adquiridas no curso recode pro 2023
                </span>
            </div>
            <div className={styles.footerMain}>
                <ul className={styles.mapaFooter}>
                    <li><Link className={pathname === '/' ? styles.active : ''} href='/'>Home</Link></li>
                    <li><Link className={pathname === '/' ? styles.active : ''} href='/'>Quem Somos</Link></li>
                    <li><Link href='/'>O Que Fazemos</Link></li>
                    <li><Link href='/'>Seja um Professor</Link></li>
                    <li><Link href='/'>Monitorias</Link></li>
                    <li><Link href='/'>Nossa Missão</Link></li>
                    <li><Link href='/gestao'>Gestão</Link></li>
                </ul>
                <div className={styles.sociaisFooter}>
                    <h2>Squad 024</h2>
                    <ul>
                        <li>
                            <div className={styles.sociaisElement}>
                                <span className={styles.sociaisNome}>Arthur Bernard</span>
                                <SociaisLink link='/' ani={alarme}/>
                                <SociaisLink link='/' ani={alarme}/>
                                <SociaisLink link='/' ani={alarme}/>
                            </div>
                        </li>
                        <li>
                            <div className={styles.sociaisElement}>
                                <span className={styles.sociaisNome}>Arthur Bernard</span>
                                <SociaisLink link='/' ani={alarme}/>
                                <SociaisLink link='/' ani={alarme}/>
                                <SociaisLink link='/' ani={alarme}/>
                            </div>
                        </li>
                        <li>
                            <div className={styles.sociaisElement}>
                                <span className={styles.sociaisNome}>Arthur Bernard</span>
                                <SociaisLink link='/' ani={alarme}/>
                                <SociaisLink link='/' ani={alarme}/>
                                <SociaisLink link='/' ani={alarme}/>
                            </div>
                        </li>
                        <li>
                            <div className={styles.sociaisElement}>
                                <span className={styles.sociaisNome}>Arthur Bernard</span>
                                <SociaisLink link='/' ani={alarme}/>
                                <SociaisLink link='/' ani={alarme}/>
                                <SociaisLink link='/' ani={alarme}/>
                            </div>
                        </li>
                        <li>
                            <div className={styles.sociaisElement}>
                                <span className={styles.sociaisNome}>Arthur Bernard</span>
                                <SociaisLink link='/' ani={alarme}/>
                                <SociaisLink link='/' ani={alarme}/>
                                <SociaisLink link='/' ani={alarme}/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyFooter}>
                <p>COPRIGHT TODOS OS DIREITOS RESERVADOS</p>
            </div>

        </section>

    )
}