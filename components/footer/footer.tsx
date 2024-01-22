'use client'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import Logo from '../logo/logo';
import SociaisLink from '../sociaisLink/sociaisLink';
import linkedin from '@/public/icons/linkedin.json'
import github from '@/public/icons/github.json'
import Doar from '@/components/doar/doar'

export default function Footer() {

    const pathname = usePathname();
    const [drop, setDrop] = useState<boolean>(false);

    const handleClickEvent = () => {
        setDrop(!drop);
    }


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
                    <h2 onClick={handleClickEvent}>Mapa do Site</h2>
                    <div className={drop ? styles.show : styles.hide} >
                        <li><Link className={pathname === '/' ? styles.active : ''} href='/'>Home</Link></li>
                        <li><Link className={pathname === '/quem-somos' ? styles.active : ''} href='/quem-somos'>Quem Somos</Link></li>
                        <li><Link className={pathname === '/o-que-fazemos' ? styles.active : ''} href='/o-que-fazemos'>O Que Fazemos</Link></li>
                        <li><Link className={pathname === '/monitorias' ? styles.active : ''} href='/monitorias'>Monitorias</Link></li>
                        <li><Link className={pathname === '/login' ? styles.active : ''} href='/login'>Login</Link></li>
                        <li><Link className={pathname === '/gestao' ? styles.active : ''} href='/gestao'>Gestão</Link></li>
                    </div>
                </ul>
                <div className={styles.sociaisFooter}>
                    <h2>Squad 024</h2>
                    <ul>
                        <li>
                            <div className={styles.sociaisElement}>
                                <span className={styles.sociaisNome}>Arthur Bernard</span>
                                <SociaisLink link='https://www.linkedin.com/in/ber-arthur' ani={linkedin} />
                                <SociaisLink link='https://github.com/Daedaluzz' ani={github} />
                            </div>
                        </li>
                        <li>
                            <div className={styles.sociaisElement}>
                                <span className={styles.sociaisNome}>Nayara Pereira</span>
                                <SociaisLink link='https://www.linkedin.com/in/nayarabpereira' ani={linkedin} />
                                <SociaisLink link='https://github.com/nxyara' ani={github} />
                            </div>
                        </li>
                        <li>
                            <div className={styles.sociaisElement}>
                                <span className={styles.sociaisNome}>Kauã Alves</span>
                                <SociaisLink link='https://www.linkedin.com/in/kaua-amelo96' ani={linkedin} />
                                <SociaisLink link='https://github.com/kauaamelo' ani={github} />
                            </div>
                        </li>
                        <li>
                            <div className={styles.sociaisElement}>
                                <span className={styles.sociaisNome}>Mariana Moreira</span>
                                <SociaisLink link='https://www.linkedin.com/in/mariana-moreira-santos-39417828a' ani={linkedin} />
                                <SociaisLink link='https://github.com/mari-moreira' ani={github} />
                            </div>
                        </li>
                        <li>
                            <div className={styles.sociaisElement}>
                                <span className={styles.sociaisNome}>Bianca Tayla</span>
                                <SociaisLink link='https://www.linkedin.com/in/bianca-t-7b5972255' ani={linkedin} />
                                <SociaisLink link='https://github.com/Y777-CoderTech' ani={github} />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={styles.contatoFooter}>
                    <h2>Contatos</h2>
                    <span>monitorando@hotmail.com</span>
                    <span>(11)9 7233-5888</span>
                    <Doar/>
                </div>
            </div>
            <div className={styles.copyFooter}>
                <p>&copy; monitorando. Todos os direitos reservados.</p>
            </div>

        </section>

    )
}